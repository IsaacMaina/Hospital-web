"use client";

import {
  User,
  Calendar,
  FileText,
  HeartPulse,
  Stethoscope,
  Users,
  Package,
  DollarSign,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Activity,
  Bed,
  Syringe,
  Pill,
  UserRound,
  TrendingUp as Chart,
  AlertTriangle as Warning,
  CheckCircle as Success,
  Activity as Pulse,
  Download,
  Upload,
  Search,
  Filter,
  Eye,
  Trash2
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import NumberCounter from "@/components/ui/NumberCounter";

const AdminDashboard = () => {
  // Mock data for admin dashboard
  const stats = [
    { value: 245, label: "Total Staff", icon: Users, suffix: "" },
    { value: 320, label: "Beds Occupied", icon: Bed, suffix: "" },
    { value: 89, label: "Daily Admissions", icon: User, suffix: "" },
    { value: 1250, label: "Monthly Patients", icon: Users, suffix: "" }
  ];

  const financialStats = [
    { value: 2500000, label: "Revenue (Monthly)", icon: DollarSign, prefix: "KSH ", suffix: "" },
    { value: 1800000, label: "Expenses (Monthly)", icon: DollarSign, prefix: "KSH ", suffix: "" },
    { value: 700000, label: "Net Profit", icon: TrendingUp, prefix: "KSH ", suffix: "" },
    { value: 95, label: "Occupancy Rate", icon: Activity, suffix: "%" }
  ];

  const recentActivities = [
    {
      id: 1,
      action: "New patient admitted",
      user: "Nurse Mary",
      time: "2 mins ago",
      type: "info"
    },
    {
      id: 2,
      action: "Doctor shift change",
      user: "Dr. Maina",
      time: "15 mins ago",
      type: "warning"
    },
    {
      id: 3,
      action: "Inventory updated",
      user: "Pharmacist James",
      time: "30 mins ago",
      type: "success"
    },
    {
      id: 4,
      action: "System backup completed",
      user: "IT Admin",
      time: "1 hour ago",
      type: "success"
    }
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
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Admin Dashboard</h1>
              <p className="text-xl text-blue-100">Monitor and manage hospital operations effectively.</p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <div className="bg-white/20 p-3 rounded-full">
                <User className="h-10 w-10 text-white" />
              </div>
              <div>
                <p className="font-bold">Admin User</p>
                <p className="text-sm text-blue-200">System Administrator</p>
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

        {/* Financial Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {financialStats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index + 4) * 0.1 }}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <stat.icon className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">
                {stat.prefix || ''}
                <NumberCounter from={0} to={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hospital Overview */}
            <motion.div 
              className="bg-white rounded-xl shadow-md p-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                  <Activity className="h-6 w-6 text-blue-600" />
                  Hospital Overview
                </h2>
                <button className="text-blue-600 font-medium hover:text-blue-800">View Reports</button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: "Emergency Cases", value: 18, change: "+2", icon: AlertTriangle, color: "text-red-600" },
                  { label: "Surgery Schedules", value: 8, change: "+1", icon: Syringe, color: "text-blue-600" },
                  { label: "Discharges", value: 24, change: "-3", icon: CheckCircle, color: "text-green-600" },
                  { label: "Pending Tasks", value: 12, change: "+5", icon: AlertTriangle, color: "text-yellow-600" }
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-gray-700">{item.label}</h3>
                      <item.icon className={`h-5 w-5 ${item.color}`} />
                    </div>
                    <div className="flex items-end justify-between">
                      <span className="text-2xl font-bold text-gray-800">{item.value}</span>
                      <span className={`text-sm ${item.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                        {item.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recent Activities */}
            <motion.div 
              className="bg-white rounded-xl shadow-md p-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                  <Activity className="h-6 w-6 text-blue-600" />
                  Recent Activities
                </h2>
                <button className="text-blue-600 font-medium hover:text-blue-800">View All</button>
              </div>
              
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className={`p-2 rounded-full ${
                        activity.type === 'success' ? 'bg-green-100' :
                        activity.type === 'warning' ? 'bg-yellow-100' : 'bg-blue-100'
                      }`}>
                        {activity.type === 'success' ? (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        ) : activity.type === 'warning' ? (
                          <AlertTriangle className="h-5 w-5 text-yellow-600" />
                        ) : (
                          <Activity className="h-5 w-5 text-blue-600" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800">{activity.action}</h3>
                        <p className="text-sm text-gray-600">By {activity.user}</p>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">{activity.time}</div>
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
                  { name: "Manage Staff", icon: Users, color: "bg-blue-100 text-blue-600" },
                  { name: "Patient Records", icon: FileText, color: "bg-green-100 text-green-600" },
                  { name: "Inventory", icon: Package, color: "bg-purple-100 text-purple-600" },
                  { name: "Financials", icon: DollarSign, color: "bg-yellow-100 text-yellow-600" },
                  { name: "Reports", icon: FileText, color: "bg-red-100 text-red-600" },
                  { name: "Settings", icon: UserRound, color: "bg-gray-100 text-gray-600" }
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

            {/* Resource Allocation */}
            <motion.div 
              className="bg-white rounded-xl shadow-md p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6">Resource Allocation</h3>
              
              <div className="space-y-4">
                {[
                  { resource: "Medical Supplies", percentage: 85, status: "Adequate" },
                  { resource: "Medications", percentage: 72, status: "Good" },
                  { resource: "Equipment", percentage: 92, status: "Excellent" },
                  { resource: "Staff", percentage: 98, status: "Optimal" }
                ].map((resource, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">{resource.resource}</span>
                      <span className="text-gray-600">{resource.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          resource.percentage > 80 ? 'bg-green-600' : 
                          resource.percentage > 60 ? 'bg-yellow-500' : 'bg-red-600'
                        }`} 
                        style={{ width: `${resource.percentage}%` }}
                      ></div>
                    </div>
                    <div className="text-right text-sm text-gray-500 mt-1">{resource.status}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Alerts */}
            <motion.div 
              className="bg-red-50 border border-red-200 rounded-xl p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                <Warning className="h-6 w-6 text-red-600" />
                Critical Alerts
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <Warning className="h-5 w-5 text-red-600 mt-0.5 mr-2" />
                  <div>
                    <p className="font-medium text-red-800">Low Oxygen Supply</p>
                    <p className="text-sm text-red-700">Current level: 15% capacity</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Warning className="h-5 w-5 text-red-600 mt-0.5 mr-2" />
                  <div>
                    <p className="font-medium text-red-800">Power Outage Risk</p>
                    <p className="text-sm text-red-700">Backup generator maintenance scheduled</p>
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

export default AdminDashboard;