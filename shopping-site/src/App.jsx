// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header.jsx';
import BuyProductPage from './BuyProductPage.jsx';
import HomePage from './HomePage.jsx';
import { BasketProvider } from './BasketContext';

function App() {
  return (
    <BasketProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/buy" element={<BuyProductPage />} />
          </Routes>
        </div>
      </Router>
    </BasketProvider>
  );
}

export default App;
