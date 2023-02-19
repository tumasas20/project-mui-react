import React from 'react';
import {
  Stack, Box, Container, Divider, Grid, Paper,
} from '@mui/material';

const PaperPage = () => (
  <Container sx={{
    mt: 4, pt: 4, pb: 4, boxShadow: 3, borderRadius: 2, backgroundColor: 'gray.A200',
  }}
  >
    <Paper sx={{ padding: '32px' }} elevation={4}>
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
      <Grid container my={4} rowSpacing={2} columnSpacing={1}>
        <Grid item xs={6}><Box bgcolor="primary.light" p={2}>Item 1</Box></Grid>
        <Grid item xs={6}><Box bgcolor="primary.light" p={2}>Item 2</Box></Grid>
        <Grid item xs={6}><Box bgcolor="primary.light" p={2}>Item 3</Box></Grid>
        <Grid item xs={6}><Box bgcolor="primary.light" p={2}>Item 4</Box></Grid>
      </Grid>
    </Paper>
  </Container>
);

export default PaperPage;
