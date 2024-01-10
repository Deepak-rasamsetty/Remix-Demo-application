import { Container, Divider, Paper, Stack } from "@mui/material";
import { Outlet, redirect } from "@remix-run/react";
import React from "react";
import ApplyTabNavigation from "../components/ApplyTabNavigation";
import { storeApplication } from "../data/applications";
import { storeApplicationStatus } from "../data/applicationStatus";


export default function application() {
  return (
    <div>
      <div style={{ height: "60%" }}>
        <Container maxWidth="lg" style={{ marginTop: "3%" }}>
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
    const user = await storeApplication(applicationData);
    const applicationStatus = await storeApplicationStatus(user.id);
    return redirect(`/applicationInformation/${user.id}/applicationStatus`); 
    }