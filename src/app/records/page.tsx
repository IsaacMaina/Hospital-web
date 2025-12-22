import { Metadata } from "next";
import RecordsContent from "./RecordsContent";

export const metadata: Metadata = {
  title: "Medical Records - MediCare Hospital Kenya",
  description: "Access your medical records, test results, and health history securely at MediCare Hospital Kenya.",
};

export default function RecordsPage() {
  return <RecordsContent />;
}