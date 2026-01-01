import { SignupForm } from "@/features/auth/components/signup-form";
import { requiredUnauth } from "@/lib/auth-utils";

export default async function Page() {
    await requiredUnauth();
    return <SignupForm />;
}