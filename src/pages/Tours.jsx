import React from 'react';
import { MapPin, Star, ChevronRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

// Shared Data
export const toursData = [
    { id: 1, image: "https://images.unsplash.com/photo-1570544820299-1fa11c6d1fc8?w=800", location: "Sigiriya, Sri Lanka", title: "Sigiriya Rock Fortress", rating: 5, price: "$299", days: "2 Days", desc: "Climb the ancient rock fortress and explore the water gardens." },
    { id: 2, image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800", location: "Gampola, Sri Lanka", title: "Ambuluwawa Tower", rating: 5, price: "$189", days: "1 Day", desc: "Experience biodiversity and breathtaking views from the tower." },
    { id: 3, image: "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=800", location: "Ella, Sri Lanka", title: "Upcountry Adventure", rating: 5, price: "$349", days: "3 Days", desc: "Ride the train, visit Nine Arches Bridge, and hike Little Adam's Peak." },
    { id: 4, image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800", location: "Katharagama, Sri Lanka", title: "Yala Safari Experience", rating: 5, price: "$399", days: "2 Days", desc: "Spot leopards and elephants in the wild." },
    { id: 5, image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800", location: "Galle, Sri Lanka", title: "Coastal Heritage", rating: 5, price: "$259", days: "2 Days", desc: "Walk the ramparts of the Dutch Fort and relax on the beach." },
    { id: 6, image: "https://images.unsplash.com/photo-1587974928442-77dc3e4dba72?w=800", location: "Nuwara Eliya, Sri Lanka", title: "Tea Trail Expedition", rating: 5, price: "$329", days: "3 Days", desc: "Visit tea factories and enjoy the cool climate." },
];

const Tours = () => {
    const navigate = useNavigate();

    const handleViewMore = (tourId) => {
        navigate(`/tour/${tourId}`);
    };

    return (<>
        <div className="min-h-screen bg-white relative overflow-hidden pt-16 sm:pt-20 md:pt-24">
            {/* Textured Background */}
            <div className="absolute top-0 left-0 w-full h-full z-0 opacity-5 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid-tours" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid-tours)" />
                </svg>
            </div>

            {/* Animated Blobs */}
            <div className="absolute top-20 left-[-10%] w-96 h-96 bg-lime-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob pointer-events-none"></div>
            <div className="absolute bottom-20 right-[-10%] w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000 pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20 z-0 pointer-events-none"></div>

            <Navbar />
            {/* Hero Section with Image */}
            <section className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[55vh]">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=1600"
                        alt="Sri Lanka Tours"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"></div>
                </div>
                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center text-white">
                    <div className="inline-flex items-center gap-2 mb-3 sm:mb-4 bg-white/10 backdrop-blur-md px-4 sm:px-6 py-1.5 sm:py-2 rounded-full border border-white/20">
                        <Sparkles size={14} className="text-lime-300 sm:w-4 sm:h-4" />
                        <span className="font-bold tracking-widest uppercase text-xs">Explore Sri Lanka</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-3 sm:mb-4 drop-shadow-lg px-4">
                        Embark on <span className="text-lime-300">Unforgettable</span> Journeys
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl drop-shadow-md px-4">
                        Welcome to Good Wing Tours, where dreams take flight and memories are born. Immerse yourself in the wonders of Sri Lanka with our meticulously crafted tours.
                    </p>
                </div>
            </section>

            {/* Tours Grid */}
            <section className="py-12 sm:py-16 md:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10 sm:mb-12 md:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 sm:mb-4 px-4">
                            Our Exclusive <span className="text-lime-600">Tours</span>
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl md:max-w-2xl mx-auto px-4">
                            Choose from our wide range of carefully curated experiences across Sri Lanka
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {toursData.map((tour, index) => (
                            <div
                                key={tour.id}
                                className="group relative"
                                style={{
                                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                                }}
                            >
                                <div className="relative h-full rounded-2xl sm:rounded-3xl backdrop-blur-xl bg-white/40 border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                    {/* Image Section */}
                                    <div className="relative h-48 sm:h-56 md:h-64 lg:h-72">
                                        <img
                                            src={tour.image}
                                            alt={tour.title}
                                            className="w-full h-full object-cover rounded-t-2xl sm:rounded-t-3xl transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                                        {/* Price Badge */}
                                        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/95 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg">
                                            <span className="font-bold text-lime-600 text-base sm:text-lg">{tour.price}</span>
                                        </div>

                                        {/* Days Badge */}
                                        <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-lime-500/90 backdrop-blur-sm text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold">
                                            {tour.days}
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4">
                                        <div className="flex items-center gap-2 text-gray-600 text-xs sm:text-sm">
                                            <MapPin size={14} className="text-lime-600 flex-shrink-0 sm:w-4 sm:h-4" />
                                            <span className="truncate">{tour.location}</span>
                                        </div>

                                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 group-hover:text-lime-600 transition-colors line-clamp-2">
                                            {tour.title}
                                        </h3>

                                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-2">
                                            {tour.desc}
                                        </p>

                                        {/* Rating */}
                                        <div className="flex items-center gap-1 text-yellow-500">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={14} fill="currentColor" className="sm:w-4 sm:h-4" />
                                            ))}
                                            <span className="text-gray-600 text-xs sm:text-sm ml-2">({tour.rating}.0)</span>
                                        </div>

                                        {/* View More Button */}
                                        <button
                                            onClick={() => handleViewMore(tour.id)}
                                            className="w-full bg-gradient-to-r from-lime-500 to-emerald-500 hover:from-lime-600 hover:to-emerald-600 text-white py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl group/btn"
                                        >
                                            View More
                                            <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform sm:w-[18px] sm:h-[18px]" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
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
        <Footer /></>
    );
};

export default Tours;