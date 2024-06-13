import React from 'react';
import styled from 'styled-components';

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

const MessageCard = ({ photo, name, message, timestamp }) => {
  return (
    <Card>
      <Avatar  alt={`${name}'s avatar`} />
      <Content>
        <Header>
          <Name>{name}</Name>
          <Timestamp>{timestamp}</Timestamp>
        </Header>
        <Message>{message}</Message>
      </Content>
    </Card>
  );
};

export default MessageCard;
