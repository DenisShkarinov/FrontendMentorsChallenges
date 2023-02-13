import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CountdonwTimer from './CountdownTimer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CountdonwTimer />
  </React.StrictMode>
);
