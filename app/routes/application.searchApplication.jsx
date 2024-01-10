import { Button, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { Outlet } from "@remix-run/react";
import React from "react";
import { findUserByFirstAndLastName } from "../data/applications";

export default function searchApplication() {
  return (
    <div>
      <form
        method="POST"
        action="/application/searchApplication/applicationList"
      >
        <Stack direction={"column"}>
          <Stack
            direction="row"
            style={{
              justifyContent: "center",
              display: "flex",
            }}
          >
            <TextField
              label="First Name"
              name="firstName"
              sx={{ m: 1, width: "35" }}
            />
            <TextField
              label="Last Name"
              name="lastName"
              sx={{ m: 1, width: "35" }}
            />
          </Stack>

          <Stack
            direction="row"
            justifyContent={"center"}
            spacing={5}
            style={{ marginTop: "5px" }}
          >
            <Button
              variant="contained"
              type="submit"
              style={{ backgroundColor: "white", color: "black" }}
            >
              Search
            </Button>
          </Stack>
          <Outlet/>
        </Stack>
      </form>
    </div>
  );
}
