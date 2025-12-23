"use client";

import { motion } from "framer-motion";
import { User, Stethoscope, MapPin, Phone, Mail, Calendar } from "lucide-react";
import NumberCounter from "@/components/ui/NumberCounter";

// Fake doctor data
const doctors = [
  {
    id: 1,
    name: "Dr. Maina Isaac Wachira",
    specialty: "Cardiology",
    education: "MD, Cardiology Fellowship",
    experience: "15 years",
    image: "/doctors/dr-maina-isaac-wachira.jpg",
    bio: "Dr. Wachira specializes in interventional cardiology with a focus on minimally invasive procedures. He has published over 30 research papers in leading cardiology journals.",
    languages: ["English", "Swahili"],
    availability: "Mon, Wed, Fri: 9AM - 5PM"
  },
  {
    id: 2,
    name: "Dr. Jane Mwangi",
    specialty: "Orthopedic Surgery",
    education: "MD, Orthopedic Surgery Residency",
    experience: "12 years",
    image: "/doctors/dr-jane-mwangi.jpg",
    bio: "Dr. Mwangi is a leading orthopedic surgeon specializing in joint replacement and sports medicine. She has performed over 2,000 successful surgeries.",
    languages: ["English", "Swahili"],
    availability: "Tue, Thu: 10AM - 6PM"
  },
  {
    id: 3,
    name: "Dr. Sarah Ochieng",
    specialty: "Pediatrics",
    education: "MD, Pediatric Residency",
    experience: "10 years",
    image: "/doctors/dr-sarah-ochieng.jpg",
    bio: "Dr. Ochieng is dedicated to providing compassionate care for children. She focuses on preventive medicine and patient education.",
    languages: ["English", "Swahili"],
    availability: "Mon-Fri: 8AM - 4PM"
  },
  {
    id: 4,
    name: "Dr. James Kamau",
    specialty: "Neurology",
    education: "MD, Neurology Fellowship",
    experience: "18 years",
    image: "/doctors/dr-james-kamau.jpg",
    bio: "Dr. Kamau specializes in treating neurological disorders with a focus on personalized treatment plans. He has extensive research experience.",
    languages: ["English"],
    availability: "Tue, Thu, Sat: 9AM - 5PM"
  },
  {
    id: 5,
    name: "Dr. Lisa Wanjiku",
    specialty: "Dermatology",
    education: "MD, Dermatology Residency",
    experience: "14 years",
    image: "/doctors/dr-lisa-wanjiku.jpg",
    bio: "Dr. Wanjiku is an expert in cosmetic and medical dermatology with a focus on skin cancer prevention and treatment.",
    languages: ["English", "Swahili"],
    availability: "Mon, Wed, Fri: 10AM - 6PM"
  },
  {
    id: 6,
    name: "Dr. Robert Muthomi",
    specialty: "General Surgery",
    education: "MD, General Surgery Residency",
    experience: "16 years",
    image: "/doctors/dr-robert-muthomi.jpg",
    bio: "Dr. Muthomi specializes in minimally invasive surgical techniques with a focus on patient safety and recovery.",
    languages: ["English"],
    availability: "Tue, Thu: 8AM - 4PM"
  }
];

const DoctorCard = ({ doctor }: { doctor: typeof doctors[0] }) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift"
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        <img 
          src={doctor.image} 
          alt={doctor.name} 
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {doctor.specialty}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{doctor.name}</h3>
        <p className="text-blue-600 mb-3">{doctor.education}</p>
        
        <div className="flex items-center text-gray-600 mb-3">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{doctor.experience} experience</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{doctor.bio}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {doctor.languages.map((lang, idx) => (
            <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
              {lang}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600">
            <p className="font-medium">Available:</p>
            <p>{doctor.availability}</p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Book Appointment
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const DoctorsClient = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Meet Our Doctors</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team of experienced physicians is dedicated to providing exceptional healthcare with compassion and expertise.
          </p>
        </motion.div>

        {/* Stats Section with Number Counter */}
        <section className="py-16 bg-gray-50 mb-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
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
                animate={{ opacity: 1, y: 0 }}
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
                animate={{ opacity: 1, y: 0 }}
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
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600">Emergency Service</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-800 text-sm font-medium mb-2">Search Doctor</label>
              <input
                type="text"
                placeholder="Search by name, specialty..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800"
              />
            </div>
            <div>
              <label className="block text-gray-800 text-sm font-medium mb-2">Specialty</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800">
                <option value="">All Specialties</option>
                <option value="cardiology">Cardiology</option>
                <option value="orthopedics">Orthopedics</option>
                <option value="pediatrics">Pediatrics</option>
                <option value="neurology">Neurology</option>
                <option value="dermatology">Dermatology</option>
                <option value="general-surgery">General Surgery</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-800 text-sm font-medium mb-2">Availability</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800">
                <option value="">Any Time</option>
                <option value="today">Today</option>
                <option value="this-week">This Week</option>
                <option value="next-week">Next Week</option>
              </select>
            </div>
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <div className="flex space-x-2">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">1</button>
            <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100">2</button>
            <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100">3</button>
            <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100">Next →</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorsClient;