"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HeartPulse } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden">
      <div className="absolute inset-0 bg-black/20 z-10"></div>
      <div className="absolute inset-0 z-0 parallax-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1953&q=80')" }}></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <motion.h1
            className="text-3xl md:text-5xl font-bold mb-6"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Compassionate Care, Advanced Medicine
          </motion.h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto hidden sm:block">
            At MediCare Hospital, we provide world-class healthcare services with a personal touch. Our dedicated team of professionals is committed to your health and well-being.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-800 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition-colors"
            >
              <Link href="/appointments">Book Appointment</Link>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-white/10 transition-colors"
            >
              <Link href="/departments">Explore Services</Link>
            </motion.button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-10 h-16 rounded-full border-4 border-white flex justify-center p-2">
          <div className="w-3 h-3 rounded-full bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;