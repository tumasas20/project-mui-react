import React from 'react';
import { Box, Typography } from '@mui/material';

const TypographyPage = () => (
  <Box sx={{ textAlign: 'center', my: 5 }}>
    <Typography variant="h1">h1 Heading</Typography>
    <Typography variant="h2">h2 Heading</Typography>
    <Typography variant="h3">h3 Heading</Typography>
    <Typography variant="h4" component="h1" gutterBottom>h4 Heading</Typography>
    <Typography variant="h5">h5 Heading</Typography>
    <Typography variant="h6">h6 Heading</Typography>
    <Typography variant="subtitle1">subtitle1</Typography>
    <Typography variant="subtitle2">subtitle2</Typography>
    <Typography>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Repellat omnis eius animi quis corporis reprehenderit
      officiis pariatur quisquam debitis iste delectus ipsam
      sit accusamus, nihil quasi, vero assumenda tempora ea
      facilis molestias, ratione eaque?
    </Typography>
    <Typography variant="body2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Repellat omnis eius animi quis corporis reprehenderit
      officiis pariatur quisquam debitis iste delectus ipsam
      sit accusamus, nihil quasi, vero assumenda tempora ea
      facilis molestias, ratione eaque?
    </Typography>
  </Box>
);

export default TypographyPage;
