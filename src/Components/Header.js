import { Grid } from '@mui/material';
import React from 'react';
import HeadImg from '../Assest/header_img.png';

const Header = () => {
  return (
    <>
      <Grid container style={{background:'#6f42c1'}}>
        <Grid item xs={12} md={5}>
          <div style={{ padding: '20px' , alignItems:'center' , paddingTop:'30px'}} >
            <h4 style={{paddingTop:"10rem" , paddingLeft:'3rem'}}>The Best B2B, B2C, and Reseller Software <br></br>
                Development Company in INDIA</h4>
            <p>
            Transforming Ideas into Reality: India's Leading Web Development Company
            </p>


          </div>
        </Grid>
        <Grid item xs={12} md={7}>
          <img
            src={HeadImg}
            alt="header"
            style={{ width: '100%', height: 'auto' }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
