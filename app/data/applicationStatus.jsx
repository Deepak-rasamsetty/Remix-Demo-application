import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

async function sleep(msec) {
    return new Promise(resolve => setTimeout(resolve, msec));
}
export async function checkApplicationStatus(applicationId){
    const application = await prisma.appstatus.findUnique({
        where: {
            applicationId: applicationId,
        },
      });
      return application;
}
export async function storeApplicationStatus(applicationId) {
    const application = await prisma.appstatus.create({
      data: {applicationId: applicationId},
    })
    return application;
  }

  export async function approveApplicationSatus(applicationId) {
    const application = await prisma.appstatus.update({
        where: {
            applicationId: applicationId,
          },
          data: {
            status: 'APPROVED',
          },
    })
    return application;
  }