import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import './index.css';
import HomePage from './pages/HomePage.tsx';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Mulish', sans-serif; // Set Mulish as a default font based on Figma
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #FCF8F5; // Default background for the app
  }

  * {
    box-sizing: border-box;
  }

  /* You might want to import Mulish font in your index.html or via @font-face here */
`;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <HomePage />
  </React.StrictMode>
);
