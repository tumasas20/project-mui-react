import NavbarLayout from 'components/layouts/navbar-layout';
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/home-page';
import routes from './routes';
import TypographyPage from '../pages/typography-page';
import ButtonPage from '../pages/button-page';
import TextFieldPage from '../pages/textfield-page';
import SelectPage from '../pages/select-page';
import RadioButtonPage from '../pages/radio-button-page';
import CheckboxPage from '../pages/checkbox-page';
import SwitchPage from '../pages/switch-page';
import RatingPage from '../pages/rating-page';
import AutocompletePage from '../pages/autocomplete-page';
import BoxPage from '../pages/box-page';
import StackPage from '../pages/stack-page';
import GridPage from '../pages/grid-page';
import PaperPage from '../pages/paper-page';
import CardPage from '../pages/card-page';
import AccordionPage from '../pages/accordion-page';
import ImageListPage from '../pages/image-list-page';
import NavbarPage from '../pages/nabar-page';
import MenuPage from '../pages/menu-page';
import LinkPage from '../pages/link-page';
import BreadcrumbsPage from '../pages/breadcrumbs-page';
import DrawerPage from '../pages/drawer-page';
import SpeedDialPage from '../pages/speed-dial-page';
import BottomNavigationPage from '../pages/bottom-navigation-page';
import AvatarPage from '../pages/avatar-page';
import BadgePage from '../pages/badge-page';
import DateAndTimePickerPage from '../pages/date-and-time-picker-page';
import ListPage from '../pages/list-page';
import ChipPage from '../pages/chip-page';
import TooltipPage from '../pages/tooltip-page';
import TablePage from '../pages/table-page';
import AlertPage from '../pages/alert-page';
import SnackbarPage from '../pages/snackbar-page';
import DialogPage from '../pages/dialog-page';
import ProgressPage from '../pages/progress-page';
import SkeletonPage from '../pages/skeleton-page';
import LoadingBtnPage from '../pages/loading-button-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavbarLayout />,
    children: [
      {
        path: routes.HomePage,
        element: <HomePage />,
      },
      {
        path: routes.TypographyPage,
        element: <TypographyPage />,
      },
      {
        path: routes.ButtonPage,
        element: <ButtonPage />,
      },
      {
        path: routes.TextFieldPage,
        element: <TextFieldPage />,
      },
      {
        path: routes.SelectPage,
        element: <SelectPage />,
      },
      {
        path: routes.RadioButtonPage,
        element: <RadioButtonPage />,
      },
      {
        path: routes.CheckboxPage,
        element: <CheckboxPage />,
      },
      {
        path: routes.SwitchPage,
        element: <SwitchPage />,
      },
      {
        path: routes.RatingPage,
        element: <RatingPage />,
      },
      {
        path: routes.AutocompletePage,
        element: <AutocompletePage />,
      },
      {
        path: routes.BoxPage,
        element: <BoxPage />,
      },
      {
        path: routes.StackPage,
        element: <StackPage />,
      },
      {
        path: routes.GridPage,
        element: <GridPage />,
      },
      {
        path: routes.PaperPage,
        element: <PaperPage />,
      },
      {
        path: routes.CardPage,
        element: <CardPage />,
      },
      {
        path: routes.AccordionPage,
        element: <AccordionPage />,
      },
      {
        path: routes.ImageListPage,
        element: <ImageListPage />,
      },
      {
        path: routes.NavbarPage,
        element: <NavbarPage />,
      },
      {
        path: routes.MenuPage,
        element: <MenuPage />,
      },
      {
        path: routes.LinkPage,
        element: <LinkPage />,
      },
      {
        path: routes.BreadCrumbsPage,
        element: <BreadcrumbsPage />,
      },
      {
        path: routes.DrawerPage,
        element: <DrawerPage />,
      },
      {
        path: routes.SpeedDialPage,
        element: <SpeedDialPage />,
      },
      {
        path: routes.BottomNavigationPage,
        element: <BottomNavigationPage />,
      },
      {
        path: routes.AvatarPage,
        element: <AvatarPage />,
      },
      {
        path: routes.BadgePage,
        element: <BadgePage />,
      },
      {
        path: routes.ListPage,
        element: <ListPage />,
      },
      {
        path: routes.ChipPage,
        element: <ChipPage />,
      },
      {
        path: routes.TooltipPage,
        element: <TooltipPage />,
      },
      {
        path: routes.TablePage,
        element: <TablePage />,
      },
      {
        path: routes.AlertPage,
        element: <AlertPage />,
      },
      {
        path: routes.SnackbarPage,
        element: <SnackbarPage />,
      },
      {
        path: routes.DialogPage,
        element: <DialogPage />,
      },
      {
        path: routes.ProgressPage,
        element: <ProgressPage />,
      },
      {
        path: routes.SkeletonPage,
        element: <SkeletonPage />,
      },
      {
        path: routes.LoadingBtnPage,
        element: <LoadingBtnPage />,
      },

      {
        path: routes.DateAndTimePickerPage,
        element: <DateAndTimePickerPage />,
      },

    ],
  },
]);

export default router;
