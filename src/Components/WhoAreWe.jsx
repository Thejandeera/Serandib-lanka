import React, { useRef, useEffect } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Users, Globe, Briefcase, Map } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Counter = ({ value }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    // Parse the numeric part and the suffix
    const numericValue = parseInt(value.replace(/\D/g, '')) || 0;
    const suffix = value.replace(/[0-9]/g, '');

    useEffect(() => {
        if (isInView) {
            const node = ref.current;
            const controls = animate(0, numericValue, {
                duration: 2.5,
                ease: "easeOut",
                onUpdate(value) {
                    node.textContent = Math.floor(value) + suffix;
                }
            });
            return () => controls.stop();
        }
    }, [isInView, numericValue, suffix]);

    return <span ref={ref} className="tabular-nums">0{suffix}</span>;
};

const WhoAreWe = () => {
    const navigate = useNavigate();
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
        hidden: { y: 20, opacity: 0 },
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

    const stats = [
        { value: "5+", label: "Years of Experience" },
        { value: "10", label: "Team Members" },
        { value: "40", label: "Destinations Covered" },
        { value: "600+", label: "Trips Launched" },
    ];

    return (
        <section className="relative w-full py-24 overflow-hidden bg-white">

            {/* ---- Background Elements (Consistent with Hero/Tours) ---- */}
            <div className="absolute top-0 left-0 w-full h-full z-0 opacity-5 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid-who" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid-who)" />
                </svg>
            </div>

            {/* Subtle Blobs */}
            <div className="absolute top-1/2 left-[-10%] w-96 h-96 bg-lime-50 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob pointer-events-none"></div>
            <div className="absolute bottom-0 right-[-10%] w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000 pointer-events-none"></div>


            {/* ---- Content Container ---- */}
            <div className="container mx-auto px-6 lg:px-12 relative z-10">

                {/* Header Title (Optional, consistent with other sections) */}
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-lime-600 font-bold tracking-widest uppercase text-sm mb-2 block">
                        Who We Are
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-black">
                        Crafting Unforgettable <br /> Journeys Since 2020
                    </h2>
                </motion.div>


                {/* ---- Main Grid Layout ---- */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* 1. Left Column: Image */}
                    <motion.div
                        className="lg:col-span-4 h-[500px] w-full relative"
                        variants={imageVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="absolute inset-0 bg-lime-100 rounded-[40px] rotate-3 transform z-0"></div>
                        <div className="absolute inset-0 overflow-hidden rounded-[40px] shadow-2xl z-10 rotate-0 hover:rotate-1 transition-transform duration-500 ease-out">
                            {/* Replace with your specific vertical image */}
                            <img
                                src="/images/hero/image2.jpg"
                                alt="Travel Experience"
                                className="w-full h-full object-cover"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                    </motion.div>


                    {/* 2. Middle Column: Text Content */}
                    <motion.div
                        className="lg:col-span-5 space-y-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.p variants={itemVariants} className="text-gray-600 text-lg leading-relaxed">
                            Serandib Lanka Tours started as a passion project in 2020. Our founders had just explored the hidden corners of Sri Lanka and were ready for their next adventure: sharing these wonders with the world. They had experience in hospitality and a deep business acumen.
                        </motion.p>

                        <motion.p variants={itemVariants} className="text-gray-600 text-lg leading-relaxed">
                            It was a perfect fit. Colombo was an up-and-coming hub at that time. As tourism in the island grew, so did our agency. We started handling leisure travel for locals and quickly expanded to welcome guests from across the globe, ensuring every trip is a personal story waiting to be told.
                        </motion.p>

                        <motion.div variants={itemVariants} className="pt-4">
                            <button
                                onClick={() => navigate('/service')}
                                className="text-black font-bold border-b-2 border-lime-400 hover:text-lime-700 hover:border-lime-600 transition-all"
                            >
                                Read Our Full Story
                            </button>
                        </motion.div>
                    </motion.div>


                    {/* 3. Right Column: Stats Grid */}
                    <motion.div
                        className="lg:col-span-3 grid grid-cols-2 gap-x-4 gap-y-10"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="flex flex-col"
                            >
                                <span className="text-4xl md:text-5xl font-extrabold text-black mb-1">
                                    <Counter value={stat.value} />
                                </span>
                                <span className="text-sm text-gray-500 font-medium uppercase tracking-wide">
                                    {stat.label}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default WhoAreWe;