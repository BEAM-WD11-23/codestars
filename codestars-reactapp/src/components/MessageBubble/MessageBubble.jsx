import React from 'react';
import styled from 'styled-components';

const Bubble = styled.div`
  max-width: 60%;
  padding: 10px;
  border-radius: 10px;
  margin: 10px;
  color: white;
  background-color: ${({ isRight }) => (isRight ? '#6eae8c' : '#2196f3')};
  margin-left: ${({ isRight }) => (isRight ? 'auto' : 'none')};
  margin-right: ${({ isRight }) => (isRight ? 'none' : 'auto')};

  ${({ disabled }) =>
    disabled &&
    `
      background-color: #d3d3d3;
      color: #a9a9a9;
      pointer-events: none;
    `}
`;

const MessageBubble = ({ text, isRight, disabled }) => {
  return <Bubble isRight={isRight} disabled={disabled}>{text}</Bubble>;
};

const MessageBubbleComponent = () => {
  return (
    <div>
      <MessageBubble text="This is a short message" isRight={false} />
      <MessageBubble text="This is a short message" isRight={true} />
      <MessageBubble
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada ex eget nulla dictum, nec varius nulla accumsan. "
        isRight={false}
      />
      <MessageBubble
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada ex eget nulla dictum, nec varius nulla accumsan. Fusce rutrum lorem in arcu bibendum, sed vestibulum risus volutpat."
        isRight={true}
      />
      <MessageBubble text="This is a disabled message" isRight={false} disabled={true} />
      <MessageBubble text="This is a disabled message" isRight={true} disabled={true} />
    </div>
  );
};

export default MessageBubbleComponent;
