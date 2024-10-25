import React from "react";

const AboutSection = () => {
  return (
    <section
      className="py-16 bg-primary-light text-white border-b-8 border-blue-300"
      id="about"
    >
      <div className="container mx-auto px-4" data-aos="fade-up">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">ABOUT US</h2>
          <p className="text-sm sm:text-lg mb-6 pl-20 pr-20 sm:pl-44 sm:pr-44 uppercase">
          We are a group of passionate sports enthusiasts who have joined forces to provide cost-effective,
          state-of-the-art solutions to meet all our clients' needs.
          We harness the latest and most advanced technology available globally to deliver end-to-end services.
          Since our establishment in 2021, we have successfully secured and executed high-quality work across all our projects, ensuring customer satisfaction.
          </p>
          <p className="text-sm sm:text-lg mb-6 pl-20 pr-20 sm:pl-44 sm:pr-44 uppercase">
          Our team has a successful history of leading projects and delivering solutions for various prestigious tournaments,
          including the <b>Indian Super League 2024, ICC  Women’s T20 World Cup 2024, ICC Cricket World Cup 2023,
          ICC U19 Men’s Cricket World Cup 2024, Indian Street Premier League 2024, LLC Franchise 2023 & 2024, LLC Masters 2023,
          Tennis Premier League 2023, Uttar Pradesh Kabaddi League 2024, the Bangladesh Premier League (BPL) 2021,
          the Premier Handball League (PHL), Khelo India University Games 2022, State Domestic T20 Leagues like Andhra Premier League,
          Maharaja T20, Rajasthan Premier League, Sher E Punjab T20 and the Hero I-League 2022-23. </b>
          In addition, we've contributed to the creation of assets for events like the Premier Handball League,
          where we meticulously designed the entire program to captivate viewers with our comprehensive packages.
          </p>

          <p className="text-sm sm:text-lg mb-6 pl-20 pr-20 sm:pl-44 sm:pr-44 uppercase">
          Our expertise extends beyond traditional sports broadcasting into the realm of virtual reality,
          where we utilize various broadcast cameras to craft custom graphics and experiences.
          This innovative approach allows us to explore new dimensions in sports presentation.
          </p>
          <p className="text-sm sm:text-lg mb-6 pl-20 pr-20 sm:pl-44 sm:pr-44 uppercase">
          In summary, we are a highly skilled team with a wealth of experience in the sports industry,
          specializing in providing top-notch, cost-effective solutions that leverage cutting-edge technology.
          Our impressive track record and commitment to excellence make us a preferred choice for clients seeking comprehensive sports-related services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
