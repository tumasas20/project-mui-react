import React, { useState } from 'react';
import {
  Box,
  Container,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
  FormHelperText,
} from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const CheckboxPage = () => {
  const [acceptTnC, setAcceptTnC] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTnC(event.target.checked);
  };
  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(event.target.value);
    if (index === -1) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.value));
    }
  };

  return (
    <Container sx={{
      mt: 4, pt: 4, pb: 4, boxShadow: 3, borderRadius: 2,
    }}
    >
      <Box>
        <Box>
          <FormControlLabel
            label="I accept terms and conditios"
            control={<Checkbox size="small" color="secondary" checked={acceptTnC} onChange={handleChange} />}
          />
        </Box>
        <Box>
          <Checkbox
            icon={<BookmarkBorderIcon />}
            checkedIcon={<BookmarkIcon />}
            checked={acceptTnC}
            onChange={handleChange}
          />
        </Box>
        <Box sx={{ pt: 3 }}>
          <FormControl error>
            <FormLabel>Skills</FormLabel>
            <FormGroup row>
              <FormControlLabel
                label="HTML"
                control={(
                  <Checkbox
                    value="html"
                    checked={skills.includes('html')}
                    onChange={handleSkillChange}
                  />
)}
              />
              <FormControlLabel
                label="CSS"
                control={(
                  <Checkbox
                    value="css"
                    checked={skills.includes('css')}
                    onChange={handleSkillChange}
                  />
)}
              />
              <FormControlLabel
                label="JavaScript"
                control={(
                  <Checkbox
                    value="javascript"
                    checked={skills.includes('javascript')}
                    onChange={handleSkillChange}
                  />
)}
              />
            </FormGroup>
            <FormHelperText>Invalid selection</FormHelperText>
          </FormControl>
        </Box>
      </Box>
    </Container>
  );
};
export default CheckboxPage;
