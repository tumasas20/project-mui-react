import routes, { type RouteLink } from 'navigation/routes';
import { Breakpoint } from '@mui/material';

export type Link = {
  to: RouteLink,
  text: string
};

export type LinksGroup = {
  title: string,
  links: Link[]
};

export const mainLinks: Link[] = [
  { to: routes.HomePage, text: 'Home' },
];

export const linksGroups: LinksGroup[] = [
  {
    title: 'Lesson 1 Components',
    links: [
      { to: routes.TypographyPage, text: 'Typography' },
      { to: routes.ButtonPage, text: 'Button' },
      { to: routes.TextFieldPage, text: 'Text Field' },
      { to: routes.SelectPage, text: 'Select' },
      { to: routes.RadioButtonPage, text: 'Radio Button' },
      { to: routes.CheckboxPage, text: 'Checkbox' },
    ],
  },
  {
    title: 'Lesson 2 Components',
    links: [
      { to: routes.SwitchPage, text: 'Switch' },
      { to: routes.RatingPage, text: 'Rating' },
      { to: routes.AutocompletePage, text: 'Autocomplete' },
      { to: routes.BoxPage, text: 'Box' },
      { to: routes.StackPage, text: 'Stack' },
      { to: routes.GridPage, text: 'Grid' },
      { to: routes.PaperPage, text: 'Paper' },
      { to: routes.CardPage, text: 'Card' },
      { to: routes.AccordionPage, text: 'Accordion' },
      { to: routes.ImageListPage, text: 'Image List' },
    ],
  },
  {
    title: 'Lesson 3 Components',
    links: [
      { to: routes.NavbarPage, text: 'Navbar' },
      { to: routes.MenuPage, text: 'Menu' },
      { to: routes.LinkPage, text: 'Link' },
      { to: routes.BreadCrumbsPage, text: 'Breadcrumbs' },
      { to: routes.DrawerPage, text: 'Drawer' },
      { to: routes.SpeedDialPage, text: 'Speed Dial' },
      { to: routes.BottomNavigationPage, text: 'Bottom Navigation' },
      { to: routes.AvatarPage, text: 'Avatar' },
    ],
  },
  {
    title: 'Lesson 4 Components',
    links: [
      { to: routes.BadgePage, text: 'Badge' },
      { to: routes.ListPage, text: 'List' },
      { to: routes.ChipPage, text: 'Chip' },
    ],
  },
  {
    title: 'Lesson 5 Components',
    links: [
      { to: routes.DateAndTimePickerPage, text: 'Date and Time Picker' },
    ],
  },
];

export const extendBr: Breakpoint = 'md';
