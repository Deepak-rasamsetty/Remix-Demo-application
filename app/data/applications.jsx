
import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

async function sleep(msec) {
  return new Promise(resolve => setTimeout(resolve, msec));
}
export async function getAllApplications() {
  const user =  await prisma.application.findMany();
  return user;
}

export async function findUserByEmail(email){
  const user = await prisma.application.findUnique({
    where: {
      email: email,
    },
  });
  return user;
}

export async function findUserById(applicationId){
  const user = await prisma.application.findUnique({
    where: {
      id: applicationId,
    },
  });
  return user;
}

export async function storeApplication(applicationData) {
  const user = await prisma.application.create({
    data: applicationData,
  })
  return user;
}