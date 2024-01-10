import {
  Container,
  Divider,
  Hidden,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import {
  Await,
  redirect,
  redirectDocument,
  useActionData,
  useMatches,
} from "@remix-run/react";
import React, { Suspense, useState } from "react";
import { Outlet, useLoaderData, useNavigate } from "react-router";
import {
  findUserByFirstAndLastName,
  getAllApplications,
} from "../data/applications";

export default function applicationStatus() {
  const navigate = useNavigate();
  const columns = [
    { field: "createdAt", headerName: "Created On", width: 0 },
    { field: "firstName", headerName: "First name", width: 80 },
    { field: "lastName", headerName: "Last name", width: 80 },
    { field: "address", headerName: "Address", width: 100 },
    { field: "zip", headerName: "Zip", width: 80 },
    { field: "state", headerName: "State", width: 80 },
    { field: "mobileNumber", headerName: "Mobile", width: 130 },
    { field: "email", headerName: "Email", width: 130 },
  ];

  const matches = useMatches();
  console.log("matches data - " + JSON.stringify(matches));
  const actionData = useActionData();
  const loaderData = useLoaderData();
  const [applications, setapplications] = useState( actionData != undefined || actionData != null ? actionData:loaderData);
  const handleClick = (row) => {
    navigate(
      `/application/searchApplication/applicationlist/${row.row.id}/applicationStatus`
    );
  };
  console.log("applicaitons - " + JSON.stringify(applications));
  return (
    <Stack
      direction={"row"}
      divider={<Divider orientation="vertical" flexItem />}
    >
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
          <DataGrid
            rows={applications}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            onRowClick={handleClick}
          />
        </Paper>
      </Container>
      <Outlet />
    </Stack>
  );
}

export async function loader() {
  const applications = await getAllApplications();
  return applications;
}

export async function action({ request }) {
  const formData = await request.formData();
  const searchRequest = Object.fromEntries(formData);
  console.log("form data - " + JSON.stringify(searchRequest));
  const user =
    searchRequest.firstName != "" && searchRequest.firstName != ""
      ? await findUserByFirstAndLastName(
          searchRequest.firstName,
          searchRequest.lastName
        )
      : await getAllApplications();
  return user;
}
