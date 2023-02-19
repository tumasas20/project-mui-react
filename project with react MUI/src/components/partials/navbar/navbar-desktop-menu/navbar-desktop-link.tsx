import { styled } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { navbarDesktopItemStyles } from './style';

const NavbarDesktopLink = styled(NavLink)(({ theme }) => ({
  ...navbarDesktopItemStyles(theme),
  textDecoration: 'none',
}));

export default NavbarDesktopLink;
