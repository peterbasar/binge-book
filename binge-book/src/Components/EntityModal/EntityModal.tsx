import React, { useEffect } from 'react';
import './EntityModal.css';
/* MUI */
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import CircularProgress from '@mui/material/CircularProgress';
/* Constants */
import { dataItemInterface } from 'Components/DataManager/DataManager.store';
import { MISSING_IMAGE } from 'Assets/Images';
/* Components and functions */
import getFunFact from 'Api/getFunFact';
import UnhideOnViewportWrapper from 'Animations/UnhideOnViewportWrapper';


interface EntityModalInterface {
  item: dataItemInterface,
  children: React.ReactNode,
}


const EntityModal = ({item, children}: EntityModalInterface) => {
  let theme = useTheme();

  const [open, setOpen] = React.useState(false);
  const [requested, setRequested] = React.useState<Boolean>(false);
  const [reqStatus, setReqStatus] = React.useState<number>(0);
  const [reqResponse, setReqResponse] = React.useState<string>("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  /* Request fun fact when the modal opens */
  useEffect(()=>{
    if (open && !requested){
      getFunFact({
        num: item.releaseYear,
        setStatus: (val: number)=>{setReqStatus(val)},
        setResponse: (val: string)=>{setReqResponse(val)},
      }).then(()=>{
        setRequested(true);
      });
    }  
  }, [open, item.releaseYear, requested])

  return (
    <>
      <div className='entitymodal-anchor' onClick={handleOpen}>{children}</div>
      <Modal
          open={open}
          onClose={handleClose}
          
          className="entitymodal-modal"
        >
          <UnhideOnViewportWrapper>
          <div className='entitymodal-box'>         

              <Grid container>

                {/* Close modal button */}
                <Grid item xs={12} margin={1}>
                  <Button size="small" className='entitymodal-close-icon' 
                          data-testid={"entitymodal-close-icon"}
                          variant="contained"
                          onClick={handleClose}>
                    <CloseIcon />
                  </Button>
                </Grid>

                <Grid container sx={{height: {xs: "200px", sm: "360px"}}}>

                  {/* Image */}
                  <Grid style={{height: "inherit", maxWidth: "50vw", padding: "10px"}}>
                    <div id="image" className='entitymodal-image-wrapper'>
                      <img  onError={(e) => {(e.target as HTMLImageElement).src=MISSING_IMAGE;}} 
                            src={item.images['Poster Art'].url}
                            alt={`Poster of ${item.title}`}
                      />
                    </div>
                  </Grid>

                  {/* Right side text */}
                  <Grid item xs height={"inherit"} overflow={"auto"}
                      // Toggle description on xs size
                      sx={{
                        '#desc': {display: {xs: "none", sm: "block"}},
                        '#title': {fontSize: {xs: "large", sm: "larger"}},
                      }}>

                    <Grid container>
                      <Grid item xs={12}>
                        <div className="entitymodal-text-wrapper">
                          <h2 id='title'>{item.title}</h2>
                          <h4>{item.programType.charAt(0).toUpperCase() + item.programType.slice(1)}, {item.releaseYear}</h4>
                          
                          {/* Handle requested fact */}
                          <p>
                            { reqStatus === 200
                              ? (<i>{reqResponse}</i>) 
                              : ( reqStatus === 0
                                  ? ((<span style={{color: theme.palette.primary.main}}>
                                        <CircularProgress size={12} /> <i>Loading interesting fact</i>
                                      </span>))
                                  : ((<span style={{color: theme.palette.error.main}}>
                                        <i>Failed requesting an interesting fact</i>
                                      </span>))
                                )
                            }
                            
                          </p>
                        </div>
                      </Grid>
                      <Grid padding={1} item xs={12}>
                        <p id='desc'>{item.description}</p> 
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              {/* Toggles on on xs display size */}
              <Grid className='entitymodal-text-description-mobile' sx={{display: {xs: "block", sm: "none"}}}>
                <p id='desc'>{item.description}</p> 
              </Grid>

            </div>
          </UnhideOnViewportWrapper>
      </Modal>
    </>
    
  );
}
export default EntityModal;