"use client";

import SimpleLayout from '@/app/components/SimpleLayout';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Data produk
const products = [
    {
        title: '1. Drone-Assisted Precision Farming',
        description: 'Our drone is equipped with a 7-in-1 NPK sensor and a precision spraying system for water and fertilizer, promoting agricultural innovation and reducing waste.',
        image: '/agrisync-drone.png',
        alt: 'AgriSync Drone',
        silhouetteImage: '/sdg-9.png',
        silhouetteText: 'Encouraging innovation in agriculture through new technology.'
    },
    {
        title: '2. Real-time Soil & Climate Monitoring',
        description: 'We use a solar-powered weather station to monitor key soil and climate conditions in real time, helping farmers make informed decisions in the face of climate change.',
        image: '/agrisync-weather-station.jpg',
        alt: 'AgriSync Weather Station',
        silhouetteImage: '/sdg-13.png',
        silhouetteText: 'Aiding farmers in climate action and building resilience.'
    },
    {
        title: '3. AI Decision Support System',
        description: 'All data collected by our sensors is processed by our AI algorithms. The results are displayed on an intuitive web-app interface, providing precise irrigation and fertilization recommendations.',
        image: '/agrisync-webapp.png',
        alt: 'AgriSync Monitoring Web-App',
        silhouetteImage: '/sdg-12.png',
        silhouetteText: 'Supporting responsible consumption of resources with AI guidance.'
    }
];

// Data milestones dengan gambar
const milestonesData = [
    { 
        year: '2023', 
        q1: 'Q1-Q2: Accepted in PKM Funding, research and prototype development.', 
        q3: 'Q3-Q4: Prototype improvement, initial trials with farming communities.',
    },
    { 
        year: '2024', 
        q1: 'Q1-Q2: Continuation of PKM program, refinement of prototype.', 
        q3: 'Q3-Q4: Foundation for MVP, preparation for external funding.',
    },
    { 
        year: '2025', 
        q1: 'Q1-Q2: Join Pertamina Seed & Scale, acceleration program begins.', 
        q3: 'Q3-Q4: Product standardization, collaboration with industrial partners, strengthening branding.',
    },
    { 
        year: '2026', 
        q1: 'Q1-Q2: Expansion into regional markets.', 
        q3: 'Q3-Q4: Partnerships with government and private sector.',
    },
    { 
        year: '2027', 
        q1: 'Q1-Q2: Scaling up towards sustainability.', 
        q3: 'Q3-Q4: Integration with national climate-smart agriculture programs.',
    },
    { 
        year: '2028', 
        q1: 'Q1-Q2: Product and service diversification based on AI-HortiScape (carbon monitoring, green certification tools).', 
        q3: 'Q3-Q4: Global expansion and integration into the international carbon trading market.',
    }
];

