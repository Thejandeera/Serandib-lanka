import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Tours', href: '#' },
    { name: 'Vehicles', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Reviews', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  // Animation variants
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    open: {
      opacity: 1,
      height: "100vh", // Full screen for mobile menu
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  const linkVariants = {
    closed: { x: -20, opacity: 0 },
    open: (i) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.1 }
    })
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between relative">
          
          {/* ---- LEFT: LOGO ---- */}
          <div className="flex-shrink-0 z-50">
            <a href="/" className="block w-32 md:w-40">
                <img 
                    src="/images/logo.png" 
                    alt="Serandib Lanka Tours" 
                    className="w-full h-auto object-contain"
                    onError={(e) => {
                        e.target.style.display='none'; 
                        e.target.parentElement.innerHTML = '<span class="text-2xl font-bold text-black">Serandib<span class="text-red-600">.</span></span>'
                    }} 
                />
            </a>
          </div>

          {/* ---- CENTER: DESKTOP NAVIGATION ---- */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center space-x-10">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                // UPDATED: text-lg (bigger font), hover:text-red-600
                className="relative group text-black font-medium text-lg transition-colors duration-300 hover:text-red-600 pb-1"
              >
                {link.name}
                {/* UPDATED: Red underline */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* ---- RIGHT: Spacer (Keeps layout balanced) ---- */}
          <div className="hidden lg:block w-32 md:w-40 text-right"></div>

          {/* ---- MOBILE MENU BUTTON ---- */}
          <div className="lg:hidden z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none p-2 hover:text-red-600 transition-colors"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* ---- MOBILE NAVIGATION MENU ---- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="absolute top-0 left-0 w-full bg-white z-40 flex flex-col justify-center items-center"
          >
            <div className="flex flex-col items-center space-y-8"> 
              {links.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  custom={i}
                  variants={linkVariants}
                  // UPDATED: text-3xl (much bigger for mobile), Red hover
                  className="text-3xl font-bold text-gray-800 hover:text-red-600 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;