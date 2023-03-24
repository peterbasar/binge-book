import React, { useState } from 'react';
import './EntityModal.css';
import { Link } from "react-router-dom";
/* MUI */
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
/* Constants */
import { FRONTEND_ENDPOINTS } from 'config';
import { dataItemInterface } from 'Components/DataManager/DataManager.store';
import { MISSING_IMAGE } from 'Assets/Images';


interface EntityModalInterface {
  item: dataItemInterface
}


const EntityModal = ({item}: EntityModalInterface) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const theme = useTheme();
  

  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
          open={open}
          onClose={handleClose}
          className="entitymodal-modal"
        >
          <div className='entitymodal-box'
          >         

            <Grid container sx={{height: {xs: "200px", sm: "360px"}}}>
              {/* Image */}
              <Grid style={{height: "inherit", maxWidth: "50vw", padding: "10px"}}>
                <div id="image" className='entitymodal-image-wrapper'>
                  <img  onError={(e) => {(e.target as HTMLImageElement).src=MISSING_IMAGE;}} 
                        src={item.images['Poster Art'].url}
                  />
                </div>
              </Grid>

              {/* Right side text */}
              <Grid item xs direction={"column"}  className="entitymodal-text-wrapper"
                  // Toggle description on xs size
                  sx={{'#desc': {display: {xs: "none", sm: "block"}}}}>
                <div>
                  <Button size="small" id='entitymodal-close-icon' variant="contained" startIcon={<CloseIcon />}
                          onClick={handleClose} />
                  <h2>{item.title}</h2>
                  <h4>{item.programType.charAt(0).toUpperCase() + item.programType.slice(1)}, {item.releaseYear}</h4>
                  <p><i>fun fact</i></p>
                </div>
                <p id='desc'>{item.description}{item.description}{item.description}{item.description}</p> 
              </Grid>
            </Grid>

            {/* Toggles on on xs display size */}
            <Grid className='entitymodal-text-description-mobile' sx={{display: {xs: "block", sm: "none"}}}>
              <p id='desc'>{item.description}{item.description}{item.description}{item.description}</p> 
            </Grid>

          </div>
      </Modal>
    </>
    
  );
}
export default EntityModal;