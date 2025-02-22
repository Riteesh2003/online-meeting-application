import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Switch,
  FormControlLabel,
  TextField,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import Layout from "../Components/Layout";

const SettingsPage = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "100%",
          px: 2,
          py: 3,
        }}
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Settings
        </Typography>

        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          sx={{ width: "100%" }}
        >
          <Tab label="General" />
          <Tab label="Audio & Video" />
          <Tab label="Meeting" />
          <Tab label="Chat & Notifications" />
          <Tab label="Security" />
          <Tab label="Integrations" />
          <Tab label="Billing" />
        </Tabs>

        <Box sx={{ mt: 2, width: "50%" }}>
          {tabIndex === 0 && (
            <Card sx={{ mt: 2, width: "100%" }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  General Settings
                </Typography>
                <TextField fullWidth label="Full Name" margin="normal" />
                <TextField
                  fullWidth
                  label="Email"
                  margin="normal"
                  type="email"
                />
                <FormControl fullWidth margin="normal">
                  <InputLabel>Language</InputLabel>
                  <Select>
                    <MenuItem value="en">English</MenuItem>
                    <MenuItem value="fr">French</MenuItem>
                  </Select>
                </FormControl>
                <FormControlLabel control={<Switch />} label="Dark Mode" />
                <Button variant="contained" sx={{ mt: 2 }}>
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          )}

          {tabIndex === 1 && (
            <Card sx={{ mt: 2, width: "100%" }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  Audio & Video
                </Typography>
                <FormControl fullWidth margin="normal">
                  <InputLabel>Microphone</InputLabel>
                  <Select>
                    <MenuItem value="mic1">Default Microphone</MenuItem>
                    <MenuItem value="mic2">External Mic</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth margin="normal">
                  <InputLabel>Camera</InputLabel>
                  <Select>
                    <MenuItem value="cam1">Default Camera</MenuItem>
                    <MenuItem value="cam2">External Webcam</MenuItem>
                  </Select>
                </FormControl>
                <FormControlLabel
                  control={<Switch />}
                  label="Noise Suppression"
                />
              </CardContent>
            </Card>
          )}

          {tabIndex === 2 && (
            <Card sx={{ mt: 2, width: "100%" }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  Meeting Preferences
                </Typography>
                <FormControlLabel
                  control={<Switch />}
                  label="Enable Waiting Room"
                />
                <FormControlLabel
                  control={<Switch />}
                  label="Auto-Record Meetings"
                />
              </CardContent>
            </Card>
          )}

          {tabIndex === 3 && (
            <Card sx={{ mt: 2, width: "100%" }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  Chat & Notifications
                </Typography>
                <FormControlLabel control={<Switch />} label="Enable Chat" />
                <FormControlLabel
                  control={<Switch />}
                  label="Email Notifications"
                />
              </CardContent>
            </Card>
          )}

          {tabIndex === 4 && (
            <Card sx={{ mt: 2, width: "100%" }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  Security & Privacy
                </Typography>
                <FormControlLabel
                  control={<Switch />}
                  label="Require Meeting Passwords"
                />
                <FormControlLabel
                  control={<Switch />}
                  label="End-to-End Encryption"
                />
              </CardContent>
            </Card>
          )}

          {tabIndex === 5 && (
            <Card sx={{ mt: 2, width: "100%" }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  Integrations
                </Typography>
                <FormControl fullWidth margin="normal">
                  <InputLabel>Calendar Sync</InputLabel>
                  <Select>
                    <MenuItem value="google">Google Calendar</MenuItem>
                    <MenuItem value="outlook">Outlook Calendar</MenuItem>
                  </Select>
                </FormControl>
              </CardContent>
            </Card>
          )}

          {tabIndex === 6 && (
            <Card sx={{ mt: 2, width: "100%" }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  Subscription & Billing
                </Typography>
                <TextField
                  fullWidth
                  label="Current Plan"
                  margin="normal"
                  disabled
                  value="Free Plan"
                />
                <Button variant="contained" sx={{ mt: 2 }}>
                  Upgrade Plan
                </Button>
              </CardContent>
            </Card>
          )}
        </Box>
      </Box>
    </Layout>
  );
};

export default SettingsPage;

// import React, { useState } from "react";
// import {
//   Box,
//   Typography,
//   Button,
//   Switch,
//   FormControlLabel,
//   MenuItem,
//   Select,
//   Avatar,
//   IconButton,
//   Slider,
//   Divider,
//   TextField,
//   InputAdornment,
//   Grid,
//   Paper,
// } from "@mui/material";
// import { PhotoCamera, Logout, Security } from "@mui/icons-material";
// import Layout from "../Components/Layout"; // Import Layout component

// const SettingsPage = () => {
//   const [username, setUsername] = useState("John Doe");
//   const [email, setEmail] = useState("john.doe@example.com");
//   const [notifications, setNotifications] = useState(true);
//   const [camera, setCamera] = useState("default");
//   const [microphone, setMicrophone] = useState("default");
//   const [volume, setVolume] = useState(50);
//   const [videoQuality, setVideoQuality] = useState("720p");

//   const handleSaveSettings = () => {
//     alert("Settings saved successfully!");
//   };

//   return (
//     <Layout>
//       <Box
//         sx={{
//           padding: "30px",
//           maxWidth: "800px",
//           margin: "auto",
//           display: "flex",
//           flexDirection: "column",
//           gap: 3,
//         }}
//       >
//         <Typography variant="h4" gutterBottom fontWeight="bold">
//           Settings
//         </Typography>

//         {/* Profile Section */}
//         <Paper sx={{ padding: "20px", boxShadow: 3 }}>
//           <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
//             Profile Settings
//           </Typography>
//           <Grid container spacing={2} alignItems="center">
//             <Grid item>
//               <Avatar sx={{ width: 72, height: 72 }} />
//             </Grid>
//             <Grid item>
//               <IconButton color="primary" component="label">
//                 <PhotoCamera sx={{ fontSize: 28 }} />
//                 <input type="file" hidden />
//               </IconButton>
//             </Grid>
//           </Grid>

//           {/* Username Input */}
//           <TextField
//             fullWidth
//             label="Username"
//             variant="outlined"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             sx={{ mt: 2 }}
//           />

//           {/* Email Input */}
//           <TextField
//             fullWidth
//             label="Email"
//             variant="outlined"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             sx={{ mt: 2 }}
//           />
//         </Paper>

//         {/* Meeting Preferences Section */}
//         <Paper sx={{ padding: "20px", boxShadow: 3 }}>
//           <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
//             Meeting Preferences
//           </Typography>
//           <FormControlLabel
//             control={
//               <Switch
//                 checked={notifications}
//                 onChange={() => setNotifications(!notifications)}
//                 color="primary"
//               />
//             }
//             label="Enable Meeting Notifications"
//           />
//         </Paper>

//         {/* Audio & Video Settings Section */}
//         <Paper sx={{ padding: "20px", boxShadow: 3 }}>
//           <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
//             Audio & Video Settings
//           </Typography>

//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               <Select
//                 fullWidth
//                 value={camera}
//                 onChange={(e) => setCamera(e.target.value)}
//                 variant="outlined"
//                 sx={{ mb: 2 }}
//               >
//                 <MenuItem value="default">Default Camera</MenuItem>
//                 <MenuItem value="external">External Camera</MenuItem>
//               </Select>
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <Select
//                 fullWidth
//                 value={microphone}
//                 onChange={(e) => setMicrophone(e.target.value)}
//                 variant="outlined"
//                 sx={{ mb: 2 }}
//               >
//                 <MenuItem value="default">Default Microphone</MenuItem>
//                 <MenuItem value="external">External Microphone</MenuItem>
//               </Select>
//             </Grid>
//           </Grid>

//           {/* Microphone Volume */}
//           <Typography variant="body1" sx={{ mt: 2 }}>
//             Microphone Volume
//           </Typography>
//           <Slider
//             value={volume}
//             onChange={(e, newValue) => setVolume(newValue)}
//             aria-labelledby="volume-slider"
//             sx={{ mb: 2 }}
//           />

//           {/* Video Quality */}
//           <Typography variant="body1">Video Quality</Typography>
//           <Select
//             fullWidth
//             value={videoQuality}
//             onChange={(e) => setVideoQuality(e.target.value)}
//             variant="outlined"
//             sx={{ mb: 2 }}
//           >
//             <MenuItem value="480p">480p</MenuItem>
//             <MenuItem value="720p">720p</MenuItem>
//             <MenuItem value="1080p">1080p</MenuItem>
//           </Select>
//         </Paper>

//         <Divider sx={{ my: 3 }} />

//         {/* Security Settings Section */}
//         <Paper sx={{ padding: "20px", boxShadow: 3 }}>
//           <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
//             Security Settings
//           </Typography>
//           <Button
//             variant="outlined"
//             color="secondary"
//             startIcon={<Security />}
//             sx={{ mb: 2 }}
//           >
//             Change Password
//           </Button>
//         </Paper>

//         {/* Logout Section */}
//         <Paper sx={{ padding: "20px", boxShadow: 3 }}>
//           <Button
//             variant="contained"
//             color="error"
//             startIcon={<Logout />}
//             fullWidth
//           >
//             Logout
//           </Button>
//         </Paper>

//         {/* Save Settings Button */}
//         <Button
//           variant="contained"
//           color="primary"
//           fullWidth
//           sx={{ mt: 3 }}
//           onClick={handleSaveSettings}
//         >
//           Save Settings
//         </Button>
//       </Box>
//     </Layout>
//   );
// };

// export default SettingsPage;
