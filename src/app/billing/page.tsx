import { Metadata } from "next";
import BillingClient from "./BillingClient";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Billing & Insurance - MediCare Hospital Kenya",
    description: "Information about billing, insurance, and payment options at MediCare Hospital in Kenya.",
  };
}

export default function BillingPage() {
  return <BillingClient />;
}