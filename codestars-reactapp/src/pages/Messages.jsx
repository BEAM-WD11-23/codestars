import React, { useState } from "react";
import MessageCard from "../components/MessageCard/MessageCard";
import accountImage from "../components/header/Assets/A.png";
import accountImageB from "../components/header/Assets/B.png";
import accountImageC from "../components/header/Assets/C.png";
import SmHeader from "../components/header/SmHeader";
import Navigation from "../components/navigation/Navigation";

const Messages = () => {
  
  const [searchQuery, setSearchQuery] = useState("");
  
  const messages = [
    {
      id: 1,
      photo: accountImage,
      name: "John Doe",
      message: "Hello! How are you?",
      timestamp: "Sat",
    },
    {
      id: 2,
      photo: accountImageB,
      name: "Mario Rod",
      message: "Hello! How are you?",
      timestamp: "Wed",
    },
    {
      id: 3,
      photo: accountImageC,
      name: "Richard S.",
      message: "Are you here?",
      timestamp: "Tue",
    },
  ];
  
  const filteredMessages = messages.filter(
    (msg) =>
      msg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    msg.message.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div>
      <SmHeader></SmHeader>
      
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
          paddingTop: "2em"

        }}>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: "340px",
            height: "40px",
            padding: "8px",
            borderRadius: "10px",
            border: "1px solid #9c9c9c",
            fontFamily: "Arial, Helvetica, sans-serif",
          }}
        />
      </div>
      {filteredMessages.map((msg) => (
        <MessageCard
          key={msg.id}
          photo={msg.photo}
          name={msg.name}
          message={msg.message}
          timestamp={msg.timestamp}
        />
      ))}
    <Navigation/>
    </div>
  );
};

export default Messages;
