import React from 'react';
import {
  Accordion,
  AccordionProps,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NavbarMobileLink from './navbar-mobile-link';
import { type LinksGroup } from './navbar-data';

type NavbarMobileMenuAccordionProps = LinksGroup & {
  expanded: boolean,
  hasActiveLink: boolean,
  onChange: AccordionProps['onChange'],
  closeDrawer: VoidFunction
};

const NavbarMobileMenuAccordion: React.FC<NavbarMobileMenuAccordionProps> = ({
  title,
  links,
  expanded,
  hasActiveLink,
  onChange,
  closeDrawer,
}) => (
  <Accordion
    disableGutters
    square
    style={{ background: '#d0ece7' }}
    expanded={expanded}
    onChange={onChange}
  >
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography color={hasActiveLink ? 'primary' : 'inherit'}>
        {title}
      </Typography>
    </AccordionSummary>
    <AccordionDetails sx={{ p: 0 }}>
      {links.map(({ to, text }) => (
        <NavbarMobileLink
          key={to}
          to={to}
          onClick={closeDrawer}
          indent={4}
        >
          {text}
        </NavbarMobileLink>
      ))}
    </AccordionDetails>
  </Accordion>
);

export default NavbarMobileMenuAccordion;
