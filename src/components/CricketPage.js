import React, { useRef, useEffect } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const CricketPage = () => {
  const cardsRef = useRef([]);
  useEffect(() => {
    document.title = "Design on a Dime | Cricket";
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
    <section className="py-16 bg-primary-light border-t border-b border-blue-300" id="cricket">
      <div className="container mx-auto">
        <div className="relative space-y-40">
          <div ref={(el) => (cardsRef.current[0] = el)} className="card sticky top-40">
            <div className="bg-white border border-gray-200 rounded-lg shadow md:max-w-6xl mx-auto hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 min-h-[200px]">
              <img loading="lazy" className="rounded-t-lg min-h-[200px] md:h-auto md:rounded-s-lg" src="./images/Cricket/ACC_IDENT.webp" alt="Cricket"/>
            </div>
          </div>
          <div ref={(el) => (cardsRef.current[0] = el)} className="card sticky top-40">
            <div className="bg-white border border-gray-200 rounded-lg shadow md:max-w-6xl mx-auto hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 min-h-[200px]">
              <img loading="lazy" className="rounded-t-lg min-h-[200px] md:h-auto md:rounded-s-lg" src="./images/Cricket/BATTING.webp" alt="Cricket"/>
            </div>
          </div>
          <div ref={(el) => (cardsRef.current[0] = el)} className="card sticky top-40">
            <div className="bg-white border border-gray-200 rounded-lg shadow md:max-w-6xl mx-auto hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 min-h-[200px]">
              <img loading="lazy" className="rounded-t-lg min-h-[200px] md:h-auto md:rounded-s-lg" src="./images/Cricket/SUMMARY.webp" alt="Cricket"/>
            </div>
          </div>
          <div ref={(el) => (cardsRef.current[0] = el)} className="card sticky top-40">
            <div className="bg-white border border-gray-200 rounded-lg shadow md:max-w-6xl mx-auto hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 min-h-[200px]">
              <img loading="lazy" className="rounded-t-lg min-h-[200px] md:h-auto md:rounded-s-lg" src="./images/Cricket/RESULT.webp" alt="Cricket"/>
            </div>
          </div>
          <div ref={(el) => (cardsRef.current[0] = el)} className="card sticky top-40">
            <div className="bg-white border border-gray-200 rounded-lg shadow md:max-w-6xl mx-auto hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 min-h-[200px]">
              <img loading="lazy" className="rounded-t-lg min-h-[200px] md:h-auto md:rounded-s-lg" src="./images/Cricket/MatchId.webp" alt="Cricket"/>
            </div>
          </div>
          <div ref={(el) => (cardsRef.current[0] = el)} className="card sticky top-40">
            <div className="bg-white border border-gray-200 rounded-lg shadow md:max-w-6xl mx-auto hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 min-h-[200px]">
              <img loading="lazy" className="rounded-t-lg min-h-[200px] md:h-auto md:rounded-s-lg" src="./images/Cricket/Playing.webp" alt="Cricket"/>
            </div>
          </div>
          <div ref={(el) => (cardsRef.current[0] = el)} className="card sticky top-40">
            <div className="bg-white border border-gray-200 rounded-lg shadow md:max-w-6xl mx-auto hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 min-h-[200px]">
              <img loading="lazy" className="rounded-t-lg min-h-[200px] md:h-auto md:rounded-s-lg" src="./images/Cricket/Target.webp" alt="Cricket"/>
            </div>
          </div>
          <div ref={(el) => (cardsRef.current[0] = el)} className="card sticky top-40">
            <div className="bg-white border border-gray-200 rounded-lg shadow md:max-w-6xl mx-auto hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 min-h-[200px]">
              <img loading="lazy" className="rounded-t-lg min-h-[200px] md:h-auto md:rounded-s-lg" src="./images/Cricket/Counter.webp" alt="Cricket"/>
            </div>
          </div>
          <div ref={(el) => (cardsRef.current[0] = el)} className="card sticky top-40">
            <div className="bg-white border border-gray-200 rounded-lg shadow md:max-w-6xl mx-auto hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 min-h-[200px]">
              <img loading="lazy" className="rounded-t-lg min-h-[200px] md:h-auto md:rounded-s-lg" src="./images/Cricket/FF_PLAYERPROFILE.webp" alt="Cricket"/>
            </div>
          </div>
          <div ref={(el) => (cardsRef.current[1] = el)} className="card sticky top-40">
            <div className="bg-white border border-gray-200 rounded-lg shadow md:max-w-6xl mx-auto hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 min-h-[200px]">
              <img loading="lazy" className="rounded-t-lg min-h-[200px] md:h-auto md:rounded-s-lg" src="./images/Cricket/BAT GRIFF.webp" alt="Cricket"/>
            </div>
          </div>
          <div ref={(el) => (cardsRef.current[2] = el)} className="card sticky top-40">
            <div className="bg-white border border-gray-200 rounded-lg shadow md:max-w-6xl mx-auto hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 min-h-[200px]">
              <img loading="lazy" className="rounded-t-lg min-h-[200px] md:h-auto md:rounded-s-lg" src="./images/Cricket/doublemanhattan.webp" alt="Cricket"/>
            </div>
          </div>
          <div ref={(el) => (cardsRef.current[3] = el)} className="card sticky top-40">
            <div className="bg-white border border-gray-200 rounded-lg shadow md:max-w-6xl mx-auto hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 min-h-[200px]">
              <img loading="lazy" className="rounded-t-lg min-h-[200px] md:h-auto md:rounded-s-lg" src="./images/Cricket/MATCH_SUMMARY.webp" alt="Cricket"/>
            </div>
          </div>
          <div ref={(el) => (cardsRef.current[4] = el)} className="card sticky top-40">
            <div className="bg-white border border-gray-200 rounded-lg shadow md:max-w-6xl mx-auto hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 min-h-[200px]">
              <img loading="lazy" className="rounded-t-lg min-h-[200px] md:h-auto md:rounded-s-lg" src="./images/Cricket/PROJECTED.webp" alt="Cricket"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CricketPage;
