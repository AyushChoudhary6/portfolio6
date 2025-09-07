import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20
      }
    }
  };

  return (
    <section className="min-h-screen bg-white py-24 px-8" id="about">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          {/* Section Title */}
          <motion.h2 
            variants={itemVariants}
            className="ultra-bold-heading text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] text-black mb-16"
          >
            ABOUT ME
          </motion.h2>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text */}
            <motion.div variants={itemVariants} className="space-y-8 text-left">
              <motion.p 
                variants={itemVariants}
                className="text-xl md:text-2xl text-gray-800 leading-relaxed font-light"
              >
                I'm <span className="font-bold text-black">Ayush Choudhary</span>, a passionate DevOps and Cloud Engineer 
                specializing in building robust, scalable infrastructure solutions.
              </motion.p>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg text-gray-700 leading-relaxed"
              >
                With expertise in <span className="font-semibold">Linux, Docker, Kubernetes, Jenkins, Terraform, and AWS</span>, 
                I design and automate cloud-native infrastructures that power modern applications. 
                My approach combines technical precision with creative problem-solving.
              </motion.p>

              <motion.p 
                variants={itemVariants}
                className="text-lg text-gray-700 leading-relaxed"
              >
                Beyond infrastructure, I develop frontend applications using <span className="font-semibold">React, 
                Vite, and modern JavaScript frameworks</span>, allowing me to bridge the gap between 
                development and operations seamlessly.
              </motion.p>
            </motion.div>

            {/* Right Column - Skills */}
            <motion.div variants={itemVariants} className="space-y-8">
              <motion.div 
                variants={itemVariants}
                className="bg-gray-50 p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-bold text-black mb-6">Core Expertise</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "DevOps", "AWS Cloud", "Kubernetes", "Docker",
                    "Terraform", "Jenkins", "Linux", "React"
                  ].map((skill, index) => (
                    <motion.div
                      key={skill}
                      variants={itemVariants}
                      className="bg-black text-white px-4 py-2 rounded-lg text-center font-medium"
                      whileHover={{ scale: 1.05, backgroundColor: "#374151" }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Stats */}
              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-3 gap-6 text-center"
              >
                <div>
                  <motion.div 
                    className="text-3xl font-black text-black"
                    whileHover={{ scale: 1.1 }}
                  >
                    50+
                  </motion.div>
                  <p className="text-gray-600 text-sm">Projects</p>
                </div>
                <div>
                  <motion.div 
                    className="text-3xl font-black text-black"
                    whileHover={{ scale: 1.1 }}
                  >
                    24/7
                  </motion.div>
                  <p className="text-gray-600 text-sm">Uptime</p>
                </div>
                <div>
                  <motion.div 
                    className="text-3xl font-black text-black"
                    whileHover={{ scale: 1.1 }}
                  >
                    100%
                  </motion.div>
                  <p className="text-gray-600 text-sm">Dedication</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="mt-16"
          >
            <motion.a
              href="#projects"
              className="inline-flex items-center px-8 py-4 bg-black text-white text-lg font-medium rounded-full hover:bg-gray-800 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore My Work
              <motion.svg 
                className="ml-2 w-5 h-5"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;