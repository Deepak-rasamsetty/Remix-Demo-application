import { Alert } from "@mui/material";
import { Await, redirect, useLoaderData, useNavigate } from "@remix-run/react";
import React, { Suspense } from "react";
import ApplicationStatus from "../components/ApplicationStatus";
import { checkApplicationStatus } from "../data/applicationStatus";

export default function applicationStatus() {
  const applicationData = useLoaderData();
  return (
    <ApplicationStatus
      status={applicationData.status}
      applicationId={applicationData.applicationId}
    />
  );
}

export async function loader({ params }) {
  const applicationData = await checkApplicationStatus(params.applicationId);
  return applicationData;
}

export function ErrorBoundary() {
  return (
    <Alert severity="error">Could not fetch status for this application</Alert>
  );
}
