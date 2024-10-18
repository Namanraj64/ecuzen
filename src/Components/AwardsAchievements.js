import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

// Sample award images (Replace with your actual image URLs or import them)
const awards = [
  { src: '/Assest/1.webp', alt: 'Award 1' },
  { src: 'path-to-image2', alt: 'Award 2' },
  { src: 'path-to-image3', alt: 'Award 3' },
  { src: 'path-to-image4', alt: 'Award 4' },
  { src: 'path-to-image5', alt: 'Award 5' },
];

const AwardsAchievements = () => {
  return (
    <Box sx={{ backgroundColor: '#2c3e50', color: '#fff', padding: '50px 20px' }}>
      {/* Heading */}
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
        Our Awards & Achievements
      </Typography>

      {/* Description */}
      <Typography variant="body1" align="center" sx={{ maxWidth: '800px', margin: '0 auto', fontSize: '18px', lineHeight: '1.6' }}>
        At Ecuzan Software, we take great pride in our commitment to providing the best Software Solutions. Our motto is to create innovative websites,
        best Android applications, fintech services, and customized software development. Recognized by prestigious awards, we strive for excellence
        in every project we undertake, ensuring the highest industry standards.
      </Typography>

      {/* Awards Grid */}
      <Grid container spacing={3} justifyContent="center" sx={{ marginTop: '30px' }}>
        {awards.map((award, index) => (
          <Grid item xs={6} sm={4} md={2} key={index}>
            <Paper elevation={3} sx={{ padding: '10px', backgroundColor: 'transparent' }}>
              <img
                src={award.src}
                alt={award.alt}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                }}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AwardsAchievements;
