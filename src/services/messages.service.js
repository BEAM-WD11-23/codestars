
import { useEffect } from "react";
import { MESSAGES_ENDPOINT, USERS_ENDPOINT } from "../constants/constants";
import useFetchMultiple from "../hooks/useFetchMultiple";

export function useAllMessages(){
   useEffect(() => console.log(":::useallMessages executed:::"),[])
   
   let fullMessages = null
   const {isPending, combinedData, errors, refresh } = useFetchMultiple([MESSAGES_ENDPOINT, USERS_ENDPOINT])

   if(combinedData){
      // this map is combining/extending existing message object (as a base) with name and profile pic from sender and receiver
      const result = combinedData[0].map(message => {
         const sender = combinedData[1].find(user => user.uid === message.senderUid)
         const receiver = combinedData[1].find(user => user.uid === message.recepientUid)
         const fullMessage = {
            ...message, 
            sender: sender.firstname+" "+sender.lastname,
            receiver:`${receiver.firstname} ${receiver.lastname}`,
            senderPic:sender.profilePic,
            receiverPic:receiver.profilePic,
         }
         return fullMessage;
      })

      fullMessages = result;
   }

   return {isPending, messages:fullMessages, errors, refresh}
}

// {
//    "senderUid": "1",
//    "recepientUid": "2",
//    "message": "Hey darling, are you coming?",
//    "images": "[]",
//    "timestamp": 1718284289,
//    "mid": "1"
//  }


// {
//    "createdAt": 1718280790,
//    "firstname": "firstname 1",
//    "lastname": "lastname 1",
//    "profilePic": "profilePic 1",
//    "age": 35,
   // "password": "password 1",
   // "friends": [],
//    "uid": "1"
//  }