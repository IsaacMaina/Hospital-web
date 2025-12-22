"use client";

import { motion } from "framer-motion";
import { HeartPulse } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const EmergencySection = () => {
  return (
    <section className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <HeartPulse className="h-16 w-16 mx-auto mb-6 text-white" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Emergency Services Available 24/7</h2>
              <p className="text-xl mb-8">
                Need immediate medical attention? Our emergency department is staffed with experienced professionals ready to assist you anytime.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="tel:+254758302725"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-red-600 text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                >
                  Call Emergency: +254 758 302725
                </motion.a>
                <motion.a
                  href="/emergency-info"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/20 text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-white/30 transition-colors"
                >
                  Emergency Information
                </motion.a>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default EmergencySection;