import { serve } from "inngest/next";
import { inngestClient } from "@/inngest/client";
import { execute } from "@/inngest/functions";
// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
    client: inngestClient, functions: [
        /* your functions will be passed here later! */
        execute,
    ]
});