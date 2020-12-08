import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import 'assets/css/reset.css';

import { GlobalContext } from 'store';

ReactDOM.render(
  <React.StrictMode>
    <GlobalContext>
      <App />
    </GlobalContext>
  </React.StrictMode>,
  document.getElementById('root')
);
