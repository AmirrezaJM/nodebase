"use client";
import { EntityContainer, EntityHeader, EntityPagination, EntitySearch } from "@/components/entity-components";
import { useCreateWorkflow, useSuspenseWorkflow } from "../hooks/use-workflow";
import { useUpgradeModal } from "@/hooks/use-upgrade-modal";
import { useRouter } from "next/navigation";
import { useWorkflowsParams } from "../hooks/use-workflows-params";
import { useEntitySearch } from "@/hooks/use-entity-search";


export const WorkflowsSearch = () => {
    const [params, setParams] = useWorkflowsParams();
    const {searchValue, onSearchChange} = useEntitySearch({
        params,
        setParams,
    });
    return (
        <EntitySearch
            placeholder="Search workflows"
            value={searchValue}
            onChange={onSearchChange}
        />
    );
}

export const WorkflowsList = () => {
    const workflows = useSuspenseWorkflow();
    return (
        <div className="flex-1 justify-center items-center">
            {JSON.stringify(workflows.data, null, 2)}
        </div>
    );
}

export const WorkflowsHeader = ({ disabled, isCreating }: { disabled?: boolean, isCreating?: boolean }) => {
    const createWorkflow = useCreateWorkflow();
    const router = useRouter();
    const {modal, handleError} = useUpgradeModal();


    // In here with Mutation we can handle the error and redirect to the workflow page specifically not for all of them
    const handleCreateWorkflow = () => {
        createWorkflow.mutate(undefined, {
            onSuccess: (data) => {
                router.push(`/workflows/${data.id}`);
            },
            onError: (error) => {
                handleError(error);
            }
        });
    }

    return (
    <>
        {modal}
        <EntityHeader
            title="Workflows"
            description="Manage your workflows"
            newButtonLabel="New Workflow"
            onNew={handleCreateWorkflow}
            disabled={disabled}
            isCreating={isCreating}
        />
    </>
    ); 
}

export const WorkflowsPagination = () => {
    const workflows = useSuspenseWorkflow();
    const [params, setParams] = useWorkflowsParams();
    return (
        <EntityPagination
            disabled={workflows.isPending}
            page={workflows.data.page}
            totalPages={workflows.data.totalPages}
            onPageChange={(page) => setParams({...params, page})}
        />
    );
}


export const WorkflowsContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <EntityContainer header={<WorkflowsHeader />} search={<WorkflowsSearch />} pagination={<WorkflowsPagination />}>
            {children}
        </EntityContainer>
    );
} 