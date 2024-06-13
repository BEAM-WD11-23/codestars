import React, { useEffect, useState } from "react";
import MessageCard from "../../components/MessageCard/MessageCard";
// import accountImage from "../../components/header/Assets/A.png";
// import accountImageB from "../../components/header/Assets/B.png";
// import accountImageC from "../../components/header/Assets/C.png";
import SmHeader from "../../components/header/SmHeader";
import { getAllMessages } from "../../services/messages.service";


const Messages = () => {
  const {messages,isPending,errors} = getAllMessages()
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMessages, setFilteredMessages] = useState(null)

  
  useEffect(()=>{
    if (messages) {
      const result = messages.filter(
        (msg) =>
          (msg.firstname.toLowerCase()+ msg.lastname.toLowerCase()).includes(searchQuery.toLowerCase()) ||
        msg.message.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredMessages(result)
    }
  },[messages, filteredMessages])
  
  
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
      {filteredMessages && filteredMessages.map((msg) => (
        <MessageCard
          key={msg.id}
          // photo={msg.photo}
          name={msg.firstname + ' ' + msg.lastname}
          message={msg.message}
          timestamp={msg.timestamp}
        />
      ))}
    </div>
  );
};

export default Messages;
