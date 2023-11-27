import styled from 'styled-components';


export const SmpContentsContainer = styled.div`
    img {
        max-width: 100%;
    }
`
function SmpContents() {
    return (
        <SmpContentsContainer>
            <img src="/smp_contents.webp" alt="smp_contents" />
            <img src="/coach_gianna.webp" alt="coach_gianna" />
        </SmpContentsContainer>
    );
}

export default SmpContents;