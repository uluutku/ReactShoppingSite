// OrderCompletePopup.jsx
import React from 'react';
import './OrderCompletePopup.css';

const OrderCompletePopup = ({ setIsOrderComplete }) => {
  return (
    <div className="order-complete-popup">
      <p>Your order has been completed!</p>
      <button onClick={() => setIsOrderComplete(false)}>Close</button>
    </div>
  );
};

export default OrderCompletePopup;
