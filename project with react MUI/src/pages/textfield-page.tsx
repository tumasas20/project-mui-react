import React, { useState } from 'react';
import {
  Stack, TextField, InputAdornment, Container,
} from '@mui/material';

const TextFieldPage = () => {
  const [value, setValue] = useState('');
  return (
    <Container sx={{
      my: 6, pt: 2, boxShadow: 3, borderRadius: 2, paddingBottom: 2,
    }}
    >
      <Stack spacing={4}>
        <Stack direction="row" spacing={2}>
          <TextField label="Name" variant="outlined" />
          <TextField label="Name" variant="filled" />
          <TextField label="Name" variant="standard" />
        </Stack>
        <Stack direction="row" spacing={2}>
          <TextField label="Small secondary" size="small" color="secondary" />
        </Stack>
        <Stack direction="row" spacing={2}>
          <TextField label="Form Input" required value={value} onChange={(e) => setValue(e.target.value)} error={!value} helperText={!value ? 'Required' : 'Do not share your password'} />
          <TextField label="Password" type="password" disabled helperText="Do not share your password with anyone" />
          <TextField label="Read only" InputProps={{ readOnly: true }} />
        </Stack>
        <Stack direction="row" spacing={2}>
          <TextField
            label="Amount"
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }}
          />
          <TextField
            label="Weight"
            InputProps={{
              endAdornment: <InputAdornment position="end">kg</InputAdornment>,
            }}
          />
        </Stack>
      </Stack>
    </Container>
  );
};
export default TextFieldPage;
