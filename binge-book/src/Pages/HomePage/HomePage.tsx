import React from 'react';
import './HomePage.css';
/* Components */
import Header from 'Components/Header/Header';
import Promo from 'Components/Promo/Promo';
import Carousel from 'Components/Carousel/Carousel';
import Footer from 'Components/Footer/Footer';
/* MUI */
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
/* Zustand */
import { useDataManagerStore } from 'Components/DataManager/DataManager.store';
/* Constants */
import { FRONTEND_ENDPOINTS } from 'config';
import { PROMO_WALLPAPER } from 'Assets/Images';


const HomePage = () => {
  const theme = useTheme();

  const getNLatestMovies = useDataManagerStore((state) => (state.getNLatestMovies));
  const getNLatestSeries = useDataManagerStore((state) => (state.getNLatestSeries));

  return (
    <Box sx={{ 
      display: "flex",
      flexDirection: "column",
      backgroundColor: theme.palette.primary.main,
      minHeight: "100vh",
      justifyContent: "space-between",
    }}>
      <Header />
      <Promo
        imageUrl={PROMO_WALLPAPER}
        linkUrl={FRONTEND_ENDPOINTS.MOVIES}
        title={"Explore Movies and Shows"}
      />
      <Carousel
        title='Latest Movies'
        linkUrl='/movies'
        items={getNLatestMovies(10)}
      />
      <Carousel
        title='Latest Series'
        linkUrl='/series'
        items={getNLatestSeries(10)}
      />
      <Footer />
    </Box>
  );
}
export default HomePage;