import React, { useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Carousel() {
  const images = [
    "https://static.wixstatic.com/media/d9d366_cf41ccc49cd043ba9c3075af80d137d5~mv2.jpeg/v1/fill/w_556,h_556,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d9d366_cf41ccc49cd043ba9c3075af80d137d5~mv2.jpeg",
    "https://vapeomex.com/wp-content/uploads/2023/07/icymint_1200x.png",
    "https://acdn.mitiendanube.com/stores/004/490/930/products/ignite-v50-strawberry-kiwi-png-b587d7b9cde802230917116420359933-1024-1024.jpg",
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
    <div className="relative max-w-4xl mx-auto p-4">
      <h1 className="text-center text-2xl font-semibold mb-4">This is a Carousel</h1>
      <div className="relative">
        <img
          className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out"
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