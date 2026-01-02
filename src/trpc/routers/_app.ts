import { createTRPCRouter } from "../init";
import { workflowsRouter } from "@/features/workflows/server/routes";

export const appRouter = createTRPCRouter({
    workflows: workflowsRouter,

});

// Export type definition of API
export type AppRouter = typeof appRouter;


// Background jobs prevent the bad UX and instead of waiting for the response can do other task 
// مثال پرامیس

    // testai: baseProcedure.mutation(async () => {
    //     await inngestClient.send({
    //         name: "execute/ai",
    //     });
    //     return {sucess: true, message: "AI executed successfully"}
    // }),
    // getWorkflows: protectedProcedure.query((ctx) => {
    //     return prisma.workflow.findMany();
    // }),
    // createWorkflow: protectedProcedure.mutation((ctx) => {
    //     return prisma.workflow.create({
    //         data: {
    //             name: "Workflow 1",
    //         },
    //     });
    // }),