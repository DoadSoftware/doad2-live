import React, { useRef, useEffect } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const TennisPage = () => {
  const cardsRef = useRef([]);
  useEffect(() => {
    document.title = "Design on a Dime | Tennis"
    window.scrollTo(0, 0);
    gsap.utils.toArray(cardsRef.current).forEach((card, i) => {
      gsap.set(card, { opacity: 0 });
      ScrollTrigger.create({
        trigger: card,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
        onEnter: () => gsap.to(card, { opacity: 1, duration: 0.5 }),
        onLeave: () => gsap.to(card, { opacity: 1, duration: 0.5 }),
        onEnterBack: () => gsap.to(card, { opacity: 1, duration: 0.5 }),
        onLeaveBack: () => gsap.to(card, { opacity: 1, duration: 0.5 }),
      });
    });
  }, []);

  return (
    <section className="py-16 bg-primary-light border-t border-b border-blue-300" id="tennis">
      <div className="container mx-auto">
        <div className="relative space-y-40">
          <div ref={(el) => (cardsRef.current[0] = el)} className="card sticky top-40">
            <div className="bg-white border border-gray-200 rounded-lg shadow md:max-w-6xl mx-auto hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 min-h-[200px]">
              <img loading="lazy" className="rounded-t-lg min-h-[200px] md:h-auto md:rounded-s-lg" src="./images/Tennis/FACE-OFF.webp" alt="Tennis"/>
            </div>
          </div>
          <div ref={(el) => (cardsRef.current[1] = el)} className="card sticky top-40">
            <div className="bg-white border border-gray-200 rounded-lg shadow md:max-w-6xl mx-auto hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 min-h-[200px]">
              <img loading="lazy" className="rounded-t-lg min-h-[200px] md:h-auto md:rounded-s-lg" src="./images/Tennis/MATCH ID.webp" alt="Tennis"/>
            </div>
          </div>
          <div ref={(el) => (cardsRef.current[2] = el)} className="card sticky top-40">
            <div className="bg-white border border-gray-200 rounded-lg shadow md:max-w-6xl mx-auto hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 min-h-[200px]">
              <img loading="lazy" className="rounded-t-lg min-h-[200px] md:h-auto md:rounded-s-lg" src="./images/Tennis/ORDER_OF_PLAY.webp" alt="Tennis"/>
            </div>
          </div>
          <div ref={(el) => (cardsRef.current[3] = el)} className="card sticky top-40">
            <div className="bg-white border border-gray-200 rounded-lg shadow md:max-w-6xl mx-auto hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 min-h-[200px]">
              <img loading="lazy" className="rounded-t-lg min-h-[200px] md:h-auto md:rounded-s-lg" src="./images/Tennis/PHOTO_MATCH_ID.webp" alt="Tennis"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TennisPage;
