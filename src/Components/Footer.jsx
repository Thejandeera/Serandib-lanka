import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  // Animation variants for smooth entrance
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="relative bg-white pt-20 pb-10 overflow-hidden border-t border-gray-100">

      {/* ---- Background Patterns (Consistent with other sections) ---- */}
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-footer" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-footer)" />
        </svg>
      </div>

      {/* Subtle Blobs */}
      <div className="absolute bottom-0 left-[-10%] w-96 h-96 bg-lime-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute top-0 right-[-10%] w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none"></div>


      <div className="container mx-auto px-4 relative z-10">

        {/* ---- Top Section: Grid Layout ---- */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >

          {/* Column 1: Brand & About */}
          <motion.div variants={itemVariants} className="space-y-6">
            <Link to="/" className="block w-40">
              <img
                src="/images/logo.png"
                alt="Serandib Lanka Tours"
                className="w-full h-auto object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<span class="text-2xl font-bold text-black">Serandib<span class="text-lime-600">.</span></span>'
                }}
              />
            </Link>
            <p className="text-gray-600 leading-relaxed">
              Discover the hidden gems of Sri Lanka with us. We provide premium tours and vehicle services to make your journey unforgettable.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>


          {/* Column 2: Quick Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-bold text-black">Company</h3>
            <ul className="space-y-4">
              {['About Us', 'Our Team', 'Careers', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-gray-600 hover:text-lime-600 transition-colors flex items-center gap-2 group">
                    <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300">
                      <ArrowRight size={14} />
                    </span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>


          {/* Column 3: Services */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-bold text-black">Services</h3>
            <ul className="space-y-4">
              {['Holiday Packages', 'Vehicle Rentals', 'Hotel Bookings', 'Airport Transfers', 'Tour Guides'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-gray-600 hover:text-lime-600 transition-colors flex items-center gap-2 group">
                    <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300">
                      <ArrowRight size={14} />
                    </span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>


          {/* Column 4: Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-bold text-black">Contact Us</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-lime-50 flex items-center justify-center flex-shrink-0 text-lime-600">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-1">Address</h4>
                  <p className="text-gray-600 text-sm">123, Temple Road, Colombo 07, Sri Lanka</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-lime-50 flex items-center justify-center flex-shrink-0 text-lime-600">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-1">Phone</h4>
                  <p className="text-gray-600 text-sm">+94 77 123 4567</p>
                  <p className="text-gray-600 text-sm">+94 11 234 5678</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-lime-50 flex items-center justify-center flex-shrink-0 text-lime-600">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-1">Email</h4>
                  <p className="text-gray-600 text-sm">hello@serandiblanka.com</p>
                </div>
              </li>
            </ul>
          </motion.div>

        </motion.div>


        {/* ---- Bottom Bar: Copyright ---- */}
        <motion.div
          className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} <span className="font-bold text-black">Serandib Lanka Tours</span>. All rights reserved.
          </p>

          <a
            href="https://zenvixor.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 text-sm hover:text-black transition-colors font-medium text-center"
          >
            Designed and Crafted by <span className="font-bold">Zenvixor Studios</span>
          </a>

          <div className="flex items-center gap-6">
            <Link to="#" className="text-gray-500 hover:text-black text-sm transition-colors">Privacy</Link>
            <Link to="#" className="text-gray-500 hover:text-black text-sm transition-colors">Cookies</Link>
            <Link to="#" className="text-gray-500 hover:text-black text-sm transition-colors">Terms</Link>
          </div>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;