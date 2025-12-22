"use client";

import { motion } from "framer-motion";
import { CalendarHeart, FileText, Stethoscope, HeartPulse } from "lucide-react";
import Link from "next/link";

const AuthContent = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Patient Portal</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Secure access to your health information, appointments, and medical records.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            {
              icon: <CalendarHeart className="h-10 w-10 text-blue-600" />,
              title: "Manage Appointments",
              description: "Schedule, reschedule, or cancel appointments online at your convenience."
            },
            {
              icon: <FileText className="h-10 w-10 text-blue-600" />,
              title: "View Medical Records",
              description: "Access your health records, lab results, and treatment history securely."
            },
            {
              icon: <Stethoscope className="h-10 w-10 text-blue-600" />,
              title: "Connect with Providers",
              description: "Communicate with your healthcare team and ask questions about your care."
            },
            {
              icon: <HeartPulse className="h-10 w-10 text-blue-600" />,
              title: "Track Health Metrics",
              description: "Monitor your health data and share it with your care team."
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Access Your Health Information?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Create an account to securely access your health records, manage appointments, and connect with your care team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/auth/login"
              className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/auth/register"
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white/10 transition-colors"
            >
              Create Account
            </Link>
          </div>
        </motion.div>

        {/* Security Section */}
        <motion.div
          className="mt-20 bg-white rounded-xl shadow-md p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Your Security is Our Priority</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Encrypted Data</h3>
              <p className="text-gray-600">All your health information is encrypted and securely stored.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">HIPAA Compliant</h3>
              <p className="text-gray-600">We follow strict healthcare privacy regulations to protect your data.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Secure Access</h3>
              <p className="text-gray-600">Multi-factor authentication ensures only you can access your information.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AuthContent;