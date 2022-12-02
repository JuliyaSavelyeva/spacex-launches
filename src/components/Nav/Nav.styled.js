import styled from 'styled-components';
import { Select } from 'antd';
import { device } from '../../assets/mediaQueries';

const ContainerStyled = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  color: #CBCBCB;

  @media ${device.desktop} {
    padding: 0;
  }
`;

const FilterWrapperStyled = styled.div`
  margin-right: 0;
  margin-left: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;

  @media ${device.laptop} {
    justify-content: center;
  }
`;

const SelectStyled = styled(Select)`
 width: 140px;
`;



export {
  ContainerStyled,
  FilterWrapperStyled,
  SelectStyled
};
