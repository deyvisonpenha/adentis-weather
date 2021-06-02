import React from 'react';
import ReactDOM from 'react-dom';
import { Weather } from './App';
import { GlobalStyle } from './styles/global';
import { Store } from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store} >
      <GlobalStyle />
      <Weather />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
