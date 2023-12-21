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
    <header className={`header ${isBasketOpen ? 'basket-open' : ''}`}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/OShopping_2015.png" alt="Site Logo" className="logo" />
      <nav>
        <a href="/">Ana Sayfa</a>
        <a href="/buy">Alışveriş</a>
        <div className="basket-container" onClick={toggleBasket}>
          <span className="basket-icon">🛒</span>
          <span className="basket-text">Sepet</span>
          {basketItems.length > 0 && <span className="badge">{basketItems.length}</span>}
        </div>
      </nav>

      {isBasketOpen && <BasketPopup setIsBasketOpen={setIsBasketOpen} />}
    </header>
  );
}

export default Header;
