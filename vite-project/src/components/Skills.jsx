import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      skills: ["AWS", "Azure", "Google Cloud", "DigitalOcean"],
      icon: "☁️",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Container & Orchestration",
      skills: ["Docker", "Kubernetes", "Docker Swarm", "Helm"],
      icon: "📦",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Infrastructure as Code",
      skills: ["Terraform", "Ansible", "CloudFormation", "Pulumi"],
      icon: "🏗️",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "CI/CD & DevOps",
      skills: ["Jenkins", "GitLab CI", "GitHub Actions", "ArgoCD"],
      icon: "🔄",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Monitoring & Security",
      skills: ["Prometheus", "Grafana", "ELK Stack", "Vault"],
      icon: "📊",
      color: "from-teal-500 to-blue-500"
    },
    {
      title: "Programming & Scripting",
      skills: ["Python", "Bash", "JavaScript", "Go"],
      icon: "💻",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="skills" className="py-24 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
          backgroundSize: "100px 100px"
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="ultra-bold-heading text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] text-white mb-8">
            SKILLS
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Technologies and tools that power modern infrastructure solutions
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02, 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600 transition-all duration-300"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
              
              {/* Icon */}
              <motion.div
                className="text-4xl mb-6"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {category.icon}
              </motion.div>

              {/* Category Title */}
              <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                {category.title}
              </h3>

              {/* Skills */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center group/skill"
                  >
                    <motion.div
                      className="w-2 h-2 bg-gray-500 rounded-full mr-3 group-hover/skill:bg-white transition-colors duration-200"
                      whileHover={{ scale: 1.5 }}
                    />
                    <span className="text-gray-300 group-hover/skill:text-white transition-colors duration-200 font-medium">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Hover Effect Border */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/20 transition-all duration-300"
                initial={false}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-gray-400 mb-6 text-lg">
            Ready to build something amazing together?
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Collaborate
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
      </div>
    </section>
  );
};

export default Skills;
