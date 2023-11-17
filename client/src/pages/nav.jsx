import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
  padding: 0;
  height: 100vh;
  border: 2px solid #ccc; /* 우측에 2px 두께의 실선 보더 추가 */
`;


export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;
  margin: 0 10px;
  padding: 10px;
  background-color: #eaeaea;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  text-align: center;

  &:hover {
    background-color: #ccc;
  }

  h2, h3, h4 {
    margin: 0;
  }

  h2 {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 5px;
  }

  h3 {
    font-size: 1rem;
    color: #007bff;
    margin-bottom: 5px;
  }

  h4 {
    font-size: 0.9rem;
    color: #28a745;
    margin-bottom: 5px;
  }
`;

function Nav() {
    return (
        <>
            <LinkContainer>
                <StyledLink to="smp">
                    <h3>대한민국 1등 두피문신 도트락 SMP </h3>
                    <h2>누구나 1회 무료 시술 이벤트</h2>
                </StyledLink>
                <StyledLink to="vsmp">
                    <h4>진짜 모근같은 완벽한 입체감! 도트락이 개발한 3세대 SMP 기술</h4>
                    <h2>VSMP 30% 할인 이벤트</h2>
                </StyledLink>
                <StyledLink to="academy">
                    <h3>나도 두피문신 전문가가 될 수 있을까?</h3>
                    <h2>도트락 아카데미 얼리버드 모집중!</h2>
                </StyledLink>
            </LinkContainer>
            <a href="/hello" target="_blank">Send GET request to /hello</a>

        </>

    );
}

export default Nav;