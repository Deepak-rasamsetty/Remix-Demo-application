import { Stack, Divider, Toolbar, Button, IconButton, Chip } from "@mui/material";
import { useNavigate } from "@remix-run/react";
import React from "react";
import {Refresh} from "@mui/icons-material";

export default function ApplicationStatus(props) {
  const navigate = useNavigate();

  const refreshApplicationStatus = () => {
    navigate(".", { replace: true });
  };
  return (
    <Stack
      direction={"column"}
      divider={<Divider orientation="horizontal" flexItem />}
    >
   
      <div
        div
        style={{
          justifyContent: "center",
          paddingInline: "20px",
          display: "flex",
        }}
      >
        <div>
          <h4>Status : {props.status}</h4>
          
          <Button  variant="contained" size="small" startIcon={<Refresh fontSize="large"/>} onClick={refreshApplicationStatus}>
           
           Refresh
           
        
          </Button>
        </div>
      </div>
    </Stack>
  );
}
