// src/components/NewsSection.jsx
import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';

const newsItems = [
  { title: "Constructive and destructive waves", description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.", date: "12/03/32" },
  { title: "Constructive and destructive waves", description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.", date: "12/03/32" },
  { title: "Constructive and destructive waves", description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.", date: "12/03/32" },
];

const NewsSection = () => {
  return (
    <Box sx={{
      p: 2,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: { xs: '300px', sm: '350px', md: '400px' }, // Ajusta la altura para diferentes tamaños de pantalla
    }}>
      <Typography variant="h4" gutterBottom>Noticias</Typography>
      {newsItems.map((news, index) => (
        <Card key={index} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h5">{news.title}</Typography>
            <Typography variant="body2" color="text.secondary">{news.description}</Typography>
            <Typography variant="caption" color="text.secondary">{news.date}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default NewsSection;
