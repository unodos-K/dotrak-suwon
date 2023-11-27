import {useState, useEffect} from 'react';
import styled from 'styled-components';

export const BlankContainer = styled.div`
    width: 485px;
    height: 1000px;;
`
function Blank() {
    return (<BlankContainer></BlankContainer>);
}

export default Blank;