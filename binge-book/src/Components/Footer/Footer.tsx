import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";
/* MUI */
import Grid from '@mui/material/Grid';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
/* Constants */
import { FRONTEND_ENDPOINTS, OTHER_LINKS } from 'config';
import { APPSTORE_IMAGE, GOOGLEPLAY_IMAGE, MICROSOFT_IMAGE } from 'Assets/Images';
import { COPYRIGHT } from 'config';
/* Comopnents */
import UnhideOnViewportWrapper from 'Animations/UnhideOnViewportWrapper';


const Footer = () => {
  return (
    <UnhideOnViewportWrapper>
      <footer className='footer-wrapper'>
        <Grid container gap={2}>
          <Grid item xs={12} className="footer-page-links-wrapper">
            <Link to={FRONTEND_ENDPOINTS.HOMEPAGE} data-testid="footer-home">Home</Link>
            <Link to={FRONTEND_ENDPOINTS.TERMS_AND_CONDITIONS} data-testid="footer-terms-and-conditions">Terms and Conditions</Link>
            <Link to={FRONTEND_ENDPOINTS.PRIVACY_POLICY} data-testid="footer-privacy-policy">Privacy Policy</Link>
            <Link to={FRONTEND_ENDPOINTS.COLLECTION_STATEMENT} data-testid="footer-collection-statement">Collection Statement</Link>
            <Link to={FRONTEND_ENDPOINTS.HELP} data-testid="footer-help">Help</Link>
            <Link to={FRONTEND_ENDPOINTS.MANAGE_ACCOUNT} data-testid="footer-manage-account">Manage Account</Link>
          </Grid>
          <Grid item xs={12}>
            {COPYRIGHT}
          </Grid>
          <Grid container justifyContent={"space-between"}>
            <Grid item className='footer-social-icons'>
              <a href={OTHER_LINKS.FACEBOOK_LINK} className="footer-facebook-icon" target={"_blank"} rel="noreferrer">
                <FacebookIcon fontSize='large' />
              </a>
              <a href={OTHER_LINKS.TWITTER_LINK} className="footer-twitter-icon" target={"_blank"} rel="noreferrer">
                <TwitterIcon fontSize='large' />
              </a>
              <a href={OTHER_LINKS.INSTAGRAM_LINK} className="footer-instagram-icon" target={"_blank"} rel="noreferrer">
                <InstagramIcon fontSize='large' />
              </a>
            </Grid>
            <Grid item className='footer-store-images-wrapper'>
            {/* APPSTORE_IMAGE, GOOGLEPLAY_IMAGE, MICROSOFT_IMAGE */}
              <a href={OTHER_LINKS.APPSTORE_LINK} target={"_blank"} rel="noreferrer">
                <img src={APPSTORE_IMAGE} alt="Apple app store" />
              </a>
              <a href={OTHER_LINKS.PLAYSTORE_LINK} target={"_blank"} rel="noreferrer">
                <img src={GOOGLEPLAY_IMAGE} alt="Google play store"/>
              </a>
              <a href={OTHER_LINKS.MICROSOFTSTORE_LINK} target={"_blank"} rel="noreferrer">
                <img src={MICROSOFT_IMAGE} alt="Microsoft app store" />
              </a>
            </Grid>
          </Grid>
        </Grid>
      </footer>
    </UnhideOnViewportWrapper>
  );
}
export default Footer;