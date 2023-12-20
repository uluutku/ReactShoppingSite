import React, { useState, useEffect, useRef } from 'react';
import './Slideshow.css';

const Slideshow = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => prevProgress + 20);
    }, 1000);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    const slideshowInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setProgress(0);
    }, 5000);

    return () => clearInterval(slideshowInterval);
  }, [images]);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setProgress(0);
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setProgress(0);
  };

  const handleMouseEnter = () => {
    clearInterval(intervalRef.current);
  };

  const handleMouseLeave = () => {
    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setProgress(0);
    }, 5000);
  };

  return (
    <div className="slideshow" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button className="prev-button" onClick={handlePrevClick}>
        {'<'}
      </button>
      {images.map((image, index) => (
        <img
          key={index}
          className={`slide-image ${index === currentImageIndex ? 'active' : ''}`}
          src={image}
          alt={`Slideshow ${index + 1}`}
        />
      ))}
      <button className="next-button" onClick={handleNextClick}>
        {'>'}
      </button>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default Slideshow;
const handleMouseEnter = () => {
  clearInterval(intervalRef.current);
};

const handleMouseLeave = () => {
  if (!intervalRef.current) {
    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setProgress(0);
    }, 5000);
  }
};
