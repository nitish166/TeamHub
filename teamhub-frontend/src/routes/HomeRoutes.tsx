import type { RouteObject } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Dashboard from '../pages/Dashboard';
import PrivateRoute from '../components/PrivateRoute';
import TeamManagement from '../pages/TeamManagement';
import ProjectManagement from '../pages/ProjectManagement';

const HomeRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
  {
    path: '/team-management',
    element: (
      <PrivateRoute>
        <TeamManagement />
      </PrivateRoute>
    ),
  },
  {
    path: '/project-management',
    element: (
      <PrivateRoute>
        <ProjectManagement />
      </PrivateRoute>
    ),
  },
];

export default HomeRoutes;