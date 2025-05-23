'use client';

import { motion } from 'framer-motion';
import { IoPersonCircleOutline } from 'react-icons/io5';

export const ProfileSection = () => {
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
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <IoPersonCircleOutline className="text-5xl text-blue-600 mb-4 mx-auto" />
          <h2 className="text-3xl font-bold mb-6">Employee Profiles</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Manage comprehensive employee profiles with ease. Keep track of important information 
            and maintain organized records for your entire team.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              {/* Profile Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                  <IoPersonCircleOutline className="w-12 h-12 text-gray-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">John Doe</h3>
                  <p className="text-gray-600">Senior Developer</p>
                </div>
              </div>

              {/* Profile Fields */}
              <div className="space-y-4">
                {[
                  { label: 'Email', value: 'john.doe@example.com' },
                  { label: 'Department', value: 'Engineering' },
                  { label: 'Location', value: 'Indore, MP' },
                  { label: 'Join Date', value: 'January 2023' }
                ].map((field, index) => (
                  <motion.div
                    key={field.label}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 + (index * 0.1) }}
                    className="flex border-b border-gray-100 pb-3"
                  >
                    <span className="text-gray-500 w-1/3">{field.label}:</span>
                    <span className="text-gray-900 w-2/3">{field.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}; 