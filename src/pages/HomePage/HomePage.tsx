import React from 'react';
import { ContainerStyled, HeaderStyled, SubTitleStyled, TitleStyled } from './HomePage.styled';
import { IconButton } from '../../components/IconButton';

const HomePage = () => {
    console.log(typeof null);

  return (
    <ContainerStyled>
      <HeaderStyled>
        <TitleStyled>Space-X</TitleStyled>
        <SubTitleStyled>launches</SubTitleStyled>
        <IconButton url={'/launches'} positionTop={'50%'} positionRight={'-200px'} smallPositionTop={'-80px'}
                    smallPositionRight={'0'} />
      </HeaderStyled>
    </ContainerStyled>
  );
};

export default HomePage;
