import React, { useEffect } from 'react';
import 'App.css';
import { Routes, Route, useLocation } from "react-router-dom";
/* Pages */
import HomePage from 'Pages/HomePage/HomePage';
import MoviesPage from 'Pages/MoviesPage/MoviesPage';
import SeriesPage from 'Pages/SeriesPage/SeriesPage';
/* MUI */
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
/* Components and Functions */
import CustomTheme from 'Theme';
import { useInitializeDataManager } from 'Components/DataManager/DataManager';
/* Constants */
import { FRONTEND_ENDPOINTS } from 'config';
import { dataItemInterface } from 'Components/DataManager/DataManager.store';
/* Zustand */
import { useAppStore } from 'App.store';
/* Data of the application */
import data from "Assets/data/data.json";
/* Animations */
import 'Animations/animationsSimple.css'


function App() {
  const setActiveEndpoint = useAppStore((state) => state.setActiveEndpoint);

  /* Load and process the data */
  useInitializeDataManager(data.entries as Array<dataItemInterface>);

  /* Set the current location endpoint variable each page change */
  const location = useLocation()
  useEffect(() => {
    setActiveEndpoint(window.location.pathname);
    window.scrollTo(0, 0)
  }, [location, setActiveEndpoint])


  return (
    <CssVarsProvider theme={CustomTheme}>
      <Routes>
        <Route path={FRONTEND_ENDPOINTS.HOMEPAGE} element={
          <HomePage />
        } />
        <Route path={FRONTEND_ENDPOINTS.MOVIES} element={
          <MoviesPage />
        } />
        <Route path={FRONTEND_ENDPOINTS.SERIES} element={
          <SeriesPage />
        } />

        {/* Using path="*"" means "match anything", so this route
              acts like a catch-all for URLs that we don't have explicit
              routes for. */}
        <Route path="*" element={
          <HomePage />
        } />
      </Routes>
    </CssVarsProvider>
  );
}

export default App;
