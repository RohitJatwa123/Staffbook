'use client';

import { motion } from 'framer-motion';
import { IoApps } from 'react-icons/io5';

export const SimpleInterface = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <IoApps className="text-5xl text-blue-600 mb-4 mx-auto" />
          <h2 className="text-3xl font-bold mb-6">Simple & Intuitive Interface</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Navigate through your tasks effortlessly with our clean and intuitive interface. 
            Designed for simplicity without compromising on functionality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {['Dashboard', 'Tasks', 'Reports'].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                <div className="flex items-center justify-center h-full text-gray-400">
                  {item} View
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item}</h3>
                <p className="text-gray-600">
                  Access your {item.toLowerCase()} with just a few clicks
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}; 