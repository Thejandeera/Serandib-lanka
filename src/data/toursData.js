export const toursData = [
    // --- Category: Pickup ---
    {
        id: 1,
        category: "Pickup",
        title: "Airport to Any Destination",
        image: "/images/tours/airport-pickup.png", // Placeholder/Reuse existing
        location: "Airport / Any Location",
        rating: 5,
        type: "Taxi Service",
        desc: "Reliable airport transfer service to any destination in Sri Lanka. Comfortable vehicles and professional drivers.",
        destinations: [],
        nights: 0,
        pickup: "Airport or Any Location",
        drop: "Any Destination"
    },
    {
        id: 2,
        category: "Pickup",
        title: "City to City Transfer",
        image: "/images/tours/city-transfer.png",
        location: "Any Location",
        rating: 4.5,
        type: "Taxi Service",
        desc: "Hassle-free transfers between any two cities in Sri Lanka. Choose from our fleet of cars, vans, or buses.",
        destinations: [],
        nights: 0,
        pickup: "Any Location",
        drop: "Any Destination"
    },

    // --- Category: 1 Day Tours ---
    {
        id: 10,
        category: "1 Day Tours",
        title: "Sigiriya & Dambulla Day Tour",
        image: "/images/tours/sigiriya.png",
        location: "Sigiriya",
        rating: 5,
        type: "Day Tour",
        desc: "Visit the ancient Sigiriya Lion Rock and the Golden Temple of Dambulla in a single day.",
        pickup: "Airport or Any Location",
        nights: 0,
        destinations: [
            { id: 101, name: "Sigiriya Lion Rock", image: "/images/tours/sigiriya.png" },
            { id: 102, name: "Dambulla Cave Temple", image: "/images/tours/dambulla.png" }
        ]
    },
    {
        id: 11,
        category: "1 Day Tours",
        title: "Galle Fort & Coastal Day Tour",
        image: "/images/tours/galle.png",
        location: "Galle",
        rating: 5,
        type: "Day Tour",
        desc: "Explore the historic Galle Dutch Fort and relax on the beautiful southern beaches.",
        pickup: "Airport or Any Location",
        nights: 0,
        destinations: [
            { id: 103, name: "Galle Dutch Fort", image: "/images/tours/galle.png" },
            { id: 104, name: "Unawatuna Beach", image: "/images/tours/beach.png" },
            { id: 105, name: "Turtle Hatchery", image: "/images/tours/turtles.png" }
        ]
    },

    // --- Category: 2 Day Tours ---
    {
        id: 20,
        category: "2 Day Tours",
        title: "Kandy & Nuwara Eliya Escape",
        image: "/images/tours/nuwaraeliya.png",
        location: "Kandy / Nuwara Eliya",
        rating: 5,
        type: "Multi-Day Tour",
        desc: "Experience the culture of Kandy and the cool climate of the tea country.",
        pickup: "Airport or Any Location",
        nights: 1,
        destinations: [
            { id: 201, name: "Temple of the Tooth", image: "/images/tours/kandy.png" },
            { id: 202, name: "Peradeniya Botanical Gardens", image: "/images/tours/botanical.png" },
            { id: 203, name: "Tea Factory Visit", image: "/images/tours/tea.png" },
            { id: 204, name: "Gregory Lake", image: "/images/tours/lake.png" }
        ]
    },
    {
        id: 21,
        category: "2 Day Tours",
        title: "Yala Wildlife Adventure",
        image: "/images/tours/katharagama.png",
        location: "Yala",
        rating: 5,
        type: "Multi-Day Tour",
        desc: "A thrilling safari adventure in Yala National Park with an overnight stay.",
        pickup: "Airport or Any Location",
        nights: 1,
        destinations: [
            { id: 205, name: "Yala National Park Safari", image: "/images/tours/safari.png" },
            { id: 206, name: "Rawana Falls", image: "/images/tours/waterfall.png" }
        ]
    },

    // --- Category: More than 2 Day Tours ---
    {
        id: 30,
        category: "More than 2 Day Tours",
        title: "Complete Island Discovery",
        image: "/images/tours/ella.png",
        location: "Island Wide",
        rating: 5,
        type: "Extended Tour",
        desc: "The ultimate Sri Lankan experience covering heritage, beaches, wildlife, and mountains.",
        pickup: "Airport or Any Location",
        nights: 7,
        destinations: [
            { id: 301, name: "Anuradhapura Ancient City", image: "/images/tours/anuradhapura.png" },
            { id: 302, name: "Sigiriya & Polonnaruwa", image: "/images/tours/sigiriya.png" },
            { id: 303, name: "Kandy Cultural Show", image: "/images/tours/kandy.png" },
            { id: 304, name: "Ella Nine Arches Bridge", image: "/images/tours/ella.png" },
            { id: 305, name: "Mirissa Whale Watching", image: "/images/tours/mirissa.png" }
        ]
    },
    {
        id: 31,
        category: "More than 2 Day Tours",
        title: "Cultural Triangle & East Coast",
        image: "/images/tours/gampola.png",
        location: "Cultural Triangle / Trincomalee",
        rating: 4.8,
        type: "Extended Tour",
        desc: "Explore the rich history of the cultural triangle followed by relaxation on the pristine east coast beaches.",
        pickup: "Airport or Any Location",
        nights: 5,
        destinations: [
            { id: 306, name: "Polonnaruwa", image: "/images/tours/polonnaruwa.png" },
            { id: 307, name: "Trincomalee Beach", image: "/images/tours/trinco.png" },
            { id: 308, name: "Pigeon Island", image: "/images/tours/pigeon-island.png" }
        ]
    }
];
