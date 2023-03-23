import React from 'react';
import './Promo.css';
import { Link } from "react-router-dom";
/* MUI */
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
/* Constants */
import { FRONTEND_ENDPOINTS } from 'config';


const Promo = () => {
  const theme = useTheme();


  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0} style={{backgroundColor: theme.palette.common.black}}>
        <Grid height={300} item xs={12}>
          <div className='promo-wrapper'>
            <div className='promo-image-wrapper'>
              <img height={"100%"} alt="wallpaper-avengers" src={require(`Assets/Images/promo-wallpaper.jpg`)} />
            </div>
            <div className='promo-link'>
              <Link to={FRONTEND_ENDPOINTS.MOVIES}>Explore Movies and Shows</Link>
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Promo;