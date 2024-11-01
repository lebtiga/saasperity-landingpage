"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const features = [
  "Full-stack development",
  "Database architecture",
  "User authentication",
  "Third-party API integration",
  "Analytics system",
  "Payment integration",
  "Deployment setup",
  "Basic documentation",
];

export function Pricing() {
  return (
    <section className="py-24">
      <div className="container px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Transparent Pricing</h2>
          <p className="text-muted-foreground">
            One simple package, everything you need to launch your SaaS MVP.
          </p>
        </div>

        <Card className="max-w-lg mx-auto p-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold">MVP Package</h3>
            <div className="mt-4 mb-6">
              <span className="text-4xl font-bold">$10,000</span>
              <span className="text-muted-foreground ml-2">/ project</span>
            </div>
          </div>

          <ul className="space-y-4 mb-8">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <Button 
            size="lg" 
            className="w-full"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Started
          </Button>
        </Card>
      </div>
    </section>
  );
}