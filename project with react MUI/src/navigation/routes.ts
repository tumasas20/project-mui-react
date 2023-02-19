const routes = {
  HomePage: '/',
  TypographyPage: '/typography',
  ButtonPage: '/button',
  TextFieldPage: '/textfield',
  SelectPage: '/select',
  RadioButtonPage: '/radiobutton',
  CheckboxPage: '/checkbox',
  SwitchPage: '/switch',
  RatingPage: '/rating',
  AutocompletePage: '/autocomplete',
  BoxPage: '/box',
  StackPage: '/stack',
  GridPage: '/grid',
  PaperPage: '/paper',
  CardPage: '/card',
  AccordionPage: '/accordion',
  ImageListPage: '/imagelist',
  NavbarPage: '/navbar',
  MenuPage: '/menu',
  LinkPage: '/link',
  BreadCrumbsPage: '/breadcrumbs',
  DrawerPage: '/drawer',
  SpeedDialPage: '/speed-dial',
  BottomNavigationPage: '/bottom-navigation',
  AvatarPage: '/avatar',
  BadgePage: '/badge',
} as const;

export type Routes = typeof routes;
export type RouteLink = Routes[keyof Routes];

export default routes;