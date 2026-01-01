import { z } from "zod/v4";
import { createTRPCRouter, protectedProcedure } from "../init";
import prisma from "@/lib/db";

export const appRouter = createTRPCRouter({
    getWorkflows: protectedProcedure.query((ctx) => {
        return prisma.workflow.findMany();
    }),
    createWorkflow: protectedProcedure.mutation((ctx) => {
        return prisma.workflow.create({
            data: {
                name: "Workflow 1",
            },
        });
    }),
});

// Export type definition of API
export type AppRouter = typeof appRouter;


// Background jobs prevent the bad UX and instead of waiting for the response can do other task 
// مثال پرامیس