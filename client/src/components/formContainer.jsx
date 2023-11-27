import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {showAlert, handleAgreeDetails} from '../modals/agreeModal';

export const FormContainerWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  background-color: var(--container-color);
  padding: 16px;
  color: var(--text-color);
`;

export const FormHeader = styled.p`
  font-size: 2.4rem;
  font-weight: 800;

  @media screen and (max-width: 818px){
    font-size: 1.6rem; 
  }
  @media screen and (max-width: 380px){
    font-size: 1.3rem; 
  }
  
  span {
    color: var(--secondary-color);
    font-weight: 800;
  }
`

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  margin-top: 10px;
  width: 100%;

  @keyframes blink {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }

  > p {
    margin-top: 1%;
    font-size: 2rem;
    font-weight: 800;
    animation: blink 3s infinite; /* 2초 동안 반복되는 점멸 애니메이션 적용 */

    @media screen and (max-width: 818px){
    font-size: 1.6rem;
  }

  @media screen and (max-width: 450px){
    font-size: 1.2rem;
  }
  }
`;

export const FormInputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 5%;
`;

export const FormInputLabel = styled.label`
  text-align: center;
  font-size: 1.4rem;
  font-weight: 700;
  flex-grow: 1;

  @media screen and (max-width: 450px) {
    font-size: 1.2rem;
  }
`;

export const FormInput = styled.input`
  width: ${(props) => (props.type === 'tel' ? '20%' : '80%')};
  height: 54px;
  flex-grow: 1rem;
  font-size: 1.4rem;
  max-width: 80%;
  padding: 8px;
  text-align: center;
  flex-grow: 1;

  @media screen and (max-width: 818px){
    font-size: 1.1rem;
  }

  @media screen and (max-width: 450px){
    font-size: 1rem;
  }
`;

export const FormContactWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;

  > span {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    padding: 8px;
  }
`;

export const FormSelect = styled.select`
  width: 80%;
  font-size: 1.4rem;
  flex-grow: 1;

  @media screen and (max-width: 818px){
    font-size: 1.1rem;
  }

  @media screen and (max-width: 450px){
    font-size: 1rem;
  }
`;

export const FormOption = styled.option`
    text-align: center;
    @media screen and (max-width: 818px){
    font-size: 1.1rem;
  }

  @media screen and (max-width: 450px){
    font-size: 1rem;
  }
`;


export const FormAgreeContent = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2px 10px;


  @media screen and (max-width: 818px){
    font-size: 0.8rem;
  }

  @media screen and (max-width: 450px){
    font-size: 0.6rem;
  }
`;

export const FormAgreeCheckbox = styled.input`
  margin-right: 2%;
`;


export const FormAgreeLabel = styled.label`
  display: flex;
  align-items: center;
`;

export const FormAgreeAnchor = styled.a`
  color: var(--secondary-color);
  margin-left: 5px;
  display: flex;
  align-items: center;
`;

export const FormSubmitButton = styled.button`

`;

const FormContainer = ({treatmentArea, todayUsers}) => {
    const [name, setName] = useState('');
    const [contact, setContact] = useState({ head: '010', body: '', tail: '' })
    const [agree, setAgree] = useState(false);

    function validateContactBody(input) {
      input && (input = input.replace(/[^0-9]/g, ''));
      setContact({ ...contact, body: input })
    }
    function validateContactTail(input) {
      input && (input = input.replace(/[^0-9]/g, ''));
      setContact({ ...contact, tail: input })
    }
  
    const handleFormSubmit = async () => {
        if (!name) {
            showAlert('이름 입력 오류', '이름을 입력하세요.', 'error');
            return;
        }
        const nameRegex = /^[가-힣]+$/;
        if (!nameRegex.test(name)) {
            showAlert('이름 입력 오류', '이름을 확인하세요.', 'error');
            return;
        }
        if (contact.body.length !== 4) {
          showAlert('전화번호 입력 오류', '전화번호를 확인하세요.', 'error');
          return;
        }
        if (contact.tail.length !== 4) {
          showAlert('전화번호 입력 오류', '전화번호를 확인하세요.', 'error');
          return;
        }
        if (!agree) {
            showAlert('동의 오류', '이벤트 참여를 위해 개인정보 수집에 동의해 주세요.', 'error');
            return;
        }

        const formData = {
            name,
            contact: `${contact.head}-${contact.body}-${contact.tail}`,
            treatmentArea: treatmentArea,
            checked: agree,
        };

        try {
            showAlert('고퀄리티 두피문신', '1회 무료시술 신청이 완료되었습니다.', 'success');
            const response = await axios.post('https://dotrak.hair/submitForm', formData);
            console.log(response.data, formData); // 서버에서 보낸 응답 확인
        } catch (error) {
            console.error('데이터 전송 중 오류 발생:', error);
        }
    };

    return (
        <FormContainerWrapper className='comp__wrapper'>
            <FormHeader className="form_title">
                SMP <span>1회 무료 시술</span> 신청하기
            </FormHeader>
            <FormWrapper id="form">
                <FormInputContainer>
                    <FormInputLabel htmlFor="form_input__name">이름</FormInputLabel>
                    <FormInput
                        id="form_input__name"
                        type="text"
                        placeholder="이름을 입력해 주세요."
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
                            type="text"
                            id="form_input__contactBody"
                            placeholder="4자리"
                            value={contact.body.slice(0, 4)} // 최대 4글자까지만 허용
                            onChange={(e) => {
                              const inputValue = e.target.value.slice(0, 4);
                              validateContactBody(inputValue)
                            }}/>
                        <span>-</span>
                        <FormInput
                            type="text"
                            id="form_input__contact3"
                            placeholder="4자리"
                            value={contact.tail.slice(0, 4)}
                            inputMode="numeric" // 이 부분 추가
                            onChange={(e) => {
                              const inputValue = e.target.value.slice(0, 4);
                              validateContactTail(inputValue)
                            }}/>
                    </FormContactWrapper>
                </FormInputContainer>
                <FormAgreeContent>
                    <FormAgreeCheckbox
                        type="checkbox"
                        name="agree"
                        id="form_agree__checkbox"
                        checked={agree}
                        inputmode="numeric" // 이 부분 추가
                        onChange={() => setAgree(!agree)} // 체크 여부에 따라 반전
                    />
                    <FormAgreeLabel htmlFor="form_agree__checkbox" id="form_agree__label">
                        개인정보 수집 및 이용에 관한 내용을 확인하고 동의합니다. <br />
                    </FormAgreeLabel>
                    <FormAgreeAnchor onClick={handleAgreeDetails}>[자세히 보기]</FormAgreeAnchor>
                </FormAgreeContent>
                <FormSubmitButton type="button" id="form_submitBtn" onClick={handleFormSubmit}>신청하기</FormSubmitButton>
                <p>어제까지 {todayUsers.length}명 신청했습니다</p>
            </FormWrapper>
        </FormContainerWrapper>
    );
};

export default FormContainer;