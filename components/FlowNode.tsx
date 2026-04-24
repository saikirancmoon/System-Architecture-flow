"use client";

import { motion } from "framer-motion";

export default function FlowNode({ title }: { title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-lg rounded-2xl px-6 py-4 border text-center w-64"
    >
      <p className="font-semibold text-gray-700">{title}</p>
    </motion.div>
  );
}