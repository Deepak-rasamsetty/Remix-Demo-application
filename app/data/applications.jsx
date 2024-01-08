
import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

export async function getAllApplications() {
  const user = await prisma.application.findMany();
  return user;
}

export async function findUserByEmail(email){
  const user = await prisma.application.findUnique({
    where: {
      email: email,
    },
  })
}

export async function storeApplication(applicationData) {
  const user = await prisma.application.create({
    data: applicationData,
  })
  return user;
}