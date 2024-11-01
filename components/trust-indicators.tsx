"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Flag, Shield, Clock, Users } from "lucide-react";

const indicators = [
  {
    icon: Flag,
    title: "US-Based Leadership",
    description: "Led by senior Silicon Valley developers",
  },
  {
    icon: Shield,
    title: "Secure Development",
    description: "Following industry security standards",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "14-day completion guarantee",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Direct access to development team",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export function TrustIndicators() {
  return (
    <section className="py-24 bg-muted/50 rounded-3xl">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Why Choose Us</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {indicators.map((indicator) => (
            <motion.div key={indicator.title} variants={itemVariants}>
              <Card className="p-6 text-center h-full bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 border-border/50">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <indicator.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{indicator.title}</h3>
                <p className="text-muted-foreground">{indicator.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}