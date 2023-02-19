import React, { useState } from 'react';
import {
  Container,
  Stack,
  Chip,
  Avatar,
} from '@mui/material';
import FaceIcon from '@mui/icons-material/Face';

const ChipPage = () => {
  const [chips, setChips] = useState(['chip 1', 'chip 2', 'chip 3']);
  const handleDelete = (chipToDelete: string) => {
    setChips(() => chips.filter((chip) => chip !== chipToDelete));
  };
  return (
    <Container sx={{
      my: 6, p: 4, boxShadow: 3, borderRadius: 2,
    }}
    >
      <Stack direction="row" spacing={1}>
        <Chip
          label="Chip"
          color="primary"
          size="small"
          icon={<FaceIcon />}
        />
        <Chip
          label="Chip outlined"
          color="secondary"
          size="small"
          variant="outlined"
          avatar={<Avatar>V</Avatar>}
        />
        <Chip
          label="Click"
          color="success"
          onClick={() => alert('Cliked')}
        />
        <Chip
          label="Click"
          color="error"
          onClick={() => alert('Cliked')}
          onDelete={() => alert('Delete handler called')}
        />
        {
            chips.map((chip) => (
              <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
            ))
        }
      </Stack>
    </Container>

  );
};
export default ChipPage;
