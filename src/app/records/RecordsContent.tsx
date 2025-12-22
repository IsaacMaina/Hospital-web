"use client";

import { FileText, Calendar, Download, Upload, Search, Filter, User, Heart, Syringe, Droplets, Eye, Brain, HeartPulse as HeartBeat, Activity, Pill, Syringe as SyringeIcon, AlertTriangle, Upload as UploadIcon, Download as DownloadIcon } from "lucide-react";
import { motion } from "framer-motion";
import NumberCounter from "@/components/ui/NumberCounter";

const RecordsContent = () => {
  // Mock data for medical records
  const medicalRecords = [
    {
      id: 1,
      date: "2024-01-15",
      type: "Lab Results",
      testName: "Complete Blood Count",
      doctor: "Dr. Maina Isaac Wachira",
      status: "Completed",
      downloadable: true
    },
    {
      id: 2,
      date: "2024-01-10",
      type: "Consultation",
      testName: "Cardiology Follow-up",
      doctor: "Dr. Jane Mwangi",
      status: "Completed",
      downloadable: true
    },
    {
      id: 3,
      date: "2023-12-28",
      type: "Imaging",
      testName: "X-Ray - Chest",
      doctor: "Dr. James Kim",
      status: "Completed",
      downloadable: true
    },
    {
      id: 4,
      date: "2023-12-15",
      type: "Prescription",
      testName: "Medication History",
      doctor: "Dr. Sarah Ochieng",
      status: "Active",
      downloadable: true
    }
  ];

  // Mock data for upcoming appointments
  const upcomingAppointments = [
    {
      id: 1,
      date: "2024-01-20",
      time: "10:00 AM",
      doctor: "Dr. Maina Isaac Wachira",
      department: "General Medicine",
      type: "Follow-up"
    },
    {
      id: 2,
      date: "2024-01-25",
      time: "2:00 PM",
      doctor: "Dr. Jane Mwangi",
      department: "Cardiology",
      type: "Consultation"
    }
  ];

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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">My Medical Records</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Securely access your medical records, test results, and health history. Manage your health information in one place.
          </p>
        </motion.div>

        {/* Stats Section */}
        <section className="py-16 bg-white rounded-xl shadow-md mb-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: 12, label: "Active Conditions", icon: Activity, suffix: "+" },
                { value: 24, label: "Lab Results", icon: Droplets, suffix: "+" },
                { value: 8, label: "Prescriptions", icon: Pill, suffix: "+" },
                { value: 18, label: "Appointments", icon: Calendar, suffix: "+" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <stat.icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    <NumberCounter from={0} to={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Records List */}
          <div className="lg:col-span-2">
            {/* Search and Filter */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-grow">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      placeholder="Search records..."
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <select className="w-full md:w-48 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>All Record Types</option>
                    <option>Laboratory Results</option>
                    <option>Imaging Reports</option>
                    <option>Consultation Notes</option>
                    <option>Prescriptions</option>
                    <option>Vaccination Records</option>
                  </select>
                </div>
                <button className="bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                  <Filter className="h-5 w-5" />
                  Filter
                </button>
              </div>
            </div>

            {/* Records Table */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800">Recent Medical Records</h2>
                <p className="text-gray-600">Access and download your medical records securely</p>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Test/Visit</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {medicalRecords.map((record, index) => (
                      <motion.tr 
                        key={record.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="hover:bg-gray-50"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{record.date}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{record.type}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{record.testName}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{record.doctor}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            record.status === 'Completed' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {record.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {record.downloadable && (
                            <button className="text-blue-600 hover:text-blue-900 flex items-center gap-1">
                              <DownloadIcon className="h-4 w-4" />
                              Download
                            </button>
                          )}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="p-6 border-t border-gray-200 flex justify-between items-center">
                <p className="text-gray-600">Showing 1 to {medicalRecords.length} of {medicalRecords.length} records</p>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">Previous</button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">1</button>
                  <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">Next</button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Upcoming Appointments */}
            <motion.div 
              className="bg-white rounded-xl shadow-md p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Calendar className="h-6 w-6 text-blue-600" />
                Upcoming Appointments
              </h3>
              
              <div className="space-y-4">
                {upcomingAppointments.map((appt, index) => (
                  <div key={appt.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-gray-800">{appt.type} Appointment</h4>
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                        {appt.date}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{appt.time}</p>
                    <p className="text-sm text-gray-600 mb-1">{appt.doctor}</p>
                    <p className="text-sm text-gray-500">{appt.department}</p>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-4 bg-gray-100 text-gray-800 font-medium py-2 rounded-lg hover:bg-gray-200 transition-colors">
                View All Appointments
              </button>
            </motion.div>

            {/* Health Summary */}
            <motion.div 
              className="bg-white rounded-xl shadow-md p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Heart className="h-6 w-6 text-blue-600" />
                Health Summary
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Last Checkup:</span>
                  <span className="font-medium text-gray-800">Jan 10, 2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Blood Type:</span>
                  <span className="font-medium text-gray-800">O+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Allergies:</span>
                  <span className="font-medium text-gray-800">None</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Conditions:</span>
                  <span className="font-medium text-gray-800">2 Active</span>
                </div>
              </div>
            </motion.div>

            {/* Document Upload */}
            <motion.div 
              className="bg-white rounded-xl shadow-md p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <UploadIcon className="h-6 w-6 text-blue-600" />
                Upload Documents
              </h3>
              
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">Drag and drop files here or click to browse</p>
                <p className="text-sm text-gray-500 mb-4">Supported formats: PDF, DOC, JPG, PNG</p>
                <button className="bg-blue-600 text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                  Browse Files
                </button>
              </div>
            </motion.div>

            {/* Emergency Info */}
            <motion.div 
              className="bg-red-50 border border-red-200 rounded-xl p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                Emergency Information
              </h3>
              
              <div className="space-y-3">
                <div>
                  <span className="text-red-700 font-medium">Blood Type:</span>
                  <span className="ml-2 font-medium">O+</span>
                </div>
                <div>
                  <span className="text-red-700 font-medium">Allergies:</span>
                  <span className="ml-2">None</span>
                </div>
                <div>
                  <span className="text-red-700 font-medium">Primary Doctor:</span>
                  <span className="ml-2">Dr. Maina Isaac Wachira</span>
                </div>
                <button className="w-full mt-4 bg-red-600 text-white font-medium py-2 rounded-lg hover:bg-red-700 transition-colors">
                  Share Emergency Info
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordsContent;