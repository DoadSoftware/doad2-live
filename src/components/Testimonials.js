import React from "react";

const Testimonials = () => (
  <section className="py-16 bg-primary-light">
    <div className="container mx-auto">
      <h2 className="font-Oswald text-3xl font-bold text-center mb-8 text-white">
        TESTIMONIALS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Repeat for each testimonial */}
        <div className="bg-gray-800 bg-opacity-50 p-4 shadow-md hover:bg-opacity-75 transition duration-300">
          <p className="text-gray-300">
            "Design On A Dime has been an invaluable partner for RISE Worldwide, elevating our sports broadcast production with exceptional graphic solutions.
          </p>
          <br/>
          <p className="text-gray-300">
            Their expertise and creativity have consistently enhanced our coverage of major football tournament such as the Indian Super League, Intercontinental Cup, Super Cup, and many more, as well as bespoke cricket events like Indian Street Premier League - Season 1.
          </p>
          <br/>
          <p className="text-gray-300">
            Collaborating with their team is always seamless, and their unwavering commitment to excellence truly sets them apart."
          </p>
          <br/>
          <h4 className="mt-4 font-bold text-white">James Rego</h4>
          <p className="text-sm text-gray-400">Head - Broadcast and Production, Rise Worldwide</p>
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
