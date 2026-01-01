import { LoginForm } from "@/features/auth/components/login-form";
import { requiredUnauth } from "@/lib/auth-utils";

export default async function Page() {
    await requiredUnauth();
    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <LoginForm />
        </div>
    );
}
