import React from 'react';
import {
  Typography,
  Stack,
  Container,
  Link,
} from '@mui/material';

const HomePage = () => (
  <Container sx={{
    my: 6, boxShadow: 3, borderRadius: 2, paddingBottom: 2,
  }}
  >
    <Typography variant="h2" component="h1" sx={{ textAlign: 'center', mb: 2 }}>MUI library learning project</Typography>
    <Stack sx={{ gap: 1 }}>
      <Link href="https://mui.com/material-ui/customization/default-theme/" target="_blank">Default theme</Link>
      <Link href="https://mui.com/system/getting-started/the-sx-prop/" target="_blank">
        sx prop and it`s features
      </Link>
    </Stack>
  </Container>
);

export default HomePage;
