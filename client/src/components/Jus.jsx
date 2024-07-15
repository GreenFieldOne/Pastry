import React, { useEffect, useState } from 'react';
import { useCart } from '../components/cart.jsx'; // Import the cart context
import './Jus.css';
import Jus1 from '../../src/assets/jus/banane.jpeg';
import Jus2 from '../../src/assets/jus/smoothie-vert.jpeg';
import Jus3 from '../../src/assets/jus/fraise.jpg';
import Jus4 from '../../src/assets/jus/fruit rouge.jpg';
import Jus5 from '../../src/assets/jus/kiwi.jpeg';
import Jus6 from '../../src/assets/jus/orange.jpg';
import axios from 'axios';

function Jus() {
  // const { incrementCart } = useCart(); // Get the incrementCart function from the context
  const [jus, setjus] = useState([]);
  useEffect(() => {
    const getjus = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:3000/api/jus/getAll')
        setjus(response.data)
        console.log('res', response.data);
      }
      catch (erreur) {
        console.log('erreur')
      }

    }
    getjus();
  }, []);


  // const jusItems = [
  //   {
  //     id: 1,
  //     name: 'Jus Banane',
  //     description: 'texture dense et onctueuse',
  //     price: '25TND/L',
  //     src: Jus1, 
  //   },
  //   {
  //     id: 2,
  //     name: 'Smoothie vert',
  //     description: 'Healthy green smoothie.',
  //     price: '18TND/L',
  //     src: Jus2, 
  //   },
  //   {
  //     id: 3,
  //     name: 'Jus de fraise',
  //     description: 'Sweet strawberry juice.',
  //     price: '10TND/L',
  //     src: Jus3, 
  //   },
  //   {
  //     id: 4,
  //     name: 'Jus de fruit rouge',
  //     description: 'une saveur unique.',
  //     price: '15TND/L',
  //     src: Jus4, 
  //   },
  //   {
  //     id: 5,
  //     name: 'Jus de Kiwi',
  //     description: 'le bon concentré d-énergies',
  //     price: '15TND/pc',
  //     src: Jus5, 
  //   },
  //   {
  //     id: 6,
  //     name: 'Jus d-Orange',
  //     description: 'La fraicheur',
  //     price: '15TND/pc',
  //     src: Jus6, 
  //   },
  // ];

  const addToBasket = async (product) => {
    try {
      const requestBody = {
        idproduit: product.idjus, // Adding the idsale to the body
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
    <div className="jus-container">
      <div className="proverb-overlay">
        <h2>De délicieux jus fraîchement pressés et de la vraie bonne nourriture pour les gens ‘’sur la go’’.</h2>
      </div>
      <div className="jus-items">
        {jus.map((item) => (
          <div key={item.id} className="jus-item">
            <img src={item.image} alt={item.name} className="jus-image" />
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

export default Jus;
