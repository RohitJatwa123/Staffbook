'use client';

import { motion } from 'framer-motion';
import { IoCashOutline, IoCardOutline, IoPhonePortraitOutline } from 'react-icons/io5';

export const PaymentMethod = () => {
  const paymentMethods = [
    {
      icon: IoCardOutline,
      title: 'Credit/Debit Cards',
      description: 'Secure card payments with major providers'
    },
    {
      icon: IoPhonePortraitOutline,
      title: 'Mobile Payments',
      description: 'Pay using UPI, mobile wallets, and more'
    },
    {
      icon: IoCashOutline,
      title: 'Bank Transfer',
      description: 'Direct bank transfers and NEFT/RTGS'
    }
  ];

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
          className="text-center mb-16"
        >
          <IoCardOutline className="text-5xl text-blue-600 mb-4 mx-auto" />
          <h2 className="text-3xl font-bold mb-6">Flexible Payment Options</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from multiple payment methods that suit your business needs.
            Secure, fast, and reliable payment processing for your convenience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {paymentMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 + (index * 0.2) }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <method.icon className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">{method.title}</h3>
              <p className="text-gray-600">{method.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Payment Interface</h3>
            {/* Payment interface mockup */}
            <div className="max-w-md mx-auto space-y-4">
              <div className="h-12 bg-gray-100 rounded-lg"></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-12 bg-gray-100 rounded-lg"></div>
                <div className="h-12 bg-gray-100 rounded-lg"></div>
              </div>
              <div className="h-12 bg-blue-600 rounded-lg"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}; 