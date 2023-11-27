import styled from 'styled-components';


export const ShadowDottingContainer = styled.section`
    width: 100%;
    img {
        width: 100%;
    }
`
function ShadowDotting() {
    return ( 
        <ShadowDottingContainer>
            <img src="/shadow_dotting.webp" alt="쉐도우도팅" />
        </ShadowDottingContainer> 
    );
}

export default ShadowDotting;