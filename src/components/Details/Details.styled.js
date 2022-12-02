import styled from 'styled-components';

const halfContainer = '271px';

const ContainerStyled = styled.div`
  position: fixed;
  top: 25%;
  left: calc(50% - ${halfContainer});
  background-color: #F0F0F0;
  width: 500px;
  max-height: 400px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 15px -4px #000000;
  overflow: auto
`;

const DetailsTitleStyled = styled.h5`
  font-size: 20px;
  margin: 0;
`;

const ButtonStyled = styled.div`
  position: absolute;
  right: 13px;
  top: 0;
  font-size: 30px;
  transform: rotate(45deg);
  cursor: pointer;
`;

export {
  ContainerStyled,
  DetailsTitleStyled,
  halfContainer,
  ButtonStyled
};
