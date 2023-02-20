import React from 'react';
import {
  Stack,
  Container,
  CircularProgress,
  LinearProgress,
} from '@mui/material';

const ProgressPage = () => (
  <Container sx={{
    my: 6, p: 4, boxShadow: 3, borderRadius: 2,
  }}
  >
    <Stack spacing={2}>
      <CircularProgress />
      <CircularProgress color="success" />
      <CircularProgress variant="determinate" value={60} />

      <LinearProgress />
      <LinearProgress color="success" />
      <LinearProgress variant="determinate" value={60} />
    </Stack>
  </Container>
);

export default ProgressPage;
