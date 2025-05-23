'use client';

import { motion } from 'framer-motion';
import { IoCamera } from 'react-icons/io5';

export const ScreenshotMonitoring = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-16 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ x: -50 }}
          whileInView={{ x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          <div className="flex-1">
            <IoCamera className="text-5xl text-blue-600 mb-4" />
            <h2 className="text-3xl font-bold mb-6">Screenshot Monitoring</h2>
            <p className="text-gray-600 mb-8">
              Automatically capture and track work progress with our intelligent screenshot monitoring system. 
              Ensure productivity and maintain transparency across your remote teams with scheduled captures 
              and secure storage.
            </p>
          </div>
          
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.4 }}
            className="flex-1"
          >
            {/* Placeholder for screenshot interface */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="aspect-w-4 aspect-h-3 bg-gray-200">
                <div className="flex items-center justify-center h-full text-gray-400">
                  Screenshot Interface
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}; 