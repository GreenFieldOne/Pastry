import React from 'react';
import './Ingredients.css';
import logo1 from "../assets/ingredients/img1.png";
import logo2 from "../assets/ingredients/img2.jpg";
import logo3 from "../assets/ingredients/img3.jpg";
import logo4 from "../assets/ingredients/img4.jpg";
import logo5 from "../assets/ingredients/img5.jpg";
import logo6 from "../assets/ingredients/img6.jpg";
import logo7 from "../assets/ingredients/img7.jpg";


const Ingredients = () => {
    return (
        <div className="ingredients-page">
            <div className="ingredients-header">
                <h1>Les Ingredients</h1>
                <p>Discover our ingredients and their origins</p>
            </div>
            <div className="ingredients-content">
                <section className="ingredient-section">
                    <img src={logo1} alt="Ingredient 1" className="ingredient-image"  />
                    <div className="ingredient-description">
                        <h2>Les Fruits</h2>
                        <p>"Les fruits entrant dans la composition de mes pâtisseries sont d’une qualité exceptionnelle et respectent strictement la saisonnalité. Choisis pour leur goût et leur parfaite maturité, ils sont cultivés dans le respect des sols, de l’humain et de l’animal."</p>
                    </div>
                </section>
                {/* <div className="section-divider-container">
                    <hr className="section-divider" />
                </div> */}
                <section className="ingredient-section">
                    <img src={logo2} alt="Ingredient 2" className="ingredient-image" />
                    <div className="ingredient-description">
                        <h2>LES HERBES ET LES FLEURS</h2>
                        <p>Parmi les herbes que j’utilise, certaines (flouve, mélilot) sont cultivées en Auvergne en bio, et d’autres (verveine, reine-des-prés), sauvages, sont ramassées localement. Les fleurs (roses, pivoines, œillets, feuilles de framboisier et de cassissier, immortelles, bleuets) qui décorent nos gâteaux sont exclusivement bio.</p>
                    </div>
                </section>
                {/* <div className="section-divider-container">
                    <hr className="section-divider" />
                </div> */}
                <section className="ingredient-section">
                    <img src={logo3} alt="Ingredient 3" className="ingredient-image" />
                    <div className="ingredient-description">
                        <h2>LES LÉGUMES ET LE FROMAGE DE MONTAGNE</h2>
                        <p>Les légumes et le Cantal entre-deux AOP qui entrent dans la composition de nos quiches sont d’origine française et biologique.</p>
                    </div>
                </section>
                {/* <div className="section-divider-container">
                    <hr className="section-divider" />
                </div> */}
                <section className="ingredient-section">
                    <img src={logo4} alt="Ingredient 4" className="ingredient-image" />
                    <div className="ingredient-description">
                        <h2>LE CHOCOLAT</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quisquam sit a ut! Quo cumque mollitia eos repudiandae sed quaerat et maxime aut hic eaque, optio unde corrupti laborum. Asperiores?</p>
                    </div>
                </section>
                {/* <div className="section-divider-container">
                    <hr className="section-divider" />
                </div> */}
                <section className="ingredient-section">
                    <img src={logo5} alt="Ingredient 5" className="ingredient-image" />
                    <div className="ingredient-description">
                        <h2>LES FRUITS SECS</h2>
                        <p>Abricots, figues, raisins, pruneaux et citrons confits. Ils sont tous issus d'agriculture biologique et sans sulfite.</p>
                    </div>
                </section>
                {/* <div className="section-divider-container">
                    <hr className="section-divider" />
                </div> */}
                <section className="ingredient-section">
                    <img src={logo6} alt="Ingredient 6" className="ingredient-image" />
                    <div className="ingredient-description">
                        <h2>LES ŒUFS</h2>
                        <p>Je ne travaille que des œufs biologiques, de plein air et français — pour des raisons gustatives et éthiques.</p>
                    </div>
                </section>
                {/* <div className="section-divider-container">
                    <hr className="section-divider" />
                </div> */}
                <section className="ingredient-section">
                    <img src={logo7} alt="Ingredient 7" className="ingredient-image" />
                    <div className="ingredient-description">
                        <h2>LE BEURRE DE BARATTE DE MONTAGNE DU CANTAL</h2>
                        <p>De qualité exceptionnelle, il est fabriqué par la dernière laiterie familiale locale dont les vaches sont nourries à l’herbe.</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Ingredients;
