import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {showAlert, handleAgreeDetails} from '../modals/agreeModal';

export const FormContainerWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* height: 90px; */
  gap: 4px;
  color: var(--text-color);
  position: fixed; /* 고정 위치 설정 */
  bottom: 0; /* 하단으로 고정 */
  background-color: var(--floating-color); /* 검정색 바탕에 투명도 추가 */
  padding: 20px 40px;
  color: var(--accent-color);
  visibility: ${(props) => props.isVisibleFloatingForm};
  transition: visibility 0.8s ease; /* 보이기/숨기기 트랜지션 효과 추가 */
  font-size: 1.4rem;
  font-weight: 800;
  opacity: 0.9;

  @media screen and (max-width: 800px) {
    height: 200px;
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  gap: 1px;
  text-align: center;
  flex-wrap: wrap;

  @media screen and (max-width: 800px) {
    height: 200px;
  }

  @media screen and (max-width: 450px) {
    justify-content: space-between;
  }

  @media screen and (max-width: 375px) {
    flex-wrap: nowrap;
  }

  p {
    font-weight: 700;
    margin-right: 10px;
    flex-grow: 1;

    @media screen and (max-width: 800px) {
      flex-grow: 0;
    }
  }


  .box {
    display: flex;
    flex-direction: row;
    flex-grow: 1;

    @media screen and (max-width: 450px) {
      flex-grow: 1;
      flex-direction: column;
    }
  }
`;

export const InputText = styled.input`
  background-color: var(--floating-color); /* 검정색 바탕에 투명도 추가 */
  border: 1px solid #fff;
  color: #fff;
  width: 120px;
  height: 40px;
  padding: 0 12px;
  font-size: 0.9rem;
  text-align: center;
  flex-grow: 1;

  &::placeholder {
    color: #fff; /* 원하는 색상으로 변경 */
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const FormAgreeContent = styled.div`
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2px 10px;
  font-weight: 400;


  @media screen and (max-width: 450px) {
    font-size: 0.6rem;
  }

  .check_box {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
    font-size: 0.8rem;
    
    @media screen and (max-width: 450px) {
        padding: 0;
    }
  }
`;

export const FormAgreeCheckbox = styled.input`
  margin-right: 4px;
`;

export const FormAgreeLabel = styled.label`
  display: flex;
  align-items: center;
`;

export const FormAgreeAnchor = styled.a`
  color: var(--secondary-color);
  color: #fff;
  font-size: 0.8rem;
  text-decoration: underline;

  @media screen and (max-width: 375px) {
    font-size: 0.7rem;
  }
`;

export const Button = styled.button`
  width: 80px;
  height: 40px;
  margin: 0;
  font-size: 1rem;
  flex-grow: 1;
  padding: 0 12px;
  border-radius: 2px;

  @media screen and (max-width: 450px) {
    margin: 12px 0 0 10px;
    width: 100%;
  }
`;

export const Select = styled.select`
  background-color: var(--floating-color); /* 검정색 바탕에 투명도 추가 */
  border: 1px solid #fff;
  color: #fff;
  width: 120px;
  height: 40px;
  padding: 0 12px;
  text-align: center;
  font-size: 0.9rem;
  -moz-appearance: none;
  flex-grow: 1;
  -webkit-appearance: none;
  appearance: none;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const Option = styled.option`
  border-radius: 2px;
  width: 100px;
  color: #fff;
`;



const FloatingFormContainer = ({todayUsers}) => {
    const [name, setName] = useState('');
    const [contact, setContact] = useState('')
    const [treatmentArea, setTreatmentArea] = useState('');
    const [agree, setAgree] = useState(false);

    const handleSelectChange = (e) => {
        const selectedValue = e.target.value;
        setTreatmentArea(selectedValue);
    };

    const handleInputContact = (e) => {
        let inputValue = e.target.value;
    
        // 입력된 값에서 숫자만 추출
        inputValue = inputValue.replace(/\D/g, '');
    
        // 숫자가 3자리일 때, - 추가
        if (inputValue.length > 3) {
            inputValue = inputValue.substring(0, 3) + '-' + inputValue.substring(3);
            e.target.value = inputValue;
        }
    
        // 숫자가 8자리일 때, - 추가
        if (inputValue.length > 8) {
            inputValue = inputValue.substring(0, 8) + '-' + inputValue.substring(8);
            e.target.value = inputValue;
        }

        if (inputValue.length > 13) {
            console.log('실행')
            inputValue = inputValue.substring(0, 13);
            e.target.value = inputValue;
        }
        console.log(inputValue.length)
        // UI에 반영하기 전에 상태 업데이트
        setContact(inputValue);
    };
    console.log(contact)
      
  
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
        if (contact.length !== 13) {
          showAlert('전화번호 입력 오류', '전화번호를 확인하세요.', 'error');
          return;
        }

        if (!agree) {
            showAlert('동의 오류', '이벤트 참여를 위해 개인정보 수집에 동의해 주세요.', 'error');
            return;
        }

        const formData = {
            name,
            contact,
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
          <p>어제까지 {todayUsers.length}명 신청했습니다</p>
          <FormWrapper id="form">
            <div className='box'>
              <InputText 
                type="text" 
                name="name" 
                id="name" 
                placeholder="이름"
                onChange={(e) => setName(e.target.value)}
              />
              <InputText 
                type="text" 
                name="contact" 
                id="contact" 
                placeholder="연락처" 
                inputMode="numeric" 
                onChange={handleInputContact}
              />
              <Select value={treatmentArea} onChange={handleSelectChange}>
                <Option value="" disabled>시술부위 선택</Option>
                <Option value="가르마">가르마</Option>
                <Option value="정수리">정수리</Option>
                <Option value="헤어라인">헤어라인</Option>
                <Option value="상담 후 결정">상담 후 결정</Option>
              </Select>
            </div>
            <div className='box'>
              <FormAgreeContent>
                <div className='check_box'>
                  <FormAgreeCheckbox
                    type="checkbox"
                    name="agree"
                    id="form_agree__checkbox"
                    checked={agree}
                    inputMode="numeric" // 이 부분 추가
                    onChange={() => setAgree(!agree)} // 체크 여부에 따라 반전
                  />
                  <FormAgreeLabel htmlFor="form_agree__checkbox" id="form_agree__label">동의하기</FormAgreeLabel>
                </div>
                <div className='anchor_box'>
                  <FormAgreeAnchor onClick={handleAgreeDetails}>[개인정보 취급방침]</FormAgreeAnchor>
                </div>
              </FormAgreeContent>
              <Button type="button" id="form_submitBtn" onClick={handleFormSubmit}>신청하기</Button>
            </div>
          </FormWrapper>
        </FormContainerWrapper>
      );
      
};

export default FloatingFormContainer;