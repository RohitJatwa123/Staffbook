'use client';

import { motion } from 'framer-motion';
import { CreditCard, TrendingUp, Shield, Zap } from 'lucide-react';

export const MarketingAndPayments = () => {
  const features = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Marketing Analytics",
      description: "Track your marketing campaigns and measure ROI with detailed analytics"
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Secure Payments",
      description: "Multiple payment options with bank-grade security"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Data Protection",
      description: "Your data is encrypted and protected with advanced security measures"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Processing",
      description: "Real-time payment processing and instant notifications"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Marketing & Payment Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Streamline your business operations with integrated marketing tools and secure payment processing
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Payment Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-8 text-gray-900">Supported Payment Methods</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <img src="/visa.png" alt="Visa" className="h-8 grayscale hover:grayscale-0 transition-all" />
            <img src="/mastercard.png" alt="Mastercard" className="h-8 grayscale hover:grayscale-0 transition-all" />
            <img src="/paypal.png" alt="PayPal" className="h-8 grayscale hover:grayscale-0 transition-all" />
            <img src="/stripe.png" alt="Stripe" className="h-8 grayscale hover:grayscale-0 transition-all" />
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-blue-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
              Ready to get started?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of businesses that trust our platform for their marketing and payment needs
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Start Free Trial
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 