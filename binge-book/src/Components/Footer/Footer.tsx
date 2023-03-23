import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";
/* MUI */
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
/* Constants */
import { FRONTEND_ENDPOINTS } from 'config';


const Footer = () => {
  const theme = useTheme();

  return (
    <footer className='footer-wrapper'>
      Footer
    </footer>
  );
}
export default Footer;