import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom';
import App from '../app/layout/App';
import ActivityDashBoard from '../feature/activities/dashboard/ActivityDashBoard';
import ActivityDetails from '../feature/activities/details/ActivityDetails';
import ActivityForm from '../feature/activities/form/ActivityForm';
import HomePage from '../feature/home/HomePage';
import { TestErrors } from '../feature/errors/TestErrors';
import NotFound from '../feature/errors/NotFound';
import ServerError from '../feature/errors/ServerError';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      // { path: '', element: <HomePage /> },
      { path: 'activities/:id', element: <ActivityDetails /> },
      { path: 'activities', element: <ActivityDashBoard /> },
      { path: 'editActivity/:id', element: <ActivityForm /> },
      { path: 'createActivity', element: <ActivityForm /> },
      { path: 'errors', element: <TestErrors /> },
      { path: 'not-found', element: <NotFound /> },
      { path: 'server-error', element: <ServerError /> },
      { path: '*', element: <Navigate replace to="/not-found" /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
