import { Metadata } from "next";
import DoctorDashboard from "./DoctorDashboard";

export const metadata: Metadata = {
  title: "Doctor Dashboard - MediCare Hospital Kenya",
  description: "Access your schedule, patient records, and medical tools in your secure doctor portal.",
};

export default function Page() {
  return <DoctorDashboard />;
}