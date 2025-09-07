import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-8">
        <div className="py-12">
          <div className="text-center">
            <p className="text-gray-400 text-lg font-light mb-4">
              © {currentYear} Ayush Choudhary
            </p>
            
            <div className="flex justify-center space-x-8">
              <a
                href="https://www.linkedin.com/in/ayush-choudhary-29aa01325/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-lg font-light"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/AyushChoudhary6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-lg font-light"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
