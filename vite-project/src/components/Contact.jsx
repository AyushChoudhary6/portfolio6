import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
      alert('Thank you for your message! I\'ll get back to you soon.');
    }, 1000);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <section id="contact" className="min-h-screen bg-white py-12 flex items-center">
      <div className="w-full mx-auto px-[2.5%]">
        {/* Blackbox Container - Similar to About Section */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: {
              type: "spring",
              stiffness: 60,
              damping: 20,
              duration: 1.2
            }
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-black rounded-[3rem] shadow-2xl p-8 md:p-12 lg:p-16 w-full min-h-[80vh] flex flex-col overflow-hidden"
        >
          {/* Horizontal CONTACT Heading at Top */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: {
                delay: 0.2,
                duration: 0.8
              }
            }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white tracking-wider">
              CONTACT
            </h1>
          </motion.div>

          {/* Main Content Area */}
          <div className="flex-1 flex items-center">
            <div className="w-full">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ 
                  opacity: 1,
                  transition: {
                    delay: 0.5,
                    duration: 0.8
                  }
                }}
                viewport={{ once: true }}
                className="space-y-12"
              >
                {/* Header */}
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                    Let's Work Together
                  </h2>
                  <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
                    Ready to bring your ideas to life? I'm always excited to discuss new projects and opportunities.
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                  {/* Contact Information */}
                  <div className="space-y-8">
                    <div className="text-center lg:text-left">
                      <h3 className="text-2xl text-white mb-8 font-semibold">
                        Get In Touch
                      </h3>
                      
                      {/* Contact Links */}
                      <div className="space-y-6">
                        <motion.a 
                          href="mailto:ayush.choudhary@example.com" 
                          className="flex items-center justify-center lg:justify-start gap-4 text-gray-300 hover:text-white transition-colors text-lg group"
                          whileHover={{ x: 10 }}
                          transition={{ duration: 0.3 }}
                        >
                          <FaEnvelope className="text-white group-hover:text-gray-300 transition-colors" />
                          <span>ayush.choudhary@example.com</span>
                        </motion.a>
                        
                        <motion.a 
                          href="https://linkedin.com/in/ayushchoudhary" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center lg:justify-start gap-4 text-gray-300 hover:text-white transition-colors text-lg group"
                          whileHover={{ x: 10 }}
                          transition={{ duration: 0.3 }}
                        >
                          <FaLinkedin className="text-white group-hover:text-gray-300 transition-colors" />
                          <span>LinkedIn</span>
                        </motion.a>
                        
                        <motion.a 
                          href="https://github.com/ayushchoudhary" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center lg:justify-start gap-4 text-gray-300 hover:text-white transition-colors text-lg group"
                          whileHover={{ x: 10 }}
                          transition={{ duration: 0.3 }}
                        >
                          <FaGithub className="text-white group-hover:text-gray-300 transition-colors" />
                          <span>GitHub</span>
                        </motion.a>
                      </div>
                    </div>
                  </div>

                  {/* Contact Form */}
                  <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your Name"
                          className="w-full px-0 py-4 bg-transparent border-0 border-b border-gray-600 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors text-lg"
                        />
                      </div>

                      <div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="Your Email"
                          className="w-full px-0 py-4 bg-transparent border-0 border-b border-gray-600 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors text-lg"
                        />
                      </div>

                      <div>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={4}
                          placeholder="Your Message"
                          className="w-full px-0 py-4 bg-transparent border-0 border-b border-gray-600 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors resize-none text-lg"
                        ></textarea>
                      </div>

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full mt-8 px-8 py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 text-lg font-light rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                        whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </motion.button>
                    </form>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
