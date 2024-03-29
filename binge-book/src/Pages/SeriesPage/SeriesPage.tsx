import React from 'react';
import './SeriesPage.css';
/* Components */
import Header from 'Components/Header/Header';
import List from 'Components/List/List';
import Footer from 'Components/Footer/Footer';
/* MUI */
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
/* Zustand */
import { useDataManagerStore } from 'Components/DataManager/DataManager.store';


const SeriesPage = () => {
  const theme = useTheme();

  /* Zustand */
  const series = useDataManagerStore((state) => (state.series));

  return (
    <Box sx={{ 
      display: "flex",
      flexDirection: "column",
      backgroundColor: theme.palette.primary.main,
      minHeight: "100vh",
      justifyContent: "space-between",
    }}>
      <Header />
      <List
        title='Browsing Series'
        rawItems={series}
      />
      <Footer />
    </Box>
  );
}
export default SeriesPage;