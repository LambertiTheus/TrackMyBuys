// import { z } from "zod"
import { createTRPCRouter, protectedProcedure, publicProcedure } from "~/server/api/trpc"

export const exampleRouter = createTRPCRouter({
  userEmail: protectedProcedure
    .query(({ ctx }) => {
      const email = ctx.user?.emailAddresses[0]?.emailAddress

      return {
        email: email,
      };
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),
});
