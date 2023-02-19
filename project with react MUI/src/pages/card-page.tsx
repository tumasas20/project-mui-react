import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
  Container,
} from '@mui/material';

const CardPage = () => (
  <Container sx={{ mt: 4 }}>
    <Box width="300px">
      <Card>
        <CardMedia
          component="img"
          height="140"
          image="https://source.unsplash.com/random"
          alt="unsplash image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Saepe labore fugiat laborum debitis,
            alias fuga ut corporis aperiam,
            quia maxime perferendis ratione eum voluptatem,
            enim repellendus nulla suscipit.
            Nihil, magni?
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn more</Button>
        </CardActions>
      </Card>
    </Box>
  </Container>
);

export default CardPage;
