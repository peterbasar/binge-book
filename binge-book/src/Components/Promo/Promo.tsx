import React from 'react';
import './Promo.css';
import { Link } from "react-router-dom";
/* MUI */
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
/* Components */
import UnhideOnViewportWrapper from 'Animations/UnhideOnViewportWrapper';


interface PromoInterface {
  imageUrl: string,
  linkUrl: string,
  title: string,
}


const Promo = ({imageUrl, linkUrl, title}: PromoInterface) => {
  const theme = useTheme();

  return (
    <UnhideOnViewportWrapper>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0} style={{backgroundColor: theme.palette.common.black}}>
          <Grid height={500} item xs={12}>
            <div className='promo-wrapper'>
              <div className='promo-image-wrapper'>
                <img  height={"100%"} alt="wallpaper-avengers" data-testid="promo-image"
                      src={imageUrl} />
              </div>
              <div className='promo-link'>
                <Link to={linkUrl} data-testid="promo-anchor">{title}</Link>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </UnhideOnViewportWrapper>
  );
}
export default Promo;