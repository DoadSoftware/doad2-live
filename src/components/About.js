import {React} from "react";

const AboutSection = () => {
  return (
    <section
      className="py-16 bg-primary-light text-white border-b-8 border-blue-300"
      id="about"
    >
      <div className="container mx-auto px-4" data-aos="fade-up">
        <div className="text-center">
          <h2 className="font-Oswald text-3xl font-bold mb-4">ABOUT US</h2>
          <p className="font-Montserrat text-sm sm:text-lg mb-6 pl-20 pr-20 sm:pl-44 sm:pr-44 uppercase">
          We are a group of passionate sports enthusiasts who have joined forces to provide cost-effective,
          state-of-the-art solutions to meet all our clients' needs.
          We harness the latest and most advanced technology available globally to deliver end-to-end services.
          Since our establishment in 2021, we have successfully secured and executed high-quality work across all our projects, ensuring customer satisfaction.
          </p>
          <p className="font-Montserrat text-sm sm:text-lg mb-6 pl-20 pr-20 sm:pl-44 sm:pr-44 uppercase">
          Our team has a successful history of leading projects and delivering solutions for various prestigious tournaments
          including the <b>Indian Super League, ICC  Women’s T20 World Cup, ICC Cricket World Cup,
          ICC U19 Men’s Cricket World Cup, Indian Street Premier League, LLC Franchise, LLC Masters,
          Tennis Premier League, Uttar Pradesh Kabaddi League, Bangladesh Premier League,
          Premier Handball League, Khelo India University Games, State Domestic T20 Leagues like Andhra Premier League,
          Maharaja T20, Rajasthan Premier League, Sher E Punjab T20 and Hero I-League. </b>
          In addition, we've contributed to the creation of assets for events like the Premier Handball League,
          where we meticulously designed the entire program to captivate viewers with our comprehensive packages.
          </p>

          <p className="font-Montserrat text-sm sm:text-lg mb-6 pl-20 pr-20 sm:pl-44 sm:pr-44 uppercase">
          Our expertise extends beyond traditional sports broadcasting into the realm of virtual reality,
          where we utilize various broadcast cameras to craft custom graphics and experiences.
          This innovative approach allows us to explore new dimensions in sports presentation.
          </p>
          <p className="font-Montserrat text-sm sm:text-lg mb-6 pl-20 pr-20 sm:pl-44 sm:pr-44 uppercase">
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
