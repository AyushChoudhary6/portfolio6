import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    'Docker', 'Kubernetes', 'Jenkins', 'Linux',
    'Terraform', 'Ansible', 'AWS', 'Azure', 
    'GitHub Actions', 'GitLab CI', 'Git',
    'React', 'Vite', 'Tailwind CSS', 'Python', 'Bash'
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <section id="skills" className="py-24 bg-black">
      <div className="max-w-4xl mx-auto px-8">
        <motion.div 
          className="text-center"
          {...fadeInUp}
        >
          <h2 className="text-5xl font-light text-white mb-16">
            Skills
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                className="px-6 py-3 border border-gray-600 text-gray-300 text-lg font-light hover:border-white hover:text-white transition-all duration-300 cursor-default"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
