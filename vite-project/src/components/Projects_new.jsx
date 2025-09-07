import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Cloud Infrastructure Automation",
      description: "Automated AWS infrastructure deployment using Terraform and Jenkins CI/CD pipeline with monitoring and security best practices.",
      year: "2024"
    },
    {
      title: "Kubernetes Cluster Management",
      description: "Multi-environment Kubernetes cluster setup with comprehensive monitoring, logging, and security implementation.",
      year: "2024"
    },
    {
      title: "CI/CD Pipeline Optimization",
      description: "Streamlined deployment process reducing build time by 60% and implementing automated testing and security scanning.",
      year: "2023"
    },
    {
      title: "Microservices Architecture",
      description: "Designed and implemented scalable microservices architecture with service mesh and observability.",
      year: "2023"
    },
    {
      title: "Infrastructure Monitoring",
      description: "Comprehensive monitoring solution with alerting, dashboards, and automated incident response.",
      year: "2023"
    },
    {
      title: "Security Compliance Automation",
      description: "Automated security scanning and compliance checking integrated into CI/CD pipeline.",
      year: "2022"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <section id="projects" className="py-24 bg-black">
      <div className="max-w-4xl mx-auto px-8">
        <motion.div 
          className="text-center mb-16"
          {...fadeInUp}
        >
          <h2 className="text-5xl font-light text-white mb-16">
            Projects
          </h2>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="border-b border-gray-800 pb-8 last:border-b-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-light text-white mb-2 md:mb-0">
                  {project.title}
                </h3>
                <span className="text-gray-500 text-lg font-light">
                  {project.year}
                </span>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
