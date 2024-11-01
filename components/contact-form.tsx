"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { GlowingButton } from "@/components/ui/glowing-button";

export function ContactForm() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setLoading(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="py-24 bg-muted/50 rounded-3xl" id="contact">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Talk</h2>
          <p className="text-muted-foreground">
            Ready to launch your SaaS? Get in touch with our team.
          </p>
        </motion.div>
        
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-md mx-auto space-y-6"
        >
          <div>
            <Input 
              placeholder="Your Name" 
              required 
              className="bg-background/50 backdrop-blur-sm border-border/50"
            />
          </div>
          <div>
            <Input 
              type="email" 
              placeholder="Email" 
              required 
              className="bg-background/50 backdrop-blur-sm border-border/50"
            />
          </div>
          <div>
            <Textarea 
              placeholder="Tell us about your project"
              className="min-h-[150px] bg-background/50 backdrop-blur-sm border-border/50"
              required
            />
          </div>
          <GlowingButton type="submit" disabled={loading} className="w-full">
            {loading ? "Sending..." : "Let's Build Something Great"}
          </GlowingButton>
        </motion.form>
      </div>
    </section>
  );
}