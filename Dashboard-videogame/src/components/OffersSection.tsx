// src/components/OffersSection.jsx
import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';

const offers = [
  { title: "The Witcher 3: Wild Hunt", genre: "Fighting, Action", price: "$54.3" },
  { title: "Call of Duty Modern warfare II", genre: "Fighting, Action" },
  { title: "NBA 2K23", genre: "Sport" },
  { title: "Pes 2023", genre: "Sport" },
  { title: "GTA VI", genre: "Fighting, Action" },
];

const OffersSection = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2}>
        {offers.map((offer, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={`/path/to/${offer.title.replace(/\s+/g, '-').toLowerCase()}.jpg`}
                alt={offer.title}
              />
              <CardContent>
                <Typography variant="h5">{offer.title}</Typography>
                <Typography variant="body2" color="text.secondary">{offer.genre}</Typography>
                {offer.price && (
                  <Typography variant="subtitle1" color="text.secondary">{offer.price}</Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default OffersSection;
