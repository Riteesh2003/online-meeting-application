// // src/components/LoginPage.js
// import React, { useState } from "react";
// import SignUp from "../Components/SignUp";
// import Login from "../Components/Login";
// import { AppBar, Toolbar, Button, Box, Typography } from "@mui/material";

// const LoginPage = () => {
//   const [isSignUp, setIsSignUp] = useState(false);

//   return (
//     <div>
//       <AppBar position="static" sx={{ backgroundColor: "white" }}>
//         <Toolbar>
//           <Box sx={{ flexGrow: 1 }} />

//           {/* Text for Login Button */}
//           <Typography variant="body2" sx={{ marginRight: 2, color: "black" }}>
//             Already have an account?
//           </Typography>

//           {/* Login Button */}
//           <Button
//             onClick={() => setIsSignUp(false)}
//             sx={{
//               marginRight: 2, // Adds space between the buttons
//               color: "blue", // Text color

//               "&:hover": {
//                 backgroundColor: "#e3f2fd", // Light blue background on hover
//                 borderColor: "blue", // Ensure border remains blue on hover
//               },
//             }}
//           >
//             Login
//           </Button>

//           {/* Text for Sign Up Button */}
//           <Typography variant="body2" sx={{ marginRight: 2, color: "black" }}>
//             Don't have an account?
//           </Typography>

//           {/* Sign Up Button */}
//           <Button
//             onClick={() => setIsSignUp(true)}
//             sx={{
//               color: "blue", // Text color

//               "&:hover": {
//                 backgroundColor: "#e3f2fd", // Light blue background on hover
//                 borderColor: "blue", // Ensure border remains blue on hover
//               },
//             }}
//           >
//             Sign Up
//           </Button>
//         </Toolbar>
//       </AppBar>

//       {/* Conditionally render Login or SignUp */}
//       {isSignUp ? <SignUp /> : <Login />}
//     </div>
//   );
// };

// export default LoginPage;

// // src/components/LoginPage.js
// import React, { useState } from "react";
// import SignUp from "../Components/SignUp";
// import Login from "../Components/Login";
// import { AppBar, Toolbar, Button, Box, Typography } from "@mui/material";

// const LoginPage = () => {
//   const [isSignUp, setIsSignUp] = useState(false);

//   return (
//     <div>
//       <AppBar position="static" sx={{ backgroundColor: "white" }}>
//         <Toolbar>
//           {/* Box for centering the logo */}
//           <Box
//             sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-start" }}
//           >
//             <Typography
//               variant="h5"
//               sx={{
//                 fontWeight: 600,
//                 color: "#2196f3", // Bright blue color
//                 fontSize: "28px",
//                 textTransform: "none",
//                 letterSpacing: "1px",
//                 fontFamily: "'Poppins', sans-serif", // Custom modern font
//                 cursor: "pointer",
//               }}
//             >
//               linkUP
//             </Typography>
//           </Box>

//           {/* Text for Login Button */}
//           <Typography variant="body2" sx={{ marginRight: 2, color: "black" }}>
//             Already have an account?
//           </Typography>

//           {/* Login Button */}
//           <Button
//             onClick={() => setIsSignUp(false)}
//             sx={{
//               marginRight: 2, // Adds space between the buttons
//               color: "blue", // Text color
//               borderColor: "blue", // Border color
//               border: "1px solid", // Border for a more distinct button look
//               "&:hover": {
//                 backgroundColor: "#e3f2fd", // Light blue background on hover
//                 borderColor: "blue", // Ensure border remains blue on hover
//               },
//             }}
//           >
//             Login
//           </Button>

//           {/* Text for Sign Up Button */}
//           <Typography variant="body2" sx={{ marginRight: 2, color: "black" }}>
//             Don't have an account?
//           </Typography>

//           {/* Sign Up Button */}
//           <Button
//             onClick={() => setIsSignUp(true)}
//             sx={{
//               color: "blue", // Text color
//               borderColor: "blue", // Border color
//               border: "1px solid", // Border for a more distinct button look
//               "&:hover": {
//                 backgroundColor: "#e3f2fd", // Light blue background on hover
//                 borderColor: "blue", // Ensure border remains blue on hover
//               },
//             }}
//           >
//             Sign Up
//           </Button>
//         </Toolbar>
//       </AppBar>

//       {/* Conditionally render Login or SignUp */}
//       {isSignUp ? <SignUp /> : <Login />}
//     </div>
//   );
// };

// export default LoginPage;

// src/components/LoginPage.js
import React, { useState } from "react";
import SignUp from "../Components/SignUp";
import Login from "../Components/Login";
import { AppBar, Toolbar, Button, Box, Typography } from "@mui/material";

const LoginPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: "white" }} elevation={1}>
        <Toolbar>
          {/* Box for centering the logo */}
          <Box
            sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-start" }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700, // Bold text
                color: "transparent",
                backgroundImage: "linear-gradient(45deg, #2196f3, #4caf50)", // Gradient color
                backgroundClip: "text", // Ensures text is clipped with gradient
                fontSize: "32px", // Increased font size
                textTransform: "uppercase", // Makes the text uppercase
                letterSpacing: "2px", // More space between letters for modern look
                fontFamily: "'Poppins', sans-serif", // Custom modern font
                cursor: "pointer",
                display: "inline-block",
              }}
            >
              linkUP
            </Typography>
          </Box>

          {/* Text for Login Button */}
          <Typography variant="body2" sx={{ marginRight: 2, color: "black" }}>
            Already have an account?
          </Typography>

          {/* Login Button */}
          <Button
            onClick={() => setIsSignUp(false)}
            sx={{
              marginRight: 2, // Adds space between the buttons
              color: "blue", // Text color

              "&:hover": {
                backgroundColor: "#e3f2fd", // Light blue background on hover
                borderColor: "blue", // Ensure border remains blue on hover
              },
            }}
          >
            Login
          </Button>

          {/* Text for Sign Up Button */}
          <Typography variant="body2" sx={{ marginRight: 2, color: "black" }}>
            New user?
          </Typography>

          {/* Sign Up Button */}
          <Button
            onClick={() => setIsSignUp(true)}
            sx={{
              color: "blue", // Text color

              "&:hover": {
                backgroundColor: "#e3f2fd", // Light blue background on hover
                borderColor: "blue", // Ensure border remains blue on hover
              },
            }}
          >
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>

      {/* Conditionally render Login or SignUp */}
      {isSignUp ? <SignUp /> : <Login />}
    </div>
  );
};

export default LoginPage;
