import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
/* Pages */
import HomePage from 'Pages/HomePage/HomePage';
import MoviesPage from 'Pages/MoviesPage/MoviesPage';
import SeriesPage from 'Pages/SeriesPage/SeriesPage';
/* MUI */
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
/* Components and Functions */
import CustomTheme from 'Theme';
import { initializeDataManager } from 'Components/DataManager/DataManager';
/* Constants */
import { FRONTEND_ENDPOINTS } from 'config';
/* Zustand */
import { useAppStore } from 'App.store';


function App() {
  const setActiveEndpoint = useAppStore((state) => state.setActiveEndpoint);

  /* Load and process the data */
  initializeDataManager();

  /* Set the current location endpoint each page change */
  const location = useLocation()
  useEffect(() => {
    setActiveEndpoint(window.location.pathname);
  }, [location])


  return (
    <CssVarsProvider theme={CustomTheme}>
      <div>
        <Routes>
          <Route path={FRONTEND_ENDPOINTS.HOMEPAGE} element={<HomePage />} />
          <Route path={FRONTEND_ENDPOINTS.MOVIES} element={<MoviesPage />} />
          <Route path={FRONTEND_ENDPOINTS.SERIES} element={<SeriesPage />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
    </CssVarsProvider>
  );
}

export default App;
