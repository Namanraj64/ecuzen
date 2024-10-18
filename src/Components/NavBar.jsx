import { Grid } from '@mui/material';
import React from 'react';
import Logo from '../Assest/logo.png';


const NavBar = () => {
  return (
    <div className="nav-bar" style={{ padding: '10px 20px', backgroundColor: '#f8f8f8' }}>
      <Grid container alignItems="center">
        <Grid item xs={2}>
          <img src={Logo} alt="Logo" style={{ height: '50px' }} />
        </Grid>
        <Grid item xs={10}>
          <ul className="nav-items">
            <li className="nav-item">
              <a href="#">Home</a>
            </li>
            <li className="nav-item">
              <a href="#">About Us</a>
            </li>
            <li className="nav-item">
              <a href="#">What We Do</a>
            </li>
            <li className="nav-item">
              <a href="#">Blogs</a>
            </li>
            <li className="nav-item">
              <a href="#">Career</a>
            </li>
            <li className="nav-item">
              <a href="#">Life @ Ecuzen</a>
            </li>
            <li className="nav-item">
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </Grid>
      </Grid>
    </div>
  );
};

export default NavBar;
