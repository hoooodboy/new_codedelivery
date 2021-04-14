import React from 'react';
import styled, {keyframes} from 'styled-components';
import BackgroundImage from '../images/background-1.png';
import CodeDeliveryLogo from '../images/codedelivery_mainlogo.png';
import SpanLogoImg from '../images/spanlogo.png';

const MainpageBlock = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${BackgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const Block = styled.div`
    height: 45vh;
`;

const LogoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const CodeDeliverySpin = styled.div`
    width: 100px;
    height: 70px;
    background-image: url(${CodeDeliveryLogo});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    animation: ${rotate} 5s linear infinite;
    transform-origin: 50% 50%;
`;

const SpanLogo = styled(MainpageBlock)`
    width: 300px;
    height: 100px;
    background-size: contain;
    background-image: url(${SpanLogoImg});
    margin-top: 20px;
    position: relative;
`;

const Scrolldown = styled.div`
    margin: 21vh;
    font-weight: 800;
    color: #2259fb;
`;

const Mainpage = () => {
    return(
        <MainpageBlock>
            <Block/>
            <LogoWrapper>
                <CodeDeliverySpin/>
                <SpanLogo/>
            </LogoWrapper>
             <Scrolldown>
                Scrolldown
            </Scrolldown>             
        </MainpageBlock>
    );
}

export default Mainpage;