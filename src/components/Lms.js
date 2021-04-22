import React from 'react';
import styled from 'styled-components';
import LmsImg from '../images/lms.png';

const LmsBlock = styled.div`
 height: 100vh;
  padding: 15vh 0;
  background: #fff; 
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

const LmsLogoBlock = styled.div`
    width: 100%;
    height: 100%;
    min-width: 250px;
    min-height: 250px;
    max-width: 500px;
    display: flex;
    justify-content: center;
`;

const LmsLogo = styled.div`
    width: 100%;
    height: 100%;
    min-width: 250px;
    min-height: 250px;
    max-width: 500px;
    background-image: url(${LmsImg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center; 
    cursor: pointer;
    margin: 0 25px;
`;

const Lms = () => {
    return (
        <div data-aos="fade-up" data-aos-duration="1000" >
            <LmsBlock>
                <Say>온라인 학습관리 <br/> 시스템 개발</Say>
                <SmallSay>고용노동부 훈련기관 온라인 학습관리 시스템 개발</SmallSay>
                <Explain>
                당사에서 제공하고자 하는 솔루션은, 학습관리 솔루션을 넘어 <br/>
                기관평가와 이수자평가까지 전산화 시켜 고용노동부 가이드라인에 <br/>
                맞춘 훈련기관 전산화 시스템을 구성할 예정입니다.<br/>
                </Explain>
                <Explain>
                HRD 자체 시스템과의 통합 가능성을 열어두고 개발하여<br/> 
                확장성 있는 솔루션으로써 경쟁력이 있다고 판단됩니다.<br/>
                </Explain>
                <LmsLogoBlock>
                    <LmsLogo/>
                </LmsLogoBlock>
            </LmsBlock>
        </div>
    );
}

export default Lms;