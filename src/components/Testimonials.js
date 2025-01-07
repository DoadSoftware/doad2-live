import React, { useRef, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
const arr = [
  {
    para1:
      "Design On A Dime has been an invaluable partner for RISE Worldwide, elevating our sports broadcast production with exceptional graphic solutions.",
    para2:
      "Their expertise and creativity have consistently enhanced our coverage of major football tournaments such as the Indian Super League, Intercontinental Cup, Super Cup, and many more, as well as bespoke cricket events like Indian Street Premier League - Season 1.",
    para3:
      "Collaborating with their team is always seamless, and their unwavering commitment to excellence truly sets them apart.",
    clientName: "James Rego",
    position: "Head - Broadcast and Production, Rise Worldwide",
  },
  {
    para1:
      "Design On A Dime has been an invaluable partner for RISE Worldwide, elevating our sports broadcast production with exceptional graphic solutions.",
    para2:
      "Their expertise and creativity have consistently enhanced our coverage of major football tournaments such as the Indian Super League, Intercontinental Cup, Super Cup, and many more, as well as bespoke cricket events like Indian Street Premier League - Season 1.",
    para3:
      "Collaborating with their team is always seamless, and their unwavering commitment to excellence truly sets them apart.",
    clientName: "James Rego",
    position: "Head - Broadcast and Production, Rise Worldwide",
  },
  {
    para1:
      "Design On A Dime has been an invaluable partner for RISE Worldwide, elevating our sports broadcast production with exceptional graphic solutions.",
    para2:
      "Their expertise and creativity have consistently enhanced our coverage of major football tournaments such as the Indian Super League, Intercontinental Cup, Super Cup, and many more, as well as bespoke cricket events like Indian Street Premier League - Season 1.",
    para3:
      "Collaborating with their team is always seamless, and their unwavering commitment to excellence truly sets them apart.",
    clientName: "James Rego",
    position: "Head - Broadcast and Production, Rise Worldwide",
  },
  {
    para1:
      "Design On A Dime has been an invaluable partner for RISE Worldwide, elevating our sports broadcast production with exceptional graphic solutions.",
    para2:
      "Their expertise and creativity have consistently enhanced our coverage of major football tournaments such as the Indian Super League, Intercontinental Cup, Super Cup, and many more, as well as bespoke cricket events like Indian Street Premier League - Season 1.",
    para3:
      "Collaborating with their team is always seamless, and their unwavering commitment to excellence truly sets them apart.",
    clientName: "James Rego",
    position: "Head - Broadcast and Production, Rise Worldwide",
  },
  {
    para1:
      "Design On A Dime has been an invaluable partner for RISE Worldwide, elevating our sports broadcast production with exceptional graphic solutions.",
    para2:
      "Their expertise and creativity have consistently enhanced our coverage of major football tournaments such as the Indian Super League, Intercontinental Cup, Super Cup, and many more, as well as bespoke cricket events like Indian Street Premier League - Season 1.",
    para3:
      "Collaborating with their team is always seamless, and their unwavering commitment to excellence truly sets them apart.",
    clientName: "James Rego",
    position: "Head - Broadcast and Production, Rise Worldwide",
  },
  {
    para1:
      "Design On A Dime has been an invaluable partner for RISE Worldwide, elevating our sports broadcast production with exceptional graphic solutions.",
    para2:
      "Their expertise and creativity have consistently enhanced our coverage of major football tournaments such as the Indian Super League, Intercontinental Cup, Super Cup, and many more, as well as bespoke cricket events like Indian Street Premier League - Season 1.",
    para3:
      "Collaborating with their team is always seamless, and their unwavering commitment to excellence truly sets them apart.",
    clientName: "James Rego",
    position: "Head - Broadcast and Production, Rise Worldwide",
  },
  {
    para1:
      "Design On A Dime has been an invaluable partner for RISE Worldwide, elevating our sports broadcast production with exceptional graphic solutions.",
    para2:
      "Their expertise and creativity have consistently enhanced our coverage of major football tournaments such as the Indian Super League, Intercontinental Cup, Super Cup, and many more, as well as bespoke cricket events like Indian Street Premier League - Season 1.",
    para3:
      "Collaborating with their team is always seamless, and their unwavering commitment to excellence truly sets them apart.",
    clientName: "James Rego",
    position: "Head - Broadcast and Production, Rise Worldwide",
  },
];

const Testimonials = () => {
  const testimonialRef = useRef(null);
  const scrollLeft = () => {
    testimonialRef.current.scrollBy({
      left: -testimonialRef.current.offsetWidth,
      behavior: "smooth",
    });
  };
  const scrollRight = () => {
    testimonialRef.current.scrollBy({
      left: testimonialRef.current.offsetWidth,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (testimonialRef.current) {
        const scrollWidth = testimonialRef.current.scrollWidth;
        const scrollLeft = testimonialRef.current.scrollLeft;
        const containerWidth = testimonialRef.current.offsetWidth;
        if (scrollLeft + containerWidth >= scrollWidth) {
          testimonialRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          testimonialRef.current.scrollBy({
            left: containerWidth,
            behavior: "smooth",
          });
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-primary-light">
      <div className="container mx-auto">
        <h2 className="font-Oswald text-3xl font-bold text-center mb-8 text-white">
          Testimonials
        </h2>
        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 focus:ring-4 focus:ring-blue-300 z-10"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <div
            ref={testimonialRef}
            className="flex items-center gap-6 justify-start overflow-hidden no-scrollbar mx-auto max-w-[90%] transition-all duration-300 snap-x snap-mandatory"
          >
            {arr.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800 bg-opacity-50 p-6 shadow-md hover:bg-opacity-75 transition duration-300 w-full sm:w-[32%] md:w-[32%] flex-shrink-0 snap-center rounded-lg"
              >
                <p className="text-gray-300">"{testimonial.para1}</p>
                <br />
                <p className="text-gray-300">{testimonial.para2}</p>
                <br />
                <p className="text-gray-300">"{testimonial.para3}"</p>
                <br />
                <h4 className="mt-4 font-bold text-white">
                  {testimonial.clientName}
                </h4>
                <p className="text-sm text-gray-400">{testimonial.position}</p>
              </div>
            ))}
          </div>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 focus:ring-4 focus:ring-blue-300 z-10"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
