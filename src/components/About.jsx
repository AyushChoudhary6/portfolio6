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
          className="bg-black rounded-[3rem] shadow-2xl p-8 md:p-12 lg:p-16 w-full min-h-[80vh] flex items-center overflow-hidden"
        >
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center h-full">
            {/* Left Side - Vertical "ABOUT ME" */}
            <div className="lg:col-span-3 flex justify-center lg:justify-center items-center h-full">
              <div className="flex flex-col items-center justify-center h-full space-y-8">
                {/* Top Line */}
                <motion.div 
                  variants={contentVariants}
                  className="w-2 h-24 bg-white transform rotate-180"
                  style={{ writingMode: 'vertical-lr' }}
                />
                
                {/* ABOUT ME Text */}
                <motion.h2 
                  variants={contentVariants}
                  className="text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] font-black text-white tracking-tight leading-none text-center transform rotate-180"
                  style={{
                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    fontWeight: 900,
                    writingMode: 'vertical-lr',
                    textOrientation: 'mixed'
                  }}
                >
                  ABOUT ME
                </motion.h2>
                
                {/* Bottom Line */}
                <motion.div 
                  variants={contentVariants}
                  className="w-2 h-24 bg-white transform rotate-180"
                  style={{ writingMode: 'vertical-lr' }}
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="lg:col-span-9">
              <motion.div 
                variants={contentVariants}
                className="space-y-8 text-left"
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
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;