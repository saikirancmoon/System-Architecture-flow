"use client";

import { motion } from "framer-motion";

export default function FlowLine() {
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: 40 }}
      transition={{ duration: 0.5 }}
      className="w-[2px] bg-gray-400"
    />
  );
}