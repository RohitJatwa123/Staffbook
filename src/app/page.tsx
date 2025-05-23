'use client';

import { HeroSection } from "@/components/sections/Hero";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { Payment } from "@/components/sections/Payment";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Payment Section */}
      <Payment />


    </main>
  );
}
