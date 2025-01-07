import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AtheleticsPage = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    document.title = "Design on a Dime | Other Sports";
    window.scrollTo(0, 0);
    gsap.registerPlugin(ScrollTrigger);

    const animation = gsap.utils.toArray(cardsRef.current).map((card) =>
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
            toggleActions: "play none none reverse",
          },
        }
      )
    );

    return () => {
      animation.forEach((anim) => anim.kill());
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section className="py-16 bg-primary-light border-t border-b border-blue-300" id="others">
      <div className="container mx-auto">
        <div className="relative space-y-40">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="card sticky top-40"
            >
              <div className="bg-white border border-gray-200 rounded-lg shadow md:max-w-6xl mx-auto hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 min-h-[200px]">
                <img
                  loading="lazy"
                  className="rounded-t-lg min-h-[200px] md:h-auto md:rounded-s-lg"
                  src={`./images/Others/OTHER${i + 1}.webp`}
                  alt={`OTHER${i + 1} Image`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AtheleticsPage;
