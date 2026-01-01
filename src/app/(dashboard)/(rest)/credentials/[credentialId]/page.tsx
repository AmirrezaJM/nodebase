import { requiredAuth } from "@/lib/auth-utils";

interface Props {
    params: Promise<{credentialId: string}>;
}

// http://localhost:3000/credentials/123

export default async function Page({params}: Props) {
    await requiredAuth();
    const {credentialId} = await params;
    return <div>Credential Id: {credentialId}</div>;
}


// DYNAMIC API is ASYNC so we use params as Promise