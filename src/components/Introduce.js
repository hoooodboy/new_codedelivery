import React from 'react';
import styled from 'styled-components';
import Aos from "aos"
import "aos/dist/aos.css";
import IntroduceImg from '../images/exchange.png';

const IntroduceBackgroundBlock = styled.div`
  height: 90vh;
  padding: 15vh 0;
  background: #333; 
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
`;

const Name = styled.div`
  color: #fff;
  font-weight: 200;
  font-size: 20px;
  margin-bottom: 5vh;
`;

const Say = styled.div`
  color: #fff;
  font-weight: 400;
  font-size: 32px;
  text-align: center;
  margin-bottom: 5vh;
`;

const SmallSay = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #6e6e6e;
  margin-bottom: 5vh;

`;

const Explain = styled.div`
  margin-bottom: 3vh;
  text-align: center;
  width: 60vw;
  font-size: 16px;
  color: #adadad;
  font-weight: 500;
`;

const IntroduceImgBlock = styled.div`
    margin-top: 5vh;
    width: 100%;
    height: 100%;
    min-width: 250px;
    min-height: 250px;
    max-width: 650px;
    background-image: url(${IntroduceImg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center; 
    cursor: pointer;
`;

const FlashExample = () => {
  React.useEffect(() => {
    Aos.init({});
  }, [])
    return (
        <div data-aos="fade-up" data-aos-duration="1000" >
	        <IntroduceBackgroundBlock>
            <Name>
              Code_Delivery
            </Name>
            <Say>
            당신의 비즈니스의 든든한<br/>
             테크 파트너.
            </Say>
            <SmallSay>
            구독형 소프트웨어 솔루션
            </SmallSay>
            <Explain>
            1년단위 계약시 월 10만원이라는 합리적인 금액으로,<br/> 많은 고객층에게 안정적인 가격으로 기회를 제공드리려고 합니다.
            </Explain>
            <Explain>
            시스템 전반에 대한 높은 수준의 이해가 있는 팀원들이 주를 이루어  <br/> 개발 방향성에 실질적인 도움을 주며 보다 완성도 있는 솔루션을 제공드릴것을 약속합니다.
            </Explain>
            <IntroduceImgBlock/>
          </IntroduceBackgroundBlock>
        </div>
    );
}

export default FlashExample;