// src/components/Footer.jsx
import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, YouTube } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ p: 2, textAlign: 'center', borderTop: '1px solid #ddd', mt: 4 }}>
      <Box>
        <IconButton color="inherit" href="https://facebook.com">
          <Facebook />
        </IconButton>
        <IconButton color="inherit" href="https://twitter.com">
          <Twitter />
        </IconButton>
        <IconButton color="inherit" href="https://instagram.com">
          <Instagram />
        </IconButton>
        <IconButton color="inherit" href="https://youtube.com">
          <YouTube />
        </IconButton>
      </Box>
      <Typography variant="body1">©2024 Fernando Kumul</Typography>
      <Box>
        <Typography variant="body2" component="span" sx={{ m: 1 }}>Info</Typography>
        <Typography variant="body2" component="span" sx={{ m: 1 }}>Support</Typography>
        <Typography variant="body2" component="span" sx={{ m: 1 }}>News</Typography>
        <Typography variant="body2" component="span" sx={{ m: 1 }}>Terms of use</Typography>
        <Typography variant="body2" component="span" sx={{ m: 1 }}>Privacy Policy</Typography>
      </Box>
    </Box>
  );
}

export default Footer;
