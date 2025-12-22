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
  Users,
  Clock,
  CheckCircle,
  AlertTriangle,
  UserRound,
  HeartPulse as HeartBeat,
  Activity,
  FileText as Document,
  CalendarCheck,
  Stethoscope as MedicalCross,
  Download
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import NumberCounter from "@/components/ui/NumberCounter";

const DoctorDashboard = () => {
  // Mock data for doctor dashboard
  const todayAppointments = [
    {
      id: 1,
      time: "9:00 AM",
      patient: "James Wanjiku",
      age: 45,
      type: "Follow-up",
      status: "Checked In"
    },
    {
      id: 2,
      time: "10:30 AM",
      patient: "Mary Njoki",
      age: 32,
      type: "Consultation",
      status: "Scheduled"
    },
    {
      id: 3,
      time: "2:00 PM",
      patient: "Robert Mwangi",
      age: 67,
      type: "Review",
      status: "Pending"
    }
  ];

  const recentPatients = [
    {
      id: 1,
      name: "Alice Kariuki",
      age: 28,
      condition: "Hypertension",
      lastVisit: "2024-01-15",
      status: "Stable"
    },
    {
      id: 2,
      name: "Peter Muthomi",
      age: 52,
      condition: "Diabetes",
      lastVisit: "2024-01-14",
      status: "Needs Attention"
    },
    {
      id: 3,
      name: "Grace Wanjiku",
      age: 35,
      condition: "Pregnancy",
      lastVisit: "2024-01-13",
      status: "Monitoring"
    }
  ];

  const stats = [
    { value: 24, label: "Appointments Today", icon: Calendar, suffix: "" },
    { value: 156, label: "Patients This Month", icon: Users, suffix: "" },
    { value: 98, label: "Success Rate", icon: HeartBeat, suffix: "%" },
    { value: 12, label: "Pending Tasks", icon: AlertTriangle, suffix: "" }
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
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Good morning, Dr. Maina!</h1>
              <p className="text-xl text-blue-100">You have 24 appointments scheduled for today.</p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <div className="bg-white/20 p-3 rounded-full">
                <User className="h-10 w-10 text-white" />
              </div>
              <div>
                <p className="font-bold">Doctor ID: DR-2024-001</p>
                <p className="text-sm text-blue-200">Cardiology Specialist</p>
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
            {/* Today's Schedule */}
            <motion.div 
              className="bg-white rounded-xl shadow-md p-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                  <Calendar className="h-6 w-6 text-blue-600" />
                  Today's Schedule
                </h2>
                <button className="text-blue-600 font-medium hover:text-blue-800">View Calendar</button>
              </div>
              
              <div className="space-y-4">
                {todayAppointments.map((appt) => (
                  <div key={appt.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <Clock className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800">{appt.patient}</h3>
                        <p className="text-sm text-gray-600">{appt.age} years • {appt.type}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        appt.status === 'Checked In' 
                          ? 'bg-green-100 text-green-800' 
                          : appt.status === 'Scheduled'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {appt.status}
                      </span>
                      <button className="text-blue-600 hover:text-blue-800">
                        <Document className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-6 border border-dashed border-gray-300 rounded-lg p-4 text-gray-600 hover:border-blue-300 hover:text-blue-600 transition-colors flex items-center justify-center gap-2">
                <Calendar className="h-5 w-5" />
                Add Appointment
              </button>
            </motion.div>

            {/* Recent Patients */}
            <motion.div 
              className="bg-white rounded-xl shadow-md p-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                  <Users className="h-6 w-6 text-blue-600" />
                  Recent Patients
                </h2>
                <button className="text-blue-600 font-medium hover:text-blue-800">View All</button>
              </div>
              
              <div className="space-y-4">
                {recentPatients.map((patient) => (
                  <div key={patient.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="bg-gray-200 p-2 rounded-full">
                        <User className="h-6 w-6 text-gray-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800">{patient.name}</h3>
                        <p className="text-sm text-gray-600">{patient.age} years • {patient.condition}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        patient.status === 'Stable' 
                          ? 'bg-green-100 text-green-800' 
                          : patient.status === 'Needs Attention'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {patient.status}
                      </span>
                      <button className="text-blue-600 hover:text-blue-800">
                        <Document className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <motion.div 
              className="bg-white rounded-xl shadow-md p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6">Quick Actions</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "New Patient", icon: UserRound, color: "bg-blue-100 text-blue-600" },
                  { name: "Write Note", icon: Document, color: "bg-green-100 text-green-600" },
                  { name: "Order Test", icon: Syringe, color: "bg-purple-100 text-purple-600" },
                  { name: "View Schedule", icon: CalendarCheck, color: "bg-yellow-100 text-yellow-600" }
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

            {/* Pending Tasks */}
            <motion.div 
              className="bg-white rounded-xl shadow-md p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-yellow-600" />
                Pending Tasks
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-yellow-100 p-1 rounded-full mt-1">
                    <AlertTriangle className="h-4 w-4 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Review lab results</h4>
                    <p className="text-sm text-gray-600">For Alice Kariuki</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-yellow-100 p-1 rounded-full mt-1">
                    <AlertTriangle className="h-4 w-4 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Follow-up call</h4>
                    <p className="text-sm text-gray-600">With Peter Muthomi</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-yellow-100 p-1 rounded-full mt-1">
                    <AlertTriangle className="h-4 w-4 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Update patient chart</h4>
                    <p className="text-sm text-gray-600">For Grace Wanjiku</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Performance Metrics */}
            <motion.div 
              className="bg-gradient-to-r from-green-500 to-green-700 rounded-xl p-6 text-white"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-4">Performance Metrics</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Appointment Compliance</span>
                    <span>96%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full" style={{ width: '96%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Patient Satisfaction</span>
                    <span>94%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full" style={{ width: '94%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Follow-up Rate</span>
                    <span>89%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full" style={{ width: '89%' }}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;