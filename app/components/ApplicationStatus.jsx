import {
  Stack,
  Divider,
  Toolbar,
  Button,
  IconButton,
  Chip,
  Alert,
  Snackbar,
} from "@mui/material";
import { redirect, useNavigate } from "@remix-run/react";
import React from "react";
import { Close, Refresh } from "@mui/icons-material";

export default function ApplicationStatus(props) {
  const navigate = useNavigate();
  const [openSnackBar, setOpenSnackBar] = React.useState(false);
  const handleClose = (event, reason) => {
    setOpenSnackBar(false);
  };

  const refreshApplicationStatus = () => {
    navigate(".", { replace: true });
    setOpenSnackBar(true);
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
          marginTop: "10px",
        }}
      >
        <Alert severity={props.status === "APPROVED" ? "success" : "warning"}>
          {props.status}
        </Alert>

        <IconButton
          variant="outlined"
          size="small"
          onClick={refreshApplicationStatus}
          
          disabled={props.status === "APPROVED"}
        >
          <Refresh fontSize="medium" />
        </IconButton>
        <Snackbar
          open={openSnackBar}
          autoHideDuration={1000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Application refreshed
          </Alert>
        </Snackbar>
      </div>
    </Stack>
  );
}
