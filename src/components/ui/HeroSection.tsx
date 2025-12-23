"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HeartPulse } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden">
      <div className="absolute inset-0 bg-black/20 z-10"></div>
      <div className="absolute inset-0 z-0" style={{
        backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSI5NDAiIHZpZXdCb3g9IjAgMCAxOTIwIDk0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxyZWN0IHdpZHRoPSIxOTIwIiBoZWlnaHQ9Ijk0MCIgZmlsbD0iIzFiNGZiYSIvPgo8cGF0aCBkPSJNMTE1OC41NSAxMzcuNzI4QzEyNTAuMjkgMTM3LjcyOCAxMzI0IDI3OS43NDggMTMyNCAzODMuNjI4QzEzMjQgNDg3LjUwOCAxMjUwLjI5IDYyOS41MjggMTE1OC41NSA2MjkuNTI4QzEwNjYuODEgNjI5LjUyOCA5OTMgNDg3LjUwOCA5OTMgMzgzLjYyOFMxMDY2LjgxIDEzNy43MjggMTE1OC41NSAxMzcuNzI4WiIgZmlsbD0iIzFlNGRiOCIvPgo8cGF0aCBkPSJNNzQxLjQ1IDEzNy43MjhDNjQ5LjcxIDEzNy43MjggNTc2IDI3OS43NDggNTc2IDM4My42MjhDNSc2IDQ4Ny41MDggNjQ5LjcxIDYyOS41MjggNzQxLjQ1IDYyOS41MjhIODMzLjE4OEM5MjQuOTI4IDYyOS41MjggOTk4LjYzOCA0ODcuNTA4IDk5OC42MzggMzgzLjYyOFM5MjQuOTI4IDEzNy43MjggODMzLjE4OCAxMzcuNzI4SDc0MS40NVoiIGZpbGw9IiMxZTRkYjgiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMCI+CjxyZWN0IHdpZHRoPSIxOTIwIiBoZWlnaHQ9Ijk0MCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}></div>
      
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