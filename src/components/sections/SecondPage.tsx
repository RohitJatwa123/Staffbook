'use client';

import { motion } from 'framer-motion';

export const SecondPage = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center text-white mb-8"
        >
          Second Page Content
        </motion.h2>
      </div>
    </section>
  );
}; 