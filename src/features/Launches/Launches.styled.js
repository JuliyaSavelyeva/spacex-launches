import styled from 'styled-components';
import { device } from '../../assets/mediaQueries'

const ContainerStyled = styled.div`
`;

const MainStyled = styled.div`
  max-width: 1200px;
  margin: 50px auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 2vw;
  grid-auto-rows: minmax(50px, 50px);
  justify-content: center;

   @media ${device.tablet} {
      grid-template-columns: repeat(2, 1fr);
    }

  @media ${device.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${device.desktop} {
    grid-template-columns: repeat(4, 1fr);
  }
`;


const CardStyled = styled.div`
  padding: 20px;
  background: #CBCBCB;
  border-radius: 5px;
  text-align: center;
  grid-row-end: span 6;

  @media ${device.tablet} {
    grid-row-end: ${(props) => props.heightStyle};
  }
`;

const ImgStyled = styled.img`
  max-width: 100%;
  cursor: pointer;
`;

const TextStyled = styled.p`
  margin: 5px;
  font-size: 14px;
`;

const TitleStyled = styled.h4`
  font-size: 20px;
  margin-bottom: 10px;
  margin-top: 10px;

  @media ${device.tablet} {
   font-size: 26px;
  }
`;

const DetailsWrapperStyled = styled.div`
`;


export {
  ContainerStyled,
  MainStyled,
  CardStyled,
  ImgStyled,
  TitleStyled,
  TextStyled,
  DetailsWrapperStyled
};
