"use client";
import { EntityContainer, EntityHeader } from "@/components/entity-components";
import { useCreateWorkflow, useSuspenseWorkflow } from "../hooks/use-workflow";
import { useUpgradeModal } from "@/hooks/use-upgrade-modal";
import { router } from "better-auth/api";
import { useRouter } from "next/navigation";
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


export const WorkflowsContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <EntityContainer header={<WorkflowsHeader />} search={<></>} pagination={<></>}>
            {children}
        </EntityContainer>
    );
} 