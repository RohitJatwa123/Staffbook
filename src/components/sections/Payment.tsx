import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

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

const featureImages = [
  "/images/staff10.jpg",
  "/images/staff11.jpg",
  "/images/staff12.jpg",
  "/images/staff13.jpg"
];

export const Payment = () => {
  const isMobile = useIsMobile();
  const [currentFeatureImage, setCurrentFeatureImage] = useState(0);

  // Auto-advance animation every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeatureImage((prev) => (prev + 1) % featureImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const featureMainDimensions = {
    width: isMobile ? "260px" : "320px",
    height: isMobile ? "480px" : "600px",
    roundedClass: isMobile ? "rounded-[1.5rem]" : "rounded-[3rem]",
    innerRoundedClass: isMobile ? "rounded-[1.3rem]" : "rounded-[2.5rem]"
  };

  const featureSecondaryDimensions = {
    width: isMobile ? "220px" : "280px",
    height: isMobile ? "420px" : "525px",
    roundedClass: isMobile ? "rounded-xl" : "rounded-[2.5rem]",
    innerRoundedClass: isMobile ? "rounded-lg" : "rounded-[2rem]"
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white py-0 sm:py-20">
      {/* Heading Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Easy and Fast Payment System
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
          Secure, seamless, and instant payments for your business needs. Multiple payment options to suit your preferences.
        </p>
      </div>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-7xl mx-auto"
      >
        <div className="container mx-auto px-2 sm:px-4 mt-0 sm:mt-8 mb-0 sm:mb-8">
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-12 lg:gap-24">
            {/* Previous Image Frame - Hide on small screens */}
            <motion.div
              className="relative flex-col items-center hidden md:flex"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 0.8, scale: 0.95 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div
                className={`bg-gradient-to-b from-black to-black ${featureSecondaryDimensions.roundedClass} p-[6px] shadow-lg flex flex-col items-center justify-center relative`}
                style={{ width: featureSecondaryDimensions.width, height: featureSecondaryDimensions.height }}
              >
                {/* Mobile Frame Design */}
                <div
                  className={`absolute top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-black to-black rounded-b-xl z-10`}
                  style={{ width: isMobile ? "100px" : "120px", height: isMobile ? "20px" : "25px" }}
                ></div>
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 bg-[#333] rounded-full z-10`}
                  style={{ top: isMobile ? "10px" : "12px", width: isMobile ? "40px" : "50px", height: isMobile ? "5px" : "6px" }}
                ></div>
                <div className={`w-full h-full ${featureSecondaryDimensions.innerRoundedClass} overflow-hidden relative bg-[#1a1a1a]`}>
                  <div className={`absolute inset-0 border-[0.2px] border-[#334155] ${featureSecondaryDimensions.innerRoundedClass}`}></div>
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentFeatureImage + "-prev"}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      src={featureImages[(currentFeatureImage - 1 + featureImages.length) % featureImages.length]}
                      alt="Previous Image"
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Current Image Frame (Highlighted) */}
            <motion.div
              className="relative flex flex-col items-center z-10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1.05 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFeatureImage + "-main"}
                  initial={{ opacity: 0, x: 100, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -100, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className={`bg-gradient-to-b from-black to-black ${featureMainDimensions.roundedClass} p-2 shadow-xl flex flex-col items-center justify-center relative`}
                  style={{ width: featureMainDimensions.width, height: featureMainDimensions.height }}
                >
                  {/* Mobile Frame Design */}
                  <div
                    className={`absolute top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-black to-black rounded-b-[1.5rem] z-10`}
                    style={{ width: isMobile ? "120px" : "150px", height: isMobile ? "24px" : "30px" }}
                  ></div>
                  <div
                    className={`absolute left-1/2 transform -translate-x-1/2 bg-[#333] rounded-full z-10`}
                    style={{ top: isMobile ? "12px" : "15px", width: isMobile ? "50px" : "60px", height: isMobile ? "6px" : "8px" }}
                  ></div>
                  <div className={`w-full h-full ${featureMainDimensions.innerRoundedClass} overflow-hidden relative bg-[#1a1a1a]`}>
                    <div className={`absolute inset-0 border-[0.2px] border-[#334155] ${featureMainDimensions.innerRoundedClass}`}></div>
                    <motion.img
                      key={currentFeatureImage + "-main-img"}
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                      src={featureImages[currentFeatureImage]}
                      alt="Current Image"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
              <div className="flex justify-center items-center gap-2 mt-4">
                {featureImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentFeatureImage(idx)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full border-2 transition-all duration-200 ${
                      currentFeatureImage === idx ? "bg-blue-600 border-blue-600" : "bg-transparent border-blue-600 hover:bg-blue-400"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Next Image Frame - Hide on small screens */}
            <motion.div
              className="relative flex-col items-center hidden md:flex"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 0.8, scale: 0.95 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div
                className={`bg-gradient-to-b from-black to-black ${featureSecondaryDimensions.roundedClass} p-[6px] shadow-lg flex flex-col items-center justify-center relative`}
                style={{ width: featureSecondaryDimensions.width, height: featureSecondaryDimensions.height }}
              >
                {/* Mobile Frame Design */}
                <div
                  className={`absolute top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-black to-black rounded-b-xl z-10`}
                  style={{ width: isMobile ? "100px" : "120px", height: isMobile ? "20px" : "25px" }}
                ></div>
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 bg-[#333] rounded-full z-10`}
                  style={{ top: isMobile ? "10px" : "12px", width: isMobile ? "40px" : "50px", height: isMobile ? "5px" : "6px" }}
                ></div>
                <div className={`w-full h-full ${featureSecondaryDimensions.innerRoundedClass} overflow-hidden relative bg-[#1a1a1a]`}>
                  <div className={`absolute inset-0 border-[0.2px] border-[#334155] ${featureSecondaryDimensions.innerRoundedClass}`}></div>
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentFeatureImage + "-next"}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      src={featureImages[(currentFeatureImage + 1) % featureImages.length]}
                      alt="Next Image"
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Payment Logos Section */}
        <div className="mt-16 text-center">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-8">
            Supported Payment Methods
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 px-4">
            <img src="/images/phone.jpeg" alt="PhonePe" className="h-8 md:h-10" />
            <img src="/images/goog.png" alt="Google Pay" className="h-8 md:h-10" />
            <img src="/images/paytm.jpeg" alt="Paytm" className="h-8 md:h-10" />
            <img src="/images/visa.jpeg" alt="Visa" className="h-8 md:h-10" />
            <img src="/images/mastercard.jpeg" alt="Mastercard" className="h-8 md:h-10" />
          </div>
        </div>
      </motion.section>
    </div>
  );
};