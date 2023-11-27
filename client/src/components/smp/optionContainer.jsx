import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const OptionsContainer = styled.div`
  background-color: var(--container-color);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  padding: 16px;
`;

const OptionsHead = styled.div`
  color: var(--text-color);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  margin-bottom: 12px;

  p {
    font-size: 2.4rem;
    padding: 0 8px;
    margin-left: 10px;
    @media screen and (max-width: 818px){
      font-size: 1.4rem;
    }
    @media screen and (max-width: 450px){
      font-size: 1.2rem;
    }
  }
  
  @keyframes blink {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
  
  .target {
    font-weight: 800;
    color: var(--secondary-color);
    animation: blink 2s infinite; /* 2초 동안 반복되는 점멸 애니메이션 적용 */
  }
`;

const OptionsList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 6px;
`;

const OptionItem = styled.li`
  flex-grow: 1;
  width: 45%;
  background-color: #fff;
  height: 56px;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const CheckboxInput = styled.input`
  margin: 12px;
  cursor: pointer;
  transform: scale(1.5); /* 조절 가능한 크기로 수정 */
`;

const OptionLabel = styled.label`
  cursor: pointer;
  font-weight: 700;
  flex-grow: 1;
  font-size: 1.8rem;

  @media screen and (max-width: 818px){
    font-size: 1.4rem; 
  }
  @media screen and (max-width: 380px){
    font-size: 1.3rem; 
  }

`;

function OptionContainer({setTreatmentArea, setIsCheck}) {

  const handleOptionSelect = (event) => {
    setIsCheck(true)
    const selectedContent = event.target.textContent;
    setTreatmentArea(selectedContent)
  }
  return (
    <OptionsContainer className='comp__wrapper'>
      <OptionsHead>
        <FontAwesomeIcon icon={faCheck} />
        <p>시술이 <span className='target'>필요한 부위</span>를 선택해 주세요</p>
      </OptionsHead>
      <OptionsList>
        <OptionItem onClick={handleOptionSelect}>
          <CheckboxInput type="checkbox" name="first" id="first" />
          <OptionLabel htmlFor="first">정수리</OptionLabel>
        </OptionItem>
        <OptionItem onClick={handleOptionSelect}>
          <CheckboxInput type="checkbox" name="second" id="second" />
          <OptionLabel htmlFor="second">가르마</OptionLabel>
        </OptionItem>
        <OptionItem onClick={handleOptionSelect}>
          <CheckboxInput type="checkbox" name="third" id="third" />
          <OptionLabel htmlFor="third">헤어라인</OptionLabel>
        </OptionItem>
        <OptionItem onClick={handleOptionSelect}>
          <CheckboxInput type="checkbox" name="fourth" id="fourth" />
          <OptionLabel htmlFor="fourth">상담 후 결정</OptionLabel>
        </OptionItem>
      </OptionsList>
    </OptionsContainer>
  );
}

export default OptionContainer;
