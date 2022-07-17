import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.scss';
import { fetchChartsData } from './features/charts/chartsSlice';
import { fetchProjects } from './features/projects/projectSlice';
import { fetchAllNotifications } from './features/notifications/notificationSlice';
store.dispatch(fetchProjects())
store.dispatch(fetchChartsData())
store.dispatch(fetchAllNotifications());
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

