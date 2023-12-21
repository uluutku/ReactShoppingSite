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
      <h1>SiteLogosu</h1>
      <nav>
        <a href="/">Ana Sayfa</a>
        <a href="/buy">Alışveriş</a>
        <div className="basket-icon" onClick={toggleBasket}>
          Sepet 🛒 {basketItems.length > 0 && <span className="badge">{basketItems.length}</span>}
        </div>
      </nav>

      {isBasketOpen && <BasketPopup setIsBasketOpen={setIsBasketOpen} />}
    </header>
  );
}

export default Header;
