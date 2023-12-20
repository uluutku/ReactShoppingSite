// HomePage.jsx
import React from 'react';
import Slideshow from './Slideshow';
import './HomePage.css';

const slideshowImages = [
    'https://www.bypeople.com/wp-content/uploads/2015/09/single-line-url-image-placeholder.jpg',
    'https://images.unsplash.com/photo-1547127796-06bb04e4b315?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1524334228333-0f6db392f8a1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1557264322-b44d383a2906?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1557264322-b44d383a2906?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];
  
const HomePage = () => {
  return (
    <div className="homepage">
      <div className="slideshow-container">
        <div className="slideshow">
          <Slideshow images={slideshowImages} />
        </div>
      </div>
      <div className="content">
        <h2>Welcome to Our Shopping Website</h2>
        <p>Discover a wide range of products and enjoy a seamless shopping experience.</p>
      </div>
    </div>
  );
};

export default HomePage;
