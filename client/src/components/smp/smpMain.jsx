import styled from 'styled-components';

export const SmpMainContainer = styled.div`
    margin-top: 60px;
    img {
        max-width: 100%;
    }
`

function AcademyMain() {
    return ( 
        <>
            <SmpMainContainer className='comp__wrapper'>
                <img src="smp_main.png" alt="메인사진" />
            </SmpMainContainer>
        </>
    );
}

export default AcademyMain;
