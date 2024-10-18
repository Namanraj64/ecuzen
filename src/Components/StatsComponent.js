import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PeopleIcon from '@mui/icons-material/People';

const stats = [
  { number: '2000+', label: 'Clients', icon: <GroupIcon fontSize="large" sx={{ color: '#FF4C4C' }} /> },
  { number: '1400+', label: 'Projects', icon: <LightbulbIcon fontSize="large" sx={{ color: '#FF4C4C' }} /> },
  { number: '24', label: 'Hours Of Support', icon: <SupportAgentIcon fontSize="large" sx={{ color: '#FF4C4C' }} /> },
  { number: '70+', label: 'Hard Workers', icon: <PeopleIcon fontSize="large" sx={{ color: '#FF4C4C' }} /> },
];

const StatsComponent = () => {
  return (
    <Box sx={{ bgcolor: '#f5f5f5', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                sx={{
                  bgcolor: '#fff',
                  p: 4,
                  borderRadius: '8px',
                  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                  textAlign: 'center',
                  transition: '0.3s',
                  '&:hover': {
                    boxShadow: '0px 6px 24px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                {stat.icon}
                <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#101229', mt: 2 }}>
                  {stat.number}
                </Typography>
                <Box
                  sx={{
                    width: '50px',
                    height: '2px',
                    bgcolor: '#FF4C4C',
                    mx: 'auto',
                    my: 1,
                  }}
                />
                <Typography variant="body1" sx={{ color: '#666' }}>
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};


export default StatsComponent;
