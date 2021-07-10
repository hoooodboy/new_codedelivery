import React from 'react';
import styled from 'styled-components';

const FooterBcakgroundBlock = styled.div`
  padding: 3vh 0;
  background: #f4f4f4; 
`;

const FooterBlock = styled.div`
    margin: 0 auto;
    width: 80vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const CompanyName = styled.div`
    color: #333;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 1vh;
`;

const Content = styled.div`
    color: #797979;
    font-size: 14px;
`;

const DevelopSpec = () => {
    return (
        <FooterBcakgroundBlock>
            <FooterBlock>
                <CompanyName>코드딜리버리</CompanyName>
                <Content>대표: 이승민, 한우영</Content>
                <Content>주소: 서울특별시 강남구 삼성로 417, 상가동 204-1 코드딜리버리(대치동, 대치포스코더샾아파트)</Content>
                {/* <Content>연락처: 010-0000-0000</Content> */}
                <Content>사업자등록번호: 576-15-01489</Content>
            </FooterBlock>
        </FooterBcakgroundBlock>
    );
}

export default DevelopSpec;