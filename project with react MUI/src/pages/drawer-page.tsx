import React, { useState } from 'react';
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const DrawerPage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Container sx={{ my: 4 }}>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => setIsDrawerOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box
          p={2}
          width="250px"
          textAlign="center"
          role="presentation"
        >
          <Typography sx={{ my: 8 }} variant="h6" component="div">
            SideBar
          </Typography>
        </Box>

      </Drawer>
    </Container>
  );
};
export default DrawerPage;
