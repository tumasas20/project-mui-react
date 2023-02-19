import React, { useState, forwardRef } from 'react';
import {
  Container,
  Snackbar,
  Button,
  Alert,
  AlertProps,
} from '@mui/material';

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
  (props, ref) => <Alert elevation={6} ref={ref} {...props} />,
);

const SnackbarPage = () => {
  const [open, setOpen] = useState(false);
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Container sx={{
      my: 6, p: 4, boxShadow: 3, borderRadius: 2,
    }}
    >
      <Button onClick={() => setOpen(true)}>Submit</Button>
      {/* <Snackbar
        message="Form submitted successfully!"
        autoHideDuration={4000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }} /> */}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <SnackbarAlert onClose={handleClose} severity="success">
          Form submitted successfully!
        </SnackbarAlert>
      </Snackbar>
    </Container>
  );
};
export default SnackbarPage;
