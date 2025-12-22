"use client";

import { motion } from "framer-motion";
import { HeartPulse, Award, Users, Calendar, User, MapPin, Phone, Mail, Clock } from "lucide-react";
import NumberCounter from "@/components/ui/NumberCounter";

const AboutClient = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">About MediCare Hospital Kenya</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Providing exceptional healthcare services with compassion and cutting-edge technology since 1995.
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
                  <NumberCounter from={0} to={25} suffix="+" />
                </div>
                <div className="text-gray-600">Years of Service</div>
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
                <div className="text-gray-600">Medical Staff</div>
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
                <div className="text-gray-600">Lives Saved</div>
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

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-md"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <HeartPulse className="text-blue-600" />
              Our Mission
            </h2>
            <p className="text-gray-600">
              To provide compassionate, high-quality healthcare to our community while advancing medical knowledge and
              fostering healing through innovation, education, and excellence in patient care.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-md"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Award className="text-blue-600" />
              Our Vision
            </h2>
            <p className="text-gray-600">
              To be the leading healthcare provider in Kenya, recognized for clinical excellence, patient safety,
              and innovation in medical care, while maintaining our commitment to serving the community with dignity and respect.
            </p>
          </motion.div>
        </div>

        {/* Hospital Story */}
        <motion.div
          className="bg-white p-8 rounded-xl shadow-md mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Story</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-4">
              Founded in 1995, MediCare Hospital Kenya began as a small community clinic with a vision to provide accessible, 
              high-quality healthcare to all. Over the years, we have grown into a leading medical institution, 
              serving over 50,000 patients annually.
            </p>
            <p className="text-gray-600 mb-4">
              Our commitment to excellence has earned us recognition from national healthcare associations and 
              accreditation from leading medical organizations. Today, we continue to expand our services while 
              maintaining our core values of compassion, integrity, and patient-centered care.
            </p>
            <p className="text-gray-600">
              We remain dedicated to our founding principles: treating every patient with dignity, providing 
              evidence-based care, and continuously improving our services through innovation and education.
            </p>
          </div>
        </motion.div>

        {/* Management Team */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Dr. Maina Isaac Wachira", title: "Chief Executive Officer", bio: "Over 20 years of healthcare leadership experience with a focus on patient-centered care." },
              { name: "Dr. Jane Mwangi", title: "Chief Medical Officer", bio: "Board-certified physician with expertise in internal medicine and healthcare innovation." },
              { name: "Dr. Sarah Ochieng", title: "Chief Nursing Officer", bio: "Distinguished nurse leader committed to excellence in patient care and staff development." }
            ].map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-gray-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.title}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Accreditations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Accreditations & Certifications</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Ministry of Health", desc: "Licensed Hospital" },
              { name: "Kenya Medical Practitioners", desc: "Certified" },
              { name: "Nairobi Hospital", desc: "Affiliated" },
              { name: "WHO", desc: "Quality Standards" }
            ].map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                <Award className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-800">{cert.name}</h3>
                <p className="text-gray-600 text-sm">{cert.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutClient;