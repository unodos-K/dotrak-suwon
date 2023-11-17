import React from 'react';
import styled from 'styled-components';

const HeadContainer = styled.section`
  // height: 300px;
  align-items: center;
  font-size: 1.1rem;
  padding: 50px 0;
  background-color: var(--accent-color);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  margin-top: 55px;
  text-align: center;

  .strong {
    font-size: 8rem;
    font-weight: 900;
  }

  .discount {
    font-size: 1.4rem;
    font-weight: 700;
  }
`;

function headerContainer() {
    return (
        <HeadContainer id="head-container">
            <p className='discount'>선착순 30명 시술금액 30% 할인 이벤트</p>
            <p className="strong">VSMP</p>
            <p>대한민국 1등 SMP 도트락프리미엄 최신 삭발 SMP 기법</p>
        </HeadContainer>
    );
}

export default headerContainer;