import React, { useRef, useEffect } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CricketPage = () => {
  const cardsRef = useRef([]);
    
  useEffect(() => {
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
    <section className="py-16 bg-primary-light border-t border-b border-blue-300" id="cricket">
      <div className="container mx-auto">

        <div className="relative space-y-40">
          {/* First Card 
          <div ref={(el) => (cardsRef.current[0] = el)} className="card sticky top-40">
            <div className="items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-4xl mx-auto hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 min-h-[350px]">
            <h5 className='text-4xl font-bold underline pt-4 pb-5 text-center font-gilroy'>MAJOR CRICKET COVERAGES</h5>
              <div className="flex flex-col justify-between pl-20 leading-normal h-full">
                <ul className='list-disc text-xl font-bold font-gilroy'>
                  <li className='pb-1'>ICC U19 Men's Cricket World Cup 2024</li>
                  <li className='pb-1'>ICC Cricket World Cup 2023</li>
                  <li className='pb-1'>ICC Women's T20 World Cup 2024</li>
                  <li className='pb-1'>ACC Emerging Teams Asia Cup 2023 - SL</li>
                  <li className='pb-1'>LLC Masters 2023 & Franchise 2023 & 2024</li>
                  <li className='pb-1'>Indian Street Premier League 2024</li>
                  <li className='pb-1'>Lanka Premier League 2023</li>
                </ul>
              </div>
            </div>
          </div> */}

          {/* Second Card */}
          <div ref={(el) => (cardsRef.current[0] = el)} className="card sticky top-40">
            <div className="bg-white border border-gray-200 rounded-lg shadow md:max-w-6xl mx-auto hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 min-h-[200px]">
              <img className="rounded-t-lg min-h-[200px] md:h-auto md:rounded-s-lg" src="./images/Cricket/FF_PLAYERPROFILE.jpg" alt="Cricket Image"/>
            </div>
          </div>
          {/* Second Card */}
          <div ref={(el) => (cardsRef.current[1] = el)} className="card sticky top-40">
            <div className="bg-white border border-gray-200 rounded-lg shadow md:max-w-6xl mx-auto hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 min-h-[200px]">
              <img className="rounded-t-lg min-h-[200px] md:h-auto md:rounded-s-lg" src="./images/Cricket/BAT GRIFF.jpg" alt="Cricket Image"/>
            </div>
          </div>
          <div ref={(el) => (cardsRef.current[2] = el)} className="card sticky top-40">
            <div className="bg-white border border-gray-200 rounded-lg shadow md:max-w-6xl mx-auto hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 min-h-[200px]">
              <img className="rounded-t-lg min-h-[200px] md:h-auto md:rounded-s-lg" src="./images/Cricket/doublemanhattan.jpg" alt="Cricket Image"/>
            </div>
          </div>
          <div ref={(el) => (cardsRef.current[3] = el)} className="card sticky top-40">
            <div className="bg-white border border-gray-200 rounded-lg shadow md:max-w-6xl mx-auto hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 min-h-[200px]">
              <img className="rounded-t-lg min-h-[200px] md:h-auto md:rounded-s-lg" src="./images/Cricket/MATCH_SUMMARY.jpg" alt="Cricket Image"/>
            </div>
          </div>
          {/* Second Card */}
          <div ref={(el) => (cardsRef.current[4] = el)} className="card sticky top-40">
            <div className="bg-white border border-gray-200 rounded-lg shadow md:max-w-6xl mx-auto hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 min-h-[200px]">
              <img className="rounded-t-lg min-h-[200px] md:h-auto md:rounded-s-lg" src="./images/Cricket/PROJECTED.jpg" alt="Cricket Image"/>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CricketPage;
