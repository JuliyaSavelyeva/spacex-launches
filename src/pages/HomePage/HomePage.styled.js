import styled from 'styled-components';
import { device } from '../../assets/mediaQueries';

const ContainerStyled = styled.div`
  min-height: 100vh;
  display: flex;
`;

const HeaderStyled = styled.div`
  position: relative;
  margin: auto;
  color: #CBCBCB;
`;

const TitleStyled = styled.h1`
  margin: 0;
  letter-spacing: 0.2em;
  font-size: 60px;

  @media ${device.laptop} {
      font-size: 85px;
    }
`;

const SubTitleStyled = styled.h2`
  margin: 0;
  letter-spacing: 0.05em;
  text-align: center;
  font-size: 40px;
`;

export {
  ContainerStyled,
  HeaderStyled,
  TitleStyled,
  SubTitleStyled
};
