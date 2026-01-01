import { requiredAuth } from "@/lib/auth-utils";

export default async function Page() {
    await requiredAuth();
    return <div>executions</div>;
}
