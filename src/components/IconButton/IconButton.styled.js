import styled from 'styled-components';
import { device } from '../../assets/mediaQueries';

const IconButtonStyled = styled.div`
  position: absolute;
  right: ${(props) => props.smallPositionRight ? props.smallPositionRight : 'auto'};
  left: ${(props) => props.positionLeft ? props.positionLeft : 'auto'};
  top: ${(props) => props.smallPositionTop};
  cursor: pointer;
  color: #CBCBCB;
  transition: all 1s ease;
  font-size: 10px;
  &:hover {
    transform: translate(0px, -10px);
  }

  @media ${device.tablet} {
    top: ${(props) => props.positionTop};
    right: ${(props) => props.positionRight ? props.positionRight : 'auto'};
    font-size: 16px;
  }
`;

export {
 IconButtonStyled
};
