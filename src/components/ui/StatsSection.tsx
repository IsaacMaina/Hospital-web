"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import NumberCounter from "./NumberCounter";

const StatsSection = () => {
  const stats = [
    { value: 15, suffix: "+", label: "Years Experience" },
    { value: 200, suffix: "+", label: "Expert Doctors" },
    { value: 50, suffix: "K+", label: "Happy Patients" },
    { value: "24/7", suffix: "", label: "Emergency Service" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600">
                  {typeof stat.value === 'number' ? (
                    <NumberCounter from={0} to={stat.value} suffix={stat.suffix} />
                  ) : (
                    <span>{stat.value}{stat.suffix}</span>
                  )}
                </div>
                <div className="text-gray-600 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default StatsSection;