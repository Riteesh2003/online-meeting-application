// src/pages/MeetingMenuPage.js

import React, { useState } from "react";
import { Grid, Box, Divider, Typography, Button } from "@mui/material";
import Layout from "../Components/Layout";
import CreateMeeting from "../Components/CreateMeeting";
import JoinMeeting from "../Components/JoinMeeting";
import ScheduleMeeting from "../Components/ScheduleMeeting";

const MeetingMenuPage = () => {
  const [meetings, setMeetings] = useState([]); // Store multiple meetings

  // Function to add a scheduled meeting
  const handleMeetingScheduled = (id, topic, date, time) => {
    const newMeeting = { id, topic, date, time };
    setMeetings((prevMeetings) => [...prevMeetings, newMeeting]);
  };

  // Function to cancel a specific meeting
  const handleCancelMeeting = (id) => {
    setMeetings((prevMeetings) =>
      prevMeetings.filter((meeting) => meeting.id !== id)
    );
  };

  // Function to send an invite
  const handleInvite = (meeting) => {
    alert(
      `Invitation sent for ${meeting.topic} on ${meeting.date} at ${meeting.time}`
    );
  };

  return (
    <Layout>
      <Box sx={{ display: "flex", justifyContent: "flex-start", mt: 4 }}>
        <Grid
          container
          direction="row"
          spacing={1}
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={12} sm={6} md={4} lg={3}>
            {/* Heading */}
            <Typography variant="h4" sx={{ marginBottom: 1 }}>
              Meet
            </Typography>

            {/* Buttons Box */}
            <Box
              sx={{
                border: "2px solid #ccc",
                padding: 2,
                borderRadius: "5px",
                minHeight: "0px",
                width: "900px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box sx={{ flex: 1 }}>
                <CreateMeeting
                  onMeetingCreated={handleMeetingScheduled}
                  fullWidth
                />
              </Box>
              <Box sx={{ flex: 1 }}>
                <JoinMeeting
                  onMeetingJoined={handleMeetingScheduled}
                  fullWidth
                />
              </Box>
              <Box sx={{ flex: 1 }}>
                <ScheduleMeeting
                  onMeetingScheduled={handleMeetingScheduled}
                  fullWidth
                />
              </Box>
            </Box>
          </Grid>

          {/* Heading Between Boxes */}
          <Grid item xs={12}>
            <Typography
              variant="h5"
              sx={{ textAlign: "flex-start", mt: 3, mb: 2 }}
            >
              Scheduled Meetings
            </Typography>
          </Grid>

          {/* Scheduled Meetings Box */}
          <Grid item xs={12} sm={8} md={6} lg={5}>
            <Box
              sx={{
                textAlign: "left",
                padding: 2,
                backgroundColor: "#f5f5f5",
                minHeight: "200px",
                maxHeight: "200px",
                overflowY: "auto",
                border: "2px solid #ccc",
                borderRadius: "5px",
                width: "900px", // Set a fixed width
              }}
            >
              {meetings.length === 0 ? (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%", // Make it take full height of the box
                    minHeight: "200px", // Ensure minimum height is maintained
                  }}
                >
                  <Typography variant="h6" color="gray">
                    No meetings scheduled
                  </Typography>
                </Box>
              ) : (
                <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
                  {meetings.map((meeting) => (
                    <Box
                      key={meeting.id}
                      sx={{
                        mt: 2,
                        p: 2,
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        backgroundColor: "white",
                      }}
                    >
                      <Typography>
                        <strong>Topic:</strong> {meeting.topic}
                      </Typography>
                      <Typography>
                        <strong>Date:</strong> {meeting.date}
                      </Typography>
                      <Typography>
                        <strong>Time:</strong> {meeting.time}
                      </Typography>

                      <Box sx={{ mt: 2, display: "flex", gap: 2 }}>
                        <Button
                          variant="contained"
                          color="error"
                          onClick={() => handleCancelMeeting(meeting.id)}
                        >
                          Cancel Meeting
                        </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => handleInvite(meeting)}
                        >
                          Invite
                        </Button>
                      </Box>
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default MeetingMenuPage;
