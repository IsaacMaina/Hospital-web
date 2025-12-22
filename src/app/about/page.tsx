import { Metadata } from "next";
import AboutClient from "./AboutClient";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About Us - MediCare Hospital Kenya",
    description: "Learn about MediCare Hospital's mission, vision, and commitment to providing exceptional healthcare services in Kenya.",
  };
}

export default function AboutPage() {
  return <AboutClient />;
}