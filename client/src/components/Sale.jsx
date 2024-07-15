import React, { useEffect, useState } from 'react';
import { useCart } from './cart'; // Adjust the path as necessary
import './Sale.css';
import axios from 'axios';

const Sale = () => {
  const { cartItems } = useCart();
  const [sale, setSale] = useState([]);

  useEffect(() => {
    const getSale = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:3000/api/sale/getAll');
        setSale(response.data);
        // console.log('Sale items fetched successfully:', response.data);
      } catch (error) {
        console.error('Error fetching sale items:', error);
      }
    };
    getSale();
    
  }, []);

  const addToBasket = async (product) => {
    try {
      const requestBody = {
        idproduit: product.idsale,
        image: product.image,
        prix: product.price,
        quantite: 1
      };
      const response = await axios.post('http://127.0.0.1:3000/api/cart/addProduct', requestBody);
      
      cartItems.length++;
      // console.log('Product added to cart:', cartItems.length);
    } catch (error) {
      // console.error('Error adding product to cart:', error);
    }
  };

  return (
    <div className="sale-container">
      <h2>Nos packs :</h2>
      <div className="products-grid">
        {sale.map((product) => (
          <div key={product.idsale} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="product-price">{product.price}</p>
              <button onClick={() => addToBasket(product)}>Add</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-items">
        <h3>Items in Cart:</h3>
        <ul>
          {cartItems.map((item) => (
            <li key={item.idproduit}>{item.name} - Quantity: {item.quantite}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sale;
