import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Sparkles, Send, User, Mail, MessageSquare, Award } from 'lucide-react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
const Reviews = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        title: '',
        description: '',
        rating: 5
    });

    const [reviews] = useState([
        {
            id: 1,
            name: "Sarah Johnson",
            email: "sarah.j@email.com",
            title: "Absolutely Amazing Experience!",
            description: "Our family trip to Sri Lanka was beyond expectations! The tour guide was knowledgeable, the vehicle was spotless, and every detail was perfectly planned. We visited Sigiriya, Ella, and the southern beaches. Can't wait to come back!",
            rating: 5,
            date: "November 2024"
        },
        {
            id: 2,
            name: "Michael Chen",
            email: "m.chen@email.com",
            title: "Professional and Reliable Service",
            description: "I've traveled to many countries, and Serandib Lanka Tours stands out for their professionalism. The driver was punctual, the itinerary was well-organized, and the hotels they recommended were fantastic. Highly recommend for anyone visiting Sri Lanka.",
            rating: 5,
            date: "October 2024"
        },
        {
            id: 3,
            name: "Emma Rodriguez",
            email: "emma.r@email.com",
            title: "Great Tour, Minor Issues",
            description: "Overall, we had a wonderful time exploring Sri Lanka. The cultural sites were breathtaking, and our guide was friendly. There were a couple of small timing issues with pickups, but nothing major. Would still recommend them to friends!",
            rating: 4,
            date: "September 2024"
        },
        {
            id: 4,
            name: "David Thompson",
            email: "d.thompson@email.com",
            title: "Perfect Honeymoon Trip",
            description: "My wife and I booked our honeymoon with Serandib Tours, and it was absolutely perfect! They arranged romantic dinners, beautiful hotels, and took us to the most scenic locations. The sunset at Galle Fort was unforgettable. Thank you for making our honeymoon special!",
            rating: 5,
            date: "August 2024"
        },
        {
            id: 5,
            name: "Priya Patel",
            email: "priya.p@email.com",
            title: "Good Experience with Room for Improvement",
            description: "The tour was good and we enjoyed most of our time in Sri Lanka. The temples and tea plantations were highlights. The vehicle was comfortable, though I wish there was more flexibility in the schedule. Overall, a solid experience that I would rate positively.",
            rating: 4,
            date: "July 2024"
        }
    ]);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleRatingClick = (rating) => {
        setFormData(prev => ({
            ...prev,
            rating
        }));
    };

    const handleSubmit = () => {
        if (!formData.name || !formData.email || !formData.title || !formData.description) {
            alert('Please fill in all fields');
            return;
        }
        console.log('Review submitted:', formData);
        alert('Thank you for your review! We appreciate your feedback.');
        setFormData({
            name: '',
            email: '',
            title: '',
            description: '',
            rating: 5
        });
    };

    const renderStars = (rating, interactive = false, size = 24) => {
        return (
            <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                        key={star}
                        size={size}
                        className={`${star <= rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                            } ${interactive ? 'cursor-pointer hover:scale-110 transition-transform' : ''}`}
                        onClick={interactive ? () => handleRatingClick(star) : undefined}
                    />
                ))}
            </div>
        );
    };

    const calculateAverageRating = () => {
        const total = reviews.reduce((sum, review) => sum + review.rating, 0);
        return (total / reviews.length).toFixed(1);
    };

    const getRatingCount = (rating) => {
        return reviews.filter(review => review.rating === rating).length;
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-white relative overflow-hidden pt-8">
                {/* Textured Background */}
                <div className="absolute top-0 left-0 w-full h-full z-0 opacity-5 pointer-events-none">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid-reviews" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid-reviews)" />
                    </svg>
                </div>

                {/* Animated Blobs */}
                <div className="absolute top-20 left-[-10%] w-96 h-96 bg-lime-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob pointer-events-none"></div>
                <div className="absolute bottom-20 right-[-10%] w-96 h-96 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000 pointer-events-none"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none"></div>

                <div className="relative z-10">
                    {/* Hero Section */}
                    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
                        <div className="container mx-auto max-w-7xl">
                            <motion.div
                                className="text-center max-w-5xl mx-auto"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={containerVariants}
                            >
                                <motion.div
                                    className="inline-flex items-center gap-2 mb-6 bg-yellow-50 px-4 py-2 rounded-full border border-yellow-100"
                                    variants={itemVariants}
                                >
                                    <Sparkles size={16} className="text-yellow-600" />
                                    <span className="text-yellow-700 font-bold tracking-widest uppercase text-xs">
                                        Customer Reviews
                                    </span>
                                </motion.div>

                                <motion.h1
                                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-black mb-8 leading-tight"
                                    variants={itemVariants}
                                >
                                    WHAT OUR TRAVELERS SAY ABOUT US
                                </motion.h1>

                                <motion.p
                                    className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-12"
                                    variants={itemVariants}
                                >
                                    We take pride in delivering exceptional experiences to our valued guests. Read what travelers from around the world have to say about their journeys with Serandib Lanka Tours. Your feedback helps us continuously improve and provide the best service possible.
                                </motion.p>

                                {/* Rating Overview */}
                                <motion.div
                                    className="backdrop-blur-xl bg-white/60 border border-white/80 rounded-3xl p-8 shadow-xl max-w-4xl mx-auto"
                                    variants={itemVariants}
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                                        <div className="text-center md:border-r border-gray-200">
                                            <div className="text-5xl md:text-6xl font-extrabold text-black mb-2">
                                                {calculateAverageRating()}
                                            </div>
                                            <div className="flex justify-center mb-2">
                                                {renderStars(Math.round(parseFloat(calculateAverageRating())))}
                                            </div>
                                            <p className="text-gray-600 text-sm">Based on {reviews.length} reviews</p>
                                        </div>

                                        <div className="md:col-span-2 space-y-3">
                                            {[5, 4, 3, 2, 1].map((rating) => (
                                                <div key={rating} className="flex items-center gap-3">
                                                    <span className="text-sm font-medium text-gray-700 w-12">
                                                        {rating} star
                                                    </span>
                                                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                                        <div
                                                            className="h-full bg-yellow-400 rounded-full transition-all duration-500"
                                                            style={{
                                                                width: `${(getRatingCount(rating) / reviews.length) * 100}%`
                                                            }}
                                                        ></div>
                                                    </div>
                                                    <span className="text-sm text-gray-600 w-8">
                                                        {getRatingCount(rating)}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </section>

                    {/* Reviews Grid */}
                    <section className="py-16 px-4 sm:px-6 lg:px-8">
                        <div className="container mx-auto max-w-7xl">
                            <motion.div
                                className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={containerVariants}
                            >
                                {reviews.map((review) => (
                                    <motion.div
                                        key={review.id}
                                        variants={itemVariants}
                                        className="backdrop-blur-xl bg-white/60 border border-white/80 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                    >
                                        {/* Header */}
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-black mb-1">
                                                    {review.name}
                                                </h3>
                                                <p className="text-sm text-gray-500">{review.email}</p>
                                            </div>
                                            <div className="flex items-center gap-2 bg-yellow-50 px-3 py-1.5 rounded-full">
                                                <Star size={16} className="fill-yellow-400 text-yellow-400" />
                                                <span className="font-bold text-yellow-700">{review.rating}.0</span>
                                            </div>
                                        </div>

                                        {/* Stars */}
                                        <div className="mb-4">
                                            {renderStars(review.rating, false, 20)}
                                        </div>

                                        {/* Title */}
                                        <h4 className="text-lg font-bold text-black mb-3">
                                            {review.title}
                                        </h4>

                                        {/* Description */}
                                        <p className="text-gray-600 leading-relaxed mb-4">
                                            {review.description}
                                        </p>

                                        {/* Date */}
                                        <p className="text-sm text-gray-400">{review.date}</p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </section>

                    {/* Review Form Section */}
                    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-lime-50/30 to-transparent">
                        <div className="container mx-auto max-w-4xl">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={containerVariants}
                            >
                                <motion.div className="text-center mb-12" variants={itemVariants}>
                                    <div className="inline-flex items-center gap-2 mb-4 bg-lime-50 px-4 py-2 rounded-full border border-lime-100">
                                        <Award size={16} className="text-lime-600" />
                                        <span className="text-lime-700 font-bold tracking-widest uppercase text-xs">
                                            Share Your Experience
                                        </span>
                                    </div>
                                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mb-4">
                                        Write a Review
                                    </h2>
                                    <p className="text-gray-600 text-lg">
                                        Help future travelers by sharing your experience with us
                                    </p>
                                </motion.div>

                                <motion.div
                                    className="backdrop-blur-xl bg-white/60 border border-white/80 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl"
                                    variants={itemVariants}
                                >
                                    <div className="space-y-6">
                                        {/* Name */}
                                        <div>
                                            <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                                                <User size={18} className="text-lime-600" />
                                                Your Name
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                placeholder="Enter your full name"
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-lime-500 focus:ring-2 focus:ring-lime-200 outline-none transition-all bg-white/80"
                                            />
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                                                <Mail size={18} className="text-lime-600" />
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="your.email@example.com"
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-lime-500 focus:ring-2 focus:ring-lime-200 outline-none transition-all bg-white/80"
                                            />
                                        </div>

                                        {/* Rating */}
                                        <div>
                                            <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-3">
                                                <Star size={18} className="text-lime-600" />
                                                Your Rating
                                            </label>
                                            <div className="flex items-center gap-2">
                                                {renderStars(formData.rating, true, 32)}
                                                <span className="ml-4 text-2xl font-bold text-lime-600">
                                                    {formData.rating}.0
                                                </span>
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <div>
                                            <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                                                <MessageSquare size={18} className="text-lime-600" />
                                                Review Title
                                            </label>
                                            <input
                                                type="text"
                                                name="title"
                                                value={formData.title}
                                                onChange={handleInputChange}
                                                placeholder="Summarize your experience"
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-lime-500 focus:ring-2 focus:ring-lime-200 outline-none transition-all bg-white/80"
                                            />
                                        </div>

                                        {/* Description */}
                                        <div>
                                            <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                                                <MessageSquare size={18} className="text-lime-600" />
                                                Your Review
                                            </label>
                                            <textarea
                                                name="description"
                                                value={formData.description}
                                                onChange={handleInputChange}
                                                rows={6}
                                                placeholder="Tell us about your experience with Serandib Lanka Tours..."
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-lime-500 focus:ring-2 focus:ring-lime-200 outline-none transition-all resize-none bg-white/80"
                                            ></textarea>
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            onClick={handleSubmit}
                                            className="w-full bg-gradient-to-r from-lime-500 to-emerald-500 hover:from-lime-600 hover:to-emerald-600 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
                                        >
                                            <Send size={20} />
                                            Submit Review
                                        </button>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </section>

                    {/* Trust Badge Section */}
                    <section className="py-16 px-4 sm:px-6 lg:px-8">
                        <div className="container mx-auto max-w-4xl">
                            <motion.div
                                className="backdrop-blur-xl bg-gradient-to-br from-lime-500/90 to-emerald-500/90 rounded-3xl p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                                <div className="relative z-10">
                                    <Award className="mx-auto text-white mb-4" size={48} />
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
                                        Trusted by Thousands
                                    </h3>
                                    <p className="text-white/90 text-lg mb-6">
                                        Join our community of satisfied travelers who have experienced the best of Sri Lanka with us
                                    </p>
                                    <div className="flex flex-wrap justify-center gap-8 text-white">
                                        <div>
                                            <div className="text-3xl sm:text-4xl font-extrabold">14k+</div>
                                            <div className="text-sm text-white/80">Happy Travelers</div>
                                        </div>
                                        <div>
                                            <div className="text-3xl sm:text-4xl font-extrabold">{calculateAverageRating()}</div>
                                            <div className="text-sm text-white/80">Average Rating</div>
                                        </div>
                                        <div>
                                            <div className="text-3xl sm:text-4xl font-extrabold">25+</div>
                                            <div className="text-sm text-white/80">Years Experience</div>
                                        </div>
                                    </div>
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

export default Reviews;