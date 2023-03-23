import React from 'react';
import './HomePage.css';
/* Components */
import Header from 'Components/Header/Header';
import Promo from 'Components/Promo/Promo';
import Carousel from 'Components/Carousel/Carousel';
/* MUI */
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
/* Zustand */
import { DataManagerStore } from 'Components/DataManager/DataManager.store';


const HomePage = () => {
  const getNLatestMovies = DataManagerStore((state) => (state.getNLatestMovies));
  const getNLatestSeries = DataManagerStore((state) => (state.getNLatestSeries));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header />
      <Promo />
      <Carousel
        title='Latest Movies'
        linkUrl='/movies'
        items={getNLatestMovies()}
      />
      <Carousel
        title='Latest Series'
        linkUrl='/movies'
        items={getNLatestSeries()}
      />
    </Box>
  );
}
export default HomePage;