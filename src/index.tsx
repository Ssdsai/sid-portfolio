import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import emailjs from 'emailjs-com';

// Grab the USER_ID from env
const userId = process.env.REACT_APP_EMAILJS_USER_ID;
if (!userId) {
  // If missing, log an error so you catch it early
  console.error('Missing REACT_APP_EMAILJS_USER_ID environment variable');
} else {
  // Only initialize if we have a valid string
  emailjs.init(userId);
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
