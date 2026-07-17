import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';

const rootElement = document.querySelector('#root');

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
} else {
  console.error('Root element not found');
}
