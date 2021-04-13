import React from 'react';
import styled from 'styled-components';

const FooterBlock = styled.div`
  height: 20vh;
  padding: 5vh 0;
  background: #f4f4f4; 
  margin-top: 20px;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
`;


const DevelopSpec = () => {
    return (
        <div data-aos="fade-up" data-aos-duration="1000" >
            <FooterBlock>
                footer
            </FooterBlock>
        </div>
    );
}

export default DevelopSpec;