import React, { useState } from 'react';
import {
  Container,
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

const ButtonPage = () => {
  const [formats, setFormats] = useState<string | null>(null);
  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string | null,
  ) => {
    setFormats(updatedFormats);
  };
  return (
    <Container sx={{
      my: 6, boxShadow: 3, borderRadius: 2, pt: 2, pb: 2,
    }}
    >
      <Stack spacing={4}>
        <Stack spacing={2} direction="row">
          <Button variant="text" href="http://google.com">Text</Button>
          <Button variant="contained">Text</Button>
          <Button variant="outlined">Text</Button>
        </Stack>
        <Stack spacing={2} direction="row">
          <Button variant="contained" color="primary">primary</Button>
          <Button variant="contained" color="secondary">secondary</Button>
          <Button variant="contained" color="error">error</Button>
          <Button variant="contained" color="warning">warning</Button>
          <Button variant="contained" color="info">info</Button>
          <Button variant="contained" color="success">success</Button>
        </Stack>
        <Stack display="block" spacing={2} direction="row">
          <Button variant="contained" size="small">small</Button>
          <Button variant="contained" size="medium">medium</Button>
          <Button variant="contained" size="large">large</Button>
        </Stack>
        <Stack spacing={2} direction="row">
          <Button variant="contained" startIcon={<SendIcon />} disableRipple onClick={() => alert('Clicked')}>send</Button>
          <Button variant="contained" endIcon={<SendIcon />} disableElevation>send</Button>
          <IconButton aria-label="send" color="success" size="small">
            <SendIcon />
          </IconButton>
          <Stack direction="row">
            <ButtonGroup
              variant="contained"
              orientation="vertical"
              size="small"
              color="secondary"
              aria-label="aligment button group"
            >
              <Button onClick={() => alert('left clicked')}>left</Button>
              <Button>center</Button>
              <Button>right</Button>
            </ButtonGroup>
          </Stack>
          <Stack direction="row">
            <ToggleButtonGroup aria-label="text formatting" value={formats} onChange={handleFormatChange} size="small" color="success" orientation="vertical" exclusive>
              <ToggleButton value="bold" aria-label="bold"><FormatBoldIcon /></ToggleButton>
              <ToggleButton value="italic" aria-label="italic"><FormatItalicIcon /></ToggleButton>
              <ToggleButton value="underlined" aria-label="underlined"><FormatUnderlinedIcon /></ToggleButton>
            </ToggleButtonGroup>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};
export default ButtonPage;
