import React from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import VideocamIcon from "@mui/icons-material/Videocam";
import ChatIcon from "@mui/icons-material/Chat";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box
      sx={{
        width: "150px",
        height: "100vh",
        backgroundColor: "#F8F8FF",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "20px 0",
        position: "fixed",
        top: "64px",
        left: 0,
        zIndex: 100,
      }}
    >
      {/* Home Icon */}
      <Tooltip title="Home" placement="right">
        <IconButton
          onClick={() => navigate("/main")}
          sx={{
            color: location.pathname === "/main" ? "blue" : "black",
            backgroundColor:
              location.pathname === "/main" ? "#D3D3D3" : "transparent",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
        >
          <HomeIcon />
        </IconButton>
      </Tooltip>

      {/* Meetings Icon */}
      <Tooltip title="Meetings" placement="right">
        <IconButton
          onClick={() => navigate("/meetings")}
          sx={{
            color: location.pathname === "/meetings" ? "blue" : "black",
            backgroundColor:
              location.pathname === "/meetings" ? "#D3D3D3" : "transparent",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
        >
          <VideocamIcon />
        </IconButton>
      </Tooltip>

      {/* Chats Icon */}
      <Tooltip title="Chats" placement="right">
        <IconButton
          onClick={() => navigate("/chatsPage")}
          sx={{
            color: location.pathname === "/chatsPage" ? "blue" : "black",
            backgroundColor:
              location.pathname === "/chatsPage" ? "#D3D3D3" : "transparent",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
        >
          <ChatIcon />
        </IconButton>
      </Tooltip>

      {/* Settings Icon */}
      <Tooltip title="Settings" placement="right">
        <IconButton
          onClick={() => navigate("/settingsPage")}
          sx={{
            color: location.pathname === "/settingsPage" ? "blue" : "black",
            backgroundColor:
              location.pathname === "/settingsPage" ? "#D3D3D3" : "transparent",
            borderRadius: "8px",
          }}
        >
          <SettingsIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default Sidebar;
