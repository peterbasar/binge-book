import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
/* MUI */
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
/* Constants */
import { FRONTEND_ENDPOINTS } from 'config';


const Header = () => {
  const theme = useTheme();


  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} style={{backgroundColor: theme.palette.primary.main}}>
        <Grid item xs={5}>
          <nav className='header-desktop-navigation'>
            <Link to={FRONTEND_ENDPOINTS.HOMEPAGE}>Home</Link>
            <Link to={FRONTEND_ENDPOINTS.MOVIES}>Movies</Link>
            <Link to={FRONTEND_ENDPOINTS.SERIES}>Series</Link>
          </nav>
        </Grid>
        <Grid item xs={2}>
            <div className='header-logo-text-wrapper'>
              <Link to={FRONTEND_ENDPOINTS.HOMEPAGE}>BingeBook</Link>
            </div>
        </Grid>
          <Grid item xs={5} />
      </Grid>
    </Box>
  );
}
export default Header;