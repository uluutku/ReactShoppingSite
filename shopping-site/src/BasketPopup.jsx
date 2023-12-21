// BasketPopup.jsx
import React, { useState } from 'react';
import './BasketPopup.css';
import OrderCompletePopup from './OrderCompletePopup';
import { useBasket } from './BasketContext';

const BasketPopup = ({ setIsBasketOpen }) => {
  const { basketItems, removeFromBasket, clearBasket } = useBasket();
  const [isOrderComplete, setIsOrderComplete] = useState(false);

  // Calculate the total price of items in the basket
  const total = basketItems.reduce((acc, item) => acc + item.price, 0);

  // Create a map to count the occurrences of each item
  const itemCounts = basketItems.reduce((counts, item) => {
    counts[item.id] = (counts[item.id] || 0) + 1;
    return counts;
  }, {});

  const completeOrder = () => {
    clearBasket();
    setIsOrderComplete(true);
  };

  return (
    <div className="basket-popup">
      <div className="popup-header">
        <h2>Your Basket</h2>
        <button onClick={clearBasket}>Clear Basket</button>
        <button className="close-button" onClick={() => setIsBasketOpen(false)}>
          Close
        </button>
      </div>
      {basketItems.length === 0 ? (
         <p className="empty-basket-message">Your basket is currently empty.</p>
      ) : (
        <React.Fragment>
          <ul>
            {Array.from(new Set(basketItems.map((item) => item.id))).map((itemId) => (
              <li key={itemId}>
                <div className="basket-item">
                  <img
                    src={basketItems.find((item) => item.id === itemId).thumbnail}
                    alt={basketItems.find((item) => item.id === itemId).title}
                    className="basket-item-image"
                  />
                  <div className="basket-item-info">
                    <h3>
                      {basketItems.find((item) => item.id === itemId).title}{' '}
                      {itemCounts[itemId] > 1 && `x ${itemCounts[itemId]}`}
                    </h3>
                    <p>${basketItems.find((item) => item.id === itemId).price}</p>
                  </div>
                  <button onClick={() => removeFromBasket(itemId)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="total-section">
            <p className="total-label">Total:</p>
            <p className="total-amount">${total.toFixed(2)}</p>
          </div>
          <button className="complete-order-button" onClick={completeOrder}>
            Complete Order
          </button>
        </React.Fragment>
      )}
      {isOrderComplete && <OrderCompletePopup setIsOrderComplete={setIsOrderComplete} />}
    </div>
  );
};

export default BasketPopup;
