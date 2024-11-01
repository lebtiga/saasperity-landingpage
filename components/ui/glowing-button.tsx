"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "default" | "sm" | "lg";
  variant?: "default" | "outline";
  children: React.ReactNode;
}

export function GlowingButton({
  className,
  size = "default",
  variant = "default",
  children,
  ...props
}: GlowingButtonProps) {
  return (
    <motion.button
      className={cn(
        "relative group overflow-hidden rounded-full",
        "inline-flex items-center justify-center",
        "bg-primary text-primary-foreground",
        "transition-all duration-300 ease-out",
        {
          "px-6 py-3": size === "default",
          "px-4 py-2 text-sm": size === "sm",
          "px-8 py-4 text-lg": size === "lg",
          "border-2 border-primary bg-transparent hover:bg-primary/10": variant === "outline",
        },
        className
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 bg-primary/30 blur-xl"
        initial={{ opacity: 0, scale: 0.8 }}
        whileHover={{ opacity: 1, scale: 1.5 }}
        transition={{ duration: 0.4 }}
      />

      {/* Button content */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0.8 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>

      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        initial={{ x: "-100%", opacity: 0 }}
        whileHover={{ x: "100%", opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
    </motion.button>
  );
}