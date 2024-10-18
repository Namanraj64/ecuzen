import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import AboutUs from '../Assest/about-us.jpg'

export const AboutCompany = () => {
  return (
    <>
    <Box sx={{ backgroundColor: '#0A1929', color: 'white', padding: '40px' }}>
      <Grid container spacing={2} alignItems="center">
        
        {/* Left side: Text content */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            India's Best Software Development Company
          </Typography>
          <Typography variant="body1" gutterBottom>
            Ecuzon Software is the best software development company that is committed
            to empowering businesses with cutting-edge technology solutions. With a strong focus
            on innovation, we are strongly determined to deliver high-quality software that transforms
            businesses and drives digital success.
          </Typography>
          <Typography variant="body1" gutterBottom>
            At Ecuzon Software, we are dedicated to delivering exceptional software solutions that empower
            businesses to achieve their goals. Partner with us to transform your vision into reality and
            embark on a digital journey of success.
          </Typography>
          <Typography variant="body1" gutterBottom>
            We provide the best website development, Android App development, Digital Media Marketing, All
            types of Fintech Services, API Services, Customized software development, and many more.
          </Typography>
          <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
            More About Us!
          </Button>
        </Grid>

        {/* Right side: Image */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            sx={{
              width: '100%',
              borderRadius: '8px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
            }}
            alt="Team collaboration"
            src={AboutUs} // Replace this with your actual image path
          />
        </Grid>
      </Grid>
    </Box>
  
    </>
  )
}
