"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Shield, Users, Database, Gauge, Lock, BarChart } from "lucide-react";

const features = [
  {
    title: "Full-stack Development",
    description: "Complete frontend and backend implementation with modern technologies.",
    icon: Shield,
  },
  {
    title: "User Authentication",
    description: "Secure user authentication and authorization system.",
    icon: Users,
  },
  {
    title: "Database Architecture",
    description: "Scalable database design with optimal performance.",
    icon: Database,
  },
  {
    title: "API Integration",
    description: "Seamless third-party API integrations and webhooks.",
    icon: Gauge,
  },
  {
    title: "Security Features",
    description: "Industry-standard security practices and data protection.",
    icon: Lock,
  },
  {
    title: "Analytics System",
    description: "Built-in analytics and reporting capabilities.",
    icon: BarChart,
  },
];

export function Features() {
  return (
    <section className="py-24 relative">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">MVP Features</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full bg-card hover:bg-card/90 transition-colors border-border/50">
                <feature.icon className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}