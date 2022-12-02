import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { IconButtonStyled } from './IconButton.styled';
import { useNavigate } from 'react-router';
import { RotateProp } from '@fortawesome/fontawesome-svg-core';

type IconButtonTypes = {
  url: string;
  rotation?: RotateProp;
  positionTop: string;
  positionLeft?: string;
  positionRight?: string;
  smallPositionTop: string;
  smallPositionRight?: string;
}

export const IconButton = ({
                             url,
                             rotation,
                             positionTop,
                             positionLeft,
                             positionRight,
                             smallPositionTop,
                             smallPositionRight
                           }: IconButtonTypes) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(url);
  };

  return (

    <IconButtonStyled positionTop={positionTop} positionLeft={positionLeft}
                      positionRight={positionRight} smallPositionRight={smallPositionRight}
                      smallPositionTop={smallPositionTop}
                      onClick={handleClick}>
      <FontAwesomeIcon icon={faArrowRightLong} size='5x' rotation={rotation} />
    </IconButtonStyled>
  );
};
