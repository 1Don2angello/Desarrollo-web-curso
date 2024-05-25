//import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import NewsSection from './components/NewsSection';
import OffersSection from './components/OffersSection';
import Footer from './components/Footer';
import { Container, Box, Grid, Typography, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';
import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          'html, body': {
            margin: 0,
            padding: 0,
            width: '100%',
            height: '100%',
          },
          '#root': {
            width: '100%',
            height: '100%',
          },
          '*': {
            boxSizing: 'border-box',
          },
        }}
      />
      <Container maxWidth="lg">
        <Header />
        <Box sx={{ mt: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={7}>
              <Banner />
            </Grid>
            <Grid item xs={12} md={5}>
              <NewsSection />
            </Grid>
          </Grid>
          <Box sx={{ mt: 4 }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontFamily: 'Roboto',
                fontSize: '16px',
                fontWeight: 700,
                lineHeight: '18.75px',
                textAlign: 'left',
              }}
            >
              Estrenos
            </Typography>
            <OffersSection />
          </Box>
          <Box sx={{ mt: 4 }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontFamily: 'Roboto',
                fontSize: '16px',
                fontWeight: 700,
                lineHeight: '18.75px',
                textAlign: 'left',
              }}
            >
              Ofertas
            </Typography>
            <OffersSection />
          </Box>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
