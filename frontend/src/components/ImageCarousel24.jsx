import React, { useState, useEffect } from 'react';
import carousel24img1 from '../assets/3C9A8493.JPG.jpg';
import carousel24img2 from '../assets/3C9A8587.JPG.jpg';
import carousel24img3 from '../assets/3C9A8608.JPG.jpg';
import carousel24img4 from '../assets/3C9A8654.JPG.jpg';
import carousel24img5 from '../assets/3C9A9670.JPG.jpg';
import carousel24img6 from '../assets/IMG_20260308_121544.jpg.jpg';
import '../styles/image-carousel.css';
import '../styles/home.css';

const ImageCarousel24 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of images
  const images = [
    carousel24img1,
    carousel24img2,
    carousel24img3,
    carousel24img4,
    carousel24img5,
    carousel24img6,
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
    <div className="carousel-container" id='gallery24'>
      {/* About Aura Section */}
      <div className="about-aura24-section">
        <div className="about-aura24-content">
          <h2 className="about-aura24-heading">About Aura</h2>
          <p className="about-aura24-text">
            AURA - an inter-college cultural fest that celebrates the energy, creativity, and talent of students from various institutions. 
            It was first initiated in the year 2024 with the aim of creating a platform where young minds can showcase their abilities beyond academics. 
            Over the years, AURA has grown into a vibrant celebration filled with exciting events, performances, and competitions. 
            The fest brings together students to connect, compete, and celebrate their passion and creativity.
          </p>
        </div>
      </div>

      {/* Aura24 Moments Carousel */}
      <div className="memorable-moments">
        <h2 className="events-head" id='auramoments24'>Aura24 Moments</h2>
      </div>
      <div className="carousel-wrapper">
        <div className="carousel">
          <div className="carousel-inner">
            {images.map((image, index) => (
              <div
                key={index}
                className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
              >
                <img src={image} alt={`Aura24 Slide ${index + 1}`} />
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

export default ImageCarousel24;
