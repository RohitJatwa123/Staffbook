'use client';

import { motion } from 'framer-motion';
import { IoMegaphoneOutline, IoMailOutline, IoStatsChartOutline } from 'react-icons/io5';

export const MarketingSection = () => {
  const features = [
    {
      icon: IoMegaphoneOutline,
      title: 'Campaign Management',
      description: 'Create and manage targeted marketing campaigns with ease.'
    },
    {
      icon: IoMailOutline,
      title: 'Email Marketing',
      description: 'Reach your audience through automated email campaigns.'
    },
    {
      icon: IoStatsChartOutline,
      title: 'Analytics',
      description: 'Track campaign performance with detailed analytics.'
    }
  ];

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
          className="text-center mb-16"
        >
          <IoMegaphoneOutline className="text-5xl text-blue-600 mb-4 mx-auto" />
          <h2 className="text-3xl font-bold mb-6">Marketing Tools</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Powerful marketing tools to help you reach your audience and grow your business.
            Track, analyze, and optimize your campaigns all in one place.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 + (index * 0.2) }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 rounded-xl p-8 text-center"
            >
              <feature.icon className="text-4xl text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 bg-blue-50 rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Start Marketing?</h3>
          <p className="text-gray-600 mb-6">
            Get started with our marketing tools and take your business to the next level.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}; 