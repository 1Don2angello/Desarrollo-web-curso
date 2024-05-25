import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import './Banner.css'; // Importa el archivo CSS

const banners = [
  { title: "FORNITE", subtitle: "CHAPITRE 3 - SAISON 5", image: "/img/hero.png" },
  { title: "FORTNITE", subtitle: "CHAPTER 3 - SEASON 5", image: "/img/hero.png" },
  { title: "FORTNITE", subtitle: "CHAPTER 3 - SEASON 6", image: "/img/hero.png" },
];

const Banner: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? banners.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === banners.length - 1 ? 0 : prevIndex + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    if (touchStartX.current - touchEndX.current > 50) {
      handleNext();
    }

    if (touchStartX.current - touchEndX.current < -50) {
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  useEffect(() => {
    if (isMobile) {
      const timer = setInterval(() => {
        handleNext();
      }, 3000);

      return () => clearInterval(timer);
    }
  }, [isMobile, currentIndex]);

  return (
    <Box sx={{ p: 2 }}>
      {isMobile ? (
        <Box className="slider" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
          <Box className="slider-wrapper" sx={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {banners.map((banner, index) => (
              <Box key={index} className="slider-item">
                <Box
                  sx={{
                    position: 'relative',
                    height: '400px',
                    backgroundImage: `url(${banner.image})`,
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
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '250px',
                      height: '80px',
                      textAlign: 'left',
                      bgcolor: 'rgba(0, 0, 0, 0.5)',
                      p: 2,
                      borderRadius: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography variant="h3" component="div" sx={{ fontSize: '1.5rem' }}>{banner.title}</Typography>
                    <Typography variant="h4" component="div" sx={{ fontSize: '1rem' }}>{banner.subtitle}</Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
          <Box className="pagination">
            {banners.map((_, index) => (
              <Box
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            position: 'relative',
            height: { xs: '300px', sm: '350px', md: '400px' },
            backgroundImage: 'url(/img/hero.png)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: { xs: 'center center', sm: 'left center', md: 'left center' },
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
              left: '0', // Alinear a la izquierda en tablet y desktop
              transform: 'translateY(-50%)', // Alinear verticalmente al centro
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
      )}
    </Box>
  );
};

export default Banner;



/* import React from 'react';
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
        backgroundPosition: { xs: 'center center', sm: 'left center', md: 'left center' },
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
          left: '0', // Alinear a la izquierda en todos los tamaños
          transform: 'translateY(-50%)', // Alinear verticalmente al centro
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


/* import React from 'react';
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
        backgroundPosition: { xs: 'center center', sm: 'left center', md: 'left center' },
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
          left: { xs: '50%', sm: '0', md: '0' },
          transform: { xs: 'translate(-50%, -50%)', sm: 'translateY(-50%)', md: 'translateY(-50%)' },
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
 */ 