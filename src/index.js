import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import MetaMask from './pages/wallet/Metamask'





ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
    <App />
    <MetaMask/>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


