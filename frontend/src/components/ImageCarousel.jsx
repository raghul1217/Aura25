import React, { useState, useEffect } from 'react';
import corousel1 from '../assets/corousel1.jpg.jpeg';
import corousel2 from '../assets/corousel2.jpg.jpeg';
import '../styles/image-carousel.css';

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Array of images
  const images = [
    corousel1,
    corousel2
  ];

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  // Handle next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Handle previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Go to specific slide
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      <div className="memorable-moments">
        <h2 className="events-head">Aura25 Moments</h2>
      </div>
      <div className="carousel-wrapper">
        <div className="carousel">
          <div className="carousel-inner">
            {images.map((image, index) => (
              <div
                key={index}
                className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
              >
                <img src={image} alt={`Slide ${index + 1}`} />
              </div>
            ))}

            {/* Navigation arrows */}
            <button className="carousel-arrow carousel-arrow-left" onClick={prevSlide}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button className="carousel-arrow carousel-arrow-right" onClick={nextSlide}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
        {/* Indicators positioned outside the carousel */}
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;