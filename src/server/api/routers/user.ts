import { z } from "zod" 
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc" 
import { PrismaClient } from "@prisma/client" 

const prisma = new PrismaClient() 

export const userRouter = createTRPCRouter({
  userInfo: protectedProcedure
    .query(async ({ ctx }) => {
      const email = ctx.user?.emailAddresses[0]?.emailAddress 
      const name = ctx.user?.firstName 

      const user = await prisma.user.findUnique({
        where: {
          email: email
        }
      }) 

      if (!user) {

        throw new Error('Usuário não encontrado') 
      }


      return { email, name } 
    }),
}) 
