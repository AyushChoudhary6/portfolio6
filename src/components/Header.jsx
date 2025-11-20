import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeDownload = () => {
    setIsMobileMenuOpen(false);
    // Create a temporary link to download the resume
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'Ayush_Choudhary_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-white/10 shadow-2xl' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Professional Logo */}
          <motion.a 
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="group cursor-pointer focus:outline-none focus:ring-0"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white tracking-tight leading-none">
                AYUSH CHOUDHARY
              </span>
              <span className="text-xs text-gray-400 tracking-widest uppercase font-light mt-0.5">
                Frontend | DevOps Engineer
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="relative px-6 py-2 text-gray-300 hover:text-white font-medium tracking-wide transition-all duration-300 group cursor-pointer focus:outline-none focus:ring-0"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <span className="relative z-10">{item.label}</span>
                  {/* Hover effect */}
                  <motion.div
                    className="absolute inset-0 bg-white/10 rounded-lg backdrop-blur-sm"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                  {/* Active indicator */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white group-hover:w-3/4 transition-all duration-300"
                    style={{ transform: 'translateX(-50%)' }}
                  />
                </motion.a>
              ))}
            </div>
            
            {/* Resume Download Button */}
            <motion.button
              onClick={handleResumeDownload}
              className="ml-8 px-6 py-2.5 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-0"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              Resume
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors relative z-50 focus:outline-none focus:ring-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="w-6 h-6 flex flex-col justify-center items-center"
              animate={isMobileMenuOpen ? "open" : "closed"}
            >
              <motion.span
                className="w-5 h-0.5 bg-current mb-1"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 6 }
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-5 h-0.5 bg-current mb-1"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 }
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-5 h-0.5 bg-current"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -6 }
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-white/10"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-6 py-6 space-y-1">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 cursor-pointer focus:outline-none focus:ring-0"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
                <motion.button
                  onClick={handleResumeDownload}
                  className="block mt-4 px-4 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 text-center cursor-pointer focus:outline-none focus:ring-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Resume
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
