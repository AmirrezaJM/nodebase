import { z } from "zod/v4";
import { baseProcedure, createTRPCRouter } from "../init";

export const appRouter = createTRPCRouter({
    getUsers: baseProcedure.query(() => {
        return {
            users: `Hello World`,
        };
    }),
});

// Export type definition of API
export type AppRouter = typeof appRouter;
