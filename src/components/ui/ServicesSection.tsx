"use client";

import { motion } from "framer-motion";
import { Stethoscope, Syringe, UserRoundCheck, CalendarCheck } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const ServicesSection = () => {
  const services = [
    {
      icon: <Stethoscope className="h-12 w-12 text-blue-600" />,
      title: "General Medicine",
      description: "Comprehensive primary healthcare services for adults and children."
    },
    {
      icon: <Syringe className="h-12 w-12 text-blue-600" />,
      title: "Vaccination",
      description: "Complete vaccination programs for all age groups and travel needs."
    },
    {
      icon: <UserRoundCheck className="h-12 w-12 text-blue-600" />,
      title: "Specialist Consultations",
      description: "Access to leading specialists across multiple medical disciplines."
    },
    {
      icon: <CalendarCheck className="h-12 w-12 text-blue-600" />,
      title: "Appointment Booking",
      description: "Easy online booking system for convenient scheduling."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Medical Services
            </motion.h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive healthcare services delivered with expertise, compassion, and cutting-edge technology.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-8 rounded-xl text-center hover-lift"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="flex justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;