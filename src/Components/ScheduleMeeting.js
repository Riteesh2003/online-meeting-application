// // src/Components/ScheduleMeeting.js

import React, { useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import EventIcon from "@mui/icons-material/Event"; // Icon for scheduling a meeting

const ScheduleMeeting = ({ onMeetingScheduled }) => {
  const [showForm, setShowForm] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [topic, setTopic] = useState("");

  const handleSchedule = () => {
    if (date && time && topic) {
      const scheduledMeetingId = `${topic}-${Date.now()}`;
      onMeetingScheduled(scheduledMeetingId, topic, date, time);
      setShowForm(false);
      setDate(""); // Clear form after scheduling
      setTime("");
      setTopic("");
    } else {
      alert("Please fill all fields");
    }
  };

  const handleClose = () => {
    setShowForm(false); // Close the modal
  };

  return (
    <div>
      {/* Schedule Meeting Button */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: "white",
          color: "black",
          width: "100%",
          height: "50px", // Ensuring uniform size
        }}
        startIcon={<EventIcon sx={{ color: "blue" }} />}
        onClick={() => setShowForm(true)}
      >
        Schedule a Meeting
      </Button>

      <Dialog open={showForm} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Schedule a Meeting</DialogTitle>
        <DialogContent>
          <TextField
            label="Meeting Topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            fullWidth
            margin="dense"
          />
          <TextField
            label="Meeting Date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            margin="dense"
          />
          <TextField
            label="Meeting Time"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            margin="dense"
          />
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSchedule} color="primary" variant="contained">
            Schedule Meeting
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ScheduleMeeting;
