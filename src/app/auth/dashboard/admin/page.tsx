import { Metadata } from "next";
import AdminDashboard from "./AdminDashboard";

export const metadata: Metadata = {
  title: "Admin Dashboard - MediCare Hospital Kenya",
  description: "Manage hospital operations, staff, finances, and resources in your administrative portal.",
};

export default function Page() {
  return <AdminDashboard />;
}