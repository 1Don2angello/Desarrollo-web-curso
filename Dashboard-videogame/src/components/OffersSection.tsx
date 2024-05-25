// src/components/OffersSection.tsx
import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, Card, CardContent, CardMedia, useMediaQuery, useTheme } from '@mui/material';
import './OffersSection.css'; 

const offers = [
  { title: "The Witcher 3 Wild Hunt", genre: "Fighting, Action", },
  { title: "Call of Duty Modern warfare II", genre: "Fighting, Action" },
  { title: "NBA 2K23", genre: "Sport" },
  { title: "Pes 2023", genre: "Sport" },
  { title: "GTA VI", genre: "Fighting, Action" },
];

const OffersSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTabletOrDesktop = useMediaQuery(theme.breakpoints.up('sm'));
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? offers.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === offers.length - 1 ? 0 : prevIndex + 1));
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
            {offers.map((offer, index) => (
              <Box key={index} className="slider-item">
                <Card sx={{ height: '408.32px', width: '327px', mx: 'auto' }}>
                  <CardMedia
                    component="img"
                    height="288.32px" // Ajustar la imagen para cubrir el espacio restante
                    image={`/img/offers/${offer.title.replace(/\s+/g, '-').toLowerCase()}.png`}
                    alt={offer.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ height: '120px', backgroundColor: '#24333B' }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontFamily: 'Roboto',
                        fontSize: '16px',
                        fontWeight: 700,
                        lineHeight: '18.75px',
                        textAlign: 'left',
                      }}
                    >
                      {offer.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        fontFamily: 'Roboto',
                        fontSize: '13px',
                        fontWeight: 700,
                        lineHeight: '15.23px',
                        textAlign: 'left',
                      }}
                    >
                      {offer.genre}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
          <Box className="pagination">
            {offers.map((_, index) => (
              <Box
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </Box>
        </Box>
      ) : (
        <Box className="scroll-container">
          {offers.map((offer, index) => (
            <Card key={index} sx={{ height: '290px', width: '226px', mr: 2, flex: '0 0 auto' }}>
              <CardMedia
                component="img"
                height="170"
                image={`/img/offers/${offer.title.replace(/\s+/g, '-').toLowerCase()}.png`}
                alt={offer.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ height: isTabletOrDesktop ? '120px' : 'auto', backgroundColor: '#24333B' }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: 'Roboto',
                    fontSize: isMobile ? '16px' : '14px',
                    fontWeight: 700,
                    lineHeight: isMobile ? '18.75px' : '16.41px',
                    textAlign: isMobile ? 'left' : 'center',
                  }}
                >
                  {offer.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontFamily: 'Roboto',
                    fontSize: isMobile ? '13px' : '11px',
                    fontWeight: 700,
                    lineHeight: isMobile ? '15.23px' : '12.89px',
                    textAlign: isMobile ? 'left' : 'center',
                  }}
                >
                  {offer.genre}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default OffersSection;
