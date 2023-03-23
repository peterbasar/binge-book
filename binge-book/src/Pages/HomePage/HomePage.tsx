import React from 'react';
import './HomePage.css';
/* Components */
import Header from 'Components/Header/Header';
/* MUI */
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


const HomePage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header />
    </Box>
  );
}
export default HomePage;