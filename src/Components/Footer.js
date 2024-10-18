import React from 'react';
import { Container, Grid, Typography, Box, Link } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram, YouTube, Pinterest, Phone, Email } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#101229', color: '#fff', py: 5 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Information */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Ecuzen®
            </Typography>
            <Typography variant="body2" paragraph>
              We are one of the best B2B, B2C and white label software provider companies in India over the years.
            </Typography>
            <Box display="flex" gap={1}>
              <Facebook />
              <Twitter />
              <LinkedIn />
              <Instagram />
              <YouTube />
              <Pinterest />
            </Box>
          </Grid>

          {/* About and Links */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" gutterBottom>
              About Ecuzen
            </Typography>
            <Box>
              <Link href="#" color="inherit" underline="none">Industries</Link><br />
              <Link href="#" color="inherit" underline="none">Our Services</Link><br />
              <Link href="#" color="inherit" underline="none">Our Software</Link><br />
              <Link href="#" color="inherit" underline="none">Fintech Services</Link><br />
              <Link href="#" color="inherit" underline="none">API Services</Link>
            </Box>
          </Grid>

          <Grid item xs={12} md={2}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box>
              <Link href="#" color="inherit" underline="none">Home</Link><br />
              <Link href="#" color="inherit" underline="none">About Us</Link><br />
              <Link href="#" color="inherit" underline="none">Blogs</Link><br />
              <Link href="#" color="inherit" underline="none">Career</Link><br />
              <Link href="#" color="inherit" underline="none">Contact Us</Link>
            </Box>
          </Grid>

          {/* Services */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" gutterBottom>
              Software Development
            </Typography>
            <Box>
              <Link href="#" color="inherit" underline="none">Software Development India</Link><br />
              <Link href="#" color="inherit" underline="none">Software Development Delhi NCR</Link><br />
              <Link href="#" color="inherit" underline="none">Software Development Jaipur</Link>
            </Box>
          </Grid>

          <Grid item xs={12} md={2}>
            <Typography variant="h6" gutterBottom>
              Digital Marketing
            </Typography>
            <Box>
              <Link href="#" color="inherit" underline="none">Digital Marketing India</Link><br />
              <Link href="#" color="inherit" underline="none">Digital Marketing Delhi NCR</Link><br />
              <Link href="#" color="inherit" underline="none">Digital Marketing Jaipur</Link>
            </Box>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Box display="flex" alignItems="center" gap={1} mb={1}>
              <Phone />
              <Typography variant="body2">+91 9549166444</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <Email />
              <Typography variant="body2">info@ecuzen.com</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
