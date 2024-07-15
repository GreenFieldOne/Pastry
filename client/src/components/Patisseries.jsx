import React, { useEffect, useRef } from 'react';
import './Patisseries.css'; // Import CSS for styling
import Patisserie3 from '../../src/assets/patisseries/acc3.jpg';
import Patisserie4 from '../../src/assets/patisseries/acc4.webp';
import Patisserie5 from '../../src/assets/patisseries/acc5.jpg';
import Patisserie6 from '../../src/assets/patisseries/acc6.jpg';
import Extra1 from '../../src/assets/patisseries/extra1.webp'; // Add paths to your extra images
import Extra2 from '../../src/assets/patisseries/extra2.jpg';
import Extra3 from '../../src/assets/patisseries/extra3.jpg';
import FinalImage from '../../src/assets/patisseries/final.png'; // Add path to the final image

const Patisseries = () => {
  const images = [Patisserie3, Patisserie4, Patisserie5, Patisserie6];
  const extraImages = [
    { src: Extra1, title: 'Nos sucrés' },
    { src: Extra2, title: 'Nos salés' },
    { src: Extra3, title: 'Nos jus' },
  ];
  const imageRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      imageRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.left < window.innerWidth) {
            ref.classList.add('visible');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="patisseries-container">
      <div className="content">
        <h1>Nos Pâtisseries</h1>
        <div className="phrases">
          <div>Nous sommes convaincus qu’une journée sans gourmandise est une journée sans intérêt.</div>
          <div>Le moelleux incomparable de nos pâtisseries, leur fondant et leur douceur sont un réconfort immédiat.</div>
        </div>
      </div>
      <div className="images-container">
        <div className="images-wrapper">
          {images.map((image, index) => (
            <div
              key={index}
              className="image-container"
              ref={(el) => (imageRefs.current[index] = el)}
            >
              <img src={image} alt={`Patisserie ${index + 1}`} className="patisserie-image" />
            </div>
          ))}
        </div>
      </div>
      <div className="extra-images-container">
        {extraImages.map((extra, index) => (
          <div key={index} className="extra-image-item">
            <h3>{extra.title}</h3>
            <img src={extra.src} alt={`Extra ${index + 1}`} className="extra-image" />
          </div>
        ))}
      </div>
      <div className="additional-title-card">
        <h2>Ce que nos clients disent de nous ♥</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>« Tout ce que nous avons goûté jusqu'à présent était beau et délicieux. Les croissants sont parfaits. Nous sommes très heureux de vous avoir dans le quartier. »</p>
            <span>Brigitte</span>
          </div>
          <div className="testimonial">
            <p>« L'odeur à l'intérieur était enivrante. Rien que pour cela, la visite vaut le détour. Aussi, achetez tout ce que vous pouvez pendant que vous y êtes. Marchez ensuite quelques heures pour brûler les calories, puis recommencez. Cela vaut littéralement la peine de planifier une journée entière autour de ce lieu. »</p>
            <span>Hervé</span>
          </div>
          <div className="testimonial">
            <p>« OMG le meilleur croissant aux amandes de tous les temps ! Des pâtisseries incroyables. »</p>
            <span>Ona</span>
          </div>
          <div className="testimonial">
            <p>« Merveilleuse sélection des plus délicieuses pâtisseries françaises que nous ayons mangées en dehors de Paris ! Le personnel est également charmant. »</p>
            <span>Laura</span>
          </div>
        </div>
      </div>
      <div className="final-image-container">
        <img src={FinalImage} alt="Final Image" className="final-image" />
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>Email: contact@patisseries.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <p>Facebook | Twitter | Instagram</p>
          </div>
          <div className="footer-section">
            <h4>Address</h4>
            <p>123 Patisserie St, Sweet City, CA</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Patisseries;
