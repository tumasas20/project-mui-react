import React, { useState } from 'react';
import {
  Box, TextField, MenuItem, Container,
} from '@mui/material';

const SelectPage = () => {
  const [country, setCountries] = useState<string[]>([]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setCountries(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <Container sx={{
      pt: 4, boxShadow: 3, pb: 4, mt: 4, borderRadius: 2,
    }}
    >
      <Box width="250px">
        <TextField
          label="Select Country"
          select
          value={country}
          onChange={handleChange}
          fullWidth
          SelectProps={{
            multiple: true,
          }}
          size="small"
          color="secondary"
          helperText="Please select your country"
          error
        >
          <MenuItem value="LT">Lithuania</MenuItem>
          <MenuItem value="Us">USA</MenuItem>
          <MenuItem value="AU">Australia</MenuItem>
        </TextField>
      </Box>
    </Container>
  );
};
export default SelectPage;
