import { Delete, Send } from "@mui/icons-material";
import {
    AppBar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  FormControl,
  Input,
  InputLabel,
  OutlinedInput,
  Paper,
  Stack,
  TextField,
  Toolbar,
} from "@mui/material";
import React from "react";

export default function NewApplicationForm() {
  return (
        
        
          <form method="POST" action="/application" style={{marginTop:'10px'}}>
            <Stack direction={"column"}>
              <Stack direction="row">
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
              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">
                  Address
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  label="Address"
                  name="address"
                />
              </FormControl>
              <Stack direction="row">
                <TextField
                  label="Zip Code"
                  name="zip"
                  type="number"
                  sx={{ m: 1, width: "20ch" }}
                />
                <TextField
                  label="State"
                  name="state"
                  sx={{ m: 1, width: "20ch" }}
                />
                <TextField
                  label="Mobile Number"
                  name="mobileNumber"
                  sx={{ m: 1, width: "20ch" }}
                />
              </Stack>
              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">
                  Email Address
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  label="Email Address"
                  name="email"
                />
              </FormControl>
             
              <Stack direction="row" justifyContent={'center'} spacing={5} style={{marginTop:'5%'}}>
             
                <Button
                  variant="contained"
                  startIcon={<Delete />}
                  style={{ backgroundColor:'white', color:'black'}}
                >
                  Cancel
                </Button>
                <Button variant="contained" type="submit" endIcon={<Send />}style={{ backgroundColor:'white', color:'black'}}>
                  Submit
                </Button>
              </Stack>
            </Stack>
          </form>
       
  );
}
