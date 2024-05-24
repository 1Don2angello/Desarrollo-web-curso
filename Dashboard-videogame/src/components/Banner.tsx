// src/components/Banner.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const Banner = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: '300px', sm: '350px', md: '400px' },
        backgroundImage: 'url(/img/hero.png)',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '0',
          transform: 'translateY(-50%)',
          width: { xs: '250px', sm: '300px', md: '370px' },
          height: { xs: '80px', sm: '100px', md: '120px' },
          textAlign: 'left',
          bgcolor: 'rgba(0, 0, 0, 0.5)',
          p: 2,
          borderRadius: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h3" component="div" sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }}>FORNITE</Typography>
        <Typography variant="h4" component="div" sx={{ fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem' } }}>CHAPITRE 3 - SAISON 5</Typography>
      </Box>
    </Box>
  );
};

export default Banner;
