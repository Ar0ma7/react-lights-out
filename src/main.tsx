import { Provider } from 'jotai';
import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/styles/global.css';
import { AppContainer } from '@/components/App/index.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider>
      <AppContainer />
    </Provider>
  </React.StrictMode>
);
