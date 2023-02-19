import React from 'react';
import { Container, Tooltip, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TooltipPage = () => (
  <Container sx={{
    my: 6, p: 4, boxShadow: 3, borderRadius: 2,
  }}
  >
    <Tooltip title="Delete" placement="right" arrow enterDelay={500} leaveDelay={200}>
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tooltip>

  </Container>
);

export default TooltipPage;
