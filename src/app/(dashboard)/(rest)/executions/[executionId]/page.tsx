import { requiredAuth } from "@/lib/auth-utils";

interface Props {
    params: Promise<{executionId: string}>;
}

// http://localhost:3000/credentials/123

export default async function Page({params}: Props) {
    await requiredAuth();
    const {executionId} = await params;
    return <div>Execution Id: {executionId}</div>;
}


// DYNAMIC API is ASYNC so we use params as Promise