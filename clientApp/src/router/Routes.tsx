import { createBrowserRouter, RouteObject } from 'react-router-dom';
import App from '../app/layout/App';
import ActivityDashBoard from '../feature/activities/dashboard/ActivityDashBoard';
import ActivityDetails from '../feature/activities/details/ActivityDetails';
import ActivityForm from '../feature/activities/form/ActivityForm';
import HomePage from '../feature/home/HomePage';
import { TestErrors } from '../feature/errors/TestErrors';

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
    ],
  },
];

export const router = createBrowserRouter(routes);
