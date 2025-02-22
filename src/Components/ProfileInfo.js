// // // src/Components/ProfileInfo.js
// // import React, { useState, useEffect } from "react";
// // import {
// //   Avatar,
// //   IconButton,
// //   Tooltip,
// //   Dialog,
// //   DialogTitle,
// //   DialogContent,
// //   DialogActions,
// //   Button,
// //   Typography,
// //   Box,
// //   Stack,
// // } from "@mui/material";
// // import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// // import PhotoCamera from "@mui/icons-material/PhotoCamera";
// // import EditIcon from "@mui/icons-material/Edit";
// // import { auth } from "../firebase";
// // import { onAuthStateChanged, updateProfile } from "firebase/auth";

// // const ProfileInfo = () => {
// //   const [user, setUser] = useState(null);
// //   const [open, setOpen] = useState(false);
// //   const [editMode, setEditMode] = useState(false);
// //   const [formData, setFormData] = useState({
// //     displayName: "",
// //     email: "",
// //     photoURL: "",
// //   });

// //   useEffect(() => {
// //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
// //       setUser(currentUser);
// //       if (currentUser) {
// //         setFormData({
// //           displayName: currentUser.displayName || "",
// //           email: currentUser.email || "",
// //           photoURL: currentUser.photoURL || "",
// //         });
// //       }
// //     });
// //     return () => unsubscribe();
// //   }, []);

// //   const handleToggle = () => {
// //     setOpen(true);
// //   };

// //   const handleClose = () => {
// //     setOpen(false);
// //     setEditMode(false);
// //   };

// //   const handleChange = (e) => {
// //     const { name, files } = e.target;
// //     if (name === "photoURL" && files[0]) {
// //       const reader = new FileReader();
// //       reader.onloadend = () => {
// //         setFormData((prev) => ({ ...prev, photoURL: reader.result }));
// //       };
// //       reader.readAsDataURL(files[0]);
// //     }
// //   };

// //   const handleSave = async () => {
// //     try {
// //       if (user) {
// //         await updateProfile(user, {
// //           displayName: formData.displayName,
// //           photoURL: formData.photoURL,
// //         });
// //         alert("Profile updated successfully!");
// //         setEditMode(false);
// //       }
// //     } catch (error) {
// //       console.error("Error updating profile:", error);
// //       alert("Failed to update profile.");
// //     }
// //   };

// //   return (
// //     <div>
// //       <Tooltip title="Profile">
// //         <IconButton onClick={handleToggle} sx={{ p: 0 }}>
// //           {user && user.photoURL ? (
// //             <Avatar
// //               src={user.photoURL}
// //               alt="Profile"
// //               sx={{ width: 40, height: 40 }}
// //             />
// //           ) : (
// //             <AccountCircleIcon sx={{ fontSize: 40 }} />
// //           )}
// //         </IconButton>
// //       </Tooltip>

// //       <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
// //         <DialogTitle>Profile Information</DialogTitle>
// //         <DialogContent>
// //           {user ? (
// //             <Box
// //               display="flex"
// //               flexDirection="column"
// //               alignItems="center"
// //               gap={2}
// //             >
// //               <IconButton component="label">
// //                 <input
// //                   hidden
// //                   accept="image/*"
// //                   type="file"
// //                   name="photoURL"
// //                   onChange={handleChange}
// //                 />
// //                 {formData.photoURL ? (
// //                   <Avatar
// //                     src={formData.photoURL}
// //                     sx={{ width: 100, height: 100 }}
// //                   />
// //                 ) : (
// //                   <Avatar sx={{ width: 100, height: 100 }}>
// //                     <PhotoCamera />
// //                   </Avatar>
// //                 )}
// //               </IconButton>

// //               <Stack spacing={1} alignItems="center">
// //                 <Typography variant="h6">
// //                   {formData.displayName || "No Name"}
// //                 </Typography>
// //                 <Typography variant="body2" color="text.secondary">
// //                   {formData.email}
// //                 </Typography>

// //                 <Button
// //                   variant="outlined"
// //                   startIcon={<EditIcon />}
// //                   onClick={() => setEditMode(true)}
// //                 >
// //                   {formData.photoURL
// //                     ? "Edit Profile Photo"
// //                     : "Add Profile Photo"}
// //                 </Button>
// //               </Stack>
// //             </Box>
// //           ) : (
// //             <Typography>No user info available.</Typography>
// //           )}
// //         </DialogContent>
// //         <DialogActions>
// //           {editMode && (
// //             <Button onClick={handleSave} variant="contained">
// //               Save
// //             </Button>
// //           )}
// //           <Button onClick={handleClose} color="error">
// //             Close
// //           </Button>
// //         </DialogActions>
// //       </Dialog>
// //     </div>
// //   );
// // };

// // export default ProfileInfo;

import React, { useState, useEffect } from "react";
import {
  Avatar,
  IconButton,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Stack,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import EditIcon from "@mui/icons-material/Edit";
import { auth } from "../firebase";
import { onAuthStateChanged, updateProfile } from "firebase/auth";

const ProfileInfo = () => {
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    displayName: "",
    email: "",
    photoURL: "",
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        setFormData({
          displayName: currentUser.displayName || "",
          email: currentUser.email || "",
          photoURL: currentUser.photoURL || "",
        });
      }
    });
    return () => unsubscribe();
  }, []);

  const handleToggle = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditMode(false);
  };

  const handleChange = (e) => {
    const { name, files } = e.target;
    if (name === "photoURL" && files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, photoURL: reader.result }));
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const handleSave = async () => {
    try {
      if (user) {
        await updateProfile(user, {
          displayName: formData.displayName,
          photoURL: formData.photoURL,
        });
        alert("Profile updated successfully!");
        setEditMode(false);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile.");
    }
  };

  return (
    <div>
      <Tooltip title="Profile">
        <IconButton onClick={handleToggle} sx={{ p: 0 }}>
          {user && user.photoURL ? (
            <Avatar
              src={user.photoURL}
              alt="Profile"
              sx={{ width: 40, height: 40 }}
            />
          ) : (
            <AccountCircleIcon sx={{ fontSize: 40 }} />
          )}
        </IconButton>
      </Tooltip>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
        <DialogTitle>Profile Information</DialogTitle>
        <DialogContent>
          {user ? (
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={2}
            >
              <Avatar
                src={formData.photoURL || ""}
                sx={{ width: 100, height: 100 }}
              />
              <Stack spacing={1} alignItems="center">
                <Typography variant="h6">
                  {formData.displayName || "No Name"}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {formData.email}
                </Typography>

                <Button
                  variant="outlined"
                  startIcon={<EditIcon />}
                  onClick={() => setEditMode(true)}
                >
                  {formData.photoURL
                    ? "Edit Profile Photo"
                    : "Add Profile Photo"}
                </Button>
              </Stack>
              {editMode && (
                <Box mt={2}>
                  <input
                    accept="image/*"
                    type="file"
                    name="photoURL"
                    onChange={handleChange}
                    hidden
                    id="upload-photo"
                  />
                  <label htmlFor="upload-photo">
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<PhotoCamera />}
                      component="span"
                    >
                      Change Photo
                    </Button>
                  </label>
                </Box>
              )}
            </Box>
          ) : (
            <Typography>No user info available.</Typography>
          )}
        </DialogContent>
        <DialogActions>
          {editMode && (
            <Button onClick={handleSave} variant="contained">
              Save
            </Button>
          )}
          <Button onClick={handleClose} color="error">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProfileInfo;
