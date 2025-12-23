"use client";

import { motion } from "framer-motion";
import {
  HeartPulse, Stethoscope, Baby, Scissors, FlaskConical, Syringe, Pill, Eye, Brain, Heart,
  User, Award, Users, CalendarCheck, MapPin, Phone, Mail, Clock
} from "lucide-react";
import Link from "next/link";
import NumberCounter from "@/components/ui/NumberCounter";

/* ---------------- DATA ---------------- */

const departments = [
  {
    id: 1,
    name: "General Medicine",
    icon: <Stethoscope className="h-10 w-10 text-blue-600" />,
    description: "Comprehensive primary healthcare services for adults and children, including routine checkups, preventive care, and chronic disease management.",
    doctors: 15,
    image: "/departments/general-medicine.jpg",
    services: ["Routine Checkups", "Chronic Disease Management", "Preventive Care", "Health Screenings"]
  },
  {
    id: 2,
    name: "Pediatrics",
    icon: <Baby className="h-10 w-10 text-blue-600" />,
    description: "Specialized medical care for infants, children, and adolescents, focusing on growth, development, and childhood diseases.",
    doctors: 8,
    image: "/departments/pediatrics.jpg",
    services: ["Well-child Visits", "Vaccinations", "Developmental Assessments", "Pediatric Emergencies"]
  },
  {
    id: 3,
    name: "Maternity",
    icon: <HeartPulse className="h-10 w-10 text-blue-600" />,
    description: "Comprehensive care for expectant mothers, including prenatal, delivery, and postpartum services in a comfortable environment.",
    doctors: 12,
    image: "/departments/maternity.jpg",
    services: ["Prenatal Care", "Labor & Delivery", "Postpartum Care", "Newborn Care"]
  },
  {
    id: 4,
    name: "Surgery",
    icon: <Scissors className="h-10 w-10 text-blue-600" />,
    description: "Advanced surgical services with state-of-the-art equipment and minimally invasive techniques for faster recovery.",
    doctors: 10,
    image: "/departments/surgery.jpg",
    services: ["General Surgery", "Minimally Invasive Surgery", "Robotic Surgery", "Surgical Consultations"]
  },
  {
    id: 5,
    name: "Cardiology",
    icon: <Heart className="h-10 w-10 text-blue-600" />,
    description: "Specialized care for heart and cardiovascular conditions, including diagnostic services and interventional procedures.",
    doctors: 7,
    image: "/departments/cardiology.jpg",
    services: ["Cardiac Consultations", "Diagnostic Tests", "Interventional Procedures", "Cardiac Rehabilitation"]
  },
  {
    id: 6,
    name: "Neurology",
    icon: <Brain className="h-10 w-10 text-blue-600" />,
    description: "Comprehensive neurological care for disorders of the brain, spinal cord, and nervous system.",
    doctors: 6,
    image: "/departments/neurology.jpg",
    services: ["Neurological Consultations", "Diagnostic Tests", "Treatment Plans", "Rehabilitation"]
  }
];

/* ---------------- COMPONENTS ---------------- */

function DepartmentCard({ dept }: { dept: (typeof departments)[0] }) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift"
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        <img 
          src={dept.image} 
          alt={dept.name} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {dept.doctors} Doctors
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="mr-4 p-3 bg-blue-50 rounded-full">
            {dept.icon}
          </div>
          <h3 className="text-xl font-bold text-gray-800">{dept.name}</h3>
        </div>
        
        <p className="text-gray-600 mb-4">{dept.description}</p>
        
        <div className="mb-4">
          <h4 className="font-semibold text-gray-800 mb-2">Services:</h4>
          <ul className="grid grid-cols-2 gap-2">
            {dept.services.map((service, idx) => (
              <li key={idx} className="flex items-center text-sm text-gray-600">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                {service}
              </li>
            ))}
          </ul>
        </div>
        
        <Link 
          href={`/departments/${dept.id}`}
          className="text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center"
        >
          Learn More
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
}

/* ---------------- PAGE ---------------- */

export default function DepartmentsClient() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Departments</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive medical services delivered by our expert team across multiple specialized departments.
          </p>
        </motion.div>

        {/* Stats Section with Number Counter */}
        <section className="py-16 bg-gray-50 mb-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  <NumberCounter from={0} to={15} suffix="+" />
                </div>
                <div className="text-gray-600">Years Experience</div>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  <NumberCounter from={0} to={200} suffix="+" />
                </div>
                <div className="text-gray-600">Expert Doctors</div>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  <NumberCounter from={0} to={50} suffix="K+" />
                </div>
                <div className="text-gray-600">Happy Patients</div>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600">Emergency Service</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {departments.map((dept) => (
            <DepartmentCard key={dept.id} dept={dept} />
          ))}
        </div>

        {/* Department Special Features */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Why Choose Our Departments?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartPulse className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Expert Care</h3>
              <p className="text-gray-600">Our departments are staffed by board-certified specialists with years of experience.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FlaskConical className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Advanced Technology</h3>
              <p className="text-gray-600">State-of-the-art equipment and facilities for accurate diagnosis and treatment.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Pill className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Comprehensive Services</h3>
              <p className="text-gray-600">Full-spectrum care from prevention to treatment and rehabilitation.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-10 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Need Medical Care?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our departments work together to provide coordinated, comprehensive care tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/appointments"
              className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
            >
              Book Appointment
            </Link>
            <Link 
              href="/contact"
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}