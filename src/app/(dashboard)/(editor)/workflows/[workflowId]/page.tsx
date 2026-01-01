import { requiredAuth } from "@/lib/auth-utils";

interface Props {
    params: Promise<{workflowId: string}>;
}

// http://localhost:3000/workflows/123

export default async function Page({params}: Props) {
    await requiredAuth();
    const {workflowId} = await params;
    return <div>Workflow Id: {workflowId}</div>;
}


// DYNAMIC API is ASYNC so we use params as Promise