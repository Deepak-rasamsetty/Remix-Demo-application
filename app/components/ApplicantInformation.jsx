import { Divider, Stack, Toolbar } from "@mui/material";
import React from "react";

export default function ApplicantInformation(props) {
  const applicationData = props.applicationData;
  return (
    <Stack
      direction={"column"}
      divider={<Divider orientation="horizontal" flexItem />}
    >
      <div
        style={{
          justifyContent: "center",
          paddingInline: "20px",
          display: "flex",
        }}
      >
        <div>
          <h5>First Name : {applicationData.firstName}</h5>

          <h5>Last Name : {applicationData.lastName}</h5>

          <h5>Mobile : {applicationData.mobileNumber}</h5>

          <h5>Email : {applicationData.email}</h5>

          <h5>Address : {applicationData.address}</h5>

          <h5>State : {applicationData.state}</h5>

          <h5>zip : {applicationData.zip}</h5>
        </div>
      </div>
    </Stack>
  );
}
