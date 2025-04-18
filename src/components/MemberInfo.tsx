import React from "react";
import styled from "styled-components";

interface MemberInfoProps {
  isLoggedIn: boolean;
  userInfo: {
    name: string;
    imageUrl: string;
  } | null;
  onLogin: () => void;
  onLogout: () => void;
}

const MemberInfo: React.FC<MemberInfoProps> = ({
  isLoggedIn,
  userInfo,
  onLogin,
  onLogout,
}) => {
  return (
    <Container>
      {isLoggedIn ? (
        <>
          <MemberImg src={userInfo?.imageUrl}></MemberImg>
          <MemberName>{userInfo?.name}님</MemberName>
          <Button onClick={onLogout}>로그아웃</Button>
        </>
      ) : (
        <Button onClick={onLogin}>로그인</Button>
      )}
    </Container>
  );
};

export default MemberInfo;

const Container = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const MemberImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
`;

const MemberName = styled.span`
  font-size: 1rem;
  font-weight: bold;
`;

const Button = styled.button`
  background: ${({ theme }) => theme.colors.secondary};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    background: #024c27;
  }
`;
