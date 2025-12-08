import React from 'react';
import { ArrowLeft, MessageCircle, Users, Fuel, Gauge, CheckCircle, Shield, Award, Zap, DollarSign, Clock } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { vehiclesData } from '../pages/Vehicles';

const VehicleDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const vehicleData = vehiclesData.find(vehicle => vehicle.id === parseInt(id)) || vehiclesData[0];

    const handleWhatsAppBooking = () => {
        const message = encodeURIComponent(`Hi! I'm interested in booking the "${vehicleData.title}" (${vehicleData.price}/km). Can you provide more details?`);
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
            <div className="absolute top-20 left-[-10%] w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
            <div className="absolute bottom-20 right-[-10%] w-96 h-96 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20 z-0"></div>

            <div className="relative z-20">
                <Navbar />

                {/* Hero Banner */}
                <div className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] lg:h-[70vh] w-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100/60 to-cyan-100/60">
                        <img
                            src={vehicleData.image}
                            alt={vehicleData.title}
                            className="w-full h-full object-contain drop-shadow-2xl"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                    <div className="absolute inset-0 flex items-end">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8 md:pb-12">
                            <button
                                onClick={() => navigate(-1)}
                                className="inline-flex items-center text-xs sm:text-sm text-white/80 hover:text-white mb-4 sm:mb-6 backdrop-blur-sm bg-white/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all hover:bg-white/20"
                            >
                                <ArrowLeft size={14} className="mr-2 sm:w-4 sm:h-4" /> Back to Fleet
                            </button>
                            <div className="max-w-4xl">
                                <span className="inline-block bg-blue-500 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide uppercase shadow-lg mb-3 sm:mb-4">
                                    {vehicleData.badge}
                                </span>
                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-4 sm:mb-6 drop-shadow-lg">
                                    {vehicleData.title}
                                </h1>
                                <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 items-center text-white text-xs sm:text-sm md:text-base">
                                    <div className="flex items-center gap-2 backdrop-blur-md bg-white/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                                        <Users size={16} className="text-blue-300 flex-shrink-0 sm:w-5 sm:h-5" />
                                        <span>{vehicleData.seats} Passengers</span>
                                    </div>
                                    <div className="flex items-center gap-2 backdrop-blur-md bg-white/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                                        <Fuel size={16} className="text-blue-300 flex-shrink-0 sm:w-5 sm:h-5" />
                                        <span>{vehicleData.fuel}</span>
                                    </div>
                                    <div className="flex items-center gap-2 backdrop-blur-md bg-white/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                                        <Gauge size={16} className="text-blue-300 flex-shrink-0 sm:w-5 sm:h-5" />
                                        <span>Automatic</span>
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
                                {/* Description Card */}
                                <div className="backdrop-blur-xl bg-white/60 border border-white/80 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-xl">
                                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                                        <div className="w-1.5 sm:w-2 h-6 sm:h-8 bg-blue-500 rounded-full"></div>
                                        About This Vehicle
                                    </h2>
                                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                                        {vehicleData.desc} Designed for ultimate comfort and safety on Sri Lankan roads. Whether you're traveling with family or a large group, this vehicle ensures a smooth journey with modern amenities and professional service.
                                    </p>
                                </div>

                                {/* Specifications */}
                                <div className="backdrop-blur-xl bg-white/60 border border-white/80 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-xl">
                                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                                        <div className="w-1.5 sm:w-2 h-6 sm:h-8 bg-blue-500 rounded-full"></div>
                                        Specifications
                                    </h2>
                                    <div className="grid grid-cols-3 gap-3 sm:gap-4">
                                        <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white text-center hover:border-blue-300 transition-all">
                                            <Users className="mx-auto text-blue-600 mb-2 sm:mb-3" size={28} />
                                            <span className="block font-bold text-gray-800 text-base sm:text-lg">{vehicleData.seats}</span>
                                            <span className="block text-gray-500 text-xs sm:text-sm mt-1">Passengers</span>
                                        </div>
                                        <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white text-center hover:border-blue-300 transition-all">
                                            <Fuel className="mx-auto text-blue-600 mb-2 sm:mb-3" size={28} />
                                            <span className="block font-bold text-gray-800 text-base sm:text-lg">{vehicleData.fuel}</span>
                                            <span className="block text-gray-500 text-xs sm:text-sm mt-1">Fuel Type</span>
                                        </div>
                                        <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white text-center hover:border-blue-300 transition-all">
                                            <Gauge className="mx-auto text-blue-600 mb-2 sm:mb-3" size={28} />
                                            <span className="block font-bold text-gray-800 text-base sm:text-lg">Auto</span>
                                            <span className="block text-gray-500 text-xs sm:text-sm mt-1">Transmission</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="backdrop-blur-xl bg-white/60 border border-white/80 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-xl">
                                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                                        <div className="w-1.5 sm:w-2 h-6 sm:h-8 bg-blue-500 rounded-full"></div>
                                        Premium Features
                                    </h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                        {[
                                            'Fully Air Conditioned',
                                            'Premium Bluetooth Audio System',
                                            'English Speaking Professional Driver',
                                            'Complimentary WiFi Hotspot',
                                            'Spacious Luggage Compartment',
                                            'USB Charging Ports',
                                            'Leather Seats',
                                            'GPS Navigation System'
                                        ].map((feature, i) => (
                                            <div
                                                key={i}
                                                className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/80 hover:border-blue-300 transition-all"
                                            >
                                                <CheckCircle size={18} className="text-blue-600 flex-shrink-0 sm:w-5 sm:h-5" />
                                                <span className="text-xs sm:text-sm md:text-base text-gray-700 font-medium">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Trust Badges */}
                                <div className="backdrop-blur-xl bg-white/60 border border-white/80 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-xl">
                                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                                        <div className="w-1.5 sm:w-2 h-6 sm:h-8 bg-blue-500 rounded-full"></div>
                                        Why Choose Us
                                    </h2>
                                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                        {[
                                            { icon: Shield, label: 'Fully Insured', color: 'blue' },
                                            { icon: Award, label: 'Top Rated', color: 'cyan' },
                                            { icon: Zap, label: 'Fast Booking', color: 'blue' },
                                            { icon: CheckCircle, label: 'Verified', color: 'cyan' }
                                        ].map((item, i) => (
                                            <div
                                                key={i}
                                                className="backdrop-blur-xl bg-white/60 border border-white/80 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-center"
                                            >
                                                <item.icon className={`mx-auto text-${item.color}-600 mb-2`} size={28} />
                                                <span className="block font-bold text-gray-800 text-xs sm:text-sm">{item.label}</span>
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
                                            <div className="text-3xl sm:text-4xl font-extrabold text-gray-900">{vehicleData.price}</div>
                                            <span className="text-gray-500 text-xs sm:text-sm">per kilometer</span>
                                        </div>
                                        <div className="bg-blue-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-bold shadow-lg">
                                            Best Value
                                        </div>
                                    </div>

                                    {/* Quick Info */}
                                    <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 p-4 sm:p-6 bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/80">
                                        <div className="flex items-center gap-2 sm:gap-3 text-gray-700 text-sm sm:text-base">
                                            <Users size={18} className="text-blue-600 flex-shrink-0 sm:w-5 sm:h-5" />
                                            <span className="font-medium">{vehicleData.seats} Passengers</span>
                                        </div>
                                        <div className="flex items-center gap-2 sm:gap-3 text-gray-700 text-sm sm:text-base">
                                            <Fuel size={18} className="text-blue-600 flex-shrink-0 sm:w-5 sm:h-5" />
                                            <span className="font-medium">{vehicleData.fuel} Engine</span>
                                        </div>
                                        <div className="flex items-center gap-2 sm:gap-3 text-gray-700 text-sm sm:text-base">
                                            <CheckCircle size={18} className="text-blue-600 flex-shrink-0 sm:w-5 sm:h-5" fill="currentColor" />
                                            <span className="font-medium">150+ Trips</span>
                                        </div>
                                    </div>

                                    {/* WhatsApp Booking Button */}
                                    <button
                                        onClick={handleWhatsAppBooking}
                                        className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg flex items-center justify-center gap-2 sm:gap-3 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 group"
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

export default VehicleDetail;