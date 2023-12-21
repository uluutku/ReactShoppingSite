// HomePage.jsx

import React, { useState, useEffect } from 'react';
import './HomePage.css';
import ShowAllItems from './ShowAllItems.jsx';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const slides = [
    'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2620&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
