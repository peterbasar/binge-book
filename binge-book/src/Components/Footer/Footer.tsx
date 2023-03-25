import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";
/* MUI */
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
/* Constants */
import { FRONTEND_ENDPOINTS, OTHER_LINKS } from 'config';
import { APPSTORE_IMAGE, GOOGLEPLAY_IMAGE, MICROSOFT_IMAGE } from 'Assets/Images';


const Footer = () => {
  const theme = useTheme();

  return (
    <footer className='footer-wrapper'>
      <Grid container gap={2}>
        <Grid xs={12} className="footer-page-links-wrapper">
          <Link to={FRONTEND_ENDPOINTS.HOMEPAGE}>Home</Link>
          <Link to={FRONTEND_ENDPOINTS.HOMEPAGE}>Terms and Conditions</Link>
          <Link to={FRONTEND_ENDPOINTS.HOMEPAGE}>Privacy Policy</Link>
          <Link to={FRONTEND_ENDPOINTS.HOMEPAGE}>Collection Statement</Link>
          <Link to={FRONTEND_ENDPOINTS.HOMEPAGE}>Help</Link>
          <Link to={FRONTEND_ENDPOINTS.HOMEPAGE}>Manage Account</Link>
        </Grid>
        <Grid xs={12}>
          Copyright © 2023 Bingebook. All Rights Reserved
        </Grid>
        <Grid container justifyContent={"space-between"}>
          <Grid item className='footer-social-icons'>
            <a href={OTHER_LINKS.FACEBOOK_LINK} target={"_blank"}><FacebookIcon fontSize='large' /></a>
            <a href={OTHER_LINKS.TWITTER_LINK} target={"_blank"}><TwitterIcon fontSize='large' /></a>
            <a href={OTHER_LINKS.INSTAGRAM_LINK} target={"_blank"}><InstagramIcon fontSize='large' /></a>
          </Grid>
          <Grid item className='footer-store-images-wrapper'>
          {/* APPSTORE_IMAGE, GOOGLEPLAY_IMAGE, MICROSOFT_IMAGE */}
            <a href={OTHER_LINKS.APPSTORE_LINK} target={"_blank"}><img src={APPSTORE_IMAGE} /></a>
            <a href={OTHER_LINKS.PLAYSTORE_LINK} target={"_blank"}><img src={GOOGLEPLAY_IMAGE} /></a>
            <a href={OTHER_LINKS.MICROSOFTSTORE_LINK} target={"_blank"}><img src={MICROSOFT_IMAGE} /></a>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
}
export default Footer;