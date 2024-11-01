"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function AnimatedLogo() {
  const letterVariants = {
    initial: { y: 20, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    }),
  };

  const text = "SaaSperity";
  const firstPart = text.slice(0, 4); // "SaaS"
  const secondPart = text.slice(4); // "perity"

  return (
    <Link href="/">
      <motion.div
        className="flex items-center gap-1 select-none"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex items-baseline">
          {firstPart.split("").map((letter, i) => (
            <motion.span
              key={`${letter}-${i}`}
              custom={i}
              variants={letterVariants}
              initial="initial"
              animate="animate"
              className="text-2xl font-bold text-primary"
            >
              {letter}
            </motion.span>
          ))}
          {secondPart.split("").map((letter, i) => (
            <motion.span
              key={`${letter}-${i + firstPart.length}`}
              custom={i + firstPart.length}
              variants={letterVariants}
              initial="initial"
              animate="animate"
              className="text-2xl font-bold text-foreground"
            >
              {letter}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </Link>
  );
}