import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


/*

Core Features:
1) Upon load, the app will already have the weather data for the user's current location displayed
2) Users will be able to search weather data for a different location as well

*/