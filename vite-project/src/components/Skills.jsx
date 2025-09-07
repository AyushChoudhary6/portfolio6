import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Import clean SVG icons from react-icons
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaPython, 
  FaDocker, 
  FaAws, 
  FaGithub 
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiMongodb, 
  SiPostgresql, 
  SiTerraform,
  SiKubernetes,
  SiLinux
} from 'react-icons/si';

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  // Icon mapping for clean SVG icons with brand colors
  const iconMap = {
    'HTML': FaHtml5,
    'CSS': FaCss3Alt,
    'JavaScript': FaJs,
    'Tailwind CSS': SiTailwindcss,
    'React': FaReact,
    'AWS': FaAws,
    'MongoDB': SiMongodb,
    'Python': FaPython,
    'PostgreSQL': SiPostgresql,
    'Terraform': SiTerraform,
    'Docker': FaDocker,
    'Kubernetes': SiKubernetes
  };

  // Brand colors for each technology
  const iconColors = {
    'HTML': 'group-hover:text-orange-500', // HTML orange
    'CSS': 'group-hover:text-blue-500', // CSS blue
    'JavaScript': 'group-hover:text-yellow-400', // JavaScript yellow
    'Tailwind CSS': 'group-hover:text-cyan-400', // Tailwind cyan
    'React': 'group-hover:text-blue-400', // React blue
    'AWS': 'group-hover:text-orange-400', // AWS orange
    'MongoDB': 'group-hover:text-green-500', // MongoDB green
    'Python': 'group-hover:text-yellow-500', // Python yellow
    'PostgreSQL': 'group-hover:text-blue-600', // PostgreSQL blue
    'Terraform': 'group-hover:text-purple-500', // Terraform purple
    'Docker': 'group-hover:text-blue-500', // Docker blue
    'Kubernetes': 'group-hover:text-blue-600' // Kubernetes blue
  };

  const skillsData = [
    // First Row
    { 
      name: 'HTML', 
      icon: 'HTML', 
      description: 'HyperText Markup Language - the standard markup language for creating web pages and web applications.' 
    },
    { 
      name: 'CSS', 
      icon: 'CSS', 
      description: 'Cascading Style Sheets - used for describing the presentation of a document written in HTML.' 
    },
    { 
      name: 'JavaScript', 
      icon: 'JavaScript', 
      description: 'High-level programming language that enables interactive web pages and is an essential part of web applications.' 
    },
    { 
      name: 'Tailwind CSS', 
      icon: 'Tailwind CSS', 
      description: 'Utility-first CSS framework for rapidly building custom user interfaces.' 
    },
    { 
      name: 'React', 
      icon: 'React', 
      description: 'A JavaScript library for building user interfaces with component-based architecture and virtual DOM.' 
    },

    // Second Row
    { 
      name: 'AWS', 
      icon: 'AWS', 
      description: 'Cloud platform offering a wide range of services including computing power, storage, and databases.' 
    },
    { 
      name: 'MongoDB', 
      icon: 'MongoDB', 
      description: 'NoSQL document database that provides high performance, high availability, and easy scalability.' 
    },
    { 
      name: 'Python', 
      icon: 'Python', 
      description: 'High-level programming language known for its readability and versatility.' 
    },
    { 
      name: 'PostgreSQL', 
      icon: 'PostgreSQL', 
      description: 'Advanced open-source relational database that supports both SQL and JSON querying.' 
    },
    { 
      name: 'Terraform', 
      icon: 'Terraform', 
      description: 'Infrastructure as code software tool that provides a consistent CLI workflow to manage hundreds of cloud services.' 
    },
    { 
      name: 'Docker', 
      icon: 'Docker', 
      description: 'Platform for developing, shipping, and running applications using containerization technology.' 
    },
    { 
      name: 'Kubernetes', 
      icon: 'Kubernetes', 
      description: 'Open-source container orchestration platform for automating deployment, scaling, and management of containerized applications.' 
    }
  ];

  return (
    <section className="min-h-screen bg-black py-20 relative overflow-hidden" id="skills">
      {/* Background */}
      <div className="absolute inset-0 bg-black" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-black text-white tracking-tight leading-none mb-4">
            SKILLS
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12"
        >
          {skillsData.map((skill, index) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              index={index}
              iconMap={iconMap}
              iconColors={iconColors}
              onClick={() => setSelectedSkill(skill)}
            />
          ))}
        </motion.div>

        {/* Skill Description Modal */}
        <AnimatePresence>
          {selectedSkill && (
            <SkillModal 
              skill={selectedSkill} 
              onClose={() => setSelectedSkill(null)} 
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

const SkillCard = ({ skill, index, onClick, iconMap, iconColors }) => {
  const IconComponent = iconMap[skill.icon];
  const colorClass = iconColors[skill.icon] || 'group-hover:text-blue-400';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.05, 
        y: -10,
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 cursor-pointer group"
    >
      {/* Icon Container - Clean SVG icons with brand colors */}
      <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative">
        {IconComponent ? (
          <IconComponent 
            className={`w-20 h-20 text-white ${colorClass} transition-colors duration-300 drop-shadow-lg`}
          />
        ) : (
          <div className="w-20 h-20 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            {skill.name.slice(0, 2)}
          </div>
        )}
      </div>

      {/* Skill Name */}
      <h3 className={`text-white font-semibold text-center text-sm leading-tight ${colorClass} transition-colors duration-300`}>
        {skill.name}
      </h3>
    </motion.div>
  );
};

const SkillModal = ({ skill, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-gray-800 rounded-3xl p-8 max-w-lg w-full border border-gray-700 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 flex items-center justify-center">
              <img 
                src={skill.icon} 
                alt={skill.name}
                className="w-16 h-16 object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div 
                className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xl"
                style={{ display: 'none' }}
              >
                {skill.name.slice(0, 2)}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">{skill.name}</h3>
              <p className="text-gray-400 text-sm">Technology Stack</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors text-3xl font-light w-10 h-10 flex items-center justify-center hover:bg-gray-700 rounded-full"
          >
            ×
          </button>
        </div>

        {/* Description */}
        <div className="mb-6">
          <p className="text-gray-300 leading-relaxed">
            {skill.description}
          </p>
        </div>

        {/* Close Button */}
        <div className="flex justify-end">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors duration-300"
          >
            Close
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
