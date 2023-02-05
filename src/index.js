import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import UserStore from './store/UserStore';
import ProductStore from './store/ProductStore';

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    user: new UserStore(),
    picture: new ProductStore(),
  }}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context.Provider>
);