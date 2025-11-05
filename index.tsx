
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PopupProvider } from './contexts/PopupContext';
import carImage from './images/topview_model3.png';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <PopupProvider>
      <App />
    </PopupProvider>
  </React.StrictMode>
);