import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import Navbar from 'components/partials/navbar';

const NavbarLayout = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Navbar />
    <Toolbar />
    <Box sx={{ flexGrow: 1 }}>
      <Outlet />
    </Box>
  </Box>
);

export default NavbarLayout;
