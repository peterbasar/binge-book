import React from 'react';
import './HomePage.css';
/* Components */
import Header from 'Components/Header/Header';
import Promo from 'Components/Promo/Promo';
/* MUI */
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


const HomePage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header />
      <Promo />
    </Box>
  );
}
export default HomePage;