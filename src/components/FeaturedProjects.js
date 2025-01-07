import React from "react";
import { Link } from 'react-router-dom';

const FeaturedProjects = () => (
  <section
    className="py-16 bg-primary-light border-t border-b-8 border-blue-300"
    id="work"
  >
    <div className="container mx-auto">
      <h2
        className="font-Oswald text-3xl font-bold text-center mb-8 text-white"
        data-aos="fade-up"
      >
        Our Work
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {[...Array(6)].map((_, idx) => {
          const titles = ["Cricket", "Football", "Handball", "Tennis", "Kabaddi", "Others"];
          const images = [
            "./images/featuredProjects/Cricket.webp",
            "./images/featuredProjects/football1.webp",
            "./images/featuredProjects/Handball.webp",
            "./images/featuredProjects/tennis1.webp",
            "./images/featuredProjects/Kabaddi.webp",
            "./images/featuredProjects/Athletic.webp"
          ];
          return (
            <div
              key={idx}
              className="relative bg-primary-light border border-blue-300 p-4 shadow-md"
              data-aos="fade-up"
            >
              <div className="relative overflow-hidden">
                <Link to={`/${titles[idx].toLowerCase()}`}>
                  <img
                    loading="lazy"
                    srcSet={`${images[idx]} 800w, ${images[idx]} 1200w`}
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    src={images[idx]}
                    alt={titles[idx]}
                    className="w-full object-cover cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-105 hover:blur-sm"
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-500"
                    style={{ backdropFilter: "blur(1px)" }}
                  >
                    <h3 className="font-Oswald text-white text-5xl font-extrabold cursor-zoom-in">
                      {titles[idx].toUpperCase()}
                    </h3>
                    <p className="fa-solid fa-circle-arrow-right text-5xl pl-3" style={{ color: 'white' }}></p>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default FeaturedProjects;
