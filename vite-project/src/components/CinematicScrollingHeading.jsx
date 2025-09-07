import React from 'react';
import { motion } from 'framer-motion';

const CinematicScrollingHeading = () => {
  return (
    <section className="bg-black overflow-hidden py-16 relative h-48">
      {/* True infinite marquee effect */}
      <div className="flex items-center h-full w-full">
        <motion.div
          className="flex gap-32"
          animate={{
            x: [0, '-100%'],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35,
              ease: "linear",
            },
          }}
          style={{
            minWidth: 'fit-content',
          }}
        >
          {/* Multiple instances for smooth infinite scroll */}
          {Array.from({ length: 6 }, (_, index) => (
            <h1
              key={index}
              className="text-8xl md:text-9xl lg:text-[8rem] xl:text-[10rem] 
                         font-black text-white tracking-tight leading-none uppercase
                         select-none pointer-events-none whitespace-nowrap"
              style={{
                fontFamily: '"Arial Black", Arial, sans-serif',
                fontWeight: 900,
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
              }}
            >
              FEATURED WORK
            </h1>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CinematicScrollingHeading;
