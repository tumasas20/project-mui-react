import React from 'react';
import { Container, Stack } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import SaveIcon from '@mui/icons-material/Save';

const LoadingBtnPage = () => (
  <Container sx={{
    my: 6, p: 4, boxShadow: 3, borderRadius: 2,
  }}
  >
    <Stack spacing={2} direction="row">
      <LoadingButton variant="outlined">Submit</LoadingButton>
      <LoadingButton loading variant="outlined">Submit</LoadingButton>

      <LoadingButton variant="outlined" loadingIndicator="Loading...">Fetch data</LoadingButton>
      <LoadingButton loading variant="outlined" loadingIndicator="Loading...">Fetch data</LoadingButton>

      <LoadingButton
        variant="outlined"
        loadingPosition="start"
        startIcon={<SaveIcon />}
      >
        Fetch data
      </LoadingButton>
      <LoadingButton
        variant="outlined"
        loadingPosition="start"
        startIcon={<SaveIcon />}
        loading
      >
        Fetch data
      </LoadingButton>
    </Stack>
  </Container>
);

export default LoadingBtnPage;
