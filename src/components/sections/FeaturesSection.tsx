'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, MessageCircle, TrendingUp, UserCircle, Users } from 'lucide-react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const phoneRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      id: 0,
      title: "Live Chat",
      icon: <MessageCircle className="w-6 h-6" />,
      description: "Real-time communication with your team members. Stay connected and collaborate effectively.",
      image: "/images/staff3.jpg",
      color: "blue"
    },
    {
      id: 1,
      title: "nearby Jobs",
      icon: <MapPin className="w-6 h-6" />,
      description: "Track your team's location in real-time with our advanced mapping system.",
      image: "/images/staff5.jpg",
      color: "green"
    },
    {
      id: 2,
      title: "Marketing Analytics",
      icon: <TrendingUp className="w-6 h-6" />,
      description: "Comprehensive analytics and insights to boost your business performance.",
      image: "/images/staff4.jpg",
      color: "purple"
    },
    {
      id: 3,
      title: "Profile Management",
      icon: <UserCircle className="w-6 h-6" />,
      description: "Easy-to-use profile management system for your entire team.",
      image: "/images/staff6.jpg",
      color: "orange"
    },
    {
      id: 4,
      title: "Connections",
      icon: <Users className="w-6 h-6" />,
      description: "Build your professional network, connect with colleagues, and discover new opportunities.",
      image: "/images/staff7.jpg",
      color: "pink"
    }
  ];

  // Auto-rotate tabs
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % features.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [features.length]);

  // GSAP Animations for phone only
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Initial phone animation
    gsap.from(phoneRef.current, {
      scrollTrigger: {
        trigger: phoneRef.current,
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      scale: 0.8,
      rotateY: -15,
      duration: 1,
      ease: "power3.out"
    });

    // Create a floating animation
    gsap.to(phoneRef.current, {
      y: 15,
      duration: 1.6,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

  }, []);

  // Animation for tab changes
  useEffect(() => {
    if (phoneRef.current) {
      // Quick scale and rotate animation when changing tabs
      gsap.to(phoneRef.current, {
        scale: 0.95,
        rotateY: -5,
        duration: 0.2,
        ease: "power2.out",
        onComplete: () => {
          gsap.to(phoneRef.current, {
            scale: 1,
            rotateY: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        }
      });
    }
  }, [activeTab]);

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to manage your workforce effectively
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Vertical Tabs - No animations */}
          <div className="md:col-span-4 space-y-4">
            {features.map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => setActiveTab(index)}
                className={`w-full text-left p-6 rounded-xl transition-all duration-200 ${
                  activeTab === index
                    ? "bg-white shadow-lg"
                    : "hover:bg-white/50"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-${feature.color}-100 text-${feature.color}-600`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold mb-2 ${
                      activeTab === index ? `text-${feature.color}-600` : "text-gray-900"
                    }`}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Mobile Preview with enhanced animations */}
          <div className="md:col-span-8">
            <div className="relative flex justify-center perspective-1000">
              <div ref={phoneRef} className="relative w-[300px] h-[600px] transform-style-3d">
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
                        key={activeTab}
                        initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        exit={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="w-full h-full"
                      >
                        <div className="relative w-full h-full">
                          <Image
                            src={features[activeTab].image}
                            alt={features[activeTab].title}
                            fill
                            className="object-cover"
                            priority
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                {/* Enhanced Reflection Effect */}
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-[70%] h-[20px] bg-black/20 blur-xl rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 