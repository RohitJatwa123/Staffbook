'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Custom hook for mobile detection
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};

export const HeroSection = () => {
  const isMobile = useIsMobile();
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/images/staff1.jpg",
    "/images/staff2.jpg",
    "/images/staff9.jpg",
    "/images/staff8.jpg",
  ];

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev: number) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="py-16 md:py-24 bg-white relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #2563eb 2px, transparent 0)',
            backgroundSize: '32px 32px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative">
          {/* Hero Content */}
          <div className="order-2 md:order-1">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                type: "spring",
                stiffness: 100
              }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
            >
              StaffBook{" "}
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3,
                  type: "spring",
                  stiffness: 200,
                  damping: 10
                }}
                className="text-blue-600"
              >
                Made Simple
              </motion.span>
            </motion.h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              Streamline your workforce management with our comprehensive solution. Track performance, manage schedules, and boost productivity all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(37, 99, 235, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="gap-3 bg-blue-600 text-white border-none hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center"
              >
                <span className="flex items-center gap-2">
                  Get Started
                </span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="gap-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center"
              >
                Learn More
              </motion.button>
            </div>
            <div className="flex flex-wrap gap-6 items-center text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Easy Setup</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Real-time Updates</span>
              </div>
            </div>
          </div>

          {/* Hero Image with Mobile Frame */}
          <div className="order-1 md:order-2">
            <div className="relative flex justify-center">
              <div className="relative w-[280px] h-[580px]">
                {/* Phone Frame */}
                <div className="absolute inset-0 bg-gray-900 rounded-[3rem] shadow-xl">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120px] h-[25px] bg-gray-900 rounded-b-[1.5rem] z-10">
                    <div className="absolute top-[8px] left-1/2 transform -translate-x-1/2 w-[50px] h-[4px] bg-gray-800 rounded-full"></div>
                  </div>
                  {/* Power Button */}
                  <div className="absolute right-[-2px] top-[120px] w-[3px] h-[50px] bg-gray-800 rounded-l-lg"></div>
                  {/* Volume Buttons */}
                  <div className="absolute left-[-2px] top-[120px] w-[3px] h-[30px] bg-gray-800 rounded-r-lg"></div>
                  <div className="absolute left-[-2px] top-[160px] w-[3px] h-[30px] bg-gray-800 rounded-r-lg"></div>
                  
                  {/* Screen Content */}
                  <div className="absolute top-0 left-0 right-0 bottom-0 m-[12px] rounded-[2.5rem] overflow-hidden bg-white">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentImage}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full"
                      >
                        <img
                          src={images[currentImage]}
                          alt="Staff Management"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Image Navigation Dots */}
              <div className="absolute bottom-[-2rem] flex justify-center items-center gap-2">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      currentImage === idx
                        ? "bg-blue-600"
                        : "bg-gray-300 hover:bg-blue-400"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default HeroSection;
