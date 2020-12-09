import React from 'react';
import ReactDOM from 'react-dom';

import { GlobalContext } from 'store';

import App from './App';

import 'assets/css/reset.css';

ReactDOM.render(
  <React.StrictMode>
    <GlobalContext>
      <App />
    </GlobalContext>
  </React.StrictMode>,
  document.getElementById('root')
);
