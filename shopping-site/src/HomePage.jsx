// HomePage.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './ProductList.jsx';
import Slideshow from './Slideshow.jsx';

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

  // Sample image URLs
  const slideshowImages = [
    'https://www.bypeople.com/wp-content/uploads/2015/09/single-line-url-image-placeholder.jpg',
    'https://images.unsplash.com/photo-1547127796-06bb04e4b315?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1524334228333-0f6db392f8a1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1557264322-b44d383a2906?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1557264322-b44d383a2906?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  return (
    <div className="home-page">
      <h2>Smartphones</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Slideshow images={slideshowImages} />
          <ProductList products={products} />
        </>
      )}
    </div>
  );
};

export default HomePage;
