import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import CountdownTimer from './CountdownTimer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CountdownTimer />
  </React.StrictMode>
);
