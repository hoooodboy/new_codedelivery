import React from 'react';
import styled from 'styled-components';
import LogisticsManagementLogo from '../images/LogisticsManagement.png';

const LogisticsManagementBlock = styled.div`
 height: 100vh;
  padding: 15vh 0;
  background: #f4f4f4; 
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
`;

const Say = styled.div`
  color: #000;
  font-weight: 300;
  font-size: 35px;
  text-align: center;
  margin-bottom: 5vh;
`;

const SmallSay = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #adadad;
  margin-bottom: 5vh;
`;

const Explain = styled.div`
  margin-bottom: 3vh;
  text-align: center;
  width: 60vw;
  font-size: 16px;
  color: #797979;
  font-weight: 500;
`;

const LogisticsManagementLogoBlock = styled.div`
    width: 100%;
    height: 100%;
    min-width: 250px;
    min-height: 250px;
    max-width: 500px;
    background-image: url(${LogisticsManagementLogo});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center; 
    cursor: pointer;
    `;

const Lms = () => {
    return (
        <div data-aos="fade-up" data-aos-duration="1000" >
            <LogisticsManagementBlock>
                <Say>온라인 학습관리 <br/> 시스템 개발</Say>
                <SmallSay>고용노동부 훈련기관 온라인 학습관리 시스템 개발</SmallSay>
                <Explain>
                당사에서 제공하고자 하는 솔루션은, 학습관리 솔루션을 넘어 <br/>
                기관평가와 이수자평가까지 전산화 시켜 고용노동부 가이드라인에 <br/>
                맞춘 훈련기관 전산화 시스템을 구성할 예정입니다.<br/>
                </Explain>
                <Explain>
                타사에서 제공하는 솔루션이 있으나, 시스템 불안정으로 <br/>
                인한 실사 가 어렵고 90년대 수준의 UI/UX를 제공하여<br/>
                타사 대비 안정성 및 UI/UX 측면의 경쟁력이 있다고 판단됩니다<br/>
                </Explain>
                <LogisticsManagementLogoBlock/>
            </LogisticsManagementBlock>
        </div>
    );
}

export default Lms;