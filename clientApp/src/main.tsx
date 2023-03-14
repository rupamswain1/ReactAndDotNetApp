import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/layout/App';
import { store, StoreContext } from './app/store/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  </React.StrictMode>
);
