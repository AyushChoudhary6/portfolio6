import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <section className="py-24 bg-black" id="about">
      <div className="max-w-4xl mx-auto px-8">
        <motion.div
          className="text-center"
          {...fadeInUp}
        >
          <h2 className="text-5xl font-light text-white mb-16">
            About
          </h2>
          
          <div className="space-y-8 text-lg leading-relaxed">
            <p className="text-gray-300">
              I'm Ayush Choudhary, a DevOps and Cloud enthusiast with experience in Linux, Docker, 
              Jenkins, GitHub/GitLab, Terraform, Ansible, and Kubernetes. I specialize in designing 
              and automating cloud-native infrastructures, building CI/CD pipelines, and delivering 
              scalable, production-ready solutions.
            </p>
            
            <p className="text-gray-300">
              Alongside DevOps, I have hands-on experience in frontend development with React, Vite, 
              Tailwind, and shadcn, enabling me to work across both infrastructure and application 
              layers. My projects span from multi-cloud monitoring platforms to serverless AWS 
              applications, showcasing a balance of technical depth and practical implementation.
            </p>
            
            <p className="text-gray-300">
              I am driven by the goal of becoming a skilled DevOps/Cloud Engineer, contributing to 
              impactful projects, and continuously improving systems for efficiency, reliability, and security.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;