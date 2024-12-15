import React, { useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Clean90 from '../assets/gardenite/clean-90.jpg';
import Flower90 from '../assets/gardenite/flower-90.jpg';
import Horizontal from '../assets/gardenite/horizontal.jpg';

function Carousel() {
  const images = [
    Clean90,
    Flower90,
    Horizontal
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const previousImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 mb-4">

      <div className="relative">
        <h1 className="text-center text-2xl font-semibold text-emerald-600 mb-4">Nuestras novedades</h1>
        <img
          className="w-full h-[500px] object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out"
          src={images[currentIndex]}
          alt="Carousel"
        />
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
          onClick={previousImage}
        >
          <FaChevronLeft />
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
          onClick={nextImage}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
