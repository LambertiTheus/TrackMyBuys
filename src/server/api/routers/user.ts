import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc"
import { PrismaClient } from "@prisma/client"
import { z } from "zod"


const prisma = new PrismaClient()

export const userRouter = createTRPCRouter({
  userInfo: protectedProcedure
    .query(async ({ ctx }) => {
      const email = ctx.user?.emailAddresses[0]?.emailAddress
      const name = ctx.user?.firstName

      const user = await prisma.user.findUniqueOrThrow({
        where: {
          email: email
        },
      })

      return { userId: user.id, nickname: user.nickname, email, name }
    }),

  createUser: protectedProcedure
    .input(z.object({ nickname: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const email = ctx.user?.emailAddresses[0]?.emailAddress
      const name = ctx.user?.firstName
      const profilePictureIrl = ctx.user.imageUrl

      if (!email || !name) throw new Error("Email is undefined")

      const user = await prisma.user.create({
        data: {
          profilePictureURL: profilePictureIrl,
          email: email,
          name: name,
          nickname: input.nickname,
        }
      })
      return user
    })
})