const AboutPage = () => {
    const [currentProductIndex, setCurrentProductIndex] = useState(0);
    const [selectedYear, setSelectedYear] = useState('2023');
    const currentProduct = products[currentProductIndex];
    const selectedMilestone = milestonesData.find(m => m.year === selectedYear);

    const goToPrevious = () => {
        const isFirstSlide = currentProductIndex === 0;
        const newIndex = isFirstSlide ? products.length - 1 : currentProductIndex - 1;
        setCurrentProductIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentProductIndex === products.length - 1;
        const newIndex = isLastSlide ? 0 : currentProductIndex + 1;
        setCurrentProductIndex(newIndex);
    };

    return (
        <SimpleLayout>
            {/* Header yang lebih besar dengan latar belakang gambar */}
            <div
                className="relative bg-cover bg-center h-96 flex items-center justify-center text-white"
                style={{ backgroundImage: "url('/agri-bg.jpg')" }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative text-center">
                    <h3 className="text-5xl md:text-7xl font-extrabold">About AgriSync</h3>
                    <p className="text-xl md:text-2xl mt-4 max-w-3xl mx-auto">
                        AgriSync is a startup aimed at advancing agriculture through smart technology solutions. We merge innovations in IoT, AI, and data science to create tools that empower farmers.
                    </p>
                </div>
            </div>

            {/* Konten halaman yang lain */}
            <div className="bg-white p-8 rounded-xl shadow-md -mt-16 mx-auto relative z-10">

                {/* 1. Video Profile */}
                <div id="video-profile" className="my-10 mx-auto max-w-3xl">
                    <div className="relative w-full overflow-hidden rounded-xl shadow-lg" style={{ paddingTop: '56.25%' }}>
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://youtu.be/d4FRslsrcgo?si=-OyZTT6aCgjHMlPB"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                {/* 2. Our Mission (The "Why") */}
                <div id="our-mission" className="my-20">
                    <h4 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Mission & Vision</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="md:order-2">
                            <p className="text-2xl text-gray-600 mb-4">
                                We founded AgriSync to address critical challenges in the agricultural sector. Climate change, which leads to droughts and shifting rainfall patterns, along with the emergence of pests, has significantly lowered agricultural productivity. Furthermore, excessive use of fertilizers like Urea and NPK contributes to N2O gas emissions, accounting for 7.72% of the sector&apos;s greenhouse gas emissions.
                            </p>
                            <p className="text-2xl text-gray-600">
                                While technology offers a solution, 53.16% of Indonesian farmers still lack a solid understanding of agricultural technology as of 2023. AgriSync is here to bridge this gap by providing an affordable and user-friendly tech solution for all farmers. Our mission is to empower farmers with precision tools to boost yields and reduce environmental impact.
                            </p>
                            <p className="text-2xl text-gray-600">
                                Our goals are to reduce N2O emissions by 10% through precision fertilizer application, increase crop productivity by 15% per hectare with AI-driven monitoring, and boost adoption of precision agriculture by 20% among farmers within five years.
                            </p>
                        </div>
                        <div className="md:order-1">
                            <Image src="/documentation-team.jpg" alt="AgriSync Team Documentation" width={700} height={400} className="w-full h-auto rounded-xl shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-500" />
                        </div>
                    </div>
                </div>
                
                {/* 3. Our Solutions (Split Boxes) */}
                <div id="our-solutions" className="my-20">
                    <h4 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Solutions</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Box 1: National Strategic Program */}
                        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 text-center transform hover:scale-105 transition-transform duration-300">
                            <div className="flex justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-green-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.5l1.474-1.474m0 0l2.67-2.67m-2.67 2.67L7.144 14.1m-2.67 2.67L4.474 15.688M12 21a9 9 0 110-18 9 9 0 010 18zm0-16.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                </svg>
                            </div>
                            <h5 className="text-2xl font-bold text-gray-800 mb-4">Aligned with National Strategic Programs</h5>
                            <ul className="space-y-4 text-xl text-gray-700 text-left">
                                <li className="flex items-start space-x-3">
                                    <span className="text-green-600 font-bold text-2xl">•</span>
                                    <span>Food, Energy, and Water Self-Sufficiency: Our technology increases crop productivity, contributing to food self-sufficiency.</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="text-green-600 font-bold text-2xl">•</span>
                                    <span>Industrial Downstreaming: By providing technology-driven solutions, we support the industrial down-stream of the agricultural sector.</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="text-green-600 font-bold text-2xl">•</span>
                                    <span>Human Development: We empower farmers with knowledge and tools, enabling human development in rural areas.</span>
                                </li>
                            </ul>
                        </div>
                        {/* Box 2: SDGs */}
                        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 text-center transform hover:scale-105 transition-transform duration-300">
                            <div className="flex justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-blue-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.75a9.75 9.75 0 01-7.868-3.921 9.75 9.75 0 010-11.658 9.75 9.75 0 0115.736 0 9.75 9.75 0 010 11.658A9.75 9.75 0 0112 21.75zM12 12a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                </svg>
                            </div>
                            <h5 className="text-2xl font-bold text-gray-800 mb-4">Contributing to Sustainable Development Goals (SDGs)</h5>
                            <ul className="space-y-4 text-left">
                                <li className="flex items-center space-x-3 text-xl text-gray-700">
                                    <Image src="/sdg-8.png" alt="SDG 8" width={40} height={40} className="h-10 w-10" />
                                    <span>SDG #8: Decent Work and Economic Growth. Our platform provides knowledge for farmers, enabling decent work.</span>
                                </li>
                                <li className="flex items-center space-x-3 text-xl text-gray-700">
                                    <Image src="/sdg-9.png" alt="SDG 9" width={40} height={40} className="h-10 w-10" />
                                    <span>SDG #9: Industry, Innovation, and Infrastructure. We encourage innovation in agriculture with our drone technology.</span>
                                </li>
                                <li className="flex items-center space-x-3 text-xl text-gray-700">
                                    <Image src="/sdg-12.png" alt="SDG 12" width={40} height={40} className="h-10 w-10" />
                                    <span>SDG #12: Responsible Consumption and Production. Our AI system guides accurate resource use, supporting responsible consumption.</span>
                                </li>
                                <li className="flex items-center space-x-3 text-xl text-gray-700">
                                    <Image src="/sdg-13.png" alt="SDG 13" width={40} height={40} className="h-10 w-10" />
                                    <span>SDG #13: Climate Action. Our solar-powered weather station helps farmers prepare for climate action and resilience.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 4. Our Products (Full-screen slide) */}
                <div id="our-products" className="my-20">
                    <h4 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Products</h4>
                    <div className="relative bg-gray-50 p-8 rounded-xl shadow-lg flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-16 mx-auto max-w-5xl">
                        {/* Product Image */}
                        <div className="md:w-1/2 flex justify-center">
                            <Image src={currentProduct.image} alt={currentProduct.alt} width={500} height={500} className="w-full h-auto object-contain rounded-xl shadow-md" />
                        </div>
                        {/* Product Description */}
                        <div className="md:w-1/2 p-4 text-center md:text-left relative">
                            <div className="absolute top-0 right-0 -mr-16 -mt-8 hidden md:block z-0">
                                <Image src={currentProduct.silhouetteImage} alt="Silhouette" width={128} height={128} className="w-32 h-32 opacity-20" />
                                <p className="mt-2 text-sm text-gray-500 max-w-[120px]">{currentProduct.silhouetteText}</p>
                            </div>
                            <h5 className="text-3xl font-bold text-gray-800 mb-4 relative z-10">{currentProduct.title}</h5>
                            <p className="text-xl text-gray-600 relative z-10">{currentProduct.description}</p>
                        </div>
                        
                        {/* Tombol Navigasi */}
                        <button onClick={goToPrevious} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 z-20 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button onClick={goToNext} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 z-20 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* 5. Our People (Team Background) */}
                <div id="our-people" className="my-20">
                    <h4 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Founding Team</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="p-8 bg-gray-50 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
                            <Image src="/billy-foto.jpg" alt="Billy Natanael" width={128} height={128} className="w-32 h-32 mx-auto rounded-full object-cover mb-4" />
                            <div className="text-center">
                                <h5 className="text-2xl font-bold text-gray-900">Billy Natanael</h5>
                                <p className="text-lg text-green-600 font-semibold">CFO</p>
                                <p className="mt-2 text-md text-gray-600">
                                    2nd Place, Business Plan and Pitching Competition at Digital Business Fest UPNVYK 2024.
                                </p>
                            </div>
                        </div>
                        <div className="p-8 bg-gray-50 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
                            <Image src="/dzaky-foto.jpg" alt="Muhammad Dzaky Alfarizti" width={128} height={128} className="w-32 h-32 mx-auto rounded-full object-cover mb-4" />
                            <div className="text-center">
                                <h5 className="text-2xl font-bold text-gray-900">Muhammad Dzaky A.</h5>
                                <p className="text-lg text-green-600 font-semibold">CEO</p>
                                <p className="mt-2 text-md text-gray-600">
                                    Invited Presenter at the International Conference of Integrated Intellectual Community (ICONIC), Germany.
                                </p>
                            </div>
                        </div>
                        <div className="p-8 bg-gray-50 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
                            <Image src="/iqbal-foto.jpg" alt="Muhammad Ikbal" width={128} height={128} className="w-32 h-32 mx-auto rounded-full object-cover mb-4" />
                            <div className="text-center">
                                <h5 className="text-2xl font-bold text-gray-900">Muhammad Ikbal</h5>
                                <p className="text-lg text-green-600 font-semibold">CMO</p>
                                <p className="mt-2 text-md text-gray-600">
                                    Bronze Medal at PIMNAS 37, &quot;Karsa Cipta&quot; Category from Kemendikbudristek.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* 6. Strategic Milestone (Interactive) */}
                <div id="our-milestone" className="my-20">
                    <h4 className="text-3xl font-bold text-gray-800 mb-8 text-center">Strategic Milestones</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                        {/* Tombol Tahun */}
                        <div className="p-4 bg-gray-50 rounded-xl shadow-lg border-l-4 border-green-600">
                            {milestonesData.map((milestone) => (
                                <button
                                    key={milestone.year}
                                    onClick={() => setSelectedYear(milestone.year)}
                                    className={`w-full text-left p-3 my-1 rounded-lg transition-colors duration-200 ${
                                        selectedYear === milestone.year ? 'bg-green-100 text-green-800 font-bold' : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                                >
                                    {milestone.year}
                                </button>
                            ))}
                        </div>
                        {/* Penjelasan Milestone */}
                        <div className="md:col-span-2 space-y-8">
                            <div className="p-6 bg-green-50 rounded-xl shadow-lg border border-green-200">
                                <h5 className="text-2xl font-bold text-gray-800 mb-2">Q1-Q2:</h5>
                                <p className="text-xl text-gray-700">{selectedMilestone?.q1}</p>
                            </div>
                            <div className="p-6 bg-green-50 rounded-xl shadow-lg border border-green-200">
                                <h5 className="text-2xl font-bold text-gray-800 mb-2">Q3-Q4:</h5>
                                <p className="text-xl text-gray-700">{selectedMilestone?.q3}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Navigation */}
            <div className="mt-12 text-center">
                <h4 className="text-2xl font-semibold text-gray-800 mb-4">Explore More</h4>
                <div className="flex flex-wrap justify-center space-x-4">
                    <Link href="#our-mission" className="text-gray-600 hover:text-green-600 font-medium text-lg px-4 py-2 rounded-lg transition-colors">
                        Our Mission
                    </Link>
                    <Link href="#our-solutions" className="text-gray-600 hover:text-green-600 font-medium text-lg px-4 py-2 rounded-lg transition-colors">
                        Our Solutions
                    </Link>
                    <Link href="#our-products" className="text-gray-600 hover:text-green-600 font-medium text-lg px-4 py-2 rounded-lg transition-colors">
                        Our Products
                    </Link>
                    <Link href="#video-profile" className="text-gray-600 hover:text-green-600 font-medium text-lg px-4 py-2 rounded-lg transition-colors">
                        Video Profile
                    </Link>
                    <Link href="#our-people" className="text-gray-600 hover:text-green-600 font-medium text-lg px-4 py-2 rounded-lg transition-colors">
                        Our Team
                    </Link>
                    <Link href="#our-milestone" className="text-gray-600 hover:text-green-600 font-medium text-lg px-4 py-2 rounded-lg transition-colors">
                        Milestones
                    </Link>
                </div>
            </div>
        </SimpleLayout>
    );
};

export default AboutPage;