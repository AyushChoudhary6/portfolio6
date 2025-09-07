import React from 'react';
import { motion } from 'framer-motion';

const ScrollingHeading = () => {
  // Animation variants for smooth infinite scrolling
  const scrollVariants = {
    animate: {
      x: [0, -100],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  // Create multiple instances of the text for seamless loop
  const headingText = "FEATURED WORK";
  const repeatedText = Array(6).fill(headingText);

  return (
    <section className="bg-black overflow-hidden py-16 relative">
      {/* Background overlay for fade effect on edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
      
      {/* Scrolling text container */}
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex gap-16 text-white"
          variants={scrollVariants}
          animate="animate"
          style={{ 
            width: 'max-content',
            willChange: 'transform' 
          }}
        >
          {repeatedText.map((text, index) => (
            <div
              key={index}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] 
                         font-black tracking-tighter leading-none uppercase
                         select-none pointer-events-none"
              style={{
                fontFamily: 'Arial Black, Arial, sans-serif',
                fontWeight: 900,
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
              }}
            >
              {text}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Optional: Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px),
                             radial-gradient(circle at 75% 75%, white 1px, transparent 1px)`,
            backgroundSize: "100px 100px"
          }}
        />
      </div>
    </section>
  );
};

export default ScrollingHeading;
