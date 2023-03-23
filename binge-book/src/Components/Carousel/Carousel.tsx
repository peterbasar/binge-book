import React from 'react';
import './Carousel.css';
import { Link } from "react-router-dom";
import { dataItemInterface } from 'Components/DataManager/DataManager.store';
/* MUI */
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
/* Components */
import EntityCard from 'Components/EntityCard/EntityCard';


interface CarouselInterface {
  title: string,
  linkUrl: string,
  items: Array<dataItemInterface>,
}


const Carousel = ({title, linkUrl, items}: CarouselInterface) => {
  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }} style={{ backgroundColor: theme.palette.primary.main}}>
      <Grid container spacing={0} alignItems={"center"}>
        
        {/* Title */}
        <Grid item>
          <h1 className='carousel-title'>{title}</h1>
        </Grid>

        {/* Link */}
        <Link className='carousel-link' to={linkUrl}>
          <Grid container spacing={0} alignItems={"center"}>
            <Grid item>
                <h3>show more</h3>
              </Grid>
              <Grid item> 
                <AddIcon />
              </Grid>
          </Grid>
        </Link>
      </Grid>
      
      <Grid container spacing={2} alignItems={"center"}>
        {/* Items */}
        {
          items.map((item)=>{
            return (
              <Grid item> 
                <EntityCard item={item} />
              </Grid>
            )
          })
        }  
      </Grid>
          
    </Box>
  );
}
export default Carousel;