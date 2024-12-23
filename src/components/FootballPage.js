import React, { useRef, useEffect } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FootballPage = () => {
  const cardsRef = useRef([]);
    
  useEffect(() => {
    document.title= "Design on a Dime | Football";
    window.scrollTo(0, 0);
    gsap.utils.toArray(cardsRef.current).forEach((card, i) => {
      gsap.set(card, { opacity: 0 }); // Ensure each card starts hidden

      ScrollTrigger.create({
        trigger: card,
        start: "top 80%", // Trigger when the top of the card hits 80% of the viewport
        end: "bottom 20%", // End when the bottom of the card hits 20% of the viewport
        scrub: true,
        onEnter: () => gsap.to(card, { opacity: 1, duration: 0.5 }),
        onLeave: () => gsap.to(card, { opacity: 1, duration: 0.5 }),
        onEnterBack: () => gsap.to(card, { opacity: 1, duration: 0.5 }),
        onLeaveBack: () => gsap.to(card, { opacity: 1, duration: 0.5 }),
      });
    });
  }, []);

  return (
    <section className="py-16 bg-primary-light border-t border-b border-blue-300" id="football">
      <div className="container mx-auto">

        <div className="relative space-y-40">
          {/* Second Card */}
          <div ref={(el) => (cardsRef.current[0] = el)} className="card sticky top-40">
            <div className="bg-white border border-gray-200 rounded-lg shadow md:max-w-6xl mx-auto hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 min-h-[200px]">
              <img className="rounded-t-lg min-h-[200px] md:h-auto md:rounded-s-lg" src="./images/Football/SUBSTITUTES.webp" alt="Cricket Image"/>
            </div>
          </div>
          {/* Second Card */}
          <div ref={(el) => (cardsRef.current[1] = el)} className="card sticky top-40">
            <div className="bg-white border border-gray-200 rounded-lg shadow md:max-w-6xl mx-auto hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 min-h-[200px]">
              <img className="rounded-t-lg min-h-[200px] md:h-auto md:rounded-s-lg" src="./images/Football/LOF_AVG.FORMATION.webp" alt="Cricket Image"/>
            </div>
          </div>
          <div ref={(el) => (cardsRef.current[2] = el)} className="card sticky top-40">
            <div className="bg-white border border-gray-200 rounded-lg shadow md:max-w-6xl mx-auto hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 min-h-[200px]">
              <img className="rounded-t-lg min-h-[200px] md:h-auto md:rounded-s-lg" src="./images/Football/FF_MATCHSTATS.webp" alt="Cricket Image"/>
            </div>
          </div>
          <div ref={(el) => (cardsRef.current[3] = el)} className="card sticky top-40">
            <div className="bg-white border border-gray-200 rounded-lg shadow md:max-w-6xl mx-auto hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 min-h-[200px]">
              <img className="rounded-t-lg min-h-[200px] md:h-auto md:rounded-s-lg" src="./images/Football/STARTING XI.webp" alt="Cricket Image"/>
            </div>
          </div>
          <div ref={(el) => (cardsRef.current[4] = el)} className="card sticky top-40">
            <div className="bg-white border border-gray-200 rounded-lg shadow md:max-w-6xl mx-auto hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 min-h-[200px]">
              <img className="rounded-t-lg min-h-[200px] md:h-auto md:rounded-s-lg" src="./images/Football/LOF_STATS.webp" alt="Cricket Image"/>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FootballPage;
