import { initTRPC } from "@trpc/server";
import { cache } from "react";
import prisma from "@/lib/db";

/**
 * Creates the tRPC context for each request.
 * This is cached so that the context is shared across the request.
 * @see: https://trpc.io/docs/server/context
 */
export const createTRPCContext = cache(async () => {
    return {
        prisma,
    };
});

export type Context = Awaited<ReturnType<typeof createTRPCContext>>;

// Avoid exporting the entire t-object
// since it's not very descriptive.
const t = initTRPC.context<Context>().create({
    /**
     * @see https://trpc.io/docs/server/data-transformers
     */
    // transformer: superjson,
});

// Base router and procedure helpers
export const createTRPCRouter = t.router;
export const createCallerFactory = t.createCallerFactory;
export const baseProcedure = t.procedure;
