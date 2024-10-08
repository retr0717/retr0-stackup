import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import {store,persistor} from './redux/store';
import App from './App.jsx';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import './index.css';

if(process.env.NODE_ENV === 'production') disableReactDevTools()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
          <App/>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);