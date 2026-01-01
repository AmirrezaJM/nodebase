import { SignupForm } from "@/features/auth/components/signup-form";
import { requiredUnauth } from "@/lib/auth-utils";

export default async function Page() {
    await requiredUnauth();
    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <SignupForm />
        </div>
    );
}