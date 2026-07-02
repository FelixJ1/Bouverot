import { useState, useEffect, useCallback } from 'react';
import './Carousel.css';

export default function Carousel({ images }) {
  const BATCH_SIZE = window.innerWidth <= 1000 ? 4 : 5;
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const pages = [];
  for (let i = 0; i < images.length; i += BATCH_SIZE) {
    pages.push(images.slice(i, i + BATCH_SIZE));
  }
  const totalPages = pages.length;

  const goToNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPage(prev => (prev + 1) % totalPages);
      setIsAnimating(false);
    }, 500);
  }, [isAnimating, totalPages]);

  useEffect(() => {
    const timer = setInterval(goToNext, 5000);
    return () => clearInterval(timer);
  }, [goToNext]);

  const currentBatch = pages[currentPage] || [];

  return (
    <div className="carousel-wrapper">
      <div className={`carousel-grid-container ${isAnimating ? 'slide-out' : 'slide-in'}`}>
        <div className="carousel-grid">
          {currentBatch.map((src, i) => (
            <div key={`${currentPage}-${i}`} className="carousel-cell">
              <img src={src} alt={`Logo ${i + 1}`} className="carousel-logo" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}