import React from 'react';
import { Car, Bus, Sparkles, ChevronRight, Users, Fuel, Gauge } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { vehiclesData } from '../data/vehiclesData';

const Vehicles = () => {
    const navigate = useNavigate();

    const handleViewMore = (vehicleId) => {
        navigate(`/vehicle/${vehicleId}`);
    };

    return (<>
        <div className="min-h-screen bg-white relative overflow-hidden pt-16 sm:pt-20 md:pt-24">
            {/* Textured Background */}
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

            {/* Animated Blobs */}
            <div className="absolute top-20 left-[-10%] w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob pointer-events-none"></div>
            <div className="absolute bottom-20 right-[-10%] w-96 h-96 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000 pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20 z-0 pointer-events-none"></div>

            <Navbar />
            {/* Hero Section with Image */}
            <section className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[55vh]">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1600"
                        alt="Our Fleet"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"></div>
                </div>
                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center text-white">
                    <div className="inline-flex items-center gap-2 mb-3 sm:mb-4 bg-white/10 backdrop-blur-md px-4 sm:px-6 py-1.5 sm:py-2 rounded-full border border-white/20">
                        <Sparkles size={14} className="text-blue-300 sm:w-4 sm:h-4" />
                        <span className="font-bold tracking-widest uppercase text-xs">Premium Fleet</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-3 sm:mb-4 drop-shadow-lg px-4">
                        Travel in <span className="text-blue-300">Comfort</span> & Style
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl drop-shadow-md px-4">
                        Whether you seek adrenaline-pumping escapades or tranquil getaways, we have the perfect ride for you. Travel with our diverse fleet of well-maintained vehicles.
                    </p>
                </div>
            </section>

            {/* Vehicles Grid */}
            <section className="py-12 sm:py-16 md:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10 sm:mb-12 md:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 sm:mb-4 px-4">
                            Choose Your <span className="text-blue-600">Ride</span>
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl md:max-w-2xl mx-auto px-4">
                            From luxury sedans to spacious buses, find the perfect vehicle for your journey
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {vehiclesData.map((vehicle, index) => {
                            const Icon = vehicle.type === 'Bus' ? Bus : Car;
                            return (
                                <div
                                    key={vehicle.id}
                                    className="group relative"
                                    style={{
                                        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                                    }}
                                >
                                    <div className="relative h-full rounded-2xl sm:rounded-3xl backdrop-blur-xl bg-white/40 border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                        {/* Image Section with Gradient Background */}
                                        <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 bg-gradient-to-br from-blue-100 to-cyan-100">
                                            <img
                                                src={vehicle.image}
                                                alt={vehicle.title}
                                                className="w-full h-full object-cover rounded-t-2xl sm:rounded-t-3xl transform group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                                            {/* Badge */}
                                            <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-blue-500/90 backdrop-blur-sm text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
                                                {vehicle.badge}
                                            </div>

                                            {/* Price Badge */}
                                            <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/95 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg">
                                                <span className="font-bold text-blue-600 text-xs sm:text-sm">{vehicle.price}<span className="text-xs text-gray-500">/km</span></span>
                                            </div>
                                        </div>

                                        {/* Content Section */}
                                        <div className="p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4">
                                            <div className="flex items-center gap-2 text-blue-600 text-xs uppercase font-bold tracking-wider">
                                                <Icon size={14} className="sm:w-4 sm:h-4" />
                                                <span>{vehicle.type}</span>
                                            </div>

                                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                                                {vehicle.title}
                                            </h3>

                                            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-2">
                                                {vehicle.desc}
                                            </p>

                                            {/* Specs */}
                                            <div className="grid grid-cols-3 gap-2 sm:gap-3 py-2 sm:py-3">
                                                <div className="flex flex-col items-center p-2 sm:p-3 bg-white/60 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/80">
                                                    <Users size={18} className="text-blue-600 mb-1 sm:w-5 sm:h-5" />
                                                    <span className="text-xs font-bold text-gray-700">{vehicle.seats}</span>
                                                </div>
                                                <div className="flex flex-col items-center p-2 sm:p-3 bg-white/60 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/80">
                                                    <Fuel size={18} className="text-blue-600 mb-1 sm:w-5 sm:h-5" />
                                                    <span className="text-xs font-bold text-gray-700">{vehicle.fuel}</span>
                                                </div>
                                                <div className="flex flex-col items-center p-2 sm:p-3 bg-white/60 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/80">
                                                    <Gauge size={18} className="text-blue-600 mb-1 sm:w-5 sm:h-5" />
                                                    <span className="text-xs font-bold text-gray-700">Auto</span>
                                                </div>
                                            </div>

                                            {/* View More Button */}
                                            <button
                                                onClick={() => handleViewMore(vehicle.id)}
                                                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl group/btn"
                                            >
                                                View More
                                                <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform sm:w-[18px] sm:h-[18px]" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
        <Footer />
    </>
    );
};

export default Vehicles;