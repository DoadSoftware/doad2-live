import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProductAndServices = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
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
    <section className="py-16 bg-primary-light border-t border-blue-300" id="product">
      <div className="container mx-auto">
        <h2 className="font-Oswald text-3xl font-bold text-center mb-8 text-white">
          Products & Services
        </h2>

        <div className="relative space-y-16">
          {/* First Card */}
          <div ref={(el) => (cardsRef.current[0] = el)} className="card sticky top-20 md:top-60">
            <div className="flex flex-col items-center bg-slate-200 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-6xl mx-auto hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 min-h-[450px]">
              {/*<img className="object-cover w-full rounded-t-lg min-h-[350px] md:h-auto md:max-w-md md:rounded-none md:rounded-s-lg" src="./images/RTF.jpg" alt="Cricket Image"/>*/}
              <video
                className="object-cover w-auto m-10 min-h-[310px] md:h-auto md:max-w-lg rounded-lg"
                autoPlay
                loop
                muted
              >
                <source src="./videos/MATCH_GRAPHICS.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="flex flex-col justify-between p-4 leading-normal h-full">
                <h5 className="font-Montserrat mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">MATCH GRAPHICS</h5>
                <p className="font-Montserrat mb-3 text-lg font-normal text-gray-700 dark:text-gray-400">
                  Our Match Graphics service is driven-by & designed to bring real-time, 
                  data-driven visuals to your live sports broadcasts, enhancing the viewing experience and keeping audiences engaged. 
                  We specialize in creating dynamic and customizable graphics that display critical game information such as scores, 
                  player statistics, team lineups, and in-depth analysis. Our solutions are fully adaptable to your brand’s style, 
                  ensuring seamless integration into live coverage, from pre-game shows to post-match analysis, delivering a 
                  professional and polished presentation every time.
                </p>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div ref={(el) => (cardsRef.current[1] = el)} className="card sticky top-20 md:top-60">
            <div className="flex flex-col items-center bg-slate-200 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-6xl mx-auto hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 min-h-[450px]">
              {/*<img className="object-cover w-full rounded-t-lg min-h-[350px] md:h-auto md:max-w-md md:rounded-none md:rounded-s-lg" src="./images/project1.jpg" alt="Cricket Image"/>*/}
              <video
                className="object-cover w-auto m-10 min-h-[310px] md:h-auto md:max-w-lg rounded-lg"
                autoPlay
                loop
                muted
              >
                <source src="./videos/AR_GFX.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="flex flex-col justify-between p-4 leading-normal h-full">
                <h5 className="font-Montserrat mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">AUGMENTED REALITY GRAPHICS</h5>
                <p className="font-Montserrat mb-3 text-lg font-normal text-gray-700 dark:text-gray-400">
                  With Augmented Reality (AR) Graphics, we take sports broadcasting to the next level by blending real-world 
                  footage with graphical enhancements. Our AR graphics create immersive experiences that engage viewers, 
                  providing visual layers such as interactive scoreboards, player stats, starting lineups, match countdown, 
                  informative match statistics, and more, all overlaid onto the live broadcast. AR graphics add depth and 
                  interactivity, helping broadcasters captivate audiences and offer a cutting-edge viewing experience that truly stands 
                  out from the competition.
                </p>
              </div>
            </div>
          </div>

          {/* Third Card */}
          <div ref={(el) => (cardsRef.current[2] = el)} className="card sticky top-20 md:top-60">
            <div className="flex flex-col items-center bg-slate-200 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-6xl mx-auto hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 min-h-[450px]">
              {/*<img className="object-cover w-full rounded-t-lg min-h-[350px] md:h-auto md:max-w-md md:rounded-none md:rounded-s-lg" src="./images/project2.jpg" alt="Cricket Image"/>*/}
              <video
                className="object-cover w-auto m-10 min-h-[310px] md:h-auto md:max-w-lg rounded-lg"
                autoPlay
                loop
                muted
              >
                <source src="./videos/VR.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="flex flex-col justify-between p-4 leading-normal h-full">
                <h5 className="font-Montserrat mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">VIRTUAL REALITY GRAPHICS</h5>
                <p className="font-Montserrat mb-3 text-lg font-normal text-gray-700 dark:text-gray-400">
                  Our Virtual Reality (VR) Graphics services offer an entirely new way for fans to experience live sports. 
                  Through fully immersive 3D environments, viewers can explore different aspects of the game in real-time. 
                  From navigating through player stats to sponsorships, our VR graphics transform a traditional broadcast 
                  into an interactive experience. By creating lifelike visual environments, we make it possible for broadcasters 
                  to deliver a next-generation experience that keeps fans engaged and returning for more.
                </p>
              </div>
            </div>
          </div>
          {/* First Card */}
          <div ref={(el) => (cardsRef.current[3] = el)} className="card sticky top-20 md:top-60">
            <div className="flex flex-col items-center bg-slate-200 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-6xl mx-auto hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 min-h-[450px]">
              {/*<img className="object-cover w-full rounded-t-lg min-h-[310px] md:h-auto md:max-w-md md:rounded-none md:rounded-s-lg" src="./images/project3.jpg" alt="Cricket Image"/>*/}
              <video
                className="object-cover w-auto m-10 min-h-[310px] md:h-auto md:max-w-lg rounded-lg"
                autoPlay
                loop
                muted
              >
                <source src="./videos/THIRD_PARTY.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="flex flex-col justify-between p-4 leading-normal h-full">
                <h5 className="font-Montserrat mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">THIRD PARTY INTEGRATIONS</h5>
                <p className="font-Montserrat mb-3 text-lg font-normal text-gray-700 dark:text-gray-400">
                  In today’s fast-paced world of broadcasting, having access to live data and external content is essential. 
                  Our Third Party Integration services allow seamless connection between broadcast graphics and external data sources, 
                  such as live sports statistics, social media feeds, or any other third-party API. We ensure that all incoming data is 
                  efficiently displayed through our graphics systems, offering viewers dynamic and up-to-date information. 
                  This integration not only enriches the content but also provides broadcasters with an edge in delivering the most 
                  relevant, real-time data to their audiences.
                </p>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div ref={(el) => (cardsRef.current[4] = el)} className="card sticky top-20 md:top-60">
            <div className="flex flex-col items-center bg-slate-200 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-6xl mx-auto hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 min-h-[450px]">
            <video
                className="object-cover w-auto m-10 min-h-[310px] md:h-auto md:max-w-lg rounded-lg"
                autoPlay
                loop
                muted
              >
                <source src="./videos/LEA.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="flex flex-col justify-between p-4 leading-normal h-full">
                <h5 className="font-Montserrat mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">LIVE ENGAGEMENT ANALYTICS (LEA)</h5>
                <p className="font-Montserrat mb-3 text-lg font-normal text-gray-700 dark:text-gray-400">
                  LEA is our in-house developed solution that seamlessly integrates real-time tracking and match data from third-party 
                  applications across various sports, enhancing broadcast visuals and enriching storytelling. This powerful innovation 
                  provides our clients with a distinct competitive advantage, enabling seamless onboarding of third-party clients to 
                  integrate complex data into broadcast graphics packages. Examples of graphics generated by LEA include player and 
                  team heat maps, touch maps, and other interactive visuals, designed to deliver in-depth, visually compelling insights 
                  for audiences.
                </p>
              </div>
            </div>
          </div>

          {/* Third Card */}
          <div ref={(el) => (cardsRef.current[5] = el)} className="card sticky top-20 md:top-60s">
            <div className="flex flex-col items-center bg-slate-200 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-6xl mx-auto hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 min-h-[450px]">
            <video
                className="object-cover w-auto m-10 min-h-[310px] md:h-auto md:max-w-lg rounded-lg"
                autoPlay
                loop
                muted
              >
                <source src="./videos/SPONSOR.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="flex flex-col justify-between p-4 leading-normal h-full">
                <h5 className="font-Montserrat mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">SPONSOR INTEGRATIONS</h5>
                <p className="font-Montserrat mb-3 text-lg font-normal text-gray-700 dark:text-gray-400">
                  Our Sponsor Integration service for Match Graphics & Virtual Reality broadcasts provides a unique opportunity for advertisers 
                  and sponsors to gain prime visibility in immersive environments. By embedding branded content, logos, and 
                  interactive ads directly within the VR experience, we help ensure that sponsor messaging is an integral part 
                  of the broadcast without interrupting the viewer’s experience. These integrations can be strategically placed 
                  to align with the action. This approach maximizes brand exposure, creating a lasting impact and enhancing the 
                  overall value proposition for sponsors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductAndServices;