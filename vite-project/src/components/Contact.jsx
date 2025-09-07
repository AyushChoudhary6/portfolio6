import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for your message! I\'ll get back to you soon.');
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-2xl mx-auto px-8">
        <motion.div 
          className="text-center mb-16"
          {...fadeInUp}
        >
          <h2 className="text-5xl font-light text-white mb-16">
            Contact
          </h2>
        </motion.div>

        <motion.div 
          className="space-y-8"
          {...fadeInUp}
        >
          {/* Contact Information */}
          <div className="text-center mb-12">
            <p className="text-xl text-gray-400 mb-8">
              Let's discuss your next project
            </p>
            
            <div className="space-y-4">
              <a 
                href="mailto:ayush.choudhary@example.com" 
                className="block text-gray-300 hover:text-white transition-colors text-lg"
              >
                ayush.choudhary@example.com
              </a>
              <a 
                href="https://linkedin.com/in/ayushchoudhary" 
                className="block text-gray-300 hover:text-white transition-colors text-lg"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/ayushchoudhary" 
                className="block text-gray-300 hover:text-white transition-colors text-lg"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Contact Form */}
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
                className="w-full px-0 py-4 bg-transparent border-0 border-b border-gray-600 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors text-lg"
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
                className="w-full px-0 py-4 bg-transparent border-0 border-b border-gray-600 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors text-lg"
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
                className="w-full px-0 py-4 bg-transparent border-0 border-b border-gray-600 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors resize-none text-lg"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full mt-8 px-8 py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 text-lg font-light"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
