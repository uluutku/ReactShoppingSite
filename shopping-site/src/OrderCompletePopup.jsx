// OrderCompletePopup.jsx
import React from 'react';
import './OrderCompletePopup.css';

const OrderCompletePopup = ({ setIsOrderComplete }) => {
  return (
    <div className="order-complete-popup">
      <p>Your order has been placed!</p>
      <button onClick={() => setIsOrderComplete(false)}>Nice!</button>
    </div>
  );
};

export default OrderCompletePopup;
