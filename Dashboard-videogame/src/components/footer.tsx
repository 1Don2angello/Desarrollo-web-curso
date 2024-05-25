import React from 'react';
import { Box, Typography, IconButton, Container } from '@mui/material';
import { Facebook, Twitter, Instagram, YouTube } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ width: '100%', backgroundColor: '#24333B', color: '#fff', mt: 4, pt: 2, pb: 2 }}>
      <Container maxWidth={false} disableGutters>
        <Box sx={{ textAlign: 'center', py: 2 }}>
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
      </Container>
    </Box>
  );
}

export default Footer;
