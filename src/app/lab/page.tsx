import { Metadata } from "next";
import LabClient from "./LabClient";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Lab & Diagnostics - MediCare Hospital Kenya",
    description: "Comprehensive laboratory and diagnostic services at MediCare Hospital, offering accurate testing and results with advanced technology.",
  };
}

export default function LabPage() {
  return <LabClient />;
}