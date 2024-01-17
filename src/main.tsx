import { Provider, createStore } from 'jotai';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import { BoardContainer } from './components/Board/Board.container.tsx';
import { Layout } from './components/Layout/Layout.tsx';

const myStore = createStore();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={myStore}>
      <Layout>
        <BoardContainer />
      </Layout>
    </Provider>
  </React.StrictMode>
);
