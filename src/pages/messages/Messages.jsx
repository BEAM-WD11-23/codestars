import React, { useEffect, useState } from "react";
import MessageCard from "../../components/MessageCard/MessageCard";
// import accountImage from "../../components/header/Assets/A.png";
// import accountImageB from "../../components/header/Assets/B.png";
// import accountImageC from "../../components/header/Assets/C.png";
import SmHeader from "../../components/header/SmHeader";
import { useConversations } from "../../services/messages.service";
import Spinner from "../../components/spinner/Spinner";
import PostError from "../../components/postError/PostError";


const Messages = () => {
  const { isPending, conversations, errors, refresh } = useConversations()
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMessages, setFilteredMessages] = useState(null)

  // Object.entries(conversations) => converts object into an array

  // useEffect(()=>{
  //   if (conversations) {
  //     const result = messages.filter(
  //       (msg) =>
  //         (msg.firstname.toLowerCase()+ msg.lastname.toLowerCase()).includes(searchQuery.toLowerCase()) ||
  //       msg.message.toLowerCase().includes(searchQuery.toLowerCase())
  //     );
  //     setFilteredMessages(result)
  //   }
  // },[conversations, filteredMessages])
  
  
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
      {isPending ? <Spinner /> :
      conversations ? (Object.entries(conversations)).map((conversation, index) => (
        <MessageCard
          key={index}
          conversation={conversation}
        />
      )) : errors && <PostError />}
    </div>
  );
};

export default Messages;

// {
//    "mid": "1"
//    "sender": "fname lname"
//    "receiver": "fname lname"
//    "senderPic": "path"
//    "receiverPic": "path"
//    "senderUid": "1",
//    "recepientUid": "2",
//    "message": "Hey darling, are you coming?",
//    "images": "[]",
//    "timestamp": 1718284289,
//  }