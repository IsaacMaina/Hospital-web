import { Metadata } from "next";
import AppointmentClient from "./AppointmentClient";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Book Appointment - MediCare Hospital Kenya",
    description: "Schedule your appointment with our specialists at MediCare Hospital. Easy online booking for all medical services.",
  };
}

export default function AppointmentPage() {
  return <AppointmentClient />;
}