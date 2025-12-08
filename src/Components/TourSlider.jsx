import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star, ChevronRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toursData } from '../data/toursData';

// Double the items for a seamless loop
const repeatedTours = [...toursData, ...toursData];

const TourSlider = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: {
      y: -8,
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  return (
    <section className="relative w-full pt-28 pb-12 overflow-hidden bg-white">
      {/* Background Grid Pattern */}
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-tours" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-tours)" />
        </svg>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute top-20 left-[5%] w-72 h-72 bg-lime-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-20 right-[5%] w-72 h-72 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4 bg-lime-50 px-4 py-2 rounded-full border border-lime-100"
            variants={containerVariants}
          >
            <Sparkles size={16} className="text-lime-600" />
            <span className="text-lime-700 font-bold tracking-widest uppercase text-xs">
              Best Holiday Packages
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-extrabold text-black mb-6 leading-tight"
            variants={containerVariants}
          >

            <span className="relative inline-block">
              Featured Tours
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-lime-200 opacity-50 -z-10 rounded-full"></span>
            </span>
          </motion.h2>

          <motion.p
            className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed"
            variants={containerVariants}
          >
            Experience the beauty of Sri Lanka with our carefully curated tour packages.
            Each journey is designed to create unforgettable memories.
          </motion.p>
        </motion.div>

        {/* Slider Container */}
        <div className="relative">
          {/* Left Gradient Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>

          {/* Right Gradient Fade */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>

          {/* Ticker Container */}
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-6 md:gap-8 whitespace-nowrap"
              animate={{
                x: [0, -1920], // Updated for more cards
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40, // Slower speed for better viewing
                  ease: "linear",
                },
              }}
            >
              {repeatedTours.map((tour, index) => (
                <motion.div
                  key={`${tour.id}-${index}`}
                  className="min-w-[280px] md:min-w-[360px] inline-block"
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  <Link to={`/tour/${tour.id}`} className="block group/card">
                    {/* Card Container */}
                    <div className="relative rounded-[30px] overflow-hidden h-[280px] md:h-[360px] mb-6 shadow-lg hover:shadow-2xl transition-all duration-500">
                      {/* Image */}
                      <img
                        src={tour.image}
                        alt={tour.title}
                        className="w-full h-full object-cover transform group-hover/card:scale-110 transition-transform duration-700"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>

                      {/* Price Tag */}
                      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                        <span className="font-bold text-black text-lg">{tour.price}</span>
                        <span className="text-gray-600 text-sm ml-1">/person</span>
                      </div>

                      {/* Duration Tag */}
                      <div className="absolute bottom-4 left-4 bg-lime-500 text-white px-3 py-1.5 rounded-full text-sm font-semibold">
                        {tour.days}
                      </div>

                      {/* Hover Button */}
                      <motion.div
                        className="absolute bottom-4 right-4 opacity-0 group-hover/card:opacity-100 translate-y-4 group-hover/card:translate-y-0 transition-all duration-500"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="bg-white p-3 rounded-full shadow-lg">
                          <ChevronRight className="text-black" size={20} />
                        </div>
                      </motion.div>
                    </div>

                    {/* Content Section */}
                    <div className="px-2 whitespace-normal">
                      <div className="flex items-center gap-2 text-gray-500 mb-3">
                        <MapPin size={18} className="text-gray-400 group-hover/card:text-lime-600 transition-colors" />
                        <span className="text-sm font-medium">{tour.location}</span>
                      </div>

                      <h3 className="text-2xl font-bold text-black mb-3 group-hover/card:text-lime-700 transition-colors duration-300">
                        {tour.title}
                      </h3>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="flex">
                            {[...Array(tour.rating)].map((_, i) => (
                              <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <span className="text-gray-500 text-sm font-medium">({tour.rating}.0)</span>
                        </div>

                        <span className="text-gray-500 text-sm font-medium group-hover/card:text-black transition-colors">
                          Book Now →
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            to="/tours"
            className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-lime-700 transition-colors duration-300 group/button shadow-lg hover:shadow-xl"
          >
            View All Tours
            <ChevronRight className="group-hover/button:translate-x-1 transition-transform" size={20} />
          </Link>
        </motion.div>
      </div>

      {/* Add CSS for blob animation if not already in global styles */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default TourSlider;