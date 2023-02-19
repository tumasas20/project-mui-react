import React from 'react';
import {
  Stack, Box, Container, Divider,
} from '@mui/material';

const StackPage = () => (
  <Container sx={{
    mt: 4, pt: 4, pb: 4, boxShadow: 3, borderRadius: 2,
  }}
  >
    <Stack
      sx={{ border: '1px solid' }}
      direction="row"
      spacing={2}
      divider={<Divider orientation="vertical" flexItem />}
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
    </Stack>
  </Container>
);

export default StackPage;
