import React from "react";

const Testimonials = () => (
  <section className="py-16 bg-primary-light">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        TESTIMONIALS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Repeat for each testimonial */}
        <div className="bg-gray-800 bg-opacity-50 p-4 shadow-md hover:bg-opacity-75 transition duration-300">
          <p className="text-gray-300">"Testimonial text..."</p>
          <h4 className="mt-4 font-bold text-white">Client Name</h4>
          <p className="text-sm text-gray-400">Position, Company</p>
        </div>
        <div className="bg-gray-800 bg-opacity-50 p-4 shadow-md hover:bg-opacity-75 transition duration-300">
          <p className="text-gray-300">"Testimonial text..."</p>
          <h4 className="mt-4 font-bold text-white">Client Name</h4>
          <p className="text-sm text-gray-400">Position, Company</p>
        </div>
        <div className="bg-gray-800 bg-opacity-50 p-4 shadow-md hover:bg-opacity-75 transition duration-300">
          <p className="text-gray-300">"Testimonial text..."</p>
          <h4 className="mt-4 font-bold text-white">Client Name</h4>
          <p className="text-sm text-gray-400">Position, Company</p>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;
