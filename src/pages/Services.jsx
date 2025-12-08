import React from 'react';
import { motion } from 'framer-motion';
import {
    Car,
    MapPin,
    Hotel,
    Plane,
    Users,
    Shield,
    Award,
    Clock,
    Heart,
    Headphones,
    CheckCircle,
    Sparkles,
    ArrowRight
} from 'lucide-react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Services = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        },
    };

    const imageLeftVariants = {
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        },
    };

    const imageRightVariants = {
        hidden: { x: 50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        },
    };

    // Main services data
    const mainServices = [
        {
            icon: MapPin,
            title: "Holiday Packages",
            description: "Experience the beauty of Sri Lanka with our carefully curated tour packages. Each journey is designed to create unforgettable memories, from ancient temples to pristine beaches. Our expert local guides ensure you discover hidden gems and experience authentic Sri Lankan culture.",
            image: "/images/tours/sigiriya.png",
            position: "left"
        },
        {
            icon: Car,
            title: "Vehicle Rentals",
            description: "Travel in comfort and style with our diverse fleet of well-maintained vehicles. From luxury sedans to spacious buses, we have the perfect ride for your journey. All vehicles come with professional drivers who know every corner of the island.",
            image: "/images/vehicles/acvan.png",
            position: "right"
        },
        {
            icon: Hotel,
            title: "Hotel Bookings",
            description: "Rest in handpicked accommodations that blend comfort with authentic Sri Lankan hospitality. We partner with the finest hotels and resorts across the island, ensuring your stay is as memorable as your adventures. From boutique hotels to luxury beach resorts.",
            image: "/images/hero/image2.jpg",
            position: "left"
        },
        {
            icon: Plane,
            title: "Airport Transfers",
            description: "Start and end your Sri Lankan adventure stress-free with our seamless airport transfer service. Our professional drivers will be waiting for you with a warm welcome, ensuring a comfortable journey to your destination, day or night.",
            image: "/images/hero/image3.jpg",
            position: "right"
        }
    ];

    // Why choose us features
    const whyChooseUs = [
        {
            icon: Award,
            title: "25+ Years Experience",
            description: "Trusted by thousands of travelers since 1998"
        },
        {
            icon: Users,
            title: "Expert Local Guides",
            description: "Professional, English-speaking guides with deep local knowledge"
        },
        {
            icon: Shield,
            title: "Fully Insured",
            description: "Complete travel insurance coverage for peace of mind"
        },
        {
            icon: Clock,
            title: "24/7 Support",
            description: "Round-the-clock assistance throughout your journey"
        },
        {
            icon: Heart,
            title: "Personalized Service",
            description: "Tailored experiences designed around your preferences"
        },
        {
            icon: Headphones,
            title: "Instant Booking",
            description: "Quick WhatsApp booking with immediate confirmation"
        }
    ];

    return (<> <Navbar />
        <div className="min-h-screen bg-white relative overflow-hidden pt-8">
            {/* Textured Background */}
            <div className="absolute top-0 left-0 w-full h-full z-0 opacity-5 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid-services" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid-services)" />
                </svg>
            </div>

            {/* Animated Blobs */}
            <div className="absolute top-20 left-[-10%] w-96 h-96 bg-lime-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob pointer-events-none"></div>
            <div className="absolute bottom-20 right-[-10%] w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000 pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none"></div>

            <div className="relative z-10">
                {/* Hero Section */}
                <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                    <div className="container mx-auto max-w-7xl">
                        <motion.div
                            className="text-center max-w-5xl mx-auto"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                        >
                            <motion.div
                                className="inline-flex items-center gap-2 mb-6 bg-lime-50 px-4 py-2 rounded-full border border-lime-100"
                                variants={itemVariants}
                            >
                                <Sparkles size={16} className="text-lime-600" />
                                <span className="text-lime-700 font-bold tracking-widest uppercase text-xs">
                                    Our Services
                                </span>
                            </motion.div>

                            <motion.h1
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-black mb-8 leading-tight"
                                variants={itemVariants}
                            >
                                OUR TEAM IS READY TO PROVIDE YOU WITH THE BEST SERVICE.
                            </motion.h1>

                            <motion.p
                                className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed"
                                variants={itemVariants}
                            >
                                We take great pride in our team's dedication and expertise, committed to delivering the best service to our valued customers. From our knowledgeable guides to our friendly customer support, we are here to make your travel experience exceptional and memorable. Whether it's exploring captivating destinations or finding the perfect vehicle rental, rest assured that our team is ready to go the extra mile to exceed your expectations. Your satisfaction is our top priority, and we look forward to serving you with passion and enthusiasm. Get ready for an incredible journey with our team by your side!
                            </motion.p>
                        </motion.div>
                    </div>
                </section>

                {/* Main Services - Alternating Layout */}
                <section className="py-16 px-4 sm:px-6 lg:px-8">
                    <div className="container mx-auto max-w-7xl">
                        {mainServices.map((service, index) => (
                            <motion.div
                                key={index}
                                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-24 lg:mb-32 ${index === mainServices.length - 1 ? 'mb-0' : ''
                                    }`}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={containerVariants}
                            >
                                {/* Image */}
                                <motion.div
                                    className={`relative ${service.position === 'right' ? 'lg:order-2' : 'lg:order-1'}`}
                                    variants={service.position === 'left' ? imageLeftVariants : imageRightVariants}
                                >
                                    <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-[40px] overflow-hidden shadow-2xl">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                                    </div>
                                </motion.div>

                                {/* Content */}
                                <motion.div
                                    className={`space-y-6 ${service.position === 'right' ? 'lg:order-1' : 'lg:order-2'}`}
                                    variants={itemVariants}
                                >
                                    <div className="inline-flex items-center gap-3 bg-lime-50 px-4 py-2 rounded-full border border-lime-100">
                                        <service.icon size={20} className="text-lime-600" />
                                        <span className="text-lime-700 font-bold text-sm tracking-wide">
                                            {service.title}
                                        </span>
                                    </div>

                                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black leading-tight">
                                        {service.title}
                                    </h2>

                                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                                        {service.description}
                                    </p>

                                    <button className="inline-flex items-center gap-2 text-black font-bold hover:text-lime-600 transition-colors group">
                                        <span>Learn More</span>
                                        <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                                    </button>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-lime-50/30 to-transparent">
                    <div className="container mx-auto max-w-7xl">
                        <motion.div
                            className="text-center mb-16"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                        >
                            <motion.div
                                className="inline-flex items-center gap-2 mb-4 bg-blue-50 px-4 py-2 rounded-full border border-blue-100"
                                variants={itemVariants}
                            >
                                <Sparkles size={16} className="text-blue-600" />
                                <span className="text-blue-700 font-bold tracking-widest uppercase text-xs">
                                    Why Choose Us
                                </span>
                            </motion.div>

                            <motion.h2
                                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mb-6"
                                variants={itemVariants}
                            >
                                Your Satisfaction is Our Top Priority
                            </motion.h2>

                            <motion.p
                                className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto"
                                variants={itemVariants}
                            >
                                We are committed to excellence in every aspect of your journey, ensuring memorable experiences that exceed expectations.
                            </motion.p>
                        </motion.div>

                        <motion.div
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={containerVariants}
                        >
                            {whyChooseUs.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="group"
                                >
                                    <div className="backdrop-blur-xl bg-white/60 border border-white/80 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-lime-500 to-emerald-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                                            <feature.icon className="text-white" size={28} />
                                        </div>
                                        <h3 className="text-xl font-bold text-black mb-3">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 px-4 sm:px-6 lg:px-8">
                    <div className="container mx-auto max-w-7xl">
                        <motion.div
                            className="backdrop-blur-xl bg-gradient-to-br from-lime-500/90 to-emerald-500/90 rounded-[40px] p-12 md:p-16 lg:p-20 text-center shadow-2xl relative overflow-hidden"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                            <div className="relative z-10">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                                    Ready for an Incredible Journey?
                                </h2>
                                <p className="text-white/90 text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
                                    Get ready for an incredible journey with our team by your side! Contact us now to start planning your perfect Sri Lankan adventure.
                                </p>
                                <button className="inline-flex items-center gap-3 bg-white text-lime-700 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                                    <span>BOOK NOW</span>
                                    <CheckCircle size={24} />
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>

            {/* Animation Styles */}
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
        </div>
        <Footer />
    </>
    );
};

export default Services;