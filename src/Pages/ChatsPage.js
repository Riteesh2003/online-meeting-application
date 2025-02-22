// import React, { useState } from "react";
// import {
//   Box,
//   TextField,
//   Button,
//   Typography,
//   List,
//   ListItem,
//   ListItemText,
//   IconButton,
// } from "@mui/material";
// import AttachFileIcon from "@mui/icons-material/AttachFile";
// import SendIcon from "@mui/icons-material/Send";
// import Layout from "../Components/Layout"; // Import Layout component

// const ChatPage = () => {
//   const [messages, setMessages] = useState([]);
//   const [message, setMessage] = useState("");

//   // Function to send message
//   const handleSendMessage = () => {
//     if (message.trim() !== "") {
//       setMessages([
//         ...messages,
//         {
//           text: message,
//           sender: "You",
//           timestamp: new Date().toLocaleTimeString(),
//         },
//       ]);
//       setMessage("");
//     }
//   };

//   return (
//     <Layout>
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           height: "100%",
//           padding: "10px",
//         }}
//       >
//         {/* Chat Messages */}
//         <Box
//           sx={{
//             flex: 1,
//             overflowY: "auto",
//             backgroundColor: "#fff",
//             borderRadius: "8px",
//             padding: "10px",
//             boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
//           }}
//         >
//           <Typography
//             variant="h6"
//             sx={{ textAlign: "center", marginBottom: "10px" }}
//           >
//             Chat Room
//           </Typography>
//           <List>
//             {messages.map((msg, index) => (
//               <ListItem
//                 key={index}
//                 sx={{
//                   display: "flex",
//                   justifyContent:
//                     msg.sender === "You" ? "flex-end" : "flex-start",
//                 }}
//               >
//                 <Box
//                   sx={{
//                     backgroundColor:
//                       msg.sender === "You" ? "#4caf50" : "#e0e0e0",
//                     color: msg.sender === "You" ? "#fff" : "#000",
//                     borderRadius: "10px",
//                     padding: "8px 12px",
//                     maxWidth: "70%",
//                     wordBreak: "break-word",
//                   }}
//                 >
//                   <Typography variant="body2">{msg.text}</Typography>
//                   <Typography
//                     variant="caption"
//                     sx={{ display: "block", textAlign: "right", opacity: 0.7 }}
//                   >
//                     {msg.timestamp}
//                   </Typography>
//                 </Box>
//               </ListItem>
//             ))}
//           </List>
//         </Box>

//         {/* Message Input Field */}
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             marginTop: "10px",
//             backgroundColor: "#fff",
//             borderRadius: "8px",
//             padding: "5px",
//             boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
//           }}
//         >
//           <IconButton color="primary">
//             <AttachFileIcon />
//           </IconButton>
//           <TextField
//             fullWidth
//             variant="outlined"
//             placeholder="Type a message..."
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
//             sx={{ flexGrow: 1, marginX: "10px" }}
//           />
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={handleSendMessage}
//             sx={{ borderRadius: "50px", minWidth: "40px" }}
//           >
//             <SendIcon />
//           </Button>
//         </Box>
//       </Box>
//     </Layout>
//   );
// };

// export default ChatPage;

import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import Layout from "../Components/Layout"; // Import Layout component

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const messageEndRef = useRef(null);

  // Function to send a text message
  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: Date.now(), // Unique ID for each message
          text: message,
          sender: "You",
          timestamp: new Date().toLocaleTimeString(),
        },
      ]);
      setMessage("");
    }
  };

  // Function to handle file uploads
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: Date.now(),
          text: `📎 ${file.name}`,
          sender: "You",
          timestamp: new Date().toLocaleTimeString(),
        },
      ]);
    }
  };

  // Function to delete a specific message
  const handleDeleteMessage = (id) => {
    setMessages(messages.filter((msg) => msg.id !== id));
  };

  // // Auto-scroll to the latest message
  // useEffect(() => {
  //   messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  // }, [messages]);

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          padding: "10px",
        }}
      >
        {/* Chat Header */}
        <Typography
          variant="h6"
          sx={{ textAlign: "center", marginBottom: "10px" }}
        >
          Chat Room
        </Typography>

        {/* Chat Messages List */}
        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            backgroundColor: "#fff",
            borderRadius: "8px",
            padding: "10px",
            boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <List>
            {messages.map((msg) => (
              <ListItem
                key={msg.id}
                sx={{
                  display: "flex",
                  justifyContent:
                    msg.sender === "You" ? "flex-end" : "flex-start",
                }}
              >
                <Box
                  sx={{
                    backgroundColor:
                      msg.sender === "You" ? "#4caf50" : "#e0e0e0",
                    color: msg.sender === "You" ? "#fff" : "#000",
                    borderRadius: "10px",
                    padding: "8px 12px",
                    maxWidth: "70%",
                    wordBreak: "break-word",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <ListItemText
                    primary={msg.text}
                    secondary={msg.timestamp}
                    sx={{ marginRight: "10px" }}
                  />
                  {/* Delete Message Button */}
                  <IconButton
                    size="small"
                    onClick={() => handleDeleteMessage(msg.id)}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Box>
              </ListItem>
            ))}
            <div ref={messageEndRef} />
          </List>
        </Box>

        {/* Sticky Message Input Field */}
        <Box
          sx={{
            position: "sticky",
            bottom: 0,
            backgroundColor: "#fff",
            padding: "10px",
            boxShadow: "0px -2px 5px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            marginTop: "10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* File Upload Button */}
          <IconButton color="primary" component="label">
            <AttachFileIcon />
            <input type="file" hidden onChange={handleFileUpload} />
          </IconButton>

          {/* Message Input Field */}
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            aria-label="Chat input"
            autoFocus
            sx={{ flexGrow: 1, marginX: "10px" }}
          />

          {/* Send Message Button */}
          <Button
            variant="contained"
            color="primary"
            onClick={handleSendMessage}
            sx={{ borderRadius: "50px", minWidth: "40px" }}
          >
            <SendIcon />
          </Button>
        </Box>
      </Box>
    </Layout>
  );
};

export default ChatPage;
