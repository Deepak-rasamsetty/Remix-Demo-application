import {
  Container,
  Divider,
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
import { Await, redirect, redirectDocument } from "@remix-run/react";
import React, { Suspense } from "react";
import { Outlet, useLoaderData, useNavigate } from "react-router";
import { getAllApplications } from "../data/applications";

export default function applicationStatus() {
  const navigate = useNavigate();
  const columns = [
    { field: "firstName", headerName: "First name", width: 80 },
    { field: "lastName", headerName: "Last name", width: 80 },
    { field: "address", headerName: "Address", width: 100 },
    { field: "zip", headerName: "Zip", width: 80 },
    { field: "state", headerName: "State", width: 80 },
    { field: "mobileNumber", headerName: "Mobile", width: 130 },
    { field: "email", headerName: "Email", width: 130 },
  ];
  const handleClick = (row) => {
    navigate(`/application/searchApplication/${row.row.id}/applicationStatus`);
  };
  const applications = useLoaderData();
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
