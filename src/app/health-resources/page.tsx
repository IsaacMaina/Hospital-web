import { Metadata } from "next";
import HealthResourcesContent from "./HealthResourcesContent";

export const metadata: Metadata = {
  title: "Health Resources - MediCare Hospital Kenya",
  description: "Access valuable health resources, educational materials, and wellness information at MediCare Hospital Kenya.",
};

export default function HealthResourcesPage() {
  return <HealthResourcesContent />;
}