"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const timelineSteps = [
  {
    day: "Days 1-2",
    title: "Planning & Setup",
    tasks: ["Requirements gathering", "Architecture design", "Project setup"],
  },
  {
    day: "Days 3-6",
    title: "Core Development",
    tasks: ["Database implementation", "API development", "Authentication system"],
  },
  {
    day: "Days 7-10",
    title: "Frontend & Features",
    tasks: ["UI implementation", "Feature development", "API integration"],
  },
  {
    day: "Days 11-14",
    title: "Testing & Launch",
    tasks: ["Quality assurance", "Performance optimization", "Deployment"],
  },
];

export function Timeline() {
  return (
    <section className="py-24 bg-muted/50 rounded-3xl relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Project Timeline</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">
          {timelineSteps.map((step, index) => (
            <motion.div
              key={step.day}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="p-6 relative bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors duration-300 border-border/50">
                  {index !== timelineSteps.length - 1 && (
                    <motion.div
                      className="absolute left-1/2 bottom-0 w-px h-8 bg-primary/20"
                      initial={{ height: 0 }}
                      whileInView={{ height: 32 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    />
                  )}
                  
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-primary/10 px-4 py-2 rounded-full text-primary font-semibold self-start"
                    >
                      {step.day}
                    </motion.div>
                    
                    <div className="flex-1">
                      <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl font-semibold mb-4"
                      >
                        {step.title}
                      </motion.h3>
                      
                      <ul className="space-y-3">
                        {step.tasks.map((task, taskIndex) => (
                          <motion.li
                            key={task}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + taskIndex * 0.1 }}
                            className="flex items-center gap-2 group"
                          >
                            <motion.div
                              whileHover={{ scale: 1.2, rotate: 360 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <CheckCircle className="w-5 h-5 text-primary group-hover:text-primary/80 transition-colors" />
                            </motion.div>
                            <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                              {task}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}