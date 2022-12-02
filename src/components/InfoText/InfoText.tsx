import React from 'react';
import { ContainerStyled, InfoTextStyled } from './InfoText.styled';

type InfoTextType = {
  children: React.ReactNode
}

export const InfoText = ({ children }: InfoTextType) => {
  return (
    <ContainerStyled>
      <InfoTextStyled>{children}</InfoTextStyled>
    </ContainerStyled>
  );
};
