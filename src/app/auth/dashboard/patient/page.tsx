import { Metadata } from "next";
import PatientDashboard from "./PatientDashboard";

export const metadata: Metadata = {
  title: "Patient Dashboard - MediCare Hospital Kenya",
  description: "Access your health information, appointments, and medical records securely in your patient portal.",
};

export default function Page() {
  return <PatientDashboard />;
}