import React from "react";
import { Link } from 'react-router-dom';

const FeaturedProjects = () => (
  <section
    className="py-16 bg-primary-light border-t border-b-8 border-blue-300"
    id="work"
  >
    <div className="container mx-auto">
      <h2
        className="text-3xl font-bold text-center mb-8 text-white"
        data-aos="fade-up"
      >
        OUR WORK
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        <div
          className="relative border border-blue-300 p-4 shadow-md"
          data-aos="fade-up"
        >
          <div className="relative overflow-hidden">
            <Link to="/cricket">
              <img
                src="./images/Cricket.jpg"
                alt="Cricket"
                className="w-full object-cover cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-105 hover:blur-md"
              />
              <div
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-500"
                style={{ backdropFilter: "blur(1px)" }}
              >
                <h3 className="text-white text-5xl font-extrabold cursor-zoom-in">
                  CRICKET
                </h3>
                <p className="fa-solid fa-circle-arrow-right text-5xl pl-3" style={{ color: 'white' }}></p>

              </div>
            </Link>
          </div>
        </div>

        <div
          className="relative bg-primary-light border border-blue-300 p-4 shadow-md"
          data-aos="fade-up"
        >
          <div className="relative overflow-hidden">
            <Link to="/football">
              <img
                src="./images/Football.jpg"
                alt="Football"
                className="w-full object-cover cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-105 hover:blur-sm"
              />
              <div
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-500"
                style={{ backdropFilter: "blur(1px)" }}
              >
                <h3 className="text-white text-5xl font-extrabold cursor-zoom-in">
                  FOOTBALL
                </h3>
                <p className="fa-solid fa-circle-arrow-right text-5xl pl-3" style={{ color: 'white' }}></p>

              </div>
            </Link>
          </div>
        </div>

        <div
          className="relative bg-primary-light border border-blue-300 p-4 shadow-md"
          data-aos="fade-up"
        >
          <div className="relative overflow-hidden">
            <Link to="/handball">
              <img
                src="./images/Handball.jpg"
                alt="Handball"
                className="w-full object-cover cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-105 hover:blur-sm"
              />
              <div
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-500"
                style={{ backdropFilter: "blur(1px)" }}
              >
                <h3 className="text-white text-5xl font-extrabold cursor-zoom-in">
                  HANDBALL
                </h3>
                <p className="fa-solid fa-circle-arrow-right text-5xl pl-3" style={{ color: 'white' }}></p>

              </div>
            </Link>
          </div>
        </div>

        <div
          className="relative bg-primary-light border border-blue-300 p-4 shadow-md"
          data-aos="fade-up"
        >
          <div className="relative overflow-hidden">
            <Link to="/tennis">
              <img
                src="./images/Tennis.jpg"
                alt="Tennis"
                className="w-full object-cover cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-105 hover:blur-sm"
              />
              <div
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-500"
                style={{ backdropFilter: "blur(1px)" }}
              >
                <h3 className="text-white text-5xl font-extrabold cursor-zoom-in">
                  TENNIS
                </h3>
                <p className="fa-solid fa-circle-arrow-right text-5xl pl-3" style={{ color: 'white' }}></p>

              </div>
            </Link>
          </div>
        </div>

        <div
          className="relative bg-primary-light border border-blue-300 p-4 shadow-md"
          data-aos="fade-up"
        >
          <div className="relative overflow-hidden">
            <Link to="/kabaddi">
              <img
                src="./images/Kabaddi.jpg"
                alt="Kabaddi"
                className="w-full object-cover cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-105 hover:blur-sm"
              />
              <div
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-500"
                style={{ backdropFilter: "blur(1px)" }}
              >
                <h3 className="text-white text-5xl font-extrabold cursor-zoom-in">
                  KABADDI
                </h3>
                <p className="fa-solid fa-circle-arrow-right text-5xl pl-3" style={{ color: 'white' }}></p>

              </div>
            </Link>
          </div>
        </div>

        <div
          className="relative bg-primary-light border border-blue-300 p-4 shadow-md"
          data-aos="fade-up"
        >
          <div className="relative overflow-hidden">
            <Link to="/athletics">
              <img
                src="./images/Athletic.jpg"
                alt="Athletics"
                className="w-full object-cover cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-105 hover:blur-sm"
              />
              <div
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-500"
                style={{ backdropFilter: "blur(1px)" }}
              >
                <h3 className="text-white text-5xl font-extrabold cursor-zoom-in">
                  ATHLETICS
                </h3>
                {/* <p className="fa-solid fa-circle-arrow-right text-5xl pl-3"></p> */}
                <p className="fa-solid fa-circle-arrow-right text-5xl pl-3" style={{ color: 'white' }}></p>

              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeaturedProjects;
