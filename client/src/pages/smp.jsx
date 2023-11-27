import DayCountContainer from '../components/dayCountContainer';
import FormContainer from '../components/formContainer';
import FloatingFormContainer from '../components/floatingForm';

import { useState, useEffect } from 'react';
import styled from 'styled-components';
import SmpMain from '../components/smp/smpMain';
import SmpContents from '../components/smp/smpContents';

import UserContainer from '../components/userContainer';
import FooterContainer from '../components/footerContainer';
import OptionContainer from '../components/smp/optionContainer';
import dummyData from '../dummyData.json';


export const SmpContainer = styled.section`
    background-color: var(--background-color);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SmpWrapper = styled.div`
 @media screen and (max-width: 818px) {
  width: 100%;
 }
`
function SmpPage() {
    const [isVisibleFloatingForm, setIsVisibleFloatingForm] = useState(false);
    const [isCheck, setIsCheck] = useState(false);
    const [todayUsers, setTodayUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [treatmentArea, setTreatmentArea] = useState('')
    const usersPerPage = 5;
    // console.log(todayUsers)
  
    useEffect(() => {
      const today = new Date().getDate();
      const filteredUsers = dummyData
        .filter(data => data.day < today)
        .flatMap(data => data.userData);
  
      setTodayUsers(filteredUsers);
    }, []); // 최초 렌더링 시에만 실행되도록 빈 배열 전달
  
    const handleAddUserList = () => {
      if (currentPage < todayUsers.length / 5) {
        setCurrentPage(prevPage => prevPage + 1);
      } else {
        alert('마지막 페이지입니다')
      }
    };

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 400) {
            setIsVisibleFloatingForm(true);
        } else {
            setIsVisibleFloatingForm(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = todayUsers.slice(indexOfFirstUser, indexOfLastUser);
    return (
        <>
            <SmpContainer>
              <SmpWrapper className='comp__wrapper'>
                <DayCountContainer/>
                <SmpMain />
                { 
                  isCheck ? 
                  <FormContainer 
                    todayUsers={todayUsers}
                    treatmentArea={treatmentArea}
                    /> :
                    <OptionContainer 
                    setIsCheck={setIsCheck} 
                    setTreatmentArea={setTreatmentArea}
                    /> 
                  }
                <SmpContents />
                <UserContainer 
                  currentUsers={currentUsers} 
                  handleAddUserList={handleAddUserList}
                />
                {isVisibleFloatingForm && (
                  <FloatingFormContainer
                    todayUsers={todayUsers}
                    treatmentArea={treatmentArea}
                  />
                )}
              </SmpWrapper>
            </SmpContainer> 
        </>
    );
}

export default SmpPage;
