import { Metadata } from "next";
import { Suspense } from "react";
import AuthContent from "./AuthContent";

export const metadata: Metadata = {
  title: "Patient Portal - MediCare Hospital Kenya",
  description: "Access your patient portal at MediCare Hospital to manage appointments, view records, and connect with healthcare providers.",
};

export default function AuthPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <AuthContent />
    </Suspense>
  );
}