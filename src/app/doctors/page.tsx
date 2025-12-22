import { Metadata } from "next";
import DoctorsClient from "./DoctorsClient";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Our Doctors - MediCare Hospital Kenya",
    description: "Meet our team of experienced doctors and specialists committed to providing exceptional healthcare services in Kenya.",
  };
}

export default function DoctorsPage() {
  return <DoctorsClient />;
}