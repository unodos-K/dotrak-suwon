// UserContainer.js
import styled from 'styled-components';

const UserContainerWrapper = styled.div`
  background-color: var(--accent-color);

  p {
    font-size: 1.6rem;
    font-weight: 800;
    margin: 12px 0;
  }
`;

const ItemContainer = styled.ul`

`

const LiContainer = styled.li`
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const UserInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
  color: #000;
  font-size: 1.2rem;
`;

const UserName = styled.span`
  margin-right: 10px;
  font-weight: bold;
`;

const UserContact = styled.span`

`;

const ApplicationTime = styled.span`
  text-align: center;
  color: #444444;
  font-size: 1.2rem;

  @media screen and (max-width: 818px){
    font-size: 1rem;
  }

  @media screen and (max-width: 400px){
    font-size: 0.8rem;
  }
`;

const UserContainerBtn = styled.button`
  font-size: 1.2rem;
  margin-bottom: 60px;
  color: #fff;

  &:hover {
    background-color: #e4ff00;
  }
`;

const UserContainer = ({ handleAddUserList, currentUsers }) => {
  return (
    <UserContainerWrapper className='comp__wrapper'>
      <ItemContainer className='comp__wrapper'>
        {currentUsers.map((userData, index) => (
          <LiContainer key={index}>
            <UserInfoContainer>
              <UserName>{userData.name} |</UserName>
              <UserContact>{userData.contact}</UserContact>
            </UserInfoContainer>
            <ApplicationTime>{`${userData.time}에 무료 시술 신청 완료!!`}</ApplicationTime>
          </LiContainer>
        ))}
      </ItemContainer>
      <UserContainerBtn onClick={handleAddUserList}>신청자 더 보기</UserContainerBtn>
    </UserContainerWrapper>
  );
};

export default UserContainer;
