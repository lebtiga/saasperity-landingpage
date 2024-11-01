"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Database, Globe, Server, Cloud } from "lucide-react";

const technologies = [
  {
    title: "Frontend",
    icon: Globe,
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Node.js", "PostgreSQL", "Redis"],
  },
  {
    title: "Cloud",
    icon: Cloud,
    items: ["AWS", "GCP", "Azure"],
  },
  {
    title: "Database",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "Redis"],
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function TechStack() {
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
          <h2 className="text-3xl md:text-4xl font-bold">Modern Tech Stack</h2>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {technologies.map((tech) => (
            <motion.div key={tech.title} variants={itemVariants}>
              <Card className="p-6 h-full bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors duration-300 border-border/50">
                <tech.icon className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-4">{tech.title}</h3>
                <ul className="space-y-2">
                  {tech.items.map((item) => (
                    <li key={item} className="text-muted-foreground hover:text-foreground transition-colors">
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}