import React, { useState } from 'react';
import {
  Stack, Autocomplete, TextField, Container,
} from '@mui/material';

type Skill = {
  id: number,
  label: string
};

const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'];

const skillsOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));

const AutocompletePage = () => {
  const [value, setValue] = useState<string | null>(null);
  const [skill, setSkill] = useState<Skill | null>(null);
  console.log({ skill });

  return (
    <Container sx={{
      mt: 4, pt: 4, pb: 4, boxShadow: 3, borderRadius: 2,
    }}
    >
      <Stack spacing={2} width="250px">
        <Autocomplete
          options={skills}
          renderInput={(params) => <TextField {...params} label="skills" />}
          value={value}
          onChange={(event: any, newValue: string | null) => setValue(newValue)}
          freeSolo
        />
        <Autocomplete
          options={skillsOptions}
          renderInput={(params) => <TextField {...params} label="skills" />}
          value={skill}
          onChange={(event: any, newValue: Skill | null) => setSkill(newValue)}

        />
      </Stack>

    </Container>
  );
};

export default AutocompletePage;
