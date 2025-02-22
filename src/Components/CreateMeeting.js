// src/Components/CreateMeeting.js

import React from "react";
import { Button } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups"; // Alternative icon
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const CreateMeeting = ({ onMeetingCreated, sx }) => {
  const navigate = useNavigate();

  const handleCreateMeeting = async () => {
    try {
      const meetingRef = await addDoc(collection(db, "meetings"), {
        createdAt: new Date(),
      });
      onMeetingCreated(meetingRef.id);
      navigate("/meetingsroomPage");
    } catch (error) {
      console.error("Error creating meeting:", error);
    }
  };

  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "white",
        color: "black",
        width: "100%",
        height: "50px", // Ensuring uniform button size
      }}
      startIcon={<GroupsIcon sx={{ color: "blue" }} />} // Setting icon color to blue
      onClick={handleCreateMeeting}
    >
      Create Meeting
    </Button>
  );
};

export default CreateMeeting;
