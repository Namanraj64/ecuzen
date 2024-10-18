import React from 'react';
import { Container, Grid, Box, Typography, Card, CardContent } from '@mui/material';
import ServiceIcon from '../Assest/our-service.png';  // Replace with actual icon import
import MottoIcon from '../Assest/our-motto.png';  // Replace with actual icon import
import ApproachIcon from '../Assest/our-approach.png';  // Replace with actual icon import

const MissionSection = () => {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', padding: '50px 0' }}>
      <Container>
        <Grid container spacing={4}>
          
          {/* Our Service Card */}
          <Grid item xs={12} md={4}>
            <Card sx={{ padding: '20px', backgroundColor: '#fff', height: '100%' }}>
              <Box display="flex" justifyContent="center">
                <img src={ServiceIcon} alt="services icon" width={50} height={50} />
              </Box>
              <CardContent>
                <Typography variant="h5" align="center" gutterBottom>
                  Our Service
                </Typography>
                <Typography variant="body1" align="center">
                  We are the top growing software development company that is dedicated to delivering the most 
                  innovative and simplified solutions to businesses across various industries. With our expertise 
                  in the area of development technologies and a client-centric approach, we strive to empower 
                  organisations and drive digital transformation.
                </Typography>
                <Typography variant="body1" align="center" mt={2}>
                  At Ecuzen, we offer a wide range of software services that are designed to meet the unique needs 
                  and challenges of our clients. Our talented team of software engineers, web designers, and domain 
                  experts collaborate closely with businesses to understand their objectives and develop the best 
                  software development solutions that propel growth and efficiency.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          {/* Our Motto Card */}
          <Grid item xs={12} md={4}>
            <Card sx={{ padding: '20px', backgroundColor: '#fff', height: '100%' }}>
              <Box display="flex" justifyContent="center">
                <img src={MottoIcon} alt="motto icon" width={50} height={50} />
              </Box>
              <CardContent>
                <Typography variant="h5" align="center" gutterBottom>
                  Our Motto
                </Typography>
                <Typography variant="body1" align="center">
                  Our motto is to build the best software that fulfills our client's needs. We firmly believe in 
                  the transformative power of technology and its ability to unlock endless possibilities for businesses 
                  and individuals alike.
                </Typography>
                <Typography variant="body1" align="center" mt={2}>
                  Through our collaborative and client-centric approach, we aim to build strong and lasting partnerships.
                  We believe in open and transparent communication, actively listening to our clients' requirements and aspirations.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          {/* Our Approach Card */}
          <Grid item xs={12} md={4}>
            <Card sx={{ padding: '20px', backgroundColor: '#fff', height: '100%' }}>
              <Box display="flex" justifyContent="center">
                <img src={ApproachIcon} alt="business approach icon" width={50} height={50} />
              </Box>
              <CardContent>
                <Typography variant="h5" align="center" gutterBottom>
                  Our Approach
                </Typography>
                <Typography variant="body1" align="center">
                  At Ecuzen Software, our business approach is driven by three key principles: Collaboration, 
                  Innovation, and Excellence.
                </Typography>
                <Typography variant="body1" align="center" mt={2}>
                  Collaboration: We foster open and transparent communication with our clients, actively involving them 
                  throughout the development journey.
                </Typography>
                <Typography variant="body1" align="center" mt={2}>
                  Innovation: We embrace emerging technologies, industry trends, and best practices to bring cutting-edge 
                  solutions to our clients.
                </Typography>
                <Typography variant="body1" align="center" mt={2}>
                  Excellence: We are committed to delivering excellence in everything we do, from the initial consultation 
                  to the final implementation.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default MissionSection;
