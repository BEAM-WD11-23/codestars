import React from 'react';
import styled from 'styled-components';
import UserInfo from '../../components/User_info_and_NAV_MESSAGES/userInfo.Nav';
import MessageBubbleComponent from '../../components/MessageBubble/MessageBubble';
import Form_Messages from '../../components/Form_Messages/Form_Messages';

const MessageBubbleWrapper = styled.div`
  overflow-y: auto;
`;

const ChatsPageWrapper = styled.div`
    height: 100vh;
    /* background-color: red; */
    display: flex;
    flex-direction:column;
`;

const ChatsPage = () => {
  return (
    <ChatsPageWrapper>
      {/* User Info */}
      <UserInfo />

      {/* Scrollable wrapper for Message Bubbles */}
      <MessageBubbleWrapper>
        {/* Message Bubble Component */}
        <MessageBubbleComponent />
      </MessageBubbleWrapper>

      {/* Form Messages */}
      <Form_Messages />
    </ChatsPageWrapper>
  );
};

export default ChatsPage;
