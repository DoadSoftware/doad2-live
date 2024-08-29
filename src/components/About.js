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
          <p className="text-lg mb-6 pl-44 pr-44 uppercase">
            We are a team of sports enthusiasts who have turned our passion into successful careers in the visual and sports broadcasting industry.
            With a combined experience of over 30 years, we bring a deep passion, extensive experience, and industry expertise to every project.
          </p>
          <p className="text-lg pl-44 pr-44 uppercase">
            Design on a Dime was established as a private limited company, registered under the Companies Act of India, 2010.
          </p>
          <p className="text-lg mb-6 pl-44 pr-44 uppercase">
            Our mission is straightforward and organically born from our love for sports, entertainment, and the consumer experience. 
            We aim to provide cost-effective, end-to-end solutions for all our clients' graphic needs on a global scale, utilizing the 
            latest technology and in-house innovations. In our previous roles, we have led projects and delivered solutions for premier 
            sporting events such as the Indian Premier League, Big Bash League, and Caribbean Premier League, among others.
          </p>
          <p className="text-lg pl-44 pr-44 uppercase">
            We have also collaborated closely with leading television broadcast networks like Sony, Star, Ten Sports, and Zee, 
            delivering a variety of graphics packages across their channels. Additionally, we have played a key role in the creation 
            of intellectual properties, most notably the Pro Kabaddi League, where we conceptualized the entire show. Our goal was 
            to engage viewers with cutting-edge video graphics and innovative sports data, revolutionizing the sport for everyone.
          </p>
          <p className="text-lg mb-6 pl-44 pr-44 uppercase">
            Our expertise extends beyond visual graphics broadcasting; we also excel in the realm of Virtual Reality. 
            Moreover, we specialize in delivering virtual newsroom solutions, encompassing both design and data integration.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
