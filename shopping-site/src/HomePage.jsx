// HomePage.jsx

import React, { useState, useEffect } from 'react';
import './HomePage.css';
import ShowAllItems from './ShowAllItems.jsx';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const slides = [
    'https://images.squarespace-cdn.com/content/v1/5b67d38bf8370a88da5af09c/1616408703423-TEB6GWDK2EF2XSEE340D/optimalkan_teknologi_e-commerce_bisnis_untuk_mobile.png',  
    'https://bsg.tech/blog/wp-content/uploads/2021/11/AdobeStock_229012550-scaled.jpeg',
  ];

  const totalSlides = slides.length;
  const autoPlayInterval = 5000; // 5 seconds

  useEffect(() => {
    let interval;

    if (!isHovered) {
      interval = setInterval(() => {
        nextSlide();
      }, autoPlayInterval);
    }

    return () => clearInterval(interval);
  }, [currentSlide, isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="homepage">
      <div
        className={`slideshow ${isHovered ? 'paused' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button onClick={prevSlide} className="slide-button prev-button">
          &#10094;
        </button>
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            className={`slideshow-image ${currentSlide === index ? '' : 'hidden'}`}
          />
        ))}
        <button onClick={nextSlide} className="slide-button next-button">
          &#10095;
        </button>
        <div
          className={`progress-bar ${isHovered ? 'paused' : ''}`}
          style={{
            animation: isHovered
              ? 'none'
              : `progress-animation ${autoPlayInterval / 1000}s linear infinite`,
          }}
        ></div>
      </div>
      <ShowAllItems />
    </div>
  );
};

export default HomePage;
