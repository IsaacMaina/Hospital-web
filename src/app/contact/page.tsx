import { Metadata } from "next";
import ContactClient from "./ContactClient";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Contact Us - MediCare Hospital Kenya",
    description: "Contact MediCare Hospital Kenya for appointments, inquiries, or emergency services. Find our location and contact information.",
  };
}

export default function ContactPage() {
  return <ContactClient />;
}