"use client"
import React from "react";
import { AnimatePresence, Spring, motion } from "framer-motion";

export default function TypingEffect({ text }: { text: string }) {
  return (
    <>
      {text && text.split("").map((char, index) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: index / 10,
          }}
          key={index}
          className="text-inherit"
        >
          {char}
          {""}
        </motion.span>
      ))}
    </>
  );
}
