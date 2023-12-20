// Header.jsx
import React, { useState } from 'react';
import './Header.css';
import BasketPopup from './BasketPopup';
import { useBasket } from './BasketContext';

function Header() {
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const { basketItems } = useBasket();

  const toggleBasket = () => {
    setIsBasketOpen(!isBasketOpen);
  };

  return (
    <header>
      <h1>Your Website Name</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <div className="basket-icon" onClick={toggleBasket}>
        Basket 🛒 {basketItems.length > 0 && <span className="badge">{basketItems.length}</span>}
      </div>
      </nav>

      

      {isBasketOpen && <BasketPopup setIsBasketOpen={setIsBasketOpen} />}
    </header>
  );
}

export default Header;
