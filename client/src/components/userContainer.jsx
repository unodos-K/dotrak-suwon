// UserContainer.js
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import dummyData from '../dummyData.json';

const UserContainerWrapper = styled.section`
    ul {
        width: 100%;
        list-style: none;
    }

    ul > li {
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        margin-bottom: 15px;
        padding: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .user-info {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-bottom: 12px;
    }
    
    span {
      text-align: center;
    }

    .user-info > span {
        font-size: 1.2rem;
        margin-right: 10px;
        font-weight: bold;
    }
`;

const UserContainer = () => {
  const [todayUsers, setTodayUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;
  // console.log(todayUsers)

  useEffect(() => {
    const today = new Date().getDate();
    const filteredUsers = dummyData
      .filter(data => data.day <= today)
      .flatMap(data => data.userData);

    setTodayUsers(filteredUsers);
  }, []); // 최초 렌더링 시에만 실행되도록 빈 배열 전달

  const handleClick = () => {
    if (currentPage < todayUsers.length / 5) {
      setCurrentPage(prevPage => prevPage + 1);
    } else {
      alert('마지막 페이지입니다')
    }
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = todayUsers.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <UserContainerWrapper id="user-container">
      <h1>이벤트 응모 현황</h1>
      <ul>
        {currentUsers.map((userData, index) => (
          <li key={index}>
            <div className="user-info">
              <span className="user-name">{userData.name}</span>
              <span className="user-contact">{userData.contact}</span>
            </div>
            <span className="application-time">{`${userData.time}에 무료 상담 신청 완료!!`}</span>
          </li>
        ))}
      </ul>
      <button onClick={handleClick}>더 보기</button>
    </UserContainerWrapper>
  );
};

export default UserContainer;