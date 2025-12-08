import React from 'react';
import { MapPin, Clock, Star, CheckCircle, ArrowLeft, MessageCircle, Calendar, Users } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { toursData } from '../pages/Tours';

const TourDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const tourData = toursData.find(tour => tour.id === parseInt(id)) || toursData[0];

    const handleWhatsAppBooking = () => {
        const message = encodeURIComponent(`Hi! I'm interested in booking the "${tourData.title}" tour (${tourData.price}). Can you provide more details?`);
        window.open(`https://wa.me/94785329002?text=${message}`, '_blank');
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
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20 z-0"></div>

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
                                        <span>{tourData.days}</span>
                                    </div>
                                    <div className="flex items-center gap-2 backdrop-blur-md bg-white/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                                        <Star fill="currentColor" size={16} className="text-yellow-400 flex-shrink-0 sm:w-5 sm:h-5" />
                                        <span>{tourData.rating}.0 Rating</span>
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
                                        {tourData.desc} Experience the majesty of this ancient wonder as you climb through the water gardens and mirror wall to reach the summit. Marvel at the ancient frescoes and enjoy panoramic views of the surrounding landscape. This UNESCO World Heritage site offers a perfect blend of history, culture, and natural beauty.
                                    </p>
                                </div>

                                {/* Highlights Card */}
                                <div className="backdrop-blur-xl bg-white/60 border border-white/80 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-xl">
                                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                                        <div className="w-1.5 sm:w-2 h-6 sm:h-8 bg-lime-500 rounded-full"></div>
                                        Tour Highlights
                                    </h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                        {[
                                            'Professional Tour Guide',
                                            'Luxury Air-Conditioned Transport',
                                            'All Meals Included',
                                            'Entrance Tickets Covered',
                                            'Professional Photography',
                                            'Complimentary Water Bottles',
                                            'Travel Insurance',
                                            '24/7 Support Available'
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

                                {/* Itinerary Card */}
                                <div className="backdrop-blur-xl bg-white/60 border border-white/80 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-xl">
                                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                                        <div className="w-1.5 sm:w-2 h-6 sm:h-8 bg-lime-500 rounded-full"></div>
                                        Detailed Itinerary
                                    </h2>
                                    <div className="space-y-3 sm:space-y-4">
                                        {[
                                            { day: 'Day 1', title: 'Arrival & Water Gardens', desc: 'Begin your journey exploring the beautiful water gardens and ancient hydraulic systems.' },
                                            { day: 'Day 2', title: 'Summit Climb & Departure', desc: 'Early morning climb to the summit, explore the frescoes, and enjoy breathtaking views.' }
                                        ].map((item, i) => (
                                            <div key={i} className="flex flex-col sm:flex-row gap-3 sm:gap-4 p-4 sm:p-6 bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/80">
                                                <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-lime-500 to-emerald-500 rounded-xl sm:rounded-2xl flex items-center justify-center text-white font-bold shadow-lg text-xs sm:text-sm">
                                                    {item.day}
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 sm:mb-2">{item.title}</h3>
                                                    <p className="text-xs sm:text-sm md:text-base text-gray-600">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Booking Sidebar - Sticky on Desktop */}
                            <div className="lg:col-span-1">
                                <div className="lg:sticky lg:top-24 backdrop-blur-xl bg-white/60 border border-white/80 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-2xl">
                                    <div className="flex justify-between items-end mb-6 sm:mb-8">
                                        <div>
                                            <span className="text-gray-500 text-xs sm:text-sm">Starting from</span>
                                            <div className="text-3xl sm:text-4xl font-extrabold text-gray-900">{tourData.price}</div>
                                            <span className="text-gray-500 text-xs sm:text-sm">per person</span>
                                        </div>
                                        <div className="bg-lime-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-bold shadow-lg">
                                            Best Value
                                        </div>
                                    </div>

                                    {/* Quick Info */}
                                    <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 p-4 sm:p-6 bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/80">
                                        <div className="flex items-center gap-2 sm:gap-3 text-gray-700 text-sm sm:text-base">
                                            <Calendar size={18} className="text-lime-600 flex-shrink-0 sm:w-5 sm:h-5" />
                                            <span className="font-medium">{tourData.days} Duration</span>
                                        </div>
                                        <div className="flex items-center gap-2 sm:gap-3 text-gray-700 text-sm sm:text-base">
                                            <Users size={18} className="text-lime-600 flex-shrink-0 sm:w-5 sm:h-5" />
                                            <span className="font-medium">Min 2 People</span>
                                        </div>
                                        <div className="flex items-center gap-2 sm:gap-3 text-gray-700 text-sm sm:text-base">
                                            <Star size={18} className="text-lime-600 flex-shrink-0 sm:w-5 sm:h-5" fill="currentColor" />
                                            <span className="font-medium">120+ Reviews</span>
                                        </div>
                                    </div>

                                    {/* WhatsApp Booking Button */}
                                    <button
                                        onClick={handleWhatsAppBooking}
                                        className="w-full bg-gradient-to-r from-lime-500 to-emerald-500 hover:from-lime-600 hover:to-emerald-600 text-white py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg flex items-center justify-center gap-2 sm:gap-3 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 group"
                                    >
                                        <MessageCircle size={20} className="group-hover:scale-110 transition-transform sm:w-6 sm:h-6" />
                                        Book via WhatsApp
                                    </button>
                                    <p className="text-center text-gray-500 text-xs mt-3 sm:mt-4">
                                        💬 Chat with us directly for instant booking
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