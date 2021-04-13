import React from 'react';
import styled from 'styled-components';
import ReactLogo from '../images/react.png';
import NodeLogo from '../images/nodejs.png';
import PhpLogo from '../images/php.png';
import MysqlLogo from '../images/mysql.png';
import MariadbLogo from '../images/mariadb.png';
import FirebaseLogo from '../images/firebase.png';

const DevelopSpecBlock = styled.div`
  height: 90vh;
  padding: 15vh 0;
  background: #fff; 
  margin-top: 20px;
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

const Table = styled.div`
    display: flex;
`;

const TableWrappr = styled.div`
    background: #fff;
    flex-wrap: nowrap;
    padding: 5vh 0;
`;

const ContentWrapper = styled.div`
    width: 60vw;
    height: 20vh;
    max-width: 600px;
    min-width: 330px;
    max-height: 74px;
    min-height: 41px;
    display: flex;
    margin: 0;
`;

const DevelopArrange = styled.div`
    font-size: 14px;
    font-weight: 900;
    padding: 3vh;
`;

const Content = styled.div`
    width: 20vw;
    height: 40vh;
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

const CareerTable = styled.div`
    padding: 5vh 0;

`;

const ThWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Th = styled.div`
    flex-wrap: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1vh 2vw;
    font-weight: 700;
    border-bottom: 2px solid #000;
`;

const Td =styled.div`
    border: none;
    flex-wrap: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1vh 2vw;
`;


const ReactImg = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${ReactLogo});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center; 
    cursor: pointer;
`;

const PhpImg = styled(ReactImg)`
    background-image: url(${PhpLogo});
`;

const NodeImg = styled(ReactImg)`
    background-image: url(${NodeLogo});
`;

const MysqlImg = styled(ReactImg)`
    background-image: url(${MysqlLogo});
`;

const FirebaseImg = styled(ReactImg)`
    background-image: url(${FirebaseLogo});
`;

const MariadbImg = styled(ReactImg)`
    background-image: url(${MariadbLogo});
`;

const DevelopSpec = () => {
    return (
        <div data-aos="fade-top" data-aos-duration="1000" >
            <DevelopSpecBlock>
                <Say>코드딜리버리 <br/> 개발스펙</Say>
                <Explain>
                    코드딜리버리는 최상의 솔루션을 제공합니다.
                </Explain>
                <Explain>
                    웹 개발은 하루가 다르게 새로운 프레임워크와 기술들이 나오고 있습니다.<br/>
                    코드딜리버리는 새로운 것에 대한 배움이 두려움이 없으며,<br/>
                    기술 스펙트럼을 넓혀가려 노력하고 있습니다.                
                </Explain>
                <DevelopArrange>
                    코드딜리버리의 개발 범위
                </DevelopArrange>
                <Explain>
                WEB, Mobile APP, Desktop APP 등의 소프트웨어 개발
                </Explain>
                <CareerTable>
                <Table>
                    <ThWrapper>
                    <Th>Front-End</Th>
                        <Td>React.js</Td>
                        <Td>TypeScript</Td>
                    </ThWrapper>
                    <ThWrapper>
                    <Th>Back-End</Th>
                        <Td>PHP</Td>
                        <Td>Node.js</Td>
                    </ThWrapper>
                    <ThWrapper>
                        <Th>DB</Th>
                            <Td>MariaDB</Td>
                            <Td>MySQL</Td>
                    </ThWrapper>
                    <ThWrapper>
                        <Th>APP</Th>
                            <Td>React Native</Td>
                            <Td>Object-C</Td>
                            <Td>Java</Td>
                    </ThWrapper>
                </Table>
                </CareerTable>
                <TableWrappr>
                    <ContentWrapper>
                        <Content><ReactImg/></Content>
                        <Content><NodeImg/></Content>
                        <Content><PhpImg/></Content>
                    </ContentWrapper>
                    <ContentWrapper>
                        <Content><MysqlImg/></Content>
                        <Content><FirebaseImg/></Content>
                        <Content><MariadbImg/></Content>
                    </ContentWrapper>
                </TableWrappr>
            </DevelopSpecBlock>
        </div>
    );
}

export default DevelopSpec;