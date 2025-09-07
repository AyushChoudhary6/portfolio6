import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="section-padding bg-gray-50" id="about">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Main Content */}
          <motion.div
            className="space-y-8"
            {...fadeInUp}
          >
            <div>
              <motion.span 
                className="inline-block px-4 py-2 bg-blue-100 text-blue-700 font-medium rounded-lg mb-6"
                whileHover={{ scale: 1.05 }}
              >
                About Me
              </motion.span>
              
              <h2 className="heading-primary mb-6">
                DevOps & Cloud
                <span className="block text-blue-600">Engineering Excellence</span>
              </h2>
              
              <p className="text-body text-lg mb-8">
                I'm Ayush Choudhary, a DevOps and Cloud enthusiast with experience in Linux, Docker, 
                Jenkins, GitHub/GitLab, Terraform, Ansible, and Kubernetes. I specialize in designing 
                and automating cloud-native infrastructures, building CI/CD pipelines, and delivering 
                scalable, production-ready solutions.
              </p>
              
              <p className="text-body text-lg mb-8">
                Alongside DevOps, I have hands-on experience in frontend development with React, Vite, 
                Tailwind, and shadcn, enabling me to work across both infrastructure and application 
                layers. My projects span from multi-cloud monitoring platforms to serverless AWS 
                applications, showcasing a balance of technical depth and practical implementation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                    <span className="text-2xl">☁️</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Cloud Infrastructure</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Designing multi-cloud monitoring platforms and serverless AWS applications with scalable architectures.
                </p>
              </div>

              <div className="card group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors">
                    <span className="text-2xl">🔄</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Automation & CI/CD</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Building robust CI/CD pipelines with Jenkins, GitHub/GitLab, and Infrastructure as Code practices.
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Right Side - Skills & Tech Stack */}
          <motion.div 
            className="space-y-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={childVariants}>
              <h3 className="heading-secondary mb-6">Core Technologies</h3>
              
              <div className="space-y-6">
                {/* Skills Categories */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">DevOps & Orchestration</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Docker', 'Kubernetes', 'Jenkins', 'Linux'].map((skill) => (
                      <motion.span
                        key={skill}
                        className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:border-blue-300 hover:bg-blue-50 transition-colors cursor-default"
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Infrastructure as Code</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Terraform', 'Ansible', 'AWS CloudFormation', 'Helm'].map((skill) => (
                      <motion.span
                        key={skill}
                        className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:border-blue-300 hover:bg-blue-50 transition-colors cursor-default"
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Version Control & CI/CD</h4>
                  <div className="flex flex-wrap gap-2">
                    {['GitHub Actions', 'GitLab CI', 'Jenkins Pipelines', 'Git'].map((skill) => (
                      <motion.span
                        key={skill}
                        className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:border-blue-300 hover:bg-blue-50 transition-colors cursor-default"
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Frontend Development</h4>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Vite', 'Tailwind CSS', 'shadcn/ui'].map((skill) => (
                      <motion.span
                        key={skill}
                        className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:border-blue-300 hover:bg-blue-50 transition-colors cursor-default"
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={childVariants} className="pt-6">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h4 className="font-semibold text-blue-900 mb-3">My Mission</h4>
                <ul className="space-y-2 text-blue-800">
                  <li className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Becoming a skilled DevOps/Cloud Engineer
                  </li>
                  <li className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Contributing to impactful projects
                  </li>
                  <li className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Improving systems for efficiency & reliability
                  </li>
                  <li className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Ensuring security and scalability
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
