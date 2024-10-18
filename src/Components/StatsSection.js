import React from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';
import { styled } from '@mui/system';
import logo from '../Assest/white-logo-r.jpg'

const StyledPaper = styled(Paper)({
  padding: '20px',
  borderRadius: '10px',
  textAlign: 'center',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  border: '1px solid #FF0000', // Red border color as in your image
  backgroundColor: '#ffffff',
  transition: '0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
  },
});

const data = [
  { count: '5+', label: 'Years Of Experience' },
  { count: '1200+', label: 'Satisfied Clients' },
  { count: '950+', label: 'Active Softwares' },
  { count: '250+', label: 'Active Applications' },
  { count: '4.5', label: 'Clients Rating' },
  { count: '100+', label: 'Associate Partners' },
  { count: '59+', label: "Expert's Team" },
];

const StatsSection = () => {
  return (
    <Box sx={{ p: 4, backgroundColor: '#F8F8F8' }}>
      <Grid container spacing={3} justifyContent="center">
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <StyledPaper>
              <Typography variant="h4" color="error" sx={{ fontWeight: 'bold' }}>
                {item.count}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: '#000', fontWeight: 'bold', mt: 1 }}>
                {item.label}
              </Typography>
            </StyledPaper>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#000' }}>
          Powered By
        </Typography>
        <img src={logo} alt="Logo" style={{ width: '150px', marginTop: '10px' }} />
      </Box>
    </Box>
  );
};

export default StatsSection;
