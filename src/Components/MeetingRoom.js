import React, { useEffect, useRef, useState } from "react";
import { Button } from "@mui/material";
import { db } from "../firebase";
import { doc, setDoc, onSnapshot } from "firebase/firestore";
import Peer from "simple-peer";

const MeetingRoom = ({ meetingId, onClose }) => {
  const [stream, setStream] = useState(null);
  const [peer, setPeer] = useState(null);
  const [isHost, setIsHost] = useState(false);

  const userVideo = useRef();
  const remoteVideo = useRef();

  useEffect(() => {
    const startStream = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });

        setStream(mediaStream);
        userVideo.current.srcObject = mediaStream;

        setupWebRTC(mediaStream);
      } catch (error) {
        console.error("Error accessing media devices:", error);
      }
    };

    startStream();

    // Cleanup media stream when the component is unmounted
    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const setupWebRTC = async (stream) => {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: stream,
    });

    peer.on("signal", async (data) => {
      await setDoc(doc(db, "meetings", meetingId), {
        offer: JSON.stringify(data),
      });
      setIsHost(true);
    });

    peer.on("stream", (remoteStream) => {
      remoteVideo.current.srcObject = remoteStream;
    });

    setPeer(peer);

    const unsub = onSnapshot(doc(db, "meetings", meetingId), (docSnap) => {
      if (docSnap.exists() && docSnap.data().answer) {
        peer.signal(JSON.parse(docSnap.data().answer));
      }
    });

    return () => unsub();
  };

  const joinMeeting = async () => {
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream,
    });

    peer.on("signal", async (data) => {
      await setDoc(
        doc(db, "meetings", meetingId),
        { answer: JSON.stringify(data) },
        { merge: true }
      );
    });

    peer.on("stream", (remoteStream) => {
      remoteVideo.current.srcObject = remoteStream;
    });

    setPeer(peer);

    const unsub = onSnapshot(doc(db, "meetings", meetingId), (docSnap) => {
      if (docSnap.exists() && docSnap.data().offer) {
        peer.signal(JSON.parse(docSnap.data().offer));
      }
    });

    return () => unsub();
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Meeting Room - {meetingId}</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <video ref={userVideo} autoPlay playsInline muted width="300" />
        <video ref={remoteVideo} autoPlay playsInline width="300" />
      </div>
      <div style={{ marginTop: "20px" }}>
        {peer ? (
          <>
            <Button variant="contained" color="secondary" onClick={onClose}>
              Leave Meeting
            </Button>
            {isHost && (
              <Button
                variant="contained"
                color="error"
                onClick={() => console.log("End meeting")}
              >
                End Meeting
              </Button>
            )}
          </>
        ) : (
          <Button variant="contained" onClick={joinMeeting}>
            Join Meeting
          </Button>
        )}
      </div>
    </div>
  );
};

export default MeetingRoom;
