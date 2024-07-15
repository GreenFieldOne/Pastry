import React, { useEffect, useState } from 'react';
import './Panier.css';
import axios from 'axios';

const Panier = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:3000/api/cart/getAll');
      setCartItems(response.data);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const updateCounter = async (index, increment) => {
    try {
      const updatedCartItems = [...cartItems];
      const updatedQuantity = updatedCartItems[index].quantite + increment;

      if (updatedQuantity >= 0) {
        updatedCartItems[index].quantite = updatedQuantity;
        setCartItems(updatedCartItems);

        await updateProduit(updatedCartItems[index].idpanier, updatedQuantity);
      }
    } catch (error) {
      console.error('Error updating product quantity:', error);
    }
  };

  const updateProduit = async (id, newQuantity) => {
    try {
      await axios.put(`http://127.0.0.1:3000/api/cart/${id}`, { quantite: newQuantity });
      
      fetchCartItems();
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const deleteProduit = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:3000/api/cart/${id}`);
      
      setCartItems(cartItems.filter(item => item.idpanier !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleDeleteClick = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this product?");
    if (confirmed) {
      deleteProduit(id);
    }
  };

  return (
    <div>
      <div className="main-content">
        <div id="main-content-static" className="main">
          <h3 id="shopping-card-title">Panier</h3>
          <p id="shopping-card-info">Les articles qui se trouvent dans le panier ne sont pas réservés.</p>
          <div className="shopping-card-items">
            <table>
              <thead>
                <tr className="shopping-card-header">
                  <th id="header-product">Produit</th>
                  <th></th>
                  <th id="header-amount">Quantité</th>
                  <th id="header-unitPrice">Prix unitaire</th>
                  <th id="header-total">Total</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={item.idproduit} className="shopping-card-item">
                    <td className="shopping-card-item-image">
                      <img id={`item${item.idproduit}`} src={item.image} alt="Product 1" style={{ width: 132, height: 138 }} />
                    </td>
                    <td>
                      <div className="description">
                        <p className="boldText" id="product1-title">{item.name}</p>
                        <p><span id="product1-productNr">{item.name}</span></p>
                        <div className="availability">
                          <div className="availability-circle"></div>
                          <p id="product1-stock">Disponible</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div id={`item${item.idproduit}`} className="counter">
                        <button type="button" className="btn btn-outline-success counter-minus" onClick={() => updateCounter(index, -1)}>-</button>
                        <input type="number" value={item.quantite} readOnly />
                        <button type="button" className="btn btn-outline-success counter-plus" onClick={() => updateCounter(index, 1)}>+</button>
                      </div>
                    </td>
                    <td className="boldText"><span id="cost1">{item.prix}</span> TND </td>
                    <td className="boldText"><span id="total1" className="productCost">{item.prix * item.quantite}</span> TND </td>
                    <td><button type="button" className="btn btn-outline-success counter-minus" onClick={() => handleDeleteClick(item.idproduit)}>-</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="shopping-card-summary">
            <h5 id="summary-title">Récapitulatif</h5>
            <table>
              <tbody>
                <tr className="shopping-card-table-color">
                  <td id="summary-subtotal">Sous-total</td>
                  <td className="shopping-card-summary-value">TND <span id="shopping-card-subtotal">256.20</span></td>
                </tr>
                <tr>
                  <td id="summary-delivery">Livraison</td>
                  <td id="summary-delivery-free" className="shopping-card-summary-value">Gratuite</td>
                </tr>
                <tr className="shopping-card-table-color">
                  <td id="summary-total">Total (Prix, TVA incluse)</td>
                  <td className="shopping-card-summary-value">TND <span id="shopping-card-total">256.20</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panier;
