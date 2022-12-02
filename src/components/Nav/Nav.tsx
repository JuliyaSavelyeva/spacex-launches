import React from 'react';
import { ContainerStyled, FilterWrapperStyled, SelectStyled } from './Nav.styled';
import { IconButton } from '../IconButton';
import { dateOptions, rocketNameOptions, successOptions } from '../../assets/dataForSelect';
import { HandleChangeSelectType, ValueType } from '../../models/common';


type NavTypes = {
  handleSuccessChange: HandleChangeSelectType;
  handleRocketChange: HandleChangeSelectType;
  handleDateChange: HandleChangeSelectType;
  successValue: ValueType | boolean;
  rocketValue: ValueType;
  dateValue: ValueType;
}

export const Nav = ({
                      handleSuccessChange,
                      handleRocketChange,
                      handleDateChange,
                      successValue,
                      rocketValue,
                      dateValue
                    }: NavTypes) => {
  return (
    <ContainerStyled>
      <IconButton positionTop={'10px'} smallPositionTop={'80px'} url={'/'} rotation={180} />
      <FilterWrapperStyled>
        <SelectStyled options={successOptions} placeholder={'Success'} onChange={handleSuccessChange}
                      value={successValue} />
        <SelectStyled options={rocketNameOptions} placeholder={'Rocket'} onChange={handleRocketChange}
                      value={rocketValue} />
        <SelectStyled options={dateOptions} placeholder={'Year'} onChange={handleDateChange}
                      value={dateValue} />
      </FilterWrapperStyled>
    </ContainerStyled>
  );
};
