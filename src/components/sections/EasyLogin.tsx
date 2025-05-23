'use client';

import { motion } from 'framer-motion';
import { IoLogInOutline } from 'react-icons/io5';

export const EasyLogin = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <motion.div
            initial={{ x: 50 }}
            whileInView={{ x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex-1"
          >
            <IoLogInOutline className="text-5xl text-blue-600 mb-4" />
            <h2 className="text-3xl font-bold mb-6">Easy Login Access</h2>
            <p className="text-gray-600 mb-8">
              Get started instantly with our streamlined login process. Secure authentication 
              meets user-friendly design, allowing your team to access their workspace quickly 
              and safely.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="flex-1"
          >
            {/* Login interface mockup */}
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden max-w-md mx-auto">
              <div className="p-8">
                <div className="space-y-4">
                  <div className="h-10 bg-gray-100 rounded w-full"></div>
                  <div className="h-10 bg-gray-100 rounded w-full"></div>
                  <div className="h-10 bg-blue-600 rounded w-full"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}; 