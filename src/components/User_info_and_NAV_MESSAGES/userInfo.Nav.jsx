import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';
import defaultAccountImage from '../header/Assets/A.png'; // Renamed to avoid conflict

const UserRowContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #f9f9f9;
  border-bottom: 1px solid #ddd;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  margin-right: 10px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const UserPhoto = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const Username = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

const UserRow = ({ username = 'John Doe', userPhotoUrl = defaultAccountImage, onBack }) => {
  return (
    <UserRowContainer>
      <BackButton onClick={onBack}>
        <FaArrowLeft />
      </BackButton>
      <UserInfo>
        <UserPhoto src={userPhotoUrl} alt={`${username}'s profile`} />
        <Username>{username}</Username>
      </UserInfo>
    </UserRowContainer>
  );
};

export default UserRow;
