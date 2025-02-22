// // src/Paths.js
// import React from "react";
// import { Routes, Route } from "react-router-dom"; // Import Routes and Route
// import LoginPage from "./Pages/LoginPage"; // Ensure "L" and "P" are capitalized correctly

// import MainPage from "./Pages/MainPage";

// const Paths = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<LoginPage />} />
//       <Route path="/main" element={<MainPage />} />
//     </Routes>
//   );
// };

// export default Paths;

// import React from "react";
// import { Routes, Route } from "react-router-dom"; // Import Routes and Route
// import LoginPage from "./Pages/LoginPage"; // Ensure "L" and "P" are capitalized correctly
// import MainPage from "./Pages/MainPage";
// import MeetingMenuPage from "./Pages/MeetingMenuPage"; // Update to match the filename

// const Paths = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<LoginPage />} />
//       <Route path="/main" element={<MainPage />} />
//       <Route path="/meetings" element={<MeetingMenuPage />} />{" "}
//       {/* Add Meetings page route */}
//     </Routes>
//   );
// };

// export default Paths;

// import React from "react";
// // import { Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import LoginPage from "./Pages/LoginPage";
// import MainPage from "./Pages/MainPage";
// import MeetingMenuPage from "./Pages/MeetingMenuPage";
// import ChatsPage from "./Pages/ChatsPage"; // New import
// import SettingsPage from "./Pages/SettingsPage"; // New import
// import MeetingRoomPage from "./Pages/MeetingRoomPage";
// import { Routes, Route } from "react-router-dom";

// const Paths = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<LoginPage />} />
//       <Route path="/main" element={<MainPage />} />
//       <Route path="/meetings" element={<MeetingMenuPage />} />
//       <Route path="/chatsPage" element={<ChatsPage />} /> {/* New route */}
//       <Route path="/settingsPage" element={<SettingsPage />} />{" "}
//       <Route path="/meetingsroomPage" element={<MeetingRoomPage />} />
//       {/* New route */}
//     </Routes>
//   );
// };

// export default Paths;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import MainPage from "./Pages/MainPage";
import MeetingMenuPage from "./Pages/MeetingMenuPage";
import ChatsPage from "./Pages/ChatsPage"; // New import
import SettingsPage from "./Pages/SettingsPage"; // New import
import MeetingRoomPage from "./Pages/MeetingRoomPage";

const Paths = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/meetings" element={<MeetingMenuPage />} />
      <Route path="/chatsPage" element={<ChatsPage />} /> {/* New route */}
      <Route path="/settingsPage" element={<SettingsPage />} />
      <Route path="/meetingsroomPage" element={<MeetingRoomPage />} />
    </Routes>
  );
};

export default Paths;
