import styled from 'styled-components';
import { Spin } from 'antd';

const LoaderStyled = styled(Spin)`
  color: #CBCBCB;
  font-size: 100px;
  .ant-spin-dot-item {
    width: 40px;
    height: 40px;
    background-color: #CBCBCB;
 };
`;

const ContainerStyled = styled.div`
  text-align: center;
`;

export {
  LoaderStyled,
  ContainerStyled
};
