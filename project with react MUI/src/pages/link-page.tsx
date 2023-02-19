import React from 'react';
import {
  Stack, Link, Typography, Container,
} from '@mui/material';

const LinkPage = () => (
  <Container sx={{
    my: 6, ml: 6, boxShadow: 3, borderRadius: 2, p: 2,
  }}
  >
    <Stack spacing={2} direction="row" m={4}>
      <Link href="#" variant="body2">Link</Link>
      <Link href="#" color="secondary" underline="hover">Secondary</Link>
      <Typography variant="h6">
        <Link href="#" color="secondary" underline="none">Secondary</Link>
      </Typography>
    </Stack>
  </Container>
);

export default LinkPage;
