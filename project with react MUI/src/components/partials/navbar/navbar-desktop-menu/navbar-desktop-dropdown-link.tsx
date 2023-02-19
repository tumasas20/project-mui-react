import React from 'react';
import { styled, MenuItem } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Link = styled(NavLink)(({ theme }) => ({
  flexGrow: 1,
  textDecoration: 'none',
  color: theme.palette.common.black,
  padding: theme.spacing(0.5, 2),
  '&.active': {
    boxShadow: `inset -4px 0 0 ${theme.palette.error.dark}`,
    // boxShadow: `
    //   inset 4px 0 0 ${theme.palette.primary.main},
    //   inset -4px 0 0 ${theme.palette.primary.main}`,
    // color: theme.palette.primary.main,
    // fontWeight: 500,
  },
  '&:hover': {
    backgroundColor: theme.palette.error.light,
  },
}));

type NavbarDesktopDropdownLinkProps = {
  to: string,
  children: React.ReactNode
};

const NavbarDesktopDropDownLink: React.FC<NavbarDesktopDropdownLinkProps> = ({
  to,
  children,
}) => (
  <MenuItem sx={{ p: 0 }}>
    <Link to={to}>{children}</Link>
  </MenuItem>
);

export default NavbarDesktopDropDownLink;
