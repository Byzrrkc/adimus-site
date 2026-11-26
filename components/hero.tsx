"use client";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Hello
    </motion.h1>
  );
}
