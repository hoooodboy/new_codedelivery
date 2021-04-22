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
                <Say>해외 물류관리<br/> 맞춤형 해외배송대행</Say>
                <SmallSay>맞춤형 해외배송대행 및 해외 물류관리(3PL)</SmallSay>
                <Explain>
                코드딜리버리에서 제공하고자하는 솔루션은 쉽게 사용할 수 있는 <br/>
                관리시스템입니다. 컨설팅을 포함한 EDI 시스템, 물류 시스템 전반을 <br/>
                전산화하여 관리할 수 있는 통합 해외배송대행 솔루션을 제공하고자 합니다.  <br/>
                </Explain>
                <Explain>
                시스템 전반에 대한 높은 수준의 이해를 가진 전문가와 함께하며<br/>
                써드파티 물류관리 시스템 API 연동과 역직구에 대한 솔루션도 제공할 예정입니다.<br/>
                </Explain>
                <LogisticsManagementLogoBlock/>
            </LogisticsManagementBlock>
        </div>
    );
}

export default Lms;