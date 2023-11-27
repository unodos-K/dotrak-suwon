import styled from 'styled-components';

export const AcademyMainContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
    color: #eee;

    p {
        color: #fff;
        font-size: 1.2em;
        font-weight: 600;
        text-align: center;
    }
`

function AcademyMain() {
    return ( 
        <>
            <AcademyMainContainer>
                <p>메인 문구가 위치할 자리입니다</p>
            </AcademyMainContainer>
        </>
    );
}

export default AcademyMain;
