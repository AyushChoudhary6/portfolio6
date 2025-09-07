import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax and fade effects
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.3, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  
  // Color transition from white to black
  const textColor = useTransform(
    scrollYProgress,
    [0, 0.5, 0.8],
    ["#ffffff", "#666666", "#000000"]
  );

  const firstName = "AYUSH";
  const lastName = "CHOUDHARY";

  // Staggered animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.3,
      y: 100,
      rotateX: -90
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 20,
        duration: 0.4
      }
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative h-[200vh] bg-black overflow-hidden"
      id="hero"
    >
      {/* Fixed hero content */}
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <motion.div
          className="text-center px-4"
          style={{ y, opacity, scale }}
        >
          {/* Animated name */}
          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* First Name */}
            <div className="flex justify-center items-center gap-2 md:gap-4">
              {firstName.split("").map((letter, index) => (
                <motion.span
                  key={`first-${index}`}
                  className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] font-black tracking-tight inline-block"
                  style={{ color: textColor }}
                  variants={letterVariants}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.3 }
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Last Name */}
            <div className="flex justify-center items-center gap-2 md:gap-4">
              {lastName.split("").map((letter, index) => (
                <motion.span
                  key={`last-${index}`}
                  className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] font-black tracking-tight inline-block"
                  style={{ color: textColor }}
                  variants={letterVariants}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.3 }
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            style={{ opacity }}
          >
            <p className="text-gray-400 text-xl md:text-2xl mt-8 font-light tracking-[0.2em] uppercase">
              {/* DevOps Engineer & Cloud Architect */}
            </p>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            style={{ opacity }}
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center"
            >
              <motion.div 
                className="w-1 h-3 bg-gray-400 rounded-full mt-2"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
