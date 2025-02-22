// src/App.js
import React from "react";
import { app, auth } from "./firebase"; // Import both app and auth
import { BrowserRouter as Router } from "react-router-dom";
import Paths from "./Paths"; // Import Paths.js for routing

function App() {
  console.log("Firebase initialized:", app); // Log the Firebase app initialization

  return (
    <Router>
      <Paths /> {/* Use the Paths component */}
    </Router>
  );
}

export default App;
