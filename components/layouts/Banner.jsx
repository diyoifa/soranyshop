'use client'
import  { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const Banner = () => {

  const images = [
    "images/pexels-ron-lach-8400603.jpg",
    "images/clothes-1839935_1280.jpg",
    "images/pexels-rdne-stock-project-5698851.jpg",
    "images/pexels-ron-lach-8386648.jpg"
  ]
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      <div className="w-full h-[300px] md:h-[350px] overflow-hidden shadow-md shadow-blue-600">
        <img
          className="w-full h-full object-cover transition duration-500 ease-in-out transform"
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex}`}
          loading="lazy"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-4">
        <button
          className="mx-2 p-2 bg-blue-700 text-white rounded-full shadow-md hover:bg-gray-800 focus:outline-none"
          onClick={goToPrevImage}
        >
          <FaChevronLeft />
        </button>
        <button
          className="mx-2 p-2 bg-blue-700 text-white rounded-full shadow-md hover:bg-gray-800 focus:outline-none"
          onClick={goToNextImage}
        >
          <FaChevronRight />
        </button>
      </div> 
    {/* <div
      className="w-44 h-8 absolute bottom-2 z-30 left-10 border-[1px] border-gray-900 px-2 hover:border-gray-800 bg-black/50 hover:bg-black shadow-btnShadow overflow-hidden "
      onClick={goToPrevImage}
    >
      <div className="w-full h-full text-gray-300 text-sm uppercase relative flex items-center justify-between cursor-pointer group  ">
        <span className="text-lg">
          <FaChevronLeft />
        </span>
        <span className="absolute translate-x-24 translate-y-0 group-hover:-translate-y-7 transition-transform duration-500">
          Anterior
        </span>
        <span className="absolute translate-x-24 translate-y-7 group-hover:translate-y-0 transition-transform duration-500">
          Anterior
        </span>
      </div>
    </div>
    <div
      className="w-44 h-8 absolute bottom-2 z-30 right-10 border-[1px] border-gray-900 px-2 hover:border-gray-800 bg-black/50 hover:bg-black shadow-btnShadow overflow-hidden "
      onClick={goToNextImage}
    >
      <div className="w-full h-full text-gray-300 text-sm uppercase relative flex items-center justify-end cursor-pointer group  ">
        <span className="absolute -translate-x-28 translate-y-0 group-hover:-translate-y-7 transition-transform duration-500">
          next
        </span>
        <span className="absolute -translate-x-28 translate-y-7 group-hover:translate-y-0 transition-transform duration-500">
          next
        </span>
        <span className="text-lg">
          <FaChevronRight />
        </span>
      </div>
    </div> */}
    </div>
  );
};

export default Banner;
