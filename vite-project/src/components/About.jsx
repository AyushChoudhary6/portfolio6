import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 20,
        duration: 1.2
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.8
      }
    }
  };

  return (
    <section className="min-h-screen bg-white py-12 flex items-center" id="about">
      <div className="w-full mx-auto px-[2.5%]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-black rounded-[3rem] shadow-2xl p-8 md:p-12 lg:p-16 w-full min-h-[90vh]"
        >
          {/* Heading */}
          <motion.h2 
            variants={contentVariants}
            className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white mb-12 tracking-tight leading-none text-center"
            style={{
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontWeight: 900
            }}
          >
            ABOUT ME
          </motion.h2>

          {/* Content */}
          <motion.div 
            variants={contentVariants}
            className="space-y-8 text-left max-w-4xl mx-auto"
          >
            <motion.p 
              className="text-xl md:text-2xl text-white leading-relaxed font-light"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              I'm <span className="font-bold text-white">Ayush Choudhary</span>, a passionate DevOps and Cloud Engineer 
              specializing in building robust, scalable infrastructure solutions that power modern applications.
            </motion.p>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-300 leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              With expertise in <span className="font-semibold text-white">Linux, Docker, Kubernetes, Jenkins, Terraform, and AWS</span>, 
              I design and automate cloud-native infrastructures with precision and creativity. My approach combines 
              technical excellence with innovative problem-solving to deliver solutions that scale.
            </motion.p>

            <motion.p 
              className="text-lg md:text-xl text-gray-300 leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Beyond infrastructure, I develop frontend applications using <span className="font-semibold text-white">React, 
              Vite, and modern JavaScript frameworks</span>, allowing me to bridge the gap between 
              development and operations seamlessly. This full-stack perspective enables me to create 
              comprehensive solutions from development to deployment.
            </motion.p>

            <motion.p 
              className="text-lg md:text-xl text-gray-300 leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              I'm passionate about automation, continuous integration, and creating efficient workflows 
              that empower development teams to focus on innovation while maintaining the highest 
              standards of reliability and performance.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;