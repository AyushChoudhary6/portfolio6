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
      I'm <span className="font-bold text-white">Ayush Choudhary</span>, a DevOps and Cloud Engineer focused on building 
      scalable, automated, and production-ready infrastructure for modern applications.
    </motion.p>
    
    <motion.p 
      className="text-lg md:text-xl text-gray-300 leading-relaxed"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      I specialize in <span className="font-semibold text-white">Linux, Docker, Kubernetes, Jenkins, Terraform, and AWS</span>, 
      designing cloud-native architectures that are secure, resilient, and fully automated.  
      I combine strong technical fundamentals with practical problem-solving to deliver infrastructure that scales effortlessly.
    </motion.p>

    <motion.p 
      className="text-lg md:text-xl text-gray-300 leading-relaxed"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      Alongside DevOps, I build frontend applications using <span className="font-semibold text-white">React, Vite, and modern JavaScript frameworks</span>, 
      giving me a full-stack perspective that helps bridge development and operations and deliver end-to-end solutions.
    </motion.p>

    <motion.p 
      className="text-lg md:text-xl text-gray-300 leading-relaxed"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      I'm deeply passionate about automation, CI/CD, and creating developer-friendly workflows that accelerate innovation 
      while maintaining reliability, performance, and operational excellence.
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