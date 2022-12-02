import React, { useEffect, useRef, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  CardStyled,
  ContainerStyled,
  DetailsWrapperStyled,
  ImgStyled,
  MainStyled,
  TextStyled,
  TitleStyled
} from './Launches.styled';
import { clearLaunches, getAllLaunches, selectCount } from './LaunchesSlice';
import InfiniteScroll from 'react-infinite-scroll-component';
import dayjs from 'dayjs';
import { Nav } from '../../components/Nav';
import { Details } from '../../components/Details';
import { Loader } from '../../components/Loader';
import { InfoText } from '../../components/InfoText';


export const Launches = () => {
  const { launches, status } = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLElement>();
  const [page, setPage] = useState<number>(1);
  const [details, setDetails] = useState<string | null>('');
  const [successValue, setSuccessValue] = useState<boolean | string | null>(null);
  const [rocketValue, setRocketValue] = useState<string | null>(null);
  const [dateValue, setDateValue] = useState<string | null>(null);

  useEffect(() => {
    dispatch(getAllLaunches({ page, success: successValue, rocket: rocketValue, date: dateValue }));
  }, [dispatch, page, successValue, rocketValue, dateValue]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
        handleClosePopup();
      }
    };
    document.addEventListener('click', handleClick, true);
    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [ref]);

  useEffect(() => {
    return () => {
      dispatch(clearLaunches());
    };
  }, [dispatch]);

  const fetchData = () => {
    setPage(page + 1);
  };

  const handleOpenPopup = (details: string) => {
    setDetails(details);
  };

  const handleClosePopup = () => {
    setDetails('');
  };

  const removeLaunches = () => {
    setPage(1);
    dispatch(clearLaunches());
  };

  const handleSuccessChange = (selectedOption: string) => {
    setSuccessValue(selectedOption);
    setRocketValue(null);
    setDateValue(null);
    removeLaunches();
  };

  const handleRocketChange = (selectedOption: string) => {
    setRocketValue(selectedOption);
    setSuccessValue(null);
    setDateValue(null);
    removeLaunches();
  };

  const handleDateChange = (selectedOption: string) => {
    setDateValue(selectedOption);
    setSuccessValue(null);
    setRocketValue(null);
    removeLaunches();
  };

  return (
    <ContainerStyled>
      <Nav handleSuccessChange={handleSuccessChange} handleRocketChange={handleRocketChange}
           handleDateChange={handleDateChange} successValue={successValue}
           rocketValue={rocketValue} dateValue={dateValue} />
      {status === 'loading' && <Loader />}
      {status === 'failed' && <InfoText>Something went wrong...</InfoText>}
      {launches &&
        <InfiniteScroll
          dataLength={launches.docs.length}
          next={fetchData}
          hasMore={page < launches.totalPages}
          loader={<InfoText>Loading...</InfoText>}
          endMessage={<InfoText>Yay! You have seen it all</InfoText>}
        >
          <MainStyled>
            {launches.docs.map((launch, index) => {
              const heightStyle = index % 2 === 0 ? 'span 5' : index % 3 === 0 ? 'span 6' : 'span 7';

              return (
                <CardStyled heightStyle={heightStyle} key={launch.id}>
                  <ImgStyled src={launch.img ?? './defaultImage.jpg'} alt='Rocket' height={'50%'}
                             onClick={() => handleOpenPopup(launch.details)} />
                  <TitleStyled>{launch.rocket}</TitleStyled>
                  <TextStyled>{`№ ${launch.flightNumber}`}</TextStyled>
                  <TextStyled>{dayjs(launch.launchDate).format('YY MMM YYYY')}</TextStyled>
                  <TextStyled>{launch.mission}</TextStyled>
                  <TextStyled>{`Success: ${launch.success === null ? 'pending...' : launch.success}`}</TextStyled>
                </CardStyled>
              );
            })}
          </MainStyled>
        </InfiniteScroll>}
      <DetailsWrapperStyled>
        {(details || details === null) &&
          <Details innerRef={ref} details={details} handleClosePopup={handleClosePopup} />}
      </DetailsWrapperStyled>
    </ContainerStyled>
  );
};
