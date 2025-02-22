// src/pages/MeetingRoomPage.js
import React, { useState } from "react";
import { Grid, Box, Typography, Tooltip, IconButton } from "@mui/material";
import {
  Mic,
  MicOff,
  Videocam,
  VideocamOff,
  EmojiEmotions,
  People,
  Chat,
  PhoneDisabled, // Disconnect call icon for leave meeting
  ThumbUpAlt, // Raised hand icon
  PanTool, // Unraised hand icon
} from "@mui/icons-material";

const MeetingRoomPage = () => {
  const [isMicOn, setIsMicOn] = useState(true);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isHandRaised, setIsHandRaised] = useState(false);
  const [users, setUsers] = useState([
    { id: 1, name: "User 1" },
    { id: 2, name: "User 2" },
    { id: 3, name: "User 3" },
    { id: 4, name: "User 4" },
  ]);

  const toggleMic = () => setIsMicOn(!isMicOn);
  const toggleVideo = () => setIsVideoOn(!isVideoOn);
  const toggleHandRaise = () => setIsHandRaised(!isHandRaised);

  const handleLeaveMeeting = () => {
    // Logic to leave the meeting (e.g., redirect or close the meeting)
    alert("Leaving the meeting");
  };

  const handleSendReaction = () => {
    // Logic to send an emoji or reaction (placeholder here)
    alert("Sending reaction");
  };

  return (
    <Box
      sx={{
        padding: 3,
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "black", // Set background to black
        color: "white", // Text color white for contrast
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Dynamic grid layout for users */}
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ flexGrow: 1 }}
      >
        {users.map((user) => (
          <Grid item key={user.id}>
            <Box
              sx={{
                width: 60,
                height: 60,
                borderRadius: "50%",
                backgroundColor: "gray", // Light gray background for user icons
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {user.name.charAt(0)} {/* First letter of the name */}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Controls (Icons) at the bottom */}
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ position: "absolute", bottom: 16 }}
      >
        <Grid item>
          <Tooltip title={isMicOn ? "Mute Mic" : "Unmute Mic"}>
            <IconButton
              onClick={toggleMic}
              color={isMicOn ? "primary" : "error"}
            >
              {isMicOn ? <Mic /> : <MicOff />}
            </IconButton>
          </Tooltip>
        </Grid>

        <Grid item>
          <Tooltip title={isVideoOn ? "Turn off Video" : "Turn on Video"}>
            <IconButton
              onClick={toggleVideo}
              color={isVideoOn ? "primary" : "error"}
            >
              {isVideoOn ? <Videocam /> : <VideocamOff />}
            </IconButton>
          </Tooltip>
        </Grid>

        <Grid item>
          <Tooltip title="Send Reaction">
            <IconButton onClick={handleSendReaction} color="primary">
              <EmojiEmotions />
            </IconButton>
          </Tooltip>
        </Grid>

        <Grid item>
          <Tooltip title={isHandRaised ? "Lower Hand" : "Raise Hand"}>
            <IconButton
              onClick={toggleHandRaise}
              color={isHandRaised ? "primary" : "default"} // Set color for unraised hand
            >
              {isHandRaised ? (
                <PanTool sx={{ color: "yellow" }} /> // White for unraised hand
              ) : (
                <PanTool sx={{ color: "skyblue" }} /> // White for raised hand
              )}
            </IconButton>
          </Tooltip>
        </Grid>

        <Grid item>
          <Tooltip title="People">
            <IconButton color="primary">
              <People />
            </IconButton>
          </Tooltip>
        </Grid>

        <Grid item>
          <Tooltip title="Chat with Everyone">
            <IconButton color="primary">
              <Chat />
            </IconButton>
          </Tooltip>
        </Grid>

        <Grid item>
          <Tooltip title="Leave Meeting">
            <IconButton onClick={handleLeaveMeeting} color="error">
              <PhoneDisabled /> {/* Disconnect call icon */}
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MeetingRoomPage;
