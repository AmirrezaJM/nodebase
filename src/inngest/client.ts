import { Inngest } from "inngest";

export const inngestClient = new Inngest({ id: "nodebase", apiKey: process.env.INNGEST_API_KEY });