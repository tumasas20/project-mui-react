import React, { useState } from 'react';
import {
  Box, FormControlLabel, Switch, Container,
} from '@mui/material';

const SwitchPage = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <Container sx={{
      mt: 4, pt: 4, pb: 4, boxShadow: 3, borderRadius: 2,
    }}
    >
      <Box>
        <FormControlLabel label="Dark mode" control={<Switch checked={checked} onChange={handleChange} size="small" color="success" />} />
      </Box>
    </Container>
  );
};

export default SwitchPage;
