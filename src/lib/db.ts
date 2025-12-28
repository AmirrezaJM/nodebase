import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/generated/prisma/client";

const globalForPrisma = global as unknown as {
    prisma: PrismaClient;
    pool: Pool;
};

const connectionString = process.env.DATABASE_URL;

// Create a connection pool
const pool = globalForPrisma.pool || new Pool({ connectionString });

// Create the Prisma adapter
const adapter = new PrismaPg(pool);

// Create the Prisma client with the adapter
const prisma = globalForPrisma.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
    globalForPrisma.pool = pool;
}

export default prisma;