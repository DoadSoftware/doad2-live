import React, { useState, useEffect } from "react";

// Define your images and background images
const images = [
  { bg: "./images/mainCover.jpg" },
  { bg: "./images/project1.jpg" },
  { bg: "./images/project2.jpg" },
  { bg: "./images/project3.jpg" },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change the background image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5000ms = 5 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section
      className="relative bg-cover bg-center h-screen transition-all duration-500"
      style={{ backgroundImage: `url(${images[currentIndex].bg})` }}
    >
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-8xl font-gilroy font-extrabold animate-title">
            WE ARE DOAD
          </h1>
          <p className="mt-4 text-xl animate-subtitle font-gilroy">
            WE PROVIDE BROADCASTING DESIGN SOLUTIONS.
          </p>
        </div>
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-600"
        onClick={prevImage}
      >
        &lt;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-600"
        onClick={nextImage}
      >
        &gt;
      </button>
      <div className="absolute bottom-0 w-full overflow-x-auto whitespace-nowrap scroll-smooth">
        <div className="inline-block w-full flex-shrink-0">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              className={`w-full h-auto ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              } transition-opacity duration-500`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
