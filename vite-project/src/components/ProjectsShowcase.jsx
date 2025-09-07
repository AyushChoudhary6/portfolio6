import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Projects = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const projects = [
    {
      id: 1,
      title: "Cloud Infrastructure Automation",
      description: "Automated AWS infrastructure deployment using Terraform and Jenkins CI/CD pipeline with comprehensive monitoring and security best practices.",
      tech: ["Terraform", "AWS", "Jenkins", "Docker", "Kubernetes"],
      category: "DevOps",
      color: "from-blue-600 to-purple-600"
    },
    {
      id: 2,
      title: "Kubernetes Cluster Management",
      description: "Multi-environment Kubernetes cluster setup with complete monitoring, logging, and security implementation across development and production.",
      tech: ["Kubernetes", "Helm", "Prometheus", "Grafana", "ArgoCD"],
      category: "Container Orchestration",
      color: "from-green-600 to-teal-600"
    },
    {
      id: 3,
      title: "CI/CD Pipeline Optimization",
      description: "Streamlined deployment process reducing build time by 60% with automated testing, security scanning, and seamless rollback capabilities.",
      tech: ["GitLab CI", "Docker", "SonarQube", "Vault", "Ansible"],
      category: "DevOps",
      color: "from-orange-600 to-red-600"
    },
    {
      id: 4,
      title: "Microservices Architecture",
      description: "Designed and implemented scalable microservices architecture with service mesh, distributed tracing, and comprehensive observability.",
      tech: ["Docker", "Kubernetes", "Istio", "Jaeger", "Prometheus"],
      category: "Architecture",
      color: "from-purple-600 to-pink-600"
    }
  ];

  return (
    <section ref={containerRef} className="bg-black text-white py-24" id="projects">
      <div className="max-w-7xl mx-auto px-8">
        {/* Projects Grid */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectShowcase 
              key={project.id} 
              project={project} 
              index={index}
              scrollProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectShowcase = ({ project, index, scrollProgress }) => {
  const isEven = index % 2 === 0;
  
  // Individual scroll transforms for each project
  const yStart = index * 0.2;
  const yEnd = yStart + 0.3;
  
  const y = useTransform(scrollProgress, [yStart, yEnd], [100, -100]);
  const opacity = useTransform(scrollProgress, [yStart, yStart + 0.1, yEnd - 0.1, yEnd], [0, 1, 1, 0]);
  const scale = useTransform(scrollProgress, [yStart, yStart + 0.1, yEnd - 0.1, yEnd], [0.8, 1, 1, 0.8]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  return (
    <motion.div
      className={`grid md:grid-cols-2 gap-12 items-center min-h-screen ${
        isEven ? '' : 'md:grid-flow-col-dense'
      }`}
      style={{ y, opacity, scale }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Project Visual */}
      <motion.div 
        className={`relative ${isEven ? 'md:order-1' : 'md:order-2'}`}
        variants={itemVariants}
      >
        <motion.div
          className={`w-full h-96 rounded-2xl bg-gradient-to-br ${project.color} relative overflow-hidden`}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {/* Animated background pattern */}
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
                               radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
              backgroundSize: "60px 60px"
            }}
          />
          
          {/* Project category badge */}
          <motion.div
            className="absolute top-6 left-6 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-white font-medium">{project.category}</span>
          </motion.div>

          {/* Floating elements */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity }
            }}
          >
            <div className="w-32 h-32 border-2 border-white/30 rounded-full flex items-center justify-center">
              <div className="w-16 h-16 border-2 border-white/50 rounded-full"></div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Project Details */}
      <motion.div 
        className={`space-y-6 ${isEven ? 'md:order-2' : 'md:order-1'}`}
        variants={itemVariants}
      >
        <motion.div variants={itemVariants}>
          <motion.h3 
            className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
            whileHover={{ x: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {project.title}
          </motion.h3>
          <motion.p 
            className="text-lg text-gray-300 leading-relaxed"
            variants={itemVariants}
          >
            {project.description}
          </motion.p>
        </motion.div>

        {/* Tech Stack */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h4 className="text-xl font-semibold text-white">Technology Stack</h4>
          <motion.div 
            className="flex flex-wrap gap-3"
            variants={containerVariants}
          >
            {project.tech.map((tech, techIndex) => (
              <motion.span
                key={tech}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  borderColor: "rgba(255, 255, 255, 0.4)"
                }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Project Actions */}
        <motion.div 
          variants={itemVariants}
          className="flex gap-4 pt-6"
        >
          <motion.button
            className="px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View Details
          </motion.button>
          <motion.button
            className="px-6 py-3 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Live Demo
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
