// src/App.tsx
import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import NewsSection from './components/NewsSection';
import OffersSection from './components/OffersSection';
import Footer from './components/Footer';
import { Container, Box, Grid, Typography } from '@mui/material';

const App = () => {
  return (
    <Container maxWidth="lg">
      <Header />
      <Box sx={{ mt: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Banner />
          </Grid>
          <Grid item xs={12} md={4}>
            <NewsSection />
          </Grid>
        </Grid>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" gutterBottom>Estrenos</Typography>
          <OffersSection />
        </Box>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" gutterBottom>Ofertas</Typography>
          <OffersSection />
        </Box>
      </Box>
      <Footer />
    </Container>
  );
}

export default App;
