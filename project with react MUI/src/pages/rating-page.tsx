import React, { useState } from 'react';
import { Stack, Container, Rating } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const RatingPage = () => {
  const [value, setValue] = useState<number | null>(3);
  const handleChange = (
    _event: React.ChangeEvent<{}>,
    newValue: number | null,
  ) => {
    setValue(newValue);
  };

  return (
    <Container sx={{
      mt: 4, pt: 4, pb: 4, boxShadow: 3, borderRadius: 2,
    }}
    >
      <Stack spacing={2}>
        <Rating
          value={value}
          onChange={handleChange}
          precision={0.5}
          size="large"
          icon={<FavoriteIcon fontSize="inherit" color="error" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
          // readOnly
          highlightSelectedOnly
        />
      </Stack>
    </Container>
  );
};

export default RatingPage;
