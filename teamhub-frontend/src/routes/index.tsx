import type { RouteObject } from 'react-router-dom';
import HomeRoutes from './HomeRoutes';

const routes: RouteObject[] = [
  ...HomeRoutes,
  {
    path: '*',
    element: <div>404 - Page Not Found</div>, // Fallback route
  },
];

export default routes;