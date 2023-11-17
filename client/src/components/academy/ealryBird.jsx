import { useState } from "react";
import styled from 'styled-components';

export const EalryBirdContainer = styled.div`
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
    const [price, setPrice] = useState(4500000);
    return (
        <EalryBirdContainer>
            <h3>대한민국 1등 SMP 도트락 수원직영점 두피문신 아카데미</h3>
            <h3>올클리어스쿨 12월, 1월 개강반 동시 모집! (선착순 3명)</h3>
            <EalryBirdBox>
                <span>12월 개강반 11/22까지 등록시</span>
                <span>1월 개강반 12/20까지 등록시</span>
                <h2>얼리버드 혜택! 수강료 5% 할인</h2>
                <span className="price">{price.toLocaleString()}원</span>
                <span className="discount">{(price - price * 0.05).toLocaleString()}원</span>
                
            </EalryBirdBox>
            <EalryBirdBox>
                <span>12월 개강반 11/12까지 등록시</span>
                <span>1월 개강반 12/13까지 등록시</span>
                <h2>슈퍼 얼리버드 혜택! 수강료 10% 할인</h2>
                <span className="price">{price.toLocaleString()}</span>
                <span className="discount">{(price - price * 0.05).toLocaleString()}원</span>
            </EalryBirdBox>
            <h3>도트락 아카데미만의 장점</h3>
            <ul>
                <li>강사진이 뛰어나요</li>
                <li>소규모 업체랑 비교 불가!</li>
                <li>도트락만의 소수 정예 시스템</li>
                <li>수강생별 밀착 관리</li>
            </ul>
        </EalryBirdContainer>
    );
}

export default EalryBird ;