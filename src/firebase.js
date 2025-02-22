import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Firebase Authentication
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  doc,
  updateDoc,
} from "firebase/firestore"; // Firebase Firestore

// Firebase configuration using environment variables
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth after initializing Firebase app
const db = getFirestore(app); // Firebase Firestore
const auth = getAuth(app); // Firebase Authentication

// Function to create a new meeting
const createMeeting = async (meetingData) => {
  try {
    // Check if the user is authenticated
    const user = auth.currentUser;
    if (!user) {
      throw new Error("User not authenticated");
    }

    // If authenticated, use the user ID as the hostId
    const docRef = await addDoc(collection(db, "meetings"), {
      title: meetingData.title, // Meeting title
      hostId: user.uid, // Host ID (use auth.currentUser.uid if authenticated)
      participants: meetingData.participants, // Array of user IDs
      startTime: serverTimestamp(), // Automatically set the start time
      endTime: meetingData.endTime || serverTimestamp(), // Optional: set the end time
    });

    console.log("Meeting created with ID: ", docRef.id); // Log the meeting document ID
  } catch (error) {
    console.error("Error adding document: ", error.message); // Improved error handling
  }
};

// Example: Function to update meeting data
const updateMeetingParticipants = async (meetingId, newParticipants) => {
  try {
    const meetingRef = doc(db, "meetings", meetingId);
    await updateDoc(meetingRef, {
      participants: newParticipants,
    });

    console.log("Meeting participants updated.");
  } catch (error) {
    console.error("Error updating meeting participants: ", error.message);
  }
};

export { app, auth, db, createMeeting, updateMeetingParticipants }; // Export the necessary functions and objects
