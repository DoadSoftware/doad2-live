import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-cover bg-center">
      <video
        className="top-0 left-0 min-w-full max-h-full md:w-auto md:h-auto object-cover"
        autoPlay
        loop
        muted
      >
        <source src="./videos/Doad_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default HeroSection;
