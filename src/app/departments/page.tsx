import { Metadata } from "next";
import DepartmentsClient from "./DepartmentsClient";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Departments & Services - MediCare Hospital Kenya",
    description: "Explore our comprehensive medical departments and services at MediCare Hospital, offering specialized care across multiple disciplines.",
  };
}

export default function DepartmentsPage() {
  return <DepartmentsClient />;
}