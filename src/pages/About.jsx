import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Globe, Shield, Users, Sparkles, Award, CheckCircle } from 'lucide-react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const About = () => {
    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
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

    const imageVariants = {
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        },
    };

    // Stats Data (Matching your reference image)
    const stats = [
        { value: "25+", label: "Years of Experience" },
        { value: "90", label: "Team Members" },
        { value: "160", label: "Destinations Covered" },
        { value: "14k+", label: "Trips Launched" },
    ];

    // Core Values Data
    const values = [
        {
            icon: Shield,
            title: "Safety First",
            desc: "Your safety is our paramount concern in every journey we plan."
        },
        {
            icon: Heart,
            title: "Passion for Travel",
            desc: "We don't just plan trips; we craft experiences with love and care."
        },
        {
            icon: Globe,
            title: "Sustainable Tourism",
            desc: "Committed to preserving the beauty of Sri Lanka for future generations."
        },
        {
            icon: Users,
            title: "Customer Centric",
            desc: "Your satisfaction is the compass that guides all our decisions."
        }
    ];

    return (
        <div className="min-h-screen bg-white relative overflow-hidden pt-16 sm:pt-20 md:pt-24">

            {/* ---- Background Elements (Consistent with other pages) ---- */}
            <div className="absolute top-0 left-0 w-full h-full z-0 opacity-5 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid-about" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid-about)" />
                </svg>
            </div>

            {/* Animated Blobs */}
            <div className="absolute top-20 left-[-10%] w-96 h-96 bg-lime-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob pointer-events-none"></div>
            <div className="absolute bottom-40 right-[-10%] w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000 pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20 z-0 pointer-events-none"></div>

            <Navbar />

            {/* ---- Hero Section ---- */}
            <section className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[55vh]">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600"
                        alt="About Us Hero"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"></div>
                </div>
                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center text-white">
                    <div className="inline-flex items-center gap-2 mb-3 sm:mb-4 bg-white/10 backdrop-blur-md px-4 sm:px-6 py-1.5 sm:py-2 rounded-full border border-white/20">
                        <Sparkles size={14} className="text-lime-300 sm:w-4 sm:h-4" />
                        <span className="font-bold tracking-widest uppercase text-xs">Our Story</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-3 sm:mb-4 drop-shadow-lg px-4">
                        Discover <span className="text-lime-300">Serandib</span>
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl drop-shadow-md px-4">
                        More than just a travel agency. We are your gateway to the authentic wonders of Sri Lanka, crafting memories since 1998.
                    </p>
                </div>
            </section>

            {/* ---- Story & Stats Section ---- */}
            <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                        {/* Image Side */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={imageVariants}
                            className="relative"
                        >
                            <div className="relative h-[500px] rounded-[40px] overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1528127269322-539801943592?w=800"
                                    alt="Our Team"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                            </div>
                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -right-6 backdrop-blur-xl bg-white/90 p-6 rounded-3xl shadow-xl border border-white hidden md:block">
                                <div className="flex items-center gap-4">
                                    <div className="bg-lime-100 p-3 rounded-full">
                                        <Award className="text-lime-600" size={32} />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-gray-900">#1 Choice</div>
                                        <div className="text-sm text-gray-600">For Sri Lanka Tours</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Content Side */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                        >
                            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-4 bg-lime-50 px-4 py-2 rounded-full border border-lime-100">
                                <Users size={16} className="text-lime-600" />
                                <span className="text-lime-700 font-bold tracking-widest uppercase text-xs">
                                    Who We Are
                                </span>
                            </motion.div>

                            <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mb-6 leading-tight">
                                Crafting Unforgettable Journeys Since 1998
                            </motion.h2>

                            <motion.div variants={itemVariants} className="space-y-4 text-gray-600 text-lg leading-relaxed mb-8">
                                <p>
                                    Serandib Lanka Tours started as a passion project. Our founders had just explored the hidden corners of Sri Lanka and were ready for their next adventure: sharing these wonders with the world.
                                </p>
                                <p>
                                    As tourism in the island grew, so did our agency. We started handling leisure travel for locals and quickly expanded to welcome guests from across the globe, ensuring every trip is a personal story waiting to be told.
                                </p>
                            </motion.div>

                            {/* Stats Grid */}
                            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-8 pt-4 border-t border-gray-100">
                                {stats.map((stat, index) => (
                                    <div key={index}>
                                        <div className="text-3xl sm:text-4xl font-extrabold text-black mb-1">
                                            {stat.value}
                                        </div>
                                        <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ---- Mission & Vision Section ---- */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-lime-50/30 to-transparent">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

                        {/* Mission Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="backdrop-blur-xl bg-white/60 border border-white/80 rounded-[32px] p-8 sm:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-lime-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Target className="text-lime-600" size={32} />
                            </div>
                            <h3 className="text-3xl font-extrabold text-black mb-4">Our Mission</h3>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                To curate personalized travel experiences that inspire, educate, and connect people with the rich heritage and natural beauty of Sri Lanka, while prioritizing sustainability and local community empowerment.
                            </p>
                            <ul className="space-y-3">
                                {['Authentic Experiences', 'Sustainable Practices', 'Community Support'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                                        <CheckCircle size={20} className="text-lime-500" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Vision Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="backdrop-blur-xl bg-white/60 border border-white/80 rounded-[32px] p-8 sm:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Eye className="text-emerald-600" size={32} />
                            </div>
                            <h3 className="text-3xl font-extrabold text-black mb-4">Our Vision</h3>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                To be the world's most trusted gateway to Sri Lanka, recognized globally for setting standards in responsible tourism and for turning every journey into a transformative story of discovery.
                            </p>
                            <ul className="space-y-3">
                                {['Global Recognition', 'Industry Innovation', 'Customer Excellence'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                                        <CheckCircle size={20} className="text-emerald-500" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* ---- Core Values Section ---- */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
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
                                Our Core Values
                            </span>
                        </motion.div>
                        <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mb-6">
                            What Drives Us
                        </motion.h2>
                        <motion.p variants={itemVariants} className="text-gray-600 max-w-2xl mx-auto text-lg">
                            These principles are the foundation of every itinerary we plan and every service we provide.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        {values.map((val, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-lime-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg">
                                    <val.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{val.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {val.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ---- CTA Section ---- */}
            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl">
                    <motion.div
                        className="backdrop-blur-xl bg-gradient-to-br from-black/90 to-gray-800 rounded-[40px] p-12 md:p-16 text-center shadow-2xl relative overflow-hidden"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Abstract circles */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-lime-500/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

                        <div className="relative z-10">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                                Ready to Write Your Own Story?
                            </h2>
                            <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
                                Join us for an adventure of a lifetime. Let us guide you through the wonders of Sri Lanka.
                            </p>
                            <button className="inline-flex items-center gap-3 bg-lime-500 text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-lime-400 transition-all shadow-xl hover:shadow-lime-500/20 hover:-translate-y-1">
                                <span>Plan My Trip</span>
                                <CheckCircle size={24} />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />

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
    );
};

export default About;