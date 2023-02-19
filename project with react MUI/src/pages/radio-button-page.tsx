import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormHelperText,
  Container,
} from '@mui/material';

const RadioButtonPage = () => {
  const [value, setValue] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <Container sx={{
      pt: 2, pb: 2, boxShadow: 3, mt: 4, borderRadius: 2,
    }}
    >
      <Box>
        <FormControl error>
          <FormLabel id="job-experience-groiup-label">
            Years of experience
          </FormLabel>
          <RadioGroup
            name="job-experience-group"
            aria-labelledby="job-experience-groiup-label"
            value={value}
            onChange={handleChange}
            row
          >
            <FormControlLabel control={<Radio size="medium" color="secondary" />} label="0-2" value="0-2" />
            <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
            <FormControlLabel control={<Radio />} label="6-10" value="6-10" />
          </RadioGroup>
          <FormHelperText>Invalid selection</FormHelperText>
        </FormControl>
      </Box>
    </Container>
  );
};
export default RadioButtonPage;
