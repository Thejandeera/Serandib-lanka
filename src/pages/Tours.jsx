import React, { useState, useMemo, useEffect } from 'react';
import { MapPin, Star, ChevronRight, Sparkles, Filter, X, Calendar, Clock, Plane } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { toursData } from '../data/toursData';

const Tours = () => {
    const navigate = useNavigate();
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

    // Filter State
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [visibleCount, setVisibleCount] = useState(6);
    const [filters, setFilters] = useState({
        categories: [],
        rating: 0
    });

    const categories = ["Pickup", "1 Day Tours", "2 Day Tours", "More than 2 Day Tours"];

    // Reset visible count when filters change
    useEffect(() => {
        setVisibleCount(6);
    }, [filters, searchQuery, selectedCategory]);

    // Handlers
    const handleCategoryChange = (category) => {
        setFilters(prev => {
            const newCategories = prev.categories.includes(category)
                ? prev.categories.filter(c => c !== category)
                : [...prev.categories, category];
            return { ...prev, categories: newCategories };
        });
        setSelectedCategory('Custom'); // detailed filter is active
    };

    const handleTopCategoryClick = (cat) => {
        setSelectedCategory(cat);
        if (cat === 'All') {
            setFilters(prev => ({ ...prev, categories: [] }));
        } else {
            setFilters(prev => ({ ...prev, categories: [cat] }));
        }
    };

    const handleViewMore = (tourId) => {
        navigate(`/tour/${tourId}`);
    };

    // Filtering Logic
    const filteredTours = useMemo(() => {
        return toursData.filter(tour => {
            // Search Filter
            if (searchQuery) {
                const query = searchQuery.toLowerCase();
                const matchesTitle = tour.title.toLowerCase().includes(query);
                const matchesLocation = tour.location.toLowerCase().includes(query);
                const matchesDestinations = tour.destinations && tour.destinations.some(d => d.name.toLowerCase().includes(query));

                if (!matchesTitle && !matchesLocation && !matchesDestinations) {
                    return false;
                }
            }

            // Category Filter
            if (filters.categories.length > 0 && !filters.categories.includes(tour.category)) {
                return false;
            }
            // Rating Filter (if implemented in future, generic placeholder)
            if (tour.rating < filters.rating) {
                return false;
            }
            return true;
        });
    }, [filters, searchQuery]);

    return (
        <div className="min-h-screen bg-white relative overflow-clip pt-16 sm:pt-20 md:pt-24">
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

            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[50vh]">
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
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12 sm:py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
                        {/* Top Category Tabs */}
                        <div className="flex flex-wrap justify-center md:justify-start gap-3 flex-1">
                            {['All', ...categories].map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => handleTopCategoryClick(cat)}
                                    className={`px-4 sm:px-6 py-2 rounded-full font-bold text-sm sm:text-base transition-all duration-300 border-2 ${selectedCategory === cat
                                        ? 'bg-lime-600 text-white border-lime-600 shadow-lg scale-105'
                                        : 'bg-white text-gray-600 border-gray-200 hover:border-lime-500 hover:text-lime-600'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Search Bar */}
                        <div className="w-full md:w-auto relative">
                            <input
                                type="text"
                                placeholder="Search tours..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full md:w-80 pl-10 pr-4 py-2 rounded-full border-2 border-gray-200 focus:border-lime-500 focus:outline-none transition-colors"
                            />
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Filter Toggle */}
                    <div className="lg:hidden mb-6">
                        <button
                            onClick={() => setIsMobileFilterOpen(true)}
                            className="flex items-center gap-2 bg-lime-600 text-white px-4 py-2 rounded-lg font-bold shadow-md hover:bg-lime-700 transition"
                        >
                            <Filter size={18} /> Filters
                        </button>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                        {/* Sidebar Filters */}
                        <div className={`
                            fixed inset-0 z-50 bg-white 
                            lg:sticky lg:top-36 lg:z-auto lg:w-1/4
                            transform transition-transform duration-300 ease-in-out
                            ${isMobileFilterOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                            lg:block
                        `}>
                            <div className="h-full lg:h-auto overflow-y-auto lg:overflow-visible p-6 lg:p-0 bg-white lg:bg-transparent">
                                {/* Mobile Close Button */}
                                <div className="flex justify-between items-center lg:hidden mb-6">
                                    <h2 className="text-2xl font-bold">Filters</h2>
                                    <button onClick={() => setIsMobileFilterOpen(false)} className="p-2 bg-gray-100 rounded-full">
                                        <X size={24} />
                                    </button>
                                </div>

                                <div className="space-y-8 bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-lg border-2 border-gray-200">
                                    {/* Category Filter */}
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                            <Filter size={18} className="text-lime-600" /> Categories
                                        </h3>
                                        <div className="space-y-2">
                                            {categories.map(cat => (
                                                <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                                                    <div className="relative flex items-center">
                                                        <input
                                                            type="checkbox"
                                                            checked={filters.categories.includes(cat)}
                                                            onChange={() => handleCategoryChange(cat)}
                                                            className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 shadow-sm checked:border-lime-500 checked:bg-lime-500 hover:border-lime-400 transition-all"
                                                        />
                                                        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 pointer-events-none">
                                                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </span>
                                                    </div>
                                                    <span className="text-gray-700 group-hover:text-lime-600 transition-colors">{cat}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Rating Filter */}
                                    <div className="pt-6 border-t border-gray-100">
                                        <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                            <Star size={18} className="text-lime-600" /> Rating
                                        </h3>
                                        <div className="space-y-2">
                                            {[5, 4, 3].map((rating) => (
                                                <label key={rating} className="flex items-center gap-3 cursor-pointer group">
                                                    <div className="relative flex items-center">
                                                        <input
                                                            type="radio"
                                                            name="rating"
                                                            checked={filters.rating === rating}
                                                            onChange={() => setFilters(prev => ({ ...prev, rating }))}
                                                            className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-gray-300 shadow-sm checked:border-lime-500 checked:bg-lime-500 hover:border-lime-400 transition-all"
                                                        />
                                                        <div className="absolute inset-0 rounded-full ring-2 ring-lime-500 ring-opacity-0 peer-checked:ring-opacity-50 transition-all"></div>
                                                        <div className="absolute inset-0 flex items-center justify-center">
                                                            <div className="w-2 h-2 bg-white rounded-full opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2 group-hover:text-lime-600 transition-colors">
                                                        <div className="flex">
                                                            {[...Array(5)].map((_, i) => (
                                                                <Star
                                                                    key={i}
                                                                    size={14}
                                                                    className={i < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}
                                                                />
                                                            ))}
                                                        </div>
                                                        <span className="text-sm text-gray-600 ml-1">
                                                            {rating === 5 ? '5 Stars' : `${rating} Stars & Up`}
                                                        </span>
                                                    </div>
                                                </label>
                                            ))}
                                            <label className="flex items-center gap-3 cursor-pointer group">
                                                <div className="relative flex items-center">
                                                    <input
                                                        type="radio"
                                                        name="rating"
                                                        checked={filters.rating === 0}
                                                        onChange={() => setFilters(prev => ({ ...prev, rating: 0 }))}
                                                        className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-gray-300 shadow-sm checked:border-lime-500 checked:bg-lime-500 hover:border-lime-400 transition-all"
                                                    />
                                                    <div className="absolute inset-0 rounded-full ring-2 ring-lime-500 ring-opacity-0 peer-checked:ring-opacity-50 transition-all"></div>
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <div className="w-2 h-2 bg-white rounded-full opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                                                    </div>
                                                </div>
                                                <span className="text-gray-700 group-hover:text-lime-600 transition-colors">Any Rating</span>
                                            </label>
                                        </div>
                                    </div>

                                    {/* Mobile Apply Button */}
                                    <div className="lg:hidden mt-8">
                                        <button
                                            onClick={() => setIsMobileFilterOpen(false)}
                                            className="w-full bg-black text-white py-3 rounded-xl font-bold"
                                        >
                                            Show {filteredTours.length} Tours
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tours Grid */}
                        <div className="w-full lg:w-3/4">
                            <div className="text-gray-500 mb-6 text-sm">
                                Showing {Math.min(visibleCount, filteredTours.length)} of {filteredTours.length} tours
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                                {filteredTours.slice(0, visibleCount).map((tour, index) => (
                                    <div
                                        key={tour.id}
                                        className="group relative h-full"
                                    >
                                        <div className="relative h-full flex flex-col rounded-2xl sm:rounded-3xl backdrop-blur-xl bg-white/40 border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                            {/* Image Section */}
                                            <div
                                                className="relative h-56 sm:h-64 bg-gray-100 flex-shrink-0 cursor-pointer"
                                                onClick={() => handleViewMore(tour.id)}
                                            >
                                                <img
                                                    src={tour.image}
                                                    alt={tour.title}
                                                    className="w-full h-full object-cover rounded-t-2xl sm:rounded-t-3xl transform group-hover:scale-110 transition-transform duration-700"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                                                {/* Category Badge */}
                                                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg text-xs font-bold text-black border border-gray-100">
                                                    {tour.category}
                                                </div>
                                            </div>

                                            {/* Content Section */}
                                            <div className="p-6 flex flex-col flex-grow">
                                                <div className="flex items-center gap-2 text-lime-600 text-xs uppercase font-bold tracking-wider mb-2">
                                                    <MapPin size={14} />
                                                    <span className="truncate">{tour.location}</span>
                                                </div>

                                                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-1 group-hover:text-lime-600 transition-colors">
                                                    {tour.title}
                                                </h3>

                                                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-4 flex-grow">
                                                    {tour.desc}
                                                </p>

                                                <div className="grid grid-cols-2 gap-3 mb-6">
                                                    {tour.category === "Pickup" ? (
                                                        <>
                                                            <div className="flex items-center gap-2 text-gray-600 bg-gray-50 p-2 rounded-lg">
                                                                <Plane size={14} className="text-lime-600" />
                                                                <div className="flex flex-col">
                                                                    <span className="text-[10px] uppercase font-bold text-gray-400">Pickup</span>
                                                                    <span className="text-xs font-semibold truncate w-24">{tour.pickup}</span>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-center gap-2 text-gray-600 bg-gray-50 p-2 rounded-lg">
                                                                <MapPin size={14} className="text-lime-600" />
                                                                <div className="flex flex-col">
                                                                    <span className="text-[10px] uppercase font-bold text-gray-400">Drop</span>
                                                                    <span className="text-xs font-semibold truncate w-24">{tour.drop}</span>
                                                                </div>
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <div className="flex items-center gap-2 text-gray-600 bg-gray-50 p-2 rounded-lg">
                                                                <Calendar size={14} className="text-lime-600" />
                                                                <div className="flex flex-col">
                                                                    <span className="text-[10px] uppercase font-bold text-gray-400">Duration</span>
                                                                    <span className="text-xs font-semibold">{tour.nights} Nights</span>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-center gap-2 text-gray-600 bg-gray-50 p-2 rounded-lg">
                                                                <Clock size={14} className="text-lime-600" />
                                                                <div className="flex flex-col">
                                                                    <span className="text-[10px] uppercase font-bold text-gray-400">Destinations</span>
                                                                    <span className="text-xs font-semibold">{tour.destinations.length} Stops</span>
                                                                </div>
                                                            </div>
                                                        </>
                                                    )}
                                                </div>

                                                <button
                                                    onClick={() => handleViewMore(tour.id)}
                                                    className="w-full bg-black hover:bg-lime-600 text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-lg"
                                                >
                                                    View Details <ChevronRight size={16} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Load More Button */}
                            {visibleCount < filteredTours.length && (
                                <div className="mt-12 text-center">
                                    <button
                                        onClick={() => setVisibleCount(prev => prev + 6)}
                                        className="px-8 py-3 bg-white border-2 border-gray-200 text-gray-900 rounded-full font-bold hover:bg-lime-50 hover:border-lime-500 hover:text-lime-700 transition-all duration-300 shadow-sm hover:shadow-md"
                                    >
                                        Load More Tours
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Tours;