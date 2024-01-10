import { Box, Divider, Link, Stack, Tab, Tabs, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { NavLink, PrefetchPageLinks } from "@remix-run/react";
import React, { useState } from "react";

export default function ApplyTabNavigation() {
  const [selectedTab, setSelectedTab] = useState("");
  const handleTabSelection = (event, newValue) => {
    setSelectedTab(newValue);
    console.log("new value - " + newValue);
  };
  return (

    <Stack
      direction={"row"}
      justifyContent={"center"}
      spacing={3}
      divider={<Divider orientation="vertical" flexItem />}
    >
      <Link
        href={'/application/newApplication'}
        style={{ color: "black", textDecoration: "none" }}
      >
        <h2>New Application</h2>
      </Link>

      <Link 
      rel="prefetch"
        href="/application/searchApplication/applicationList"
        style={{ color: "black", textDecoration: "none" }}
      >
        <h2>Application Status</h2>
      </Link>
    </Stack>
  );
}
