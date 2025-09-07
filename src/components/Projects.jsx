import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Cloud Infrastructure Automation",
      description: "Automated AWS infrastructure deployment using Terraform and Jenkins CI/CD pipeline with monitoring and security best practices.",
      technologies: ["Terraform", "AWS", "Jenkins", "Docker"],
      category: "DevOps"
    },
    {
      title: "Kubernetes Cluster Management",
      description: "Multi-environment Kubernetes cluster setup with comprehensive monitoring, logging, and security implementation.",
      technologies: ["Kubernetes", "Helm", "Prometheus", "Grafana"],
      category: "DevOps"
    },
    {
      title: "CI/CD Pipeline Optimization",
      description: "Streamlined deployment process reducing build time by 60% and implementing automated testing and security scanning.",
      technologies: ["GitLab CI", "Docker", "SonarQube", "Vault"],
      category: "DevOps"
    },
    {
      title: "Microservices Architecture",
      description: "Designed and implemented scalable microservices architecture with service mesh and observability.",
      technologies: ["Docker", "Kubernetes", "Istio", "Jaeger"],
      category: "Architecture"
    },
    {
      title: "Infrastructure Monitoring",
      description: "Comprehensive monitoring solution with alerting, dashboards, and automated incident response.",
      technologies: ["Prometheus", "Grafana", "ELK Stack", "PagerDuty"],
      category: "Monitoring"
    },
    {
      title: "Security Compliance Automation",
      description: "Automated security scanning and compliance checking integrated into CI/CD pipeline.",
      technologies: ["Vault", "SAST/DAST", "Terraform", "Ansible"],
      category: "Security"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Here are some of the key projects I've worked on, showcasing my expertise in DevOps, 
            cloud infrastructure, and automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:bg-gray-800 transition-all duration-300"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-gray-800 text-gray-300 text-sm font-medium rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              <div className="pt-4 border-t border-gray-700">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-800 text-gray-300 text-xs font-medium rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-300 mb-4">
            Want to see more projects or discuss a collaboration?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors duration-200"
          >
            Get In Touch
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
