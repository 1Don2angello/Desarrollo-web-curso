// src/components/Header.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Box component="img" src="/path/to/logo.png" alt="Logo" sx={{ height: 40, mr: 2 }} />
        <Typography variant="h6">
          default
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
