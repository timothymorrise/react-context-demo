// INDEX.JS

// IMPORTS
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ThemeProvider from './ThemeProvider';
export const {Consumer, Provider} = React.createContext()

// DOM RENDER/WRAPS
ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);


