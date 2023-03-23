import React from 'react';
import './HomePage.css';
/* Components */
import Header from 'Components/Header/Header';
import Promo from 'Components/Promo/Promo';
import Carousel from 'Components/Carousel/Carousel';
import Footer from 'Components/Footer/Footer';
/* MUI */
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
/* Zustand */
import { DataManagerStore } from 'Components/DataManager/DataManager.store';


const HomePage = () => {
  const theme = useTheme();

  const getNLatestMovies = DataManagerStore((state) => (state.getNLatestMovies));
  const getNLatestSeries = DataManagerStore((state) => (state.getNLatestSeries));

  return (
    // <div style={{minHeight: "100vh", width: "100%", backgroundColor: "red"}}>
    //   ASD
    // </div>
    <Box sx={{ 
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "stretch",
      alignContent: "stretch",
      backgroundColor: theme.palette.primary.main,
      minHeight: "100vh"
    }}>
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
      <Footer />
    </Box>
  );
}
export default HomePage;