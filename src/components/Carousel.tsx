import React, { useEffect, useState } from "react";

interface CarouselPropTypes {
  children: JSX.Element[];
}

const Carousel: React.FC<CarouselPropTypes> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  useEffect(() => {
    setLength(children.length);
  }, [children]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [length]);

  const next = () => {
    if (currentIndex <= length) {
      setCurrentIndex((currentIndex) => currentIndex + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((currentIndex) => currentIndex - 1);
    }
  };

  return (
    <div className="carousel-container">
      {currentIndex !== 0 && (
        <button onClick={prev} className="left-arrow">
          {"<"}
        </button>
      )}
      <div className={`carousel-content-wrapper`}>
        <div
          className={`carousel-content`}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}>
          {children}
        </div>
      </div>
      {currentIndex !== length - 1 && (
        <button onClick={next} className="right-arrow">
          {">"}
        </button>
      )}
    </div>
  );
};

export default Carousel;
