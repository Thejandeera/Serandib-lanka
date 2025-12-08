import React from 'react';
import { motion } from 'framer-motion';
import { Car, Bus, Star, ChevronRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { vehiclesData } from '../data/vehiclesData';

// Double the items for seamless looping
const repeatedVehicles = [...vehiclesData, ...vehiclesData];
const VehicleCollection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
    <section className="relative w-full pb-28 overflow-hidden bg-white">

      {/* ---- Background Elements ---- */}
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-vehicles" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-vehicles)" />
        </svg>
      </div>

      {/* Background Blobs (Blue/Yellow for Vehicles) */}
      <div className="absolute top-1/4 right-[10%] w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-[10%] w-72 h-72 bg-yellow-50 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000 pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10">

        {/* ---- Header Section (Updated to match your snippet) ---- */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 mb-4 bg-blue-50 px-4 py-2 rounded-full border border-blue-100"
            variants={containerVariants}
          >
            <Sparkles size={16} className="text-blue-600" />
            <span className="text-blue-700 font-bold tracking-widest uppercase text-xs">
              Over Vehicle Collection
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            className="text-4xl md:text-6xl font-extrabold text-black mb-6 leading-tight"
            variants={containerVariants}
          >
            <span className="relative inline-block">
              Vehicle Collection
              {/* Subtle underline accent using blue */}
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-blue-200 opacity-50 -z-10 rounded-full"></span>
            </span>
          </motion.h2>
          {/* Description */}
          <motion.p
            className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed"
            variants={containerVariants}
          >
            Travel in comfort and style with our diverse fleet of well-maintained vehicles. From luxury sedans to spacious buses, we have the perfect ride for your journey.
          </motion.p>
        </motion.div>
        {/* ---- Slider Container ---- */}
        <div className="relative">
          {/* Gradient Fades for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>
          {/* Ticker Container */}
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-6 md:gap-8 whitespace-nowrap"
              // ANIMATION: Move from a negative X value back to 0 to slide RIGHT (Opposite of Tours)
              animate={{
                x: [-1920, 0],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {repeatedVehicles.map((vehicle, index) => {
                const Icon = vehicle.type === 'Bus' ? Bus : Car;

                return (
                  <motion.div
                    key={`${vehicle.id}-${index}`}
                    className="min-w-[280px] md:min-w-[340px] inline-block"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true }}
                  >
                    <Link to={`/vehicle/${vehicle.id}`} className="block group/card">

                      {/* Card Container with White Background */}
                      <div className="relative rounded-[30px] overflow-hidden h-[280px] md:h-[320px] mb-6 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white flex items-center justify-center p-4">

                        {/* Image */}
                        <img
                          src={vehicle.image}
                          alt={vehicle.title}
                          className="w-auto h-auto max-w-[90%] max-h-[80%] object-contain transform group-hover/card:scale-110 transition-transform duration-700 z-10"
                          onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerHTML = '<span class="text-gray-500">Image Not Found</span>' }}
                        />

                        {/* Subtle glow effect on hover */}
                        <div className="absolute inset-0 bg-blue-500/0 group-hover/card:bg-blue-500/5 transition-colors duration-500"></div>
                        {/* Hover Button */}
                        <motion.div
                          className="absolute bottom-4 right-4 opacity-0 group-hover/card:opacity-100 translate-y-4 group-hover/card:translate-y-0 transition-all duration-500 z-20"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <div className="bg-blue-600 p-3 rounded-full shadow-lg">
                            <ChevronRight className="text-white" size={20} />
                          </div>
                        </motion.div>
                      </div>
                      {/* Content Section */}
                      <div className="px-2 whitespace-normal">
                        {/* Badge */}
                        <div className="flex items-center gap-2 text-blue-600 mb-3">
                          <Icon size={18} className="text-blue-500" />
                          <span className="text-sm font-semibold tracking-wide">{vehicle.badge}</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-black mb-3 group-hover/card:text-blue-700 transition-colors duration-300">
                          {vehicle.title}
                        </h3>

                        {/* Footer: Rating & Price */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-gray-500 text-sm font-medium">Avg. Ratings of</span>
                            <div className="flex">
                              {[...Array(Math.floor(vehicle.rating))].map((_, i) => (
                                <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                              ))}
                              {vehicle.rating % 1 !== 0 && <Star size={16} className="fill-yellow-400 text-yellow-400 opacity-50" />}
                            </div>
                          </div>

                          <div className="text-right">
                            <span className="text-gray-500 text-sm">From</span>
                            <span className="font-bold text-black text-lg ml-1">{vehicle.price}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
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
export default VehicleCollection;