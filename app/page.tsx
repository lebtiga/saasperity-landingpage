import { Hero } from "@/components/hero";
import { TechStack } from "@/components/tech-stack";
import { Pricing } from "@/components/pricing";
import { Features } from "@/components/features";
import { Timeline } from "@/components/timeline";
import { ContactForm } from "@/components/contact-form";
import { TrustIndicators } from "@/components/trust-indicators";
import { Footer } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";
import { StartupGame } from "@/components/startup-game";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <div className="max-w-[1400px] mx-auto pt-16">
        <Hero />
        <div className="space-y-24 px-4 md:px-6">
          <TechStack />
          <Features />
          <Timeline />
          <Pricing />
          <TrustIndicators />
          <ContactForm />
          <StartupGame />
          <Footer />
        </div>
      </div>
    </main>
  );
}