import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import Layout from "../Components/Layout";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const MainPage = () => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        const userDocRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          setUsername(userDoc.data().username);
        }
      } else {
        setUser(null);
        setUsername("");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  const handleStartMeeting = () => {
    navigate("/meetings"); // Navigate to the /meetings route
  };

  return (
    <Layout>
      <div className="main-content">
        <h1>Online Meeting Platform for Everyone</h1>
        <p className="description">
          Connect with people, collaborate, and communicate effortlessly, no
          matter where you are. Start your meetings instantly, host with ease,
          and join with just a click.
        </p>
        <button
          className="start-meeting-btn"
          onClick={handleStartMeeting} // Use handleStartMeeting function
        >
          Start a Meeting
        </button>
      </div>

      <style>
        {`
          .main-content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 20px;
            text-align: center;
            margin-top: 10px; /* Adjust to the AppBar height */
            /* Remove min-height and overflow settings to prevent extra scrolling */
          }

          h1 {
            font-size: 2.5rem;
            color: #3f72af;
            margin-bottom: 20px;
            font-family: 'Arial', sans-serif;
            font-weight: bold;
          }

          .description {
            font-size: 1.2rem;
            color: #444;
            max-width: 600px;
            margin-bottom: 30px;
            line-height: 1.5;
          }

          .start-meeting-btn {
            background: linear-gradient(45deg, #2196f3, #4caf50);
            color: white;
            font-size: 1.2rem;
            padding: 12px 30px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .start-meeting-btn:hover {
            background-color: #2d4b7f;
          }

          .start-meeting-btn:active {
            background-color: #1f3a5e;
          }
        `}
      </style>
    </Layout>
  );
};

export default MainPage;
