import React from 'react';
import { Box, Container } from '@mui/material';

const BoxPage = () => (
  <Container sx={{
    mt: 4, pt: 4, pb: 4, boxShadow: 3, borderRadius: 2,
  }}
  >
    <Box sx={{
      backgroundColor: 'primary.main',
      color: 'white',
      height: '100px',
      width: '100px',
      padding: '16px',
      '&:hover': {
        backgroundColor: 'primary.light',
      },
    }}
    >
      BoxPage
    </Box>
    <Box display="flex" height="100px" width="100px" bgcolor="success.light" p={2} />
  </Container>
);

export default BoxPage;
