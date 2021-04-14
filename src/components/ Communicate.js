import React from 'react';
import styled from 'styled-components';

import SlackLogo from '../images/slacklogo.png';
import ZoomLogo from '../images/zoomlogo.png';
import XdLogo from '../images/xdlogo.png';

const CommunicateBackgroundBlock = styled.div`
  height: 50vh;
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

const Explain = styled.div`
  margin-bottom: 3vh;
  text-align: center;
  width: 60vw;
  font-size: 16px;
  color: #797979;
  font-weight: 500;
`;

const TableWrappr = styled.div`
    background: #fff;
`;

const ContentWrapper = styled.div`
    width: 60vw;
    height: 10vh;
    max-width: 600px;
    min-width: 330px;
    max-height: 74px;
    min-height: 41px;
    display: flex;
    margin: 0;
`;

const Content = styled.div`
    width: 20vw;
    height: 10vh;
    max-width: 200px;
    min-width: 110px;
    max-height: 74px;
    min-height: 41px;
    border: 1px solid #eee;
    margin: 0;
    display: flex;
    justify-content:center;
    align-items: center;
    font-weight: 600;

`;

const SlackImg = styled.div`
    width: 20vw;
    height: 40vh;
    max-width: 80px;
    min-width: 30px;
    max-height: 35px;
    min-height: 21px;
    background-image: url(${SlackLogo});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center; 
    cursor: pointer;
`;

const ZoomImg = styled(SlackImg)`
    background-image: url(${ZoomLogo});
`;

const XdImg = styled(SlackImg)`
    background-image: url(${XdLogo});
`;

const Communicate = () => {
    return (
        <div data-aos="fade-up" data-aos-duration="1000" >
            <CommunicateBackgroundBlock>
                <Say>멀리가려면 <br/> 함께가라</Say>
                <Explain>
                    모두가 같은 곳을 보고 함께 간다면 얼마나 좋을까요?<br/>
                    세컨드스페이스는 상호 오해를 줄이고 더 긴밀히 협력할 수 있도록<br/>
                     커뮤니케이션에 많은 노력을 기울이고 있습니다.<br/>
                </Explain>
                <Explain>
                    우리는 고객의 꿈에 깊이 공감하고 경청하며 토론하고 존중합니다.
                </Explain>
                <TableWrappr>
                    <ContentWrapper>
                        <Content><SlackImg></SlackImg></Content>
                        <Content><ZoomImg></ZoomImg></Content>
                        <Content><XdImg></XdImg></Content>
                    </ContentWrapper>
                    <ContentWrapper>
                        <Content>...</Content>
                        <Content>...</Content>
                        <Content>...</Content>
                    </ContentWrapper>
                </TableWrappr>
            </CommunicateBackgroundBlock>
        </div>

    );
}

export default Communicate;