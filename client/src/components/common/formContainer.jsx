// FormContainer.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {showAlert, handleAgreeDetails} from '../../modals/modal';

export const FormContainerWrapper = styled.section`
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7); /* 어두운 배경색 및 투명도 조절 */
    padding: 10px;
    color: #fff; /* 텍스트 색상을 흰색으로 설정 */
    z-index: 999; /* 다른 요소들보다 위에 표시되도록 설정 */
    margin-bottom: 20px;
    &.visible {
        display: block;
        opacity: 1;
        transition: opacity 0.5s ease-in-out;
    }
    &.hidden {
        opacity: 0;
        display: none;
    }
`;
    
export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  width: 100%;
`;

export const FormInputContainer = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`;

export const FormInputLabel = styled.label`
    text-align: justify;
    font-size: 0.8rem;
`;

export const FormInput = styled.input`
    width: ${(props) => (props.type === 'tel' ? '20%' : '80%')};
    flex-grow: 1;
    max-width: 80%;
`;

export const FormContactWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;

    > span {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2rem;
        padding: 5px;
    }
`

export const FormSelect = styled.select`
    width: 20%;
    flex-grow: 1;
`;

export const FormOption = styled.option``;

export const FormAgreeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 0.7rem;
    width: 80%;

`;

export const FormAgreeCheckbox = styled.input`
    margin-right: 10px;
`

export const FormAgreeContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 12px;

    > div {
        text-align: left;
    }
`;

export const FormAgreeLabel = styled.label`
    font-size: 0.7rem;
`

export const FormAgreeAnchor = styled.a`
    align-self: flex-start;
    color: var(--secondary-color);
`;

export const FormSubmitButton = styled.button`
    background-color: #297fb8;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    width: 80%;

    &:hover {
        background-color: #e4ff00;
        color: #444444;
    }
`;


const FormContainer = ({isVisibleForm}) => {
    // const isVisible = true;
    const [isVisible, setIsVisible] = useState(true);
    const [name, setName] = useState('');
    const [contact, setContact] = useState({ head: '010', body: '', tail: '' })
    const [agree, setAgree] = useState(false);
    const handleFormSubmit = async () => {
        // 1. 이름을 입력하지 않은 경우
        if (!name) {
            showAlert('이름 입력 오류', '이름을 입력하세요.', 'error');
            return;
        }

        // 2. 이름이 한글이 아닌 경우
        const nameRegex = /^[가-힣]+$/;
        if (!nameRegex.test(name)) {
            showAlert('이름 입력 오류', '이름을 확인하세요.', 'error');
            return;
        }

        // 3. 두번째와 세번째 input이 4자리 숫자가 아닌 경우
        const contactRegex = /^\d{4}$/;
        if (!contactRegex.test(contact.body) || !contactRegex.test(contact.tail)) {
            showAlert('연락처 입력 오류', '연락처를 확인하세요.', 'error');
            return;
        }

        // 4. agree 체크하지 않은 경우
        if (!agree) {
            showAlert('동의 오류', '이벤트 참여를 위해 개인정보 수집에 동의해 주세요.', 'error');
            return;
        }

        const formData = {
            name,
            contact: `${contact.head}${contact.body}${contact.tail}`,
        };

        try {
            showAlert('이벤트 응모 완료', '이벤트에 응모되었습니다.', 'success');
            const response = await axios.post('http://localhost:3002/submitForm', formData);
            console.log(response.data, formData); // 서버에서 보낸 응답 확인
        } catch (error) {
            console.error('데이터 전송 중 오류 발생:', error);
        }
    };


    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY || document.documentElement.scrollTop;
            setIsVisible(scrollPosition > isVisibleForm);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const containerClassName = isVisible ? 'visible' : 'hidden';

    return (
        <FormContainerWrapper className={containerClassName}>
            <h3 className="form_title">VSMP 30% 할인 이벤트에 응모하기</h3>
            <h5>할인 혜택 대상자가 25명 남았습니다.</h5>
            <FormWrapper id="form">
                <FormInputContainer>
                    <FormInputLabel htmlFor="form_input__name">이름</FormInputLabel>
                    <FormInput
                        id="form_input__name"
                        type="text"
                        placeholder="이름을 정확히 입력해 주세요."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </FormInputContainer>
                <FormInputContainer>
                    <FormInputLabel htmlFor="form_input__contact">연락처</FormInputLabel>
                    <FormContactWrapper>
                        <FormSelect
                            id="form_input__contactHead"
                            value={contact.head}
                            onChange={(e) => setContact({ ...contact, head: e.target.value })}
                        >
                            <FormOption value="010">010</FormOption>
                        </FormSelect>
                        <span>-</span>
                        <FormInput
                            id="form_input__contactBody"
                            type="tel"
                            placeholder="4자리"
                            value={contact.body}
                            onChange={(e) => setContact({ ...contact, body: e.target.value })}
                        />
                        <span>-</span>
                        <FormInput
                            id="form_input__contact3"
                            type="tel"
                            placeholder="4자리"
                            value={contact.tail}
                            onChange={(e) => setContact({ ...contact, tail: e.target.value })}
                        />
                    </FormContactWrapper>
                </FormInputContainer>
                <FormAgreeContainer>
                    <FormAgreeContent>
                        <FormAgreeCheckbox
                            type="checkbox"
                            name="agree"
                            id="form_agree__checkbox"
                            checked={agree}
                            onChange={() => setAgree(!agree)} // 체크 여부에 따라 반전
                        />
                        <div>
                            <FormAgreeLabel htmlFor="form_agree__checkbox" id="form_agree__label">
                                개인정보 수집 및 이용에 관한 내용을 확인하고 동의합니다. <br />
                            </FormAgreeLabel>
                            <FormAgreeAnchor onClick={handleAgreeDetails}>[자세히 보기]</FormAgreeAnchor>
                        </div>
                    </FormAgreeContent>
                </FormAgreeContainer>
                <FormSubmitButton type="button" id="form_submitBtn" onClick={handleFormSubmit}>이벤트 당첨 확인</FormSubmitButton>
            </FormWrapper>
        </FormContainerWrapper>
    );
};

export default FormContainer;