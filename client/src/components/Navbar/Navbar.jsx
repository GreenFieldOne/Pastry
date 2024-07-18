import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';
import '../Navbar/cart.css';
import logo from "../../assets/logo.jpg";
import { BiCart } from "react-icons/bi";
import { useCart } from '../cart.jsx'; // Import the cart context


const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems } = useCart(); 

  // console.log('cartItems',cartItems.length);
  const handleMouseEnterDropdown = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeaveDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleMouseEnterMegaMenu = () => {
    setIsMegaMenuOpen(true);
  };

  const handleMouseLeaveMegaMenu = () => {
    setIsMegaMenuOpen(false);
  };

  const handleCartClick = () => {
    
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">
          {/* Logo */}
          <div className="navbar-logo">
            <img src={logo} alt="Logo" />
          </div>
        </div>

        <div className="navbar-center">
          <ul className="navbar-links">
            <li><Link to="/home/patisserie">ACCUEIL</Link></li>
            <li className="dropdown"
                onMouseEnter={handleMouseEnterDropdown}
                onMouseLeave={handleMouseLeaveDropdown}>
              <Link to="#">LA CARTE</Link>
              <ul className={`dropdown-content ${isDropdownOpen ? 'active' : ''}`}>
                <li><Link to="/home/sucre">Le sucré</Link></li>
                <li><Link to="/home/sale">Le salé</Link></li>
                <li><Link to="/home/jus">Les jus</Link></li>
              </ul>
            </li>
            <li><Link to="/home/ingredients">INGREDIENTS</Link></li>
            <li 
              className="mega-menu" 
              onMouseEnter={handleMouseEnterMegaMenu}
              onMouseLeave={handleMouseLeaveMegaMenu}
            >
              <Link to="/home/contact">CONTACTS</Link>
              <div className={`mega-menu-content ${isMegaMenuOpen ? 'active' : ''}`}>
                <div className="mega-menu-column">
                  <h4>Support</h4>
                  <ul>
                    <li><Link to="/home/contact/customer-support">Customer Support</Link></li>
                    <li><Link to="/home/contact/technical-support">Technical Support</Link></li>
                  </ul>
                </div>
                <div className="mega-menu-column">
                  <h4>Company</h4>
                  <ul>
                    <li><Link to="/home/contact/about-us">About Us</Link></li>
                    <li><Link to="/home/contact/careers">Careers</Link></li>
                  </ul>
                </div>
                <div className="mega-menu-column">
                  <h4>Follow Us</h4>
                  <ul>
                    <li><Link to="/home/contact/facebook">Facebook</Link></li>
                    <li><Link to="/home/contact/instagram">Instagram</Link></li>
                  </ul>
                </div>
              </div>
            </li>
            {/* Add more links as needed */}
          </ul>
        </div>

        <div className="navbar-right">
          <button className="btn btn-outline-dark" type="button" onClick={handleCartClick}>
            <BiCart />
            <Link to="/home/Panier">Cart</Link> 
            <span className="badge bg-dark text-white ms-1 rounded-pill">  {cartItems.length}</span>
          </button>
          {/* {isCartOpen && (
            <div className="cart-dropdown">
              <ul>
                {cartItems.map((item, index) => (
                  console.log("item22222",cartItems),
                  <li key={index}>{item.name} - {item.price}</li>
                ))}
              </ul>
            </div>
          )} */}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
