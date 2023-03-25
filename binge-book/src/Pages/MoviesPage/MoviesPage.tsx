import React from 'react';
import './MoviesPage.css';
/* Components */
import Header from 'Components/Header/Header';
import List from 'Components/List/List';
import Footer from 'Components/Footer/Footer';
/* MUI */
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
/* Zustand */
import { useDataManagerStore } from 'Components/DataManager/DataManager.store';


const MoviesPage = () => {
  const theme = useTheme();

  /* Zustand */
  const movies = useDataManagerStore((state) => (state.movies));

  return (
    <Box sx={{ 
      display: "flex",
      flexDirection: "column",
      backgroundColor: theme.palette.primary.main,
      minHeight: "100vh"
    }}>
      <Header />
      <List
        title='Browsing Movies'
        rawItems={movies}
      />
      <Footer />
    </Box>
  );
}
export default MoviesPage;