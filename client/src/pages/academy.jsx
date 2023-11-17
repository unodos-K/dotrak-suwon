import DayCountContainer from '../components/common/dayCountContainer';
import FormContainer from '../components/common/formContainer';
import Blank from '../components/common/blank';
import EalryBird from '../components/academy/ealryBird';
import { useState } from 'react';

// 매월 첫 주 개강
// 평일반: 매주 수요일 / 주말반: 매주 토요일
// 12월 (2기), 1월 (3기)
// 

// 3주 전까지 10% 할인
// 2주 전까지 5% 할인

// 피드
// 얼리버드 할인 요소만 해서 빠르게 모집하기


function AcademyPage () {
    const isVisibleForm = 100;
    return ( 
        <>
            <DayCountContainer/>
            <EalryBird/>
            <Blank />
            <FormContainer isVisibleForm={isVisibleForm}/>
        </> 
    );
}

export default AcademyPage ;