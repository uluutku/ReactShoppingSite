import React, { useState, useEffect } from 'react';
import './HomePage.css';
import ShowAllItems from './ShowAllItems.jsx';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2620&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    // Add more slide URLs as needed
  ];

  const totalSlides = slides.length;
  const autoPlayInterval = 5000; // 5 seconds

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="homepage">
      <div className="slideshow">
        <button onClick={prevSlide} className="slide-button prev-button">
          &#10094;
        </button>
        <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} className="slideshow-image" />
        <button onClick={nextSlide} className="slide-button next-button">
          &#10095;
        </button>
        <div className="progress-bar" style={{ animationDuration: `${autoPlayInterval / 1000}s` }}></div>
      </div>
      <ShowAllItems />
    </div>
  );
};

export default HomePage;
