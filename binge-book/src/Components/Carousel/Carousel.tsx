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
import UnhideOnViewportWrapper from 'Animations/UnhideOnViewportWrapper';


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
      <UnhideOnViewportWrapper>
        <Grid container gap={1} marginBottom={3} alignItems={"center"} className='carousel-title-wrapper' direction={"row"}>
          
          {/* Title */}
          <h1>{title}</h1>
          <div onClick={() => {navigate(linkUrl)}}>
            <h3 style={{cursor: "pointer"}} >show more <AddIcon style={{verticalAlign: "top"}} /></h3>
          </div>
        </Grid>
      </UnhideOnViewportWrapper>

      {/* Items */}
      <Grid container spacing={2} wrap={"nowrap"} overflow={"hidden"} data-testid="carousel-list">
        {
          items.map((item)=>{
            return (
              <Grid item key={item.title}> 
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