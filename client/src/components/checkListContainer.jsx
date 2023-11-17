// ChecklistContainer.js
import React from 'react';
import styled from 'styled-components';

const ChecklistContainerWrapper = styled.section`
    text-align: center;
    background-color: #f5f5f5;
    padding: 10px 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: left;

    > h2,
    > h4 {
        color: #e84393;
    }

    > ul {
        list-style: none;
        padding: 0;
        background-color: #fff;
        border-radius: 15px;
        padding: 12px 16px;
    }

    > ul > li {
        margin-bottom: 5px;
        display: flex;
        align-items: center;
        padding: 5px;
        border-radius: 5px;
        width: 100%;
    }

    > ul > li > input[type="checkbox"] {
        margin-right: 8px;
        transform: scale(1.5);
    }

    > ul > li > label {
        font-size: 0.9rem;
    }

    > ul > li > input[type="checkbox"]:checked + label {
        color: #e84393;
        font-weight: bold;
    }
`;

const ChecklistContainer = () => {
    return (
        <ChecklistContainerWrapper id="checklist-container">
            <h1>VSMP 대상자 자가 체크리스트</h1>
            <h4>아래 리스트 중 3가지 이상 해당된다면, VSMP 시술이 필요합니다!</h4>
            <ul>
                <li>
                    <input type="checkbox" name="checklist" id="check1" />
                    <label htmlFor="check1">일상생활에서 부족한 머리숱이 항상 신경쓰인다.</label>
                </li>
                <li>
                    <input type="checkbox" name="checklist" id="check2" />
                    <label htmlFor="check2">탈모에 좋다는 샴푸, 영양제를 사용해봤으나 효과를 보지 못했다.</label>
                </li>
                <li>
                    <input type="checkbox" name="checklist" id="check3" />
                    <label htmlFor="check3">모발이식을 고민했으나 비용과 생착 실패에 대한 두려움이 있다.</label>
                </li>
                <li>
                    <input type="checkbox" name="checklist" id="check4" />
                    <label htmlFor="check4">SMP 시술을 알아봤으나 어떤 업체로 가야할지 고민하고 있다.</label>
                </li>
                <li>
                    <input type="checkbox" name="checklist" id="check5" />
                    <label htmlFor="check5">평생 탈모 고민이 없었으면 좋겠다.</label>
                </li>
            </ul>
        </ChecklistContainerWrapper>
    );
};

export default ChecklistContainer;
