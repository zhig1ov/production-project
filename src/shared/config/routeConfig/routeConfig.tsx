import { RouteProps } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage/index';
import { MainPage } from 'pages/MainPage/index';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
};

export const RouteConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
};
