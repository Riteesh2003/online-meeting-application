# Online Meeting Application

## 🚀 Overview

The **Online Meeting Application** is a web-based platform designed for seamless virtual communication. Built with **React.js** and **Firebase**, it enables users to effortlessly schedule, join, and manage online meetings, ensuring a smooth and interactive experience.

## 🔥 Features

- 🔐 **User Authentication**: Secure login and signup with Firebase Authentication.
- 📅 **Meeting Management**: Create, join, and schedule meetings with ease.
- 💬 **Real-Time Communication**: Integrated chat and user profile management.
- 🎥 **Video & Audio Support**: High-quality video and audio conferencing.
- 📱 **Responsive UI**: Optimized for a seamless experience across devices.
- 🔄 **State Management**: Efficient state handling using React Hooks.
- 🚀 **Fast & Scalable**: Built with Firebase for real-time updates and performance.

## 🛠️ Tech Stack

### **Frontend:**

- React.js
- HTML, CSS, JavaScript
- React Router (for navigation)
- React Hooks (for state management)

### **Backend:**

- **Firebase Authentication** (User Management)
- **Firestore** (Database for real-time data storage)

## 🔥 Firebase Integration

The project uses **Firebase** for backend functionalities. Below are the Firebase services used:

- **Firebase Authentication**: Handles user authentication (login, signup, logout).
- **Firestore Database**: Stores meeting details, user profiles, and chat messages in real time.

### **Setting Up Firebase**

1. Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
2. Click on **Project Settings** → **General** → Add an **App** (Choose Web App).
3. Copy the **Firebase Config Object** and add it to your React project in a `.env` file:

   ```env
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   ```
