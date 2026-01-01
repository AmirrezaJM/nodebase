import { LoginForm } from "@/features/auth/components/login-form";
import { requiredUnauth } from "@/lib/auth-utils";

export default async function Page() {
    await requiredUnauth();
    return <LoginForm />;
}
