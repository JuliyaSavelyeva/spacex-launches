import React, { MutableRefObject } from 'react';
import { ButtonStyled, ContainerStyled, DetailsTitleStyled } from './Details.styled';
import { ValueType } from '../../models/common';

type DetailsPopupTypes = {
  details: ValueType;
  handleClosePopup: () => void;
  innerRef: MutableRefObject<HTMLElement | undefined>;
}

export const Details = ({ details, handleClosePopup, innerRef }: DetailsPopupTypes) => {
  const detailsInfo = !details ? 'Information not specified' : details;

  return (
    <ContainerStyled ref={innerRef}>
      <DetailsTitleStyled>Details</DetailsTitleStyled>
      <p>{detailsInfo}</p>
      <ButtonStyled onClick={handleClosePopup}>+</ButtonStyled>
    </ContainerStyled>
  );
};
