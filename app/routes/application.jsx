import { Container, Divider, Paper, Stack } from "@mui/material";
import { Outlet, redirect } from "@remix-run/react";
import React from "react";
import ApplyTabNavigation from "../components/ApplyTabNavigation";
import { getAllApplications, storeApplication } from "../data/applications";

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
    const existingApplications = await getAllApplications();
    applicationData.id = new Date().valueOf();
    const updatedApplications = existingApplications.concat(applicationData);
    await storeApplication(updatedApplications);
    return redirect("/application"); 
    return null;
}