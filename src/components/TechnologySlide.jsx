import React, { useEffect, useRef } from 'react';

import technologies from '../data/technologies'

const TechnologySlide = () => {
  

  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let animationFrame;
    let position = 0;
    const speed = 0.5; // Adjust speed here (lower = slower)

    const animate = () => {
      position -= speed;
      if (position <= -slider.scrollWidth / 2) {
        position = 0;
      }
      slider.style.transform = `translateX(${position}px)`;
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section className="mx-auto bg-gray-500/5 py-12 overflow-hidden mt-14">
      <div className="relative w-full max-w-[1300px] mx-auto h-[10px] md:h-[40px] flex items-center">
        
        
        <div className="relative w-full overflow-hidden">
          <div 
            ref={sliderRef}
            className="flex whitespace-nowrap"
          >
            {[...technologies, ...technologies].map((tech, index) => (
              <div 
                key={`${tech.name}-${index}`}
                className="inline-flex flex-col items-center mx-8  shrink-0"
                title={tech.name}
              >
                <div className="text-xl md:text-5xl text-gray-500 hover:text-cyan-400 transition-colors duration-300">
                  {React.cloneElement(tech.icon, { className: "fill-current w-8 h-8 md:w-12 md:h-12" })}
                </div>
                <span className="mt-2 text-sm text-gray-600">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySlide;
