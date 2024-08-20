import React from "react";

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
        {/* Repeat for each project */}
        <div
          className="bg-white border border-blue-300 p-4 shadow-md"
          data-aos="fade-up"
        >
          <img
            src="./images/Athletic.jpg"
            alt="Project"
            className="w-full object-cover zoom-in cursor-pointer"
          />
          {/*<h3 className="mt-4 text-xl font-bold">Project Title</h3>
          <p className="mt-2 text-gray-600">Short project description...</p>*/}
        </div>
        <div
          className="bg-white border border-blue-300 p-4 shadow-md"
          data-aos="fade-up"
        >
          <img
            src="./images/Handball.jpg"
            alt="Project"
            className="w-full object-cover zoom-in cursor-pointer"
          />
        </div>
        <div
          className="bg-white border border-blue-300 p-4 shadow-md"
          data-aos="fade-up"
        >
          <img
            src="./images/Football.jpg"
            alt="Project"
            className="w-full object-cover zoom-in cursor-pointer"
          />
        </div>
        <div
          className="bg-white border border-blue-300 p-4 shadow-md"
          data-aos="fade-up"
        >
          <img
            src="./images/project4.jpg"
            alt="Project"
            className="w-full object-cover zoom-in cursor-pointer"
          />
        </div>
        <div
          className="bg-white border border-blue-300 p-4 shadow-md"
          data-aos="fade-up"
        >
          <img
            src="./images/project5.jpg"
            alt="Project"
            className="w-full object-cover zoom-in cursor-pointer"
          />
        </div>
        <div
          className="bg-white border border-blue-300 p-4 shadow-md"
          data-aos="fade-up"
        >
          <img
            src="./images/project6.jpg"
            alt="Project"
            className="w-full object-cover zoom-in cursor-pointer"
          />
        </div>
      </div>
    </div>
  </section>
);

export default FeaturedProjects;
