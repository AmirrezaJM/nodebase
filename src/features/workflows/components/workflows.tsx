"use client";
import { EmptyView, EntityContainer, EntityHeader, EntityItem, EntityList, EntityPagination, EntitySearch, ErrorView, LoadingView } from "@/components/entity-components";
import { useCreateWorkflow, useRemoveWorkflow, useSuspenseWorkflows } from "../hooks/use-workflow";
import { useUpgradeModal } from "@/hooks/use-upgrade-modal";
import { useRouter } from "next/navigation";
import { useWorkflowsParams } from "../hooks/use-workflows-params";
import { useEntitySearch } from "@/hooks/use-entity-search";
import type { Workflow } from "@/generated/prisma";
import { WorkflowIcon } from "lucide-react";
import { formatDistanceToNow } from 'date-fns';

export const WorkflowsSearch = () => {
    const [params, setParams] = useWorkflowsParams();
    const { searchValue, onSearchChange } = useEntitySearch({
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
    const workflows = useSuspenseWorkflows();
    return <EntityList
        items={workflows.data.items}
        renderItem={(workflow) => <WorkflowItem data={workflow} />}
        getKey={(workflow) => workflow.id}
        emptyView={<WorkflowsEmpty />}
    />
}

export const WorkflowsHeader = ({ disabled, isCreating }: { disabled?: boolean, isCreating?: boolean }) => {
    const createWorkflow = useCreateWorkflow();
    const router = useRouter();
    const { modal, handleError } = useUpgradeModal();


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
    const workflows = useSuspenseWorkflows();
    const [params, setParams] = useWorkflowsParams();
    return (
        <EntityPagination
            disabled={workflows.isPending}
            page={workflows.data.page}
            totalPages={workflows.data.totalPages}
            onPageChange={(page) => setParams({ ...params, page })}
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

export const WorkflowsLoading = () => {
    return <LoadingView message="Loading workflows..." />
}


export const WorkflowsError = () => {
    return <ErrorView message="Error loading View..." />
}


export const WorkflowsEmpty = () => {
    const createWorkflow = useCreateWorkflow();
    const { modal, handleError } = useUpgradeModal();

    const handleCreateWorkflow = () => {
        createWorkflow.mutate(undefined, {
            onError: (error) => {
                handleError(error);
            }
        });
    }
    return (
        <>
            {modal}
            <EmptyView onNew={handleCreateWorkflow} message="you haven't created any workflows yet.Get started by creating a new workflow." />
        </>
    );
}


export const WorkflowItem = ({ data }: { data: Workflow}) => {
    const removeWorkflow = useRemoveWorkflow();

    const handleRemoveWorkflow = () => {
        removeWorkflow.mutate({ id: data.id });
    }

    return (
        <EntityItem
            href={`/workflows/${data.id}`}
            title={data.name}
            subtitle={
                <>
                    Updated {formatDistanceToNow(data.updatedAt, {addSuffix: true})}{" "}
                    &bull; CREATED{" "}
                    {formatDistanceToNow(data.createdAt, {addSuffix: true})}
                </>
            }
            image={
                <div className="size-8 flex items-center justify-center rounded-full bg-gray-100">
                    <WorkflowIcon className="size-4" />
                </div>
            }
            onRemove={handleRemoveWorkflow}
            isRemoving={removeWorkflow.isPending}
        />
    );
}

    // if(workflows.data.items.length === 0) {
    //     return <WorkflowsEmpty />
    // }
    // return (
    //     <div className="flex-1 justify-center items-center">
    //         {JSON.stringify(workflows.data, null, 2)}
    //     </div>
    // );