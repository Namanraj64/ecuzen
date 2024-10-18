import React from 'react';
import { Grid, Typography, Box, Card, CardContent } from '@mui/material';
import WebIcon from '@mui/icons-material/Web'; // For Web Development
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'; // For App Development
import CloudIcon from '@mui/icons-material/Cloud'; // For Cloud Computing
import CampaignIcon from '@mui/icons-material/Campaign'; // For Digital & Media Marketing
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'; // For B2B, B2C & Reseller Industry
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing'; // For Manufacturing Industry
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'; // For Banking & Finance Industry
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // For E-commerce Industry

// Sample data for services
const services = [
  { title: 'Web Development', icon: <WebIcon fontSize="large" /> },
  { title: 'App Development', icon: <PhoneIphoneIcon fontSize="large" /> },
  { title: 'Cloud Computing', icon: <CloudIcon fontSize="large" /> },
  { title: 'Digital & Media Marketing', icon: <CampaignIcon fontSize="large" /> },
  { title: 'B2B, B2C & Reseller Industry', icon: <BusinessCenterIcon fontSize="large" /> },
  { title: 'Manufacturing Industry', icon: <PrecisionManufacturingIcon fontSize="large" /> },
  { title: 'Banking & Finance Industry', icon: <AccountBalanceIcon fontSize="large" /> },
  { title: 'E-commerce Industry', icon: <ShoppingCartIcon fontSize="large" /> },
];

const ServicesSection = () => {
  return (
    <Box sx={{ padding: '40px 20px', backgroundColor: '#f5f5f5' }}>
      {/* Header */}
      <Typography
        variant="h4"
        sx={{ textAlign: 'center', fontWeight: 'bold', mb: 2, color: '#d32f2f' }}
      >
        Our Services & Industries
      </Typography>

      {/* Services Grid */}
      <Grid container spacing={3} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                textAlign: 'center',
                background: 'linear-gradient(to bottom, #fff, #f8d7da)',
                borderRadius: '12px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              }}
            >
              <CardContent>
                {/* Icon (Material-UI Icon) */}
                <Box sx={{ mb: 2 }}>
                  {service.icon}
                </Box>

                {/* Title */}
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {service.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesSection;
