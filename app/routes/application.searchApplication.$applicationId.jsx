import { Container, Divider, Paper, Stack, Toolbar } from "@mui/material";
import { Outlet, useLoaderData } from "@remix-run/react";
import React from "react";
import ApplicantInformation from "../components/ApplicantInformation";
import ApplicationStatus from "../components/ApplicationStatus";
import { findUserById } from "../data/applications";

export default function applicationInfo() {
  const applicationData = useLoaderData();
  return (
    <div>
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
          <Stack
            direction={"column"}
            divider={<Divider orientation="horizontal" flexItem />}
          >
            <Toolbar
              style={{
                justifyContent: "center",
              }}
            >
              <h2>Application Information</h2>
            </Toolbar>

            <div>
              <Stack
                direction={"column"}
                divider={<Divider orientation="horizontal" flexItem />}
              >
                <ApplicantInformation applicationData={applicationData} />
                <Outlet />
              </Stack>
            </div>
          </Stack>
        </Paper>
      </Container>
    </div>
  );
}

export async function loader({ params }) {
  const applicationData = await findUserById(params.applicationId);
  return applicationData;
}
