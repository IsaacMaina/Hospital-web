import HeroSection from "@/components/ui/HeroSection";
import StatsSection from "@/components/ui/StatsSection";
import ServicesSection from "@/components/ui/ServicesSection";
import TestimonialsSection from "@/components/ui/TestimonialsSection";
import EmergencySection from "@/components/ui/EmergencySection";

export async function generateMetadata() {
  return {
    title: "MediCare Hospital - Advanced Healthcare Solutions",
    description: "Leading healthcare provider offering comprehensive medical services with state-of-the-art facilities and compassionate care.",
  };
}

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <TestimonialsSection />
      <EmergencySection />
    </main>
  );
}