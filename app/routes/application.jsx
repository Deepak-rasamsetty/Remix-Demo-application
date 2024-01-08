import { Container, Divider, Paper, Stack } from "@mui/material";
import { Outlet, redirect } from "@remix-run/react";
import React from "react";
import ApplyTabNavigation from "../components/ApplyTabNavigation";
import { getAllApplications, storeApplication } from "../data/applications";
import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

export default function application() {
  return (
    <div>
      <div style={{ height: "60%" }}>
        <Container maxWidth="lg" style={{ marginTop: "5%" }}>
          <Paper
            elevation={5}
            style={{
              justifyContent: "center",
              display: "flex",
              paddingInline: "30px",
              paddingBlock: "50px",
            }}
          >
            <Stack direction={"column"}>
              <ApplyTabNavigation />
              <Divider />
              <Outlet></Outlet>
            </Stack>
          </Paper>
        </Container>
      </div>
    </div>
  );
}


export async function action({request}){
    const formData = await request.formData();
    const applicationData = Object.fromEntries(formData);
    console.log('form data - '+JSON.stringify(applicationData));
    const user = await prisma.application.create({
        data: applicationData,
      })
    return redirect("/application"); 
    }