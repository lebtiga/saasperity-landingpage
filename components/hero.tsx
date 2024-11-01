"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GlowingButton } from "@/components/ui/glowing-button";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center py-24 px-4 md:px-6 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 tracking-tight"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Launch Your SaaS MVP in 14 Days
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Transform your idea into a production-ready SaaS application with our expert development team.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center"
          >
            <GlowingButton
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="flex items-center gap-3 font-semibold">
                Get Started <ArrowRight className="w-5 h-5" />
              </span>
            </GlowingButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}