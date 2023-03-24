import React from 'react';
import './Carousel.css';
import {useNavigate} from 'react-router-dom';
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
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Box margin={3} style={{ backgroundColor: theme.palette.primary.main}}>
      <Grid container gap={1} marginBottom={3} alignItems={"center"} className='carousel-title-wrapper' direction={"row"}>
        {/* Title */}
        <h1>{title}</h1>
        <a onClick={()=>navigate(linkUrl)}>
          <h3>show more <AddIcon /></h3>
        </a>
      </Grid>

      {/* Items */}
      <Grid container spacing={2} wrap={"nowrap"} overflow={"hidden"}>
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