import React, { useState } from 'react';
import './Header.css';
import { Link } from "react-router-dom";
/* MUI */
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
/* Constants */
import { FRONTEND_ENDPOINTS } from 'config';
import { useAppStore } from 'App.store';


const Header = () => {
  const [mobileNavigationOn, setMobileNavigationOn] = useState<boolean>(false);
  const toggleMobileNavigation = () => {
    setMobileNavigationOn(!mobileNavigationOn);
  } 

  /* Zustand */
  const activeEndpoint = useAppStore((state) => state.activeEndpoint);

  const theme = useTheme();


  return (
    <Grid container spacing={0} style={{backgroundColor: theme.palette.primary.main}}>
      {/* Navigation */}
      <Grid item xs={2} md={4} 
            /* Toggle for desktop-mobile navigation */
            sx={{
              "#header-desktop": {display: {"xs": "none", "md": "block"}},
              "#header-mobile": {display: {"xs": "block", "md": "none"}}
            }}
      >

        {/* Desktop navigation */}
        <nav id="header-desktop" className='header-desktop-navigation'>
          <Link className={activeEndpoint == FRONTEND_ENDPOINTS.HOMEPAGE ? "header-link-active" : ""} 
                to={FRONTEND_ENDPOINTS.HOMEPAGE}>
            Home
          </Link>
          <Link className={activeEndpoint == FRONTEND_ENDPOINTS.MOVIES ? "header-link-active" : ""}
                to={FRONTEND_ENDPOINTS.MOVIES}>
                  Movies
          </Link>
          <Link className={activeEndpoint == FRONTEND_ENDPOINTS.SERIES ? "header-link-active" : ""}
                to={FRONTEND_ENDPOINTS.SERIES}>
                  Series
          </Link>
        </nav>

        {/* Mobile navigation */}
        <div id="header-mobile">
            <MenuIcon className='header-mobile-navigation-menu-button' fontSize='medium' 
                      onClick={()=>{toggleMobileNavigation()}}
            />
        </div>

      </Grid>

      {/* Logo */}
      <Grid item xs={8} md={4}>
          <div className='header-logo-text-wrapper'>
            <Link to={FRONTEND_ENDPOINTS.HOMEPAGE}>BingeBook</Link>
          </div>
      </Grid>

      {/* Mobile navigation panel */}
      <div style={{position: "relative", width: "100vw"}}>
        <Grid item xs={12} sx={{display: {"xs": mobileNavigationOn ? "block" : "none" , "md": "none"}}}
              className="header-mobile-navigation-wrapper">
            <Grid container className='header-mobile-navigation'>
              <Grid item xs={12}>
                <Link className={activeEndpoint == FRONTEND_ENDPOINTS.HOMEPAGE ? "header-link-active" : ""}
                      to={FRONTEND_ENDPOINTS.HOMEPAGE}>
                  Home
                </Link>              
              </Grid>
              <Grid item xs={12}>
                <Link className={activeEndpoint == FRONTEND_ENDPOINTS.MOVIES ? "header-link-active" : ""}
                      to={FRONTEND_ENDPOINTS.MOVIES}>
                  Movies
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link className={activeEndpoint == FRONTEND_ENDPOINTS.SERIES ? "header-link-active" : ""}
                      to={FRONTEND_ENDPOINTS.SERIES}>
                  Series
                </Link>  
              </Grid>
            </Grid>
        </Grid>
      </div>
    </Grid>
  );
}
export default Header;