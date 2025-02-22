import React, { useState } from "react";
import { Button, Modal, Box, TextField } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login"; // Icon for joining a meeting

const JoinMeeting = ({ onMeetingJoined }) => {
  const [openJoinModal, setOpenJoinModal] = useState(false);
  const [joinMeetingId, setJoinMeetingId] = useState("");

  const handleJoinMeeting = () => {
    if (joinMeetingId.trim()) {
      onMeetingJoined(joinMeetingId);
      setOpenJoinModal(false);
    }
  };

  return (
    <>
      {/* Button to Open Join Meeting Modal */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: "white",
          color: "black",
          width: "100%",
          height: "50px", // Ensuring uniform size
        }}
        startIcon={<LoginIcon sx={{ color: "blue" }} />} // Icon for visual clarity
        onClick={() => setOpenJoinModal(true)} // Open modal on click
      >
        Join Meeting
      </Button>

      {/* Join Meeting Modal */}
      <Modal open={openJoinModal} onClose={() => setOpenJoinModal(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            p: 4,
            boxShadow: 24,
            borderRadius: 2,
            width: 300, // Set a fixed width
          }}
        >
          <TextField
            label="Meeting ID"
            variant="outlined"
            fullWidth
            value={joinMeetingId}
            onChange={(e) => setJoinMeetingId(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleJoinMeeting}
          >
            Join
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default JoinMeeting;
