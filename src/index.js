import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ShopContextProvider from './Context/ShopContext';

// Create a root element and render the App component within React.StrictMode
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <ShopContextProvider>
    <App />
  </ShopContextProvider>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send the results to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
