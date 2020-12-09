import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'store';

import App from './App';

import 'assets/css/reset.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
