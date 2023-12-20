// BuyProductPage.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './ProductList.jsx';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products/category/smartphones');
        console.log('API Response:', response.data);
        setProducts(response.data.products || []); // Ensure that response.data.products is an array
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  
  return (
    <div className="home-page">
      <h2>Smartphones</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <ProductList products={products} />
        </>
      )}
    </div>
  );
};

export default HomePage;
