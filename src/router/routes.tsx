import { RouteProps } from 'react-router-dom';
import * as Pages from '../pages';
interface Route {
  route: RouteProps,
  component: React.ElementType;
}

export const routes: Route[] = [
  {
    route: {
      path: '/',
      exact: true,
    },
    component: Pages.HomePage,
  },
];

export default routes;
