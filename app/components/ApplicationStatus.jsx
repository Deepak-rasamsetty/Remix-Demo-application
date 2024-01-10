import {
  Stack,
  Divider,
  Toolbar,
  Button,
  IconButton,
  Chip,
  Alert,
} from "@mui/material";
import { redirect, useNavigate } from "@remix-run/react";
import React from "react";
import { Refresh } from "@mui/icons-material";

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

        style={{
          justifyContent: "center",
          paddingInline: "20px",
          display: "flex",
          marginTop:"10px"
        }}
      >
   
   <Alert severity={props.status==='APPROVED'?'success':'warning'}>{props.status}</Alert>

          <IconButton
            variant="outlined"
            size="small"
           
            onClick={refreshApplicationStatus}
          
          >
            <Refresh fontSize="medium" />
          </IconButton>
      
      </div>
    </Stack>
  );
}
