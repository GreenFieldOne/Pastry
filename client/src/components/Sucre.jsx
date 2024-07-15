// src/components/Sucre.js
import React, { useEffect, useState } from 'react';
import { useCart } from '../components/cart.jsx';
import './Sucre.css';
import Sucre1 from '../../src/assets/sucré/cupcake.jpg';
import Sucre2 from '../../src/assets/sucré/mac1.jpg';
import Sucre5 from '../../src/assets/sucré/mini-gat.1.jpg';
import Sucre3 from '../../src/assets/sucré/tiramisu.webp';
import Sucre4 from '../../src/assets/sucré/verrines.jpeg';
import axios from 'axios';

function Sucre() {
  const [sucre, setsucre] = useState([]);
  useEffect(() => {
    const getsucre = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:3000/api/sucre/getAll')
        setsucre(response.data)
        console.log('res', response.data);
      }
      catch (erreur) {
        console.log('erreur')
      }

    }
    getsucre();
  }, []);
  // const { incrementCart } = useCart();
  // const sucreItems = [
  //   {
  //     id: 1,
  //     name: 'CupCake',
  //     description: 'à votre choix',
  //     price: '2TND/pc',
  //     src: Sucre1, 
  //   },
  //   {
  //     id: 2,
  //     name: 'Macarons',
  //     description: '45pcs/Kg',
  //     price: '100.000TND',
  //     src: Sucre2, 
  //   },
  //   {
  //     id: 3,
  //     name: 'Tiramisu',
  //     description: 'multigoux',
  //     price: '8TND/pc',
  //     src: Sucre3, 
  //   },
  //   {
  //     id: 4,
  //     name: 'Verrines',
  //     description: 'multigoux',
  //     price: '7TND/pc',
  //     src: Sucre4, 
  //   },
  //   {
  //     id: 5,
  //     name: 'Mini-gateaux',
  //     description: '75pcs/Kg',
  //     price: '60TND',
  //     src: Sucre5, 
  //   },
  // ];

  const addToBasket = async (product) => {
    try {
      const requestBody = {
        idproduit: product.idsucre, // Adding the idsale to the body
        image: product.image,
        prix:product.price,
        quantite: 1
      };
      const response = await axios.post('http://127.0.0.1:3000/api/cart/addProduct', requestBody)
    }
    catch (erreur) {
      console.log('erreur',erreur)
    }

  }
  return (
    <div className="sucre-container">
      <div className="proverb-card">
        <h2>Dans une pâtisserie, je lâche prise.</h2>
        <h6>Blake Lively</h6>
      </div>
      <div className="sucre-items">
        {sucre.map((item) => (
          <div 
            key={item.id} 
            className="sucre-item" 
            style={{ order: item.id === 3 ? 1 : item.id === 4 ? 2 : 'unset' }}
          >
            <img src={item.image} alt={item.name} className="sucre-image" />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <button onClick={() => addToBasket(item)}>Add</button>
          </div>
        ))}
        
      </div>
    </div>
  );
}

export default Sucre;
