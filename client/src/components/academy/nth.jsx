import styled from 'styled-components';


export const NthGridContainer = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    align-items: center;
    background-color: #161616;
    padding: 30px 0;

    img {
        width:30%
    }
`
function Nth() {
    return (
        <NthGridContainer>
            <img src="/nth/21th.jpeg" alt="21th" />
            <img src="/nth/24th.jpeg" alt="24th" />
            <img src="/nth/25th.jpeg" alt="25th" />
            <img src="/nth/27th.jpeg" alt="27th" />
            <img src="/nth/28th.jpeg" alt="28th" />
            <img src="/nth/29th.jpeg" alt="29th" />
            <img src="/nth/29th.jpeg" alt="29th" />
            <img src="/nth/34th_2.jpeg" alt="34th_2" />
            <img src="/nth/34th.jpeg" alt="34th" />
            <img src="/nth/35th_2.jpeg" alt="35th_2" />
            <img src="/nth/35th.jpeg" alt="35th" />
            <img src="/nth/36th.jpeg" alt="36th" />
        </NthGridContainer> 
    );
}

export default Nth;