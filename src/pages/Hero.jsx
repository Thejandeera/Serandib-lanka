import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight, MapPin, Compass } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  const imageFloatVariants = (direction) => ({
    hidden: { x: direction === 'left' ? -50 : (direction === 'right' ? 50 : 0), y: direction === 'up' ? 50 : 0, opacity: 0 },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut", delay: 0.5 }
    },
    hover: {
      y: -10,
      transition: { duration: 0.3, ease: "easeInOut", yoyo: Infinity }
    }
  });

  return (
    // UPDATED CLASSNAME:
    // Added 'pt-36' (mobile) and 'lg:pt-28' (desktop) to create space for the fixed Navbar.
    // Changed 'py-4' to 'pb-10' to ensure bottom spacing is consistent.
    <section className="relative w-full min-h-screen bg-white overflow-hidden flex items-center justify-center pt-36 pb-10 lg:pt-28 lg:pb-0">

      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="absolute top-20 left-[-10%] w-96 h-96 bg-lime-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
      <div className="absolute bottom-20 right-[-10%] w-96 h-96 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20 z-0"></div>

      <motion.div
        className="absolute top-10 right-10 text-lime-200 opacity-30 hidden md:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      >
        <Compass size={120} />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">

          <motion.div
            className="lg:hidden w-full flex justify-center items-end gap-2 mb-4 h-64"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={imageFloatVariants('up')} className="w-24 h-24 rounded-full overflow-hidden border-2 border-white shadow-lg mb-8">
              <img src="https://res.cloudinary.com/dewiswmaa/image/upload/v1766247235/image4_bs00ve.jpg" alt="Travel" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div variants={imageFloatVariants('up')} className="w-32 h-48 rounded-[30px] overflow-hidden border-4 border-white shadow-xl z-10 mx-[-10px]">
              <img src="https://res.cloudinary.com/dewiswmaa/image/upload/v1766247228/image1_bw7ujj.jpg" alt="Travel" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div variants={imageFloatVariants('up')} className="w-24 h-24 rounded-full overflow-hidden border-2 border-white shadow-lg mb-8">
              <img src="https://res.cloudinary.com/dewiswmaa/image/upload/v1766247643/image2_b0aspx.jpg" alt="Travel" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>

          <motion.div
            className="hidden lg:block relative w-1/4 h-[500px]"
            initial="hidden"
            animate="visible"
            variants={imageFloatVariants('left')}
          >
            <motion.div className="absolute top-0 left-4 w-48 h-96 rounded-[50px] overflow-hidden shadow-xl z-10" whileHover={{ scale: 1.02 }}>
              <img src="https://res.cloudinary.com/dewiswmaa/image/upload/v1766247228/image1_bw7ujj.jpg" alt="Winter Hiker" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div className="absolute bottom-12 right-4 w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg z-20" whileHover={{ scale: 1.05 }}>
              <img src="https://res.cloudinary.com/dewiswmaa/image/upload/v1766247643/image2_b0aspx.jpg" alt="Coastal View" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full lg:w-2/4 text-center flex flex-col items-center z-30"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-4 bg-lime-50 px-4 py-2 rounded-full border border-lime-100">
              <MapPin size={16} className="text-lime-600" />
              <span className="text-lime-700 font-bold tracking-widest uppercase text-xs">
                Serandib Lanka Tours
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-extrabold text-black leading-tight tracking-tight mb-6"
              variants={itemVariants}
            >
              The World <br /> Out There Is <br />
              <span className="relative inline-block">
                Waiting
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-lime-200 opacity-50 -z-10 rounded-full"></span>
              </span>
            </motion.h1>

            <motion.p
              className="text-gray-600 text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
              variants={itemVariants}
            >
              Discover the hidden gems of Sri Lanka and beyond. There are many packages tailored just for you to ensure you get the best experience.
            </motion.p>

            <motion.div
              className="w-full max-w-md bg-white p-2 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center border-2 border-transparent focus-within:border-lime-300 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow px-4 md:px-6 py-3 text-gray-700 bg-transparent outline-none placeholder-gray-400 rounded-full text-sm md:text-base"
              />
              <motion.button
                className="bg-black text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-lime-600 transition-colors duration-300 text-sm md:text-base"
                whileTap={{ scale: 0.95 }}
              >
                Know First <ArrowRight size={18} />
              </motion.button>
            </motion.div>

            <motion.div
              className="flex items-center gap-4 mt-12"
              variants={itemVariants}
            >
              <div className="flex flex-col items-end">
                <span className="font-bold text-2xl text-black flex items-center gap-1">
                  20+ Reviews
                  <Star fill="#facc15" color="#facc15" size={20} />
                </span>
              </div>
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((_, index) => (
                  <div key={index} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                    <img
                      src={`https://i.pravatar.cc/100?img=${index + 10}`}
                      alt="Reviewer"
                      className="w-full h-full object-cover"
                      onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.classList.add('bg-gray-300') }}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="hidden lg:block relative w-1/4 h-[500px]"
            initial="hidden"
            animate="visible"
            variants={imageFloatVariants('right')}
          >
            <motion.div className="absolute top-8 right-4 w-48 h-96 rounded-[50px] overflow-hidden shadow-xl z-10" whileHover={{ scale: 1.02 }}>
              <img src="https://res.cloudinary.com/dewiswmaa/image/upload/v1766247644/image3_znsktq.jpg" alt="Hiker Yellow Raincoat" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div className="absolute bottom-0 left-0 w-44 h-44 rounded-full overflow-hidden border-4 border-white shadow-lg z-20" whileHover={{ scale: 1.05 }}>
              <img src="https://res.cloudinary.com/dewiswmaa/image/upload/v1766247235/image4_bs00ve.jpg" alt="Sunset Water" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;