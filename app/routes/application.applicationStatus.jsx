import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { redirect, redirectDocument } from "@remix-run/react";
import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import { getAllApplications } from "../data/applications";

export default function applicationStatus() {
    const navigate = useNavigate();
    const columns = [
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        { field: 'address', headerName: 'Address', width: 200 },
        { field: 'zipCode', headerName: 'Zip', width: 50 },
        { field: 'state', headerName: 'State', width: 80 },
        { field: 'mobileNumber', headerName: 'Mobile', width: 130 },
        { field: 'emailAddress', headerName: 'Email', width: 130 }
    ];
  const handleClick = (row) => {
    console.log(`redirecting to  - /applicationInfo/${row.row.id}`);
    navigate(`/applicationInfo/${row.row.id}`);
  };
  const applications = useLoaderData();
  return (
    <div>
          <div style={{ height: 400, width: '100%' }}>
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
    </div>

    </div>
  );
}

export async function loader() {
  const applications = await getAllApplications();
  return applications;
}
