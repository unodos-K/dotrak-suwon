import styled from 'styled-components';

const FooterContainerWrapper = styled.section`
    padding: 20px;
    height: 400px;
    background-color: #161616;
    color: #fff;
    font-size: small;
    text-align: center;
`;

const FooterContainer = () => {
  return (
    <FooterContainerWrapper className='comp__wrapper'>
        총 시술 회차는 상담을 통해 결정됩니다.<br />
    </FooterContainerWrapper>
  );
};

export default FooterContainer;
