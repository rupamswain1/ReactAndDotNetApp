import React from 'react';

import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import App from './app/layout/App';
import { store, StoreContext } from './app/store/store';
import './index.css';
import 'react-calendar/dist/Calendar.css';
import 'react-toastify/dist/ReactToastify.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import { router } from './router/Routes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <RouterProvider router={router} />
    </StoreContext.Provider>
  </React.StrictMode>
);
