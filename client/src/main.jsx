import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './App.css';
import { CartProvider } from './components/cart.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <CartProvider>
      <App />
    </CartProvider>
    
  </React.StrictMode>
);
