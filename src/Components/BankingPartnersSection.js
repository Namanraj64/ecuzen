import React from 'react';
import { Grid, Typography, Box, CardMedia, Container } from '@mui/material';
import Pan from '../Assest/uti-pan.png'
import Banking from "../Assest/Real-Estate-Financing-Options.jpg"

// Sample data for banking partners (update with your actual paths)
const bankingPartners = [
  { name: 'UTI Panservice', img: Pan },
  { name: 'NSDL', img: Pan},
  { name: 'IDFC First Bank', img: Pan },
  { name: 'ICICI Bank', img: Pan },
  { name: 'RBL Bank', img: Pan },
  { name: 'Yes Bank', img: Pan },
];

const BankingPartnersSection = () => {
  return (
    <Box sx={{ backgroundColor: '#fff', padding: '40px 0' }}>
      {/* Background Image with Overlay */}
      <Box
        sx={{
          backgroundImage: `url(${Banking})`, // Update this path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '60px 20px',
          position: 'relative',
          mb: 4,
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay
          }}
        />
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography
            variant="h4"
            sx={{
              textAlign: 'center',
              fontWeight: 'bold',
              color: '#fff',
              mb: 2,
            }}
          >
            Our Banking Partners
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              color: '#fff',
              fontSize: '1.1rem',
              lineHeight: '1.6',
            }}
          >
            At Ecuzem Software, we believe in the power of collaboration and fostering strong partnerships
            to drive innovation and deliver exceptional software solutions. We have strategically forged
            alliances with a diverse range of industry-leading companies, organizations, and technology providers 
            to complement our expertise and enhance the value we bring to our clients.
          </Typography>
        </Container>
      </Box>

      {/* Banking Partners Grid */}
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="center">
          {bankingPartners.map((partner, index) => (
            <Grid item xs={6} sm={4} md={2} key={index}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '120px',
                  backgroundColor: '#f9f9f9',
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                  p: 2,
                }}
              >
                <CardMedia
                  component="img"
                  image={partner.img}
                  alt={partner.name}
                  sx={{ maxHeight: '80px', objectFit: 'contain' }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default BankingPartnersSection;
