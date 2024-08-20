import React from "react";

const Expertise = () => (
  <section
    className="py-16 bg-secondary-light border-t border-b border-blue-300"
    id="expertise"
  >
    <div className="container mx-auto">
      <h2
        className="text-3xl font-bold text-center mb-8 text-white"
        data-aos="fade-up"
      >
        OUR EXPERTISE
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Repeat for each expertise item */}
        <div className="text-center" data-aos="fade-up">
          <div className="text-5xl">🌐</div>
          <h3 className="mt-4 text-xl font-bold text-white">Web Development</h3>
          <p className="mt-2 text-white">Description of the expertise...</p>
        </div>
        <div className="text-center" data-aos="fade-up">
          <div className="text-5xl">🌐</div>
          <h3 className="mt-4 text-xl font-bold text-white">Web Development</h3>
          <p className="mt-2 text-white">Description of the expertise...</p>
        </div>
        <div className="text-center" data-aos="fade-up">
          <div className="text-5xl">🌐</div>
          <h3 className="mt-4 text-xl font-bold text-white">Web Development</h3>
          <p className="mt-2 text-white">Description of the expertise...</p>
        </div>
      </div>
    </div>
  </section>
);

export default Expertise;
