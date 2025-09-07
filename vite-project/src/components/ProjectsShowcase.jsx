import React, { useRef, useState, useCallback, useMemo, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Projects = () => {
  const containerRef = useRef(null);
  const [expandedProject, setExpandedProject] = useState(null);
  const [buttonPosition, setButtonPosition] = useState(null);
  const [modalVariants, setModalVariants] = useState(() => ({
    initial: {
      width: 120,
      height: 45,
      x: -60,
      y: -22.5,
      borderRadius: 22.5,
    },
    animate: {
      width: "calc(100vw - 5%)", // Same as About section (w-full px-[2.5%])
      height: "80vh", // Same as About section (min-h-[80vh])
      x: "calc(-50vw + 2.5%)", // Center horizontally with 2.5% margin
      y: "-40vh", // Center vertically
      borderRadius: 16,
    },
    exit: {
      width: 120,
      height: 45,
      x: -60,
      y: -22.5,
      borderRadius: 22.5,
    }
  }));
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const projects = [
    {
      id: 1,
      title: "Chat-app",
      // description: "A real-time chat application built with React and Firebase.",
      detailedDescription: "Built a production-ready fullstack chat application with a strong DevOps foundation — leveraging Docker for containerization, Jenkins pipelines for automated build/test/deployment, and Kubernetes for scalable orchestration. Infrastructure was provisioned using Terraform, secured with AWS IAM, and monitored through CloudWatch and Prometheus, ensuring a reliable, scalable, and secure deployment pipeline.",
      tech: ["React", "Firebase", "Tailwind","AWS","Docker","Kubernetes","Terraform"],
      category: "DevOps",
      color: "from-blue-600 to-purple-600",
      githubUrl: "https://github.com/AyushChoudhary6/full-stack_chatApp.git",
      liveUrl: "https://full-stack-chat-app-xi.vercel.app/",
      thumbnail: "/chat-app.png",
      images: [
        "/chat-app.png",
        "/chat-app.png",
        "/chat-app.png"
      ],
      features: [
        "CI/CD Pipeline: Automated builds, testing, and deployments using Jenkins & GitHub Actions.",
        "Containerization & Orchestration: Dockerized services and deployed on Kubernetes for scalability.",
        "Infrastructure as Code: Provisioned cloud resources with Terraform, ensuring reproducible environments.",
        "Cloud & Monitoring: Deployed on AWS with CloudWatch & Prometheus for performance monitoring.",
        "Security: Enforced role-based access via AWS IAM and implemented best practices in secrets management"
      ]
    },
    {
      id: 2,
      title: "Code Veda",
      detailedDescription: "Collaborated in a team to design and develop Code Veda, a hackathon website featuring a ancient & modern, responsive UI and seamless user experience. Focused on frontend development using React, TailwindCSS, and component-driven design to deliver an engaging platform within strict hackathon timelines.",
      category: "Frontend",
      color: "from-green-600 to-teal-600",
      githubUrl: "https://github.com/Shaurya0765/CODE-VEDA.git",
      liveUrl: "https://code-veda-1.vercel.app/",
      thumbnail: "/cvThumbnail.png",
      tech: ["React"],

      images: [
        "/cvimage1.png",
        "/cvimage2.png",
        "/cvimage3.png"
      ],
      features: [
        "Developed core frontend for a hackathon website in a team environment.",
        "Built responsive UI using React + TailwindCSS with reusable components",
        "Implemented smooth navigation and modern design for participant engagement.",
        "Delivered a production-ready project under hackathon deadlines.",
      ]
    },
    {
      id: 3,
      title: "Retail Store App",
      detailedDescription: "The Retail Store Sample App demonstrates a modern microservices architecture deployed on AWS EKS using GitOps principles. The application consists of multiple services that work together to provide a complete retail store experience",
      tech: ["GitLab CI", "Docker", "SonarQube", "Vault", "Ansible"],
      category: "DevOps",
      color: "from-orange-600 to-red-600",
      githubUrl: "https://github.com/yourusername/cicd-optimization",
      liveUrl: "https://your-cicd-demo.com",
      thumbnail: "/retailstoreappThumbnail.png",
      images: [
        "/retailchart.png",
        "/retailimage2.png",
        "/retailimage3.png"
      ],
      features: [
        "Microservices: Each component is developed and deployed independently",
        "Containerization: All services run as containers on Kubernetes",
        "GitOps: Infrastructure and application deployment managed through Git",
        "Infrastructure as Code: All AWS resources defined using Terraform",
        "CI/CD: Automated build and deployment pipelines with GitHub Actions"
      ]
    },
    {
      id: 4,
      title: "Microservices Architecture",
      description: "Designed and implemented scalable microservices architecture with service mesh, distributed tracing, and comprehensive observability.",
      detailedDescription: "A production-ready microservices architecture implementing domain-driven design principles with complete observability and resilience patterns. The system uses Istio service mesh for traffic management, Jaeger for distributed tracing, and implements circuit breakers, retries, and bulkhead patterns. The architecture supports auto-scaling, canary deployments, and comprehensive health checking.",
      tech: ["Docker", "Kubernetes", "Istio", "Jaeger", "Prometheus"],
      category: "Architecture",
      color: "from-purple-600 to-pink-600",
      githubUrl: "https://github.com/yourusername/microservices-architecture",
      liveUrl: "https://your-microservices-demo.com",
      thumbnail: "/api/placeholder/800/600",
      images: [
        "/scimage1.png",
        "/api/placeholder/800/600",
        "/api/placeholder/800/600"
      ],
      features: [
        "Docker: Container image building and development",
        "Kubernetes: Production deployment and orchestration",
        "Frontend: React + Vite + Nginx (containerized)",
        "Backend: FastAPI + Python (containerized)",
        "Ingress: Traffic routing and load balancing",
        "HPA: Automatic scaling based on resource usage",
        "Secrets: Secure API key management"
      ]
    }
  ];

  const handleProjectExpand = useCallback((project, event) => {
    const rect = event.target.getBoundingClientRect();
    setButtonPosition({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    });
    setExpandedProject(project);
  }, []);

  const getExitPosition = useCallback((buttonPos) => {
    // Calculate the offset from center to button position
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const offsetX = buttonPos.x - centerX;
    const offsetY = buttonPos.y - centerY;
    
    return {
      x: offsetX - 60, // Button width/2
      y: offsetY - 22.5, // Button height/2
    };
  }, []);

  const handleCloseModal = useCallback(() => {
    if (!expandedProject || !buttonPosition) return;

    // Update exit position based on button position
    const exitPos = getExitPosition(buttonPosition);
    setModalVariants(prev => ({
      ...prev,
      exit: {
        width: 120,
        height: 45,
        x: exitPos.x,
        y: exitPos.y,
        borderRadius: 22.5,
      }
    }));

    setExpandedProject(null);
  }, [expandedProject, buttonPosition, getExitPosition]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (expandedProject) {
      const body = document.body;
      const html = document.documentElement;
      
      // Store original styles
      const originalBodyOverflow = body.style.overflow;
      const originalHtmlOverflow = html.style.overflow;
      const originalBodyPosition = body.style.position;
      const originalBodyTop = body.style.top;
      const originalBodyLeft = body.style.left;
      const originalBodyRight = body.style.right;
      const originalBodyWidth = body.style.width;
      
      // Calculate scrollbar width to prevent layout shift
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      
      // Simply hide overflow without changing position
      body.style.overflow = 'hidden';
      html.style.overflow = 'hidden';
      body.style.paddingRight = `${scrollBarWidth}px`;
      
      // Prevent scroll events
      const preventScroll = (e) => {
        // Allow scrolling within the modal content
        const target = e.target;
        const modalContent = target.closest('.modal-scroll-area');
        if (!modalContent) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }
      };
      
      // Add event listeners with passive: false to allow preventDefault
      document.addEventListener('wheel', preventScroll, { passive: false, capture: true });
      document.addEventListener('touchmove', preventScroll, { passive: false, capture: true });
      document.addEventListener('keydown', (e) => {
        // Prevent arrow keys, page up/down, space, home, end
        if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', 'Space'].includes(e.code)) {
          const target = e.target;
          const modalContent = target.closest('.modal-scroll-area');
          if (!modalContent) {
            e.preventDefault();
          }
        }
      }, { passive: false, capture: true });
      
      // Cleanup function
      return () => {
        // Remove all event listeners
        document.removeEventListener('wheel', preventScroll, { capture: true });
        document.removeEventListener('touchmove', preventScroll, { capture: true });
        document.removeEventListener('keydown', preventScroll, { capture: true });
        
        // Restore original styles
        body.style.overflow = originalBodyOverflow;
        html.style.overflow = originalHtmlOverflow;
        body.style.position = originalBodyPosition;
        body.style.top = originalBodyTop;
        body.style.left = originalBodyLeft;
        body.style.right = originalBodyRight;
        body.style.width = originalBodyWidth;
        body.style.paddingRight = '';
      };
    }
  }, [expandedProject]);

  // Handle keyboard events
  useEffect(() => {
    if (expandedProject) {
      const handleEscape = (event) => {
        if (event.key === 'Escape') {
          handleCloseModal();
        }
      };

      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [expandedProject, handleCloseModal]);

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
              onExpand={handleProjectExpand}
            />
          ))}
        </div>
      </div>

      {/* Expanded Project Modal */}
      <AnimatePresence>
        {expandedProject && (
          <ProjectDetailsModal 
            project={expandedProject} 
            buttonPosition={buttonPosition}
            modalVariants={modalVariants}
            onClose={handleCloseModal}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

const ProjectShowcase = ({ project, index, scrollProgress, onExpand }) => {
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
          {/* Project thumbnail image */}
          <img
            src={project.thumbnail}
            alt={`${project.title} thumbnail`}
            className="w-full h-full object-cover"
          />
          
          {/* Project category badge */}
          <motion.div
            className="absolute top-6 left-6 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-white font-medium">{project.category}</span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Project Details */}
      <motion.div 
        className={`space-y-6 ${isEven ? 'md:order-2' : 'md:order-1'}`}
        variants={itemVariants}
      >
        {/* Project Title */}
        <motion.div variants={itemVariants}>
          <motion.h3 
            className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-center"
            whileHover={{ x: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {project.title}
          </motion.h3>
        </motion.div>

        {/* View Details Button */}
        <motion.div 
          variants={itemVariants}
          className="flex justify-center pt-6"
        >
          <motion.button
            onClick={(e) => onExpand(project, e)}
            className="px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors text-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View Details
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const ProjectDetailsModal = React.memo(({ project, buttonPosition, modalVariants, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  }, [project.images.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  }, [project.images.length]);

  const goToImage = useCallback((index) => {
    setCurrentImageIndex(index);
  }, []);

  const transitionConfig = useMemo(() => ({
    type: "spring",
    damping: 30,
    stiffness: 300,
    mass: 0.8,
  }), []);

  return (
    <>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
      />

      {/* Expanding Container */}
      <motion.div
        className="fixed z-50 bg-white rounded-2xl shadow-2xl overflow-hidden"
        style={{
          left: "50vw", // Always center horizontally
          top: "50vh",  // Always center vertically
        }}
        variants={modalVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={transitionConfig}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <motion.button
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
          onClick={onClose}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaTimes className="text-gray-600 text-sm" />
        </motion.button>

        {/* Two-column layout */}
        <div className="flex h-full">
          {/* Left side - Images */}
          <div className="w-1/2 bg-gray-100 relative">
            <div className="relative h-full flex items-center justify-center group">
              <motion.img
                key={currentImageIndex}
                src={project.images[currentImageIndex]}
                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                className="max-w-full max-h-full object-contain"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                loading="lazy"
              />
              
              {/* Navigation Arrows */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 backdrop-blur-sm"
                    aria-label="Previous image"
                  >
                    <FaChevronLeft className="text-gray-700" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 backdrop-blur-sm"
                    aria-label="Next image"
                  >
                    <FaChevronRight className="text-gray-700" />
                  </button>
                </>
              )}

              {/* Image Indicators */}
              {project.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentImageIndex 
                          ? 'bg-gray-800 scale-125' 
                          : 'bg-gray-400 hover:bg-gray-600'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right side - Details */}
          <div className="w-1/2 p-6 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="space-y-6"
            >
              {/* Project Info */}
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h1 className="text-2xl font-bold text-gray-900">{project.title}</h1>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full whitespace-nowrap">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.detailedDescription}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                <div className="space-y-2">
                  {project.features.slice(0, 4).map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3 text-gray-700"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.03 }}
                    >
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Technology Stack */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors cursor-default"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.02 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex gap-3 pt-4 border-t border-gray-200 mt-auto"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors text-sm flex-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaGithub className="text-base" />
                GitHub
              </motion.a>
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-gray-900 text-gray-900 font-medium rounded-lg hover:bg-gray-900 hover:text-white transition-colors text-sm flex-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaExternalLinkAlt className="text-sm" />
                Demo
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
});

export default Projects;
