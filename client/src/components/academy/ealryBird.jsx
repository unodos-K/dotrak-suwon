import { useState } from "react";
import styled from 'styled-components';

export const EalryBirdContainer = styled.section`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const EalryBirdBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    .price {
        font-size: 1.4rem;
        text-decoration: line-through;
    }
    .discount {
        font-size: 2rem;
    }
`
// export const SuperEalryBirdBox = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     margin-bottom: 20px;

//     .price {
//         font-size: 1.4rem;
//         text-decoration: line-through;
//     }
//     .discount {
//         font-size: 2rem;
//     }
// `

function EalryBird () {
    const price = 4500000;
    return (
        <EalryBirdContainer>
            <EalryBirdBox>
                <p>12월 개강반: 12월 중순 시작</p>
                <p>1월 개강반: 1월 중순 시작</p>
                <h2>얼리버드 혜택! 수강료 5% 할인</h2>
                <p className="price">{price.toLocaleString()}원</p>
                <p className="discount">{(price - price * 0.05).toLocaleString()}원</p>
                
            </EalryBirdBox>
            <EalryBirdBox>
                <p>12월 개강반 11/12까지 등록시</p>
                <p>1월 개강반 12/13까지 등록시</p>
                <h2>슈퍼 얼리버드 혜택! 수강료 10% 할인</h2>
                <p className="price">{price.toLocaleString()}</p>
                <p className="discount">{(price - price * 0.05).toLocaleString()}원</p>
            </EalryBirdBox>
            {/* <h3>도트락 아카데미만의 장점</h3>
            <ul>
                <li>강사진이 뛰어나요</li>
                <li>소규모 업체랑 비교 불가!</li>
                <li>도트락만의 소수 정예 시스템</li>
                <li>수강생별 밀착 관리</li>
            </ul> */}
        </EalryBirdContainer>
    );
}

export default EalryBird ;