import { Provider, createStore } from 'jotai';
import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/styles/global.css';
import { AppContainer } from '@/components/App/index.ts';

const myStore = createStore();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={myStore}>
      <AppContainer />
    </Provider>
  </React.StrictMode>
);
