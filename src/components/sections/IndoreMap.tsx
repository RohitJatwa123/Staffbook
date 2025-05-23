'use client';

import { motion } from 'framer-motion';
import { IoLocationOutline } from 'react-icons/io5';

export const IndoreMap = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 bg-white"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <IoLocationOutline className="text-5xl text-blue-600 mb-4 mx-auto" />
          <h2 className="text-3xl font-bold mb-6">Located in Indore</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Proudly based in the heart of Indore, serving businesses across the city and beyond.
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="relative rounded-xl overflow-hidden shadow-xl"
        >
          {/* Map placeholder - In production, replace with actual map integration */}
          <div className="aspect-w-16 aspect-h-9 bg-gray-100">
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="text-gray-400 mb-2">Map of Indore</div>
                <div className="text-sm text-gray-500">
                  Interactive map will be displayed here
                </div>
              </div>
            </div>
          </div>

          {/* Location markers */}
          <div className="absolute inset-0">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}; 