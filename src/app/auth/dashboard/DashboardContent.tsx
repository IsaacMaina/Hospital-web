"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { motion } from "framer-motion";

const DashboardContent = () => {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        // Redirect to login if not authenticated
        router.push("/auth/login");
      } else {
        // Redirect based on user role
        switch (user.role) {
          case "patient":
            router.push("/auth/dashboard/patient");
            break;
          case "doctor":
            router.push("/auth/dashboard/doctor");
            break;
          case "admin":
            router.push("/auth/dashboard/admin");
            break;
          default:
            router.push("/auth/dashboard/patient"); // Default to patient dashboard
        }
      }
    }
  }, [user, loading, router]);

  // Show loading state while determining redirect
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Redirecting...</h2>
        <p className="text-gray-600">Based on your role, you'll be redirected to the appropriate dashboard.</p>
      </motion.div>
    </div>
  );
};

export default DashboardContent;