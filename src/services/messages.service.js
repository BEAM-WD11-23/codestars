
import { useContext, useEffect } from "react";
import { MESSAGES_ENDPOINT, USERS_ENDPOINT } from "../config/constants";
import useFetchMultiple from "../hooks/useFetchMultiple";
import { UserContext } from "../contexts/user.context";

export function useAllMessages(){
   const { loggedinUser } = useContext(UserContext)
   useEffect(() => console.log(":::useallMessages executed:::"),[])
   
   let fullMessages = null
   const {isPending, combinedData, errors, refresh } = useFetchMultiple([MESSAGES_ENDPOINT, USERS_ENDPOINT])

   
   if(combinedData){
      // Filter only messages that belong to the loggedin user. (Attention: loggedin user can be the sender or receiver)
      const msgsBelonginToAllUsers = combinedData[0]
      const msgsBelongingToLoggedinUser = msgsBelonginToAllUsers.filter(msg => msg.senderUid === loggedinUser.uid || msg.recepientUid === loggedinUser.uid)
      // this map is combining/extending existing message object (as a base) with name and profile pic from sender and receiver
      const result = msgsBelongingToLoggedinUser.map(message => {
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

export function useConversations(){
   const { loggedinUser } = useContext(UserContext)
   const {isPending, messages, errors, refresh} = useAllMessages()

   let conversations = null;
   if(messages){
      // Before transforming mixed-messages to conversations we sort them chronologically first using sort() array method.
      messages.sort((msg1, msg2) => {
         if(msg1.timestamp < msg2.timestamp) return 1
         else if(msg1.timestamp > msg2.timestamp) return -1
         else return 0
      })
      // Then we start transformation from a mixed array to a tructured object where each key represents
      // a unique conversation with another user
      conversations = messages.reduce((acc, currentMsg) => {
         const idOfOtherUser = (currentMsg.senderUid !== loggedinUser.uid) ? currentMsg.senderUid : currentMsg.recepientUid;
         // STEP 1
         //Check if user exists in the accumulator if "NO" create it and initiate it with empty array
         if(!acc[idOfOtherUser]){
            // creating the user and an empty array which represents the conversation of this user with loggedin user
            acc[idOfOtherUser] = []
         }
         //STEP 2
         // Start pushing mesages to it
         acc[idOfOtherUser].push(currentMsg)
         
         return acc;
      }, {})
   }

   return {isPending, conversations, errors, refresh}
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
//    "password": "password 1",
//    "friends": [],
//    "uid": "1"
//  }