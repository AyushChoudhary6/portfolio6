import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollYProgress } = useScroll();
  
  // Very gentle scroll effects that don't interfere with initial display
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.8], [0, -50]);

  const firstName = "AYUSH";
  const lastName = "CHOUDHARY";
  const firstNameLetters = firstName.split("");
  const lastNameLetters = lastName.split("");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0
      }
    }
  };

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  };

  return (
    <>
      {/* Hero Section with Animated Text */}
      <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden" id="hero">
        <div className="text-center px-4 w-full">
          {/* First Name */}
          <motion.div
            className="flex justify-center items-center mb-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {firstNameLetters.map((letter, index) => (
              <motion.span
                key={`first-${index}`}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-wider text-white inline-block"
                variants={letterVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>

          {/* Last Name */}
          <motion.div
            className="flex justify-center items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {lastNameLetters.map((letter, index) => (
              <motion.span
                key={`last-${index}`}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-wider text-white inline-block"
                variants={letterVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
          
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            <p className="text-gray-400 text-lg md:text-xl mt-8 font-light tracking-wide">
              DevOps Engineer & Cloud Enthusiast
            </p>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
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
      </section>

      {/* About Me Section - Black Background */}
      <motion.section 
        className="min-h-screen bg-black py-24 px-8" 
        id="about"
        style={{ y: useTransform(scrollYProgress, [0.3, 1], [0, -50]) }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-5xl md:text-6xl font-light text-white mb-16 text-center">
              About
            </h2>
            
            <div className="space-y-8 text-lg md:text-xl leading-relaxed text-gray-300">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                I'm Ayush Choudhary, a DevOps and Cloud enthusiast with experience in Linux, Docker, 
                Jenkins, GitHub/GitLab, Terraform, Ansible, and Kubernetes. I specialize in designing 
                and automating cloud-native infrastructures, building CI/CD pipelines, and delivering 
                scalable, production-ready solutions.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Alongside DevOps, I have hands-on experience in frontend development with React, Vite, 
                Tailwind, and shadcn, enabling me to work across both infrastructure and application 
                layers. My projects span from multi-cloud monitoring platforms to serverless AWS 
                applications, showcasing a balance of technical depth and practical implementation.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                I am driven by the goal of becoming a skilled DevOps/Cloud Engineer, contributing to 
                impactful projects, and continuously improving systems for efficiency, reliability, and security.
              </motion.p>
            </div>

            {/* Call to action */}
            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="#contact"
                className="inline-block px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 text-lg font-light"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Connect
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Hero;
