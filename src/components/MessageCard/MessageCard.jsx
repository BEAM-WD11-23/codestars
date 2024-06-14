import React from 'react';
import styled from 'styled-components';
import { LOGGEDIN_USER_ID } from '../../constants/constants';

const Card = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 10px;
  margin: 10px 4px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: Arial, Helvetica, sans-serif;
`;

const Avatar = styled.img`
  object-fit: cover;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
`;

const Content = styled.div`
  flex-grow: 1;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

const Name = styled.span`
  font-weight: bold;
`;

const Timestamp = styled.span`
  color: #999;
  font-size: 0.8em;
`;

const Message = styled.p`
  margin: 0;
  color: #333;
  font-weight: bold;
`;

const MessageCard = ({ conversation }) => {
  const [idOfOtherUser, chatsArray]= conversation;
  const latestChat = chatsArray[0]
  const otherUserName = (latestChat.senderUid === LOGGEDIN_USER_ID) ? latestChat.receiver : latestChat.sender
  const otherUserPic = (latestChat.senderUid === LOGGEDIN_USER_ID) ? latestChat.receiverPic : latestChat.senderPic
  
  console.log("idOfOtherUser: ", idOfOtherUser);
  console.log("latestChat: ", latestChat);
  console.log("otherUserName: ", otherUserName);
  console.log("otherUserPic: ", otherUserPic);
  return (
    <Card>
      <Avatar src={otherUserPic} alt={`${otherUserName}'s avatar`} />
      <Content>
        <Header>
          <Name>{otherUserName}</Name>
          <Timestamp>{new Date(latestChat.timestamp).getHours()+":"+new Date(latestChat.timestamp).getMinutes()}</Timestamp>
        </Header>
        <Message>{latestChat.message}</Message>
      </Content>
    </Card>
  );
};

export default MessageCard;