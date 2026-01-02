import { prefetch, trpc } from "@/trpc/server";
import { inferInput } from "@trpc/tanstack-react-query";

type Input = inferInput<typeof trpc.workflows.getMany>;


// Prefetch workflows
export async function prefetchWorkflows(params: Input) {
    await prefetch(trpc.workflows.getMany.queryOptions(params));
}