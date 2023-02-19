import React from 'react';
import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  Container,
} from '@mui/material';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

const NavbarPage = () => (
  <Container sx={{ my: 6 }}>
    <AppBar position="static" sx={{ background: '#94b2d6' }}>
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <CatchingPokemonIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          POKEMONAPP
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit">Features</Button>
          <Button color="inherit">Pricing</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Login</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  </Container>
);

export default NavbarPage;
