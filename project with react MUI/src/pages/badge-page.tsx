import React from 'react';
import { Stack, Badge, Container } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';

const BadgePage = () => (
  <Container sx={{
    my: 6, boxShadow: 3, borderRadius: 2, p: 4,
  }}
  >
    <Stack spacing={2} direction="row">
      <Badge badgeContent={5} color="primary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={0} color="secondary" showZero>
        <MailIcon />
      </Badge>
      <Badge badgeContent={100} color="primary" max={999}>
        <MailIcon />
      </Badge>
      <Badge variant="dot" color="primary" invisible>
        <MailIcon />
      </Badge>
    </Stack>
  </Container>
);

export default BadgePage;
