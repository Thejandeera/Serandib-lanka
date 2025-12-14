import React from 'react';
import { MapPin, Clock, Star, CheckCircle, ArrowLeft, MessageCircle, Calendar, Users, Plane, Check } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { toursData } from '../data/toursData';

const TourDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const tourData = toursData.find(tour => tour.id === parseInt(id)) || toursData[0];

    const handleWhatsAppBooking = () => {
        const message = encodeURIComponent(`Hi! I'm interested in booking the "${tourData.title}". Can you provide more details?`);
        window.open(`https://wa.me/94718860959?text=${message}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-white relative overflow-hidden">
            {/* Textured Background */}
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

            {/* Animated Blobs */}
            <div className="absolute top-20 left-[-10%] w-96 h-96 bg-lime-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
            <div className="absolute bottom-20 right-[-10%] w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

            <div className="relative z-20">
                <Navbar />

                {/* Hero Banner */}
                <div className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] lg:h-[70vh] w-full">
                    <img
                        src={tourData.image}
                        alt={tourData.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                    <div className="absolute inset-0 flex items-end">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8 md:pb-12">
                            <button
                                onClick={() => navigate(-1)}
                                className="inline-flex items-center text-xs sm:text-sm text-white/80 hover:text-white mb-4 sm:mb-6 backdrop-blur-sm bg-white/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all hover:bg-white/20"
                            >
                                <ArrowLeft size={14} className="mr-2 sm:w-4 sm:h-4" /> Back to Tours
                            </button>
                            <div className="max-w-4xl">
                                <span className="inline-block bg-lime-500 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase shadow-lg mb-3">
                                    {tourData.category}
                                </span>
                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-4 sm:mb-6 drop-shadow-lg">
                                    {tourData.title}
                                </h1>
                                <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 items-center text-white text-xs sm:text-sm md:text-base">
                                    <div className="flex items-center gap-2 backdrop-blur-md bg-white/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                                        <MapPin size={16} className="text-lime-300 flex-shrink-0 sm:w-5 sm:h-5" />
                                        <span className="truncate">{tourData.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2 backdrop-blur-md bg-white/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                                        <Clock size={16} className="text-lime-300 flex-shrink-0 sm:w-5 sm:h-5" />
                                        <span>{tourData.nights} Nights</span>
                                    </div>
                                    <div className="flex items-center gap-2 backdrop-blur-md bg-white/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                                        <Star fill="currentColor" size={16} className="text-yellow-400 flex-shrink-0 sm:w-5 sm:h-5" />
                                        <span>{tourData.rating} Rating</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <section className="py-8 sm:py-12 md:py-16">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
                            {/* Main Content - Scrollable */}
                            <div className="lg:col-span-2 space-y-6 sm:space-y-8">
                                {/* Overview Card */}
                                <div className="backdrop-blur-xl bg-white/60 border border-white/80 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-xl">
                                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                                        <div className="w-1.5 sm:w-2 h-6 sm:h-8 bg-lime-500 rounded-full"></div>
                                        Overview
                                    </h2>
                                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                                        {tourData.desc} Enjoy a hassle-free journey with our premium service. We ensure your comfort and safety throughout the trip.
                                    </p>
                                </div>

                                {tourData.category === "Pickup" ? (
                                    <div className="backdrop-blur-xl bg-white/60 border border-white/80 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-xl">
                                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2 sm:gap-3">
                                            <div className="w-1.5 sm:w-2 h-6 sm:h-8 bg-lime-500 rounded-full"></div>
                                            Transfer Details
                                        </h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                                <div className="flex items-center gap-3 mb-2 text-lime-600 font-bold uppercase tracking-wider text-xs">
                                                    <Plane size={16} /> Pickup Location
                                                </div>
                                                <div className="text-xl font-bold text-gray-900">{tourData.pickup}</div>
                                            </div>
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                                <div className="flex items-center gap-3 mb-2 text-lime-600 font-bold uppercase tracking-wider text-xs">
                                                    <MapPin size={16} /> Drop-off Location
                                                </div>
                                                <div className="text-xl font-bold text-gray-900">{tourData.drop}</div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    /* Destinations List */
                                    <div className="backdrop-blur-xl bg-white/60 border border-white/80 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-xl">
                                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                                            <div className="w-1.5 sm:w-2 h-6 sm:h-8 bg-lime-500 rounded-full"></div>
                                            Destinations & Highlights
                                        </h2>
                                        <div className="space-y-6">
                                            {tourData.destinations.map((dest, i) => (
                                                <div key={i} className="flex flex-col sm:flex-row gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/80 hover:shadow-md transition-all">
                                                    <div className="w-full sm:w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden">
                                                        <img
                                                            src={dest.image}
                                                            alt={dest.name}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                    <div className="flex-1 flex flex-col justify-center">
                                                        <div className="flex items-center gap-2 text-lime-600 font-bold text-sm mb-1">
                                                            <div className="bg-lime-100 px-2 py-0.5 rounded-full">Stop {i + 1}</div>
                                                        </div>
                                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{dest.name}</h3>
                                                        <p className="text-gray-600 text-sm">Experience the unique beauty and history of this location.</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Why Choose Us (Highlights) */}
                                <div className="backdrop-blur-xl bg-white/60 border border-white/80 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-xl">
                                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                                        <div className="w-1.5 sm:w-2 h-6 sm:h-8 bg-lime-500 rounded-full"></div>
                                        {tourData.category === 'Pickup' ? 'Service Features' : 'Tour Inclusions'}
                                    </h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                        {[
                                            'Private AC Vehicle',
                                            'English Speaking Driver',
                                            'Fuel & Parking Included',
                                            'Flexible Stops',
                                            '24/7 Customer Support',
                                            'Safe & Secure',
                                            'Bottled Water Provided'
                                        ].map((item, i) => (
                                            <div
                                                key={i}
                                                className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/80 hover:border-lime-300 transition-all"
                                            >
                                                <CheckCircle size={18} className="text-lime-600 flex-shrink-0 sm:w-5 sm:h-5" />
                                                <span className="text-xs sm:text-sm md:text-base text-gray-700 font-medium">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Booking Sidebar - Sticky on Desktop */}
                            <div className="lg:col-span-1">
                                <div className="lg:sticky lg:top-36 backdrop-blur-xl bg-white/60 border border-white/80 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-2xl">
                                    <div className="flex justify-between items-end mb-6">
                                        <div>
                                            <span className="text-gray-500 text-xs sm:text-sm">Contact us for</span>
                                            <div className="text-xl sm:text-2xl font-extrabold text-gray-900">Custom Pricing</div>
                                        </div>
                                        <div className="bg-lime-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-bold shadow-lg">
                                            Best Rates
                                        </div>
                                    </div>

                                    {/* Quick Info */}
                                    <div className="space-y-3 mb-6 p-4 bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/80">
                                        <div className="flex items-center gap-3 text-gray-700">
                                            <Calendar size={18} className="text-lime-600" />
                                            <span className="font-medium">{tourData.nights} Nights Duration</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-gray-700">
                                            <Users size={18} className="text-lime-600" />
                                            <span className="font-medium">Private Group</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-gray-700">
                                            <Check size={18} className="text-lime-600" />
                                            <span className="font-medium">Free Cancellation</span>
                                        </div>
                                    </div>

                                    {/* WhatsApp Booking Button */}
                                    <button
                                        onClick={handleWhatsAppBooking}
                                        className="w-full bg-gradient-to-r from-lime-500 to-emerald-500 hover:from-lime-600 hover:to-emerald-600 text-white py-4 rounded-xl sm:rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 group"
                                    >
                                        <MessageCircle size={22} className="group-hover:scale-110 transition-transform" />
                                        Inquire via WhatsApp
                                    </button>
                                    <p className="text-center text-gray-500 text-xs mt-4">
                                        💬 Get a customized quote instantly!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default TourDetail;