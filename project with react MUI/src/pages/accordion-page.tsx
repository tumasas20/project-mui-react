import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccordionPage = () => {
  const [expanded, setExpand] = useState<string | false>(false);
  const handleChange = (isExpanded: boolean, panel: string) => {
    setExpand(isExpanded ? panel : false);
  };

  return (
    <Container sx={{ mt: 10 }}>
      <div>
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={(event, isExpanded) => handleChange(isExpanded, 'panel1')}
        >
          <AccordionSummary id="panel1-header" aria-controls="panel1-content" expandIcon={<ExpandMoreIcon />}>
            <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.
              Nobis rem facilis quos hic dolor incidunt
              tempora minus commodi necessitatibus,
              obcaecati, excepturi distinctio voluptate
              libero vero ipsa sint molestias autem sequi!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel2'}
          onChange={(event, isExpanded) => handleChange(isExpanded, 'panel2')}
        >
          <AccordionSummary id="panel2-header" aria-controls="panel2-content" expandIcon={<ExpandMoreIcon />}>
            <Typography>Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.
              Nobis rem facilis quos hic dolor incidunt
              tempora minus commodi necessitatibus,
              obcaecati, excepturi distinctio voluptate
              libero vero ipsa sint molestias autem sequi!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel3'}
          onChange={(event, isExpanded) => handleChange(isExpanded, 'panel3')}
        >
          <AccordionSummary id="panel3-header" aria-controls="panel3-content" expandIcon={<ExpandMoreIcon />}>
            <Typography>Accordion 3</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.
              Nobis rem facilis quos hic dolor incidunt
              tempora minus commodi necessitatibus,
              obcaecati, excepturi distinctio voluptate
              libero vero ipsa sint molestias autem sequi!
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </Container>
  );
};
export default AccordionPage;
