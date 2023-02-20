import React, { useState } from 'react';
import {
  Container,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';

const DialogPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <Container sx={{
      my: 6, p: 4, boxShadow: 3, borderRadius: 2,
    }}
    >
      <Button onClick={() => setOpen(true)}>Open dialog</Button>
      <Dialog
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogTitle id="dialog-title">Submit the test?</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">Ar you sure you want to sumbmit the test?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={() => setOpen(false)} autoFocus>Submit</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};
export default DialogPage;
