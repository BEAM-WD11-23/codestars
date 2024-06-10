import React, { useState } from 'react';
import styled from 'styled-components';
import { IoMdAttach, IoMdSend } from 'react-icons/io';

const FormContainer = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
`;

const FileInputWrapper = styled.label`
  flex: 0 0 1em;
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const TextInputWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

const TextInput = styled.textarea`
  margin-right: 10px;
  border-radius: 15px;
  border: 2px solid black;
  width: 100%;
  color: green;
  padding: 5px;
  padding-left: 10px;
  resize: vertical;
  height: ${props => props.height}px; 
  overflow-y: auto; 
`;

const IconButton = styled.button`
  padding: 5px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const BoldIcon = styled(IoMdAttach)`
  font-size: 30px;
  stroke-width: 2px; 
`;

const BlueIcon = styled(IoMdSend)`
  color: #0088ff;
  transform: rotate(-45deg);
  font-size: 30px;
  margin-top: -8px;
`;

const Form_Messages = () => {
  const [inputHeight, setInputHeight] = useState(38); 
  const handleChange = (e) => {
    setInputHeight(e.target.scrollHeight);

    if (e.target.value === '') {
      setInputHeight(38); 
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FileInputWrapper>
        <HiddenFileInput type="file" />
        <IconButton as="span">
          <BoldIcon />
        </IconButton>
      </FileInputWrapper>
      <TextInputWrapper>
        <TextInput
          placeholder="Write a message..."
          onChange={handleChange}
          height={inputHeight}
        />
        <IconButton type="submit">
          <BlueIcon />
        </IconButton>
      </TextInputWrapper>
    </FormContainer>
  );
};

export default Form_Messages;
