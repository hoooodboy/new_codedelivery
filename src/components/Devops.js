import React from 'react';
import styled from 'styled-components';
import DevopsImg from '../images/devops.png';

const DevopsBlock = styled.div`
  height: 90vh;
  padding: 15vh 0;
  background: #fff; 
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
`;

const Name = styled.div`
  color: #000;
  font-weight: 200;
  font-size: 20px;
  margin-bottom: 5vh;
`;

const Say = styled.div`
  color: #000;
  font-weight: 400;
  font-size: 32px;
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

const DevopsImgBlock = styled.div`
    width: 100%;
    height: 100%;
    min-width: 250px;
    min-height: 250px;
    max-width: 1000px;
    background-image: url(${DevopsImg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center; 
    cursor: pointer;
`;

const Devops = () => {
    return (
        <div>
        <div data-aos="fade-up" data-aos-duration="1000" >
        <DevopsBlock>
            <Name>
              Code_Delivery
            </Name>
            <Say>
            코드딜리버리의<br/>
            맞춤형 솔루션 제작
            </Say>
            <SmallSay>
            구독형 소프트웨어 솔루션
            </SmallSay>
            <Explain>
              다년간의 다양한 분야에서의 실무 경험을 바탕으로 <br/>요구사항을 빠르 게 파악해 개발하고자 하는 솔루션에서 <br/> 키포인트를 찾고 그에 집중 하며 산출물을 빠르게 도출해낼 수 있습니다.
            </Explain>
            <Explain>
            웹프로그래밍, 무선통신, 시스템 프로그래밍, 임베디드 시스템 뿐만 아니라 <br/> 블록체인, 머신러닝, 3D 모션그래픽, 전자정부프레임워크 등<br/> 다양한 요구사항을 모두 수용할 수 있습니다.           
            </Explain>
            <DevopsImgBlock/>
            </DevopsBlock>
        </div>
      </div>
    );
}

export default Devops;