import styled from 'styled-components';

const FooterContainerWrapper = styled.section`
    width: 100%;
    padding: 20px;
    height: 5%;
    background-color: darkgrey;
    color: #fff;

    > p {
        text-align: center;
    }
`;

const FooterContainer = () => {
  return (
    <FooterContainerWrapper id="footer-container">
      <p>
        도트락 수원 직영점 | 사업자 등록 번호: 000 - 00 - 00000<br />
        대표원장: 지아나 <a href="https://www.instagram.com/">@인스타그램</a> <a href="https://www.youtube.com/">@유튜브</a><br />
        경기도 수원시 팔달구 권광로 ...
      </p>
    </FooterContainerWrapper>
  );
};

export default FooterContainer;
