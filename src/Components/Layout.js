// src/Components/Layout.js

import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import Search from "./Search";
import ProfileInfo from "./ProfileInfo";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      {/* AppBar */}
      <AppBar position="fixed" sx={{ backgroundColor: "white" }} elevation={1}>
        <Toolbar
          sx={{ display: "flex", justifyContent: "space-between", px: 2 }}
        >
          {/* Logo */}
          <Box
            sx={{ flex: "1", display: "flex", justifyContent: "flex-start" }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: "transparent",
                backgroundImage: "linear-gradient(45deg, #2196f3, #4caf50)",
                backgroundClip: "text",
                fontSize: "32px",
                textTransform: "uppercase",
                letterSpacing: "2px",
                fontFamily: "'Poppins', sans-serif",
                cursor: "pointer",
              }}
            >
              linkUP
            </Typography>
          </Box>

          {/* Search Bar */}
          <Box sx={{ flex: "2", display: "flex", justifyContent: "center" }}>
            <Search />
          </Box>

          {/* Profile Icon */}
          <Box sx={{ flex: "1", display: "flex", justifyContent: "flex-end" }}>
            <ProfileInfo />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sidebar & Main Content Wrapper */}
      <Box sx={{ display: "flex", flex: 1, mt: "64px" }}>
        {/* Sidebar */}
        <Box sx={{ width: "150px", flexShrink: 0 }}>
          <Sidebar />
        </Box>

        {/* Main Content with Border */}
        <Box
          sx={{
            flexGrow: 1,
            padding: "10px",
            borderLeft: "2px solid #ddd", // Border between sidebar & content
            backgroundColor: "#f9f9f9",
          }}
        >
          {children}
        </Box>
      </Box>
    </div>
  );
};

export default Layout;
