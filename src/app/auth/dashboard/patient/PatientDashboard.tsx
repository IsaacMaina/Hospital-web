"use client";

import {
  User,
  Calendar,
  FileText,
  HeartPulse,
  Stethoscope,
  Syringe,
  Pill,
  Bell,
  Award,
  MapPin,
  Phone,
  Mail,
  Heart,
  Brain,
  Eye,
  Baby,
  Scissors,
  FlaskConical,
  Download
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import NumberCounter from "@/components/ui/NumberCounter";

const PatientDashboard = () => {
  // Mock data for patient dashboard
  const upcomingAppointments = [
    {
      id: 1,
      date: "2024-01-20",
      time: "10:00 AM",
      doctor: "Dr. Maina Isaac Wachira",
      department: "General Medicine",
      type: "Follow-up",
      status: "Confirmed"
    },
    {
      id: 2,
      date: "2024-01-25",
      time: "2:00 PM",
      doctor: "Dr. Jane Mwangi",
      department: "Cardiology",
      type: "Consultation",
      status: "Scheduled"
    }
  ];

  const recentResults = [
    {
      id: 1,
      date: "2024-01-15",
      test: "Complete Blood Count",
      doctor: "Dr. Maina Isaac Wachira",
      status: "Ready",
      downloadable: true
    },
    {
      id: 2,
      date: "2024-01-10",
      test: "ECG",
      doctor: "Dr. Jane Mwangi",
      status: "Ready",
      downloadable: true
    }
  ];

  const healthMetrics = [
    { metric: "Blood Pressure", value: "120/80 mmHg", status: "Normal" },
    { metric: "Heart Rate", value: "72 bpm", status: "Normal" },
    { metric: "Temperature", value: "36.8°C", status: "Normal" },
    { metric: "Weight", value: "70 kg", status: "Healthy" }
  ];

  const stats = [
    { value: 12, label: "Appointments", icon: Calendar, suffix: "+" },
    { value: 8, label: "Lab Results", icon: FlaskConical, suffix: "" },
    { value: 5, label: "Prescriptions", icon: Pill, suffix: "" },
    { value: 3, label: "Active Conditions", icon: Heart, suffix: "" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Welcome Section */}
        <motion.div 
          className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome back, John Doe!</h1>
              <p className="text-xl text-blue-100">Your health is our priority. Stay informed and manage your care.</p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <div className="bg-white/20 p-3 rounded-full">
                <User className="h-10 w-10 text-white" />
              </div>
              <div>
                <p className="font-bold">Patient ID: PT-2024-001</p>
                <p className="text-sm text-blue-200">Member since Jan 2024</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <stat.icon className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">
                <NumberCounter from={0} to={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Appointments */}
            <motion.div 
              className="bg-white rounded-xl shadow-md p-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                  <Calendar className="h-6 w-6 text-blue-600" />
                  Upcoming Appointments
                </h2>
                <button className="text-blue-600 font-medium hover:text-blue-800">View All</button>
              </div>
              
              <div className="space-y-4">
                {upcomingAppointments.map((appt) => (
                  <div key={appt.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium text-gray-800">{appt.type} Appointment</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        appt.status === 'Confirmed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {appt.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{appt.date} at {appt.time}</p>
                    <p className="text-sm text-gray-600 mb-1">{appt.doctor}</p>
                    <p className="text-sm text-gray-500">{appt.department}</p>
                    <div className="flex gap-2 mt-3">
                      <button className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition-colors">
                        Reschedule
                      </button>
                      <button className="text-sm border border-gray-300 text-gray-700 px-3 py-1 rounded hover:bg-gray-50 transition-colors">
                        Cancel
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-4 border border-dashed border-gray-300 rounded-lg p-4 text-gray-600 hover:border-blue-300 hover:text-blue-600 transition-colors flex items-center justify-center gap-2">
                <Calendar className="h-5 w-5" />
                Schedule New Appointment
              </button>
            </motion.div>

            {/* Recent Results */}
            <motion.div 
              className="bg-white rounded-xl shadow-md p-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                  <FileText className="h-6 w-6 text-blue-600" />
                  Recent Results
                </h2>
                <button className="text-blue-600 font-medium hover:text-blue-800">View All</button>
              </div>
              
              <div className="space-y-4">
                {recentResults.map((result) => (
                  <div key={result.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <h3 className="font-medium text-gray-800">{result.test}</h3>
                      <p className="text-sm text-gray-600">{result.date} • {result.doctor}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        result.status === 'Ready' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {result.status}
                      </span>
                      {result.downloadable && (
                        <button className="text-blue-600 hover:text-blue-800">
                          <Download className="h-5 w-5" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Health Summary */}
            <motion.div 
              className="bg-white rounded-xl shadow-md p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <HeartPulse className="h-6 w-6 text-blue-600" />
                Health Summary
              </h3>
              
              <div className="space-y-3">
                {healthMetrics.map((metric, index) => (
                  <div key={index} className="flex justify-between items-center pb-3 border-b border-gray-100 last:border-0 last:pb-0">
                    <span className="text-gray-600">{metric.metric}</span>
                    <div className="text-right">
                      <span className="font-medium text-gray-800">{metric.value}</span>
                      <span className={`ml-2 text-xs px-2 py-1 rounded-full ${
                        metric.status === 'Normal' || metric.status === 'Healthy'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {metric.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-6 bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition-colors">
                View Detailed Health Report
              </button>
            </motion.div>

            {/* Quick Actions */}
            <motion.div 
              className="bg-white rounded-xl shadow-md p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6">Quick Actions</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Book Appointment", icon: Calendar, color: "bg-blue-100 text-blue-600" },
                  { name: "View Records", icon: FileText, color: "bg-green-100 text-green-600" },
                  { name: "Request Prescription", icon: Pill, color: "bg-purple-100 text-purple-600" },
                  { name: "Contact Doctor", icon: Mail, color: "bg-yellow-100 text-yellow-600" }
                ].map((action, index) => (
                  <button
                    key={index}
                    className={`${action.color} p-4 rounded-lg flex flex-col items-center justify-center hover:opacity-90 transition-opacity`}
                  >
                    <action.icon className="h-6 w-6 mb-2" />
                    <span className="text-sm font-medium text-center">{action.name}</span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Emergency Contact */}
            <motion.div 
              className="bg-red-50 border border-red-200 rounded-xl p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                <HeartPulse className="h-6 w-6 text-red-600" />
                Emergency Contact
              </h3>
              
              <p className="text-red-700 mb-4">
                For life-threatening emergencies, call 999 or 112 immediately.
              </p>
              
              <div className="flex items-center text-red-700">
                <Phone className="h-5 w-5 mr-2" />
                <span>+254 758 302725</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;