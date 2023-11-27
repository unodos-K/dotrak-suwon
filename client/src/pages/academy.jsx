import DayCountContainer from '../components/dayCountContainer';
import FormContainer from '../components/formContainer';
import Blank from '../components/blank';
import EalryBird from '../components/academy/ealryBird';
import { useState } from 'react';
import styled from 'styled-components';
import ShadowDotting from '../components/academy/shadowDotting';
import Nth from '../components/academy/nth';
import AcademyMain from '../components/academy/academyMain';

export const AcademyContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #161616;
`


function AcademyPage () {
    return ( 
        <>
            <DayCountContainer/>
            <AcademyContainer>
                <AcademyMain/>
                <ShadowDotting/>
                {/* <EalryBird/> */}
                <Nth />
            </AcademyContainer> 
            <FormContainer/>
        </>
    );
}

export default AcademyPage ;