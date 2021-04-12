import React from 'react';
import styled from 'styled-components';
import HeaderLogo from '../images/headerlogo.png';

const HeaderBlock = styled.div`
    padding: 1vh 3vw;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
`;

const Logo = styled.div`
    width: 40vw;
    max-width: 200px;
    height: 5vh;
    background-image: url(${HeaderLogo});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center; 
`;

const Contact = styled.div`
    font-size: 2vh;
    font-weight: 600;
    color: #2259fb;
`;
const Header = () => {
    return (
        <HeaderBlock>
            <Logo/>
            <Contact>
                Contact
            </Contact>
        </HeaderBlock>
    );
}

export default Header;