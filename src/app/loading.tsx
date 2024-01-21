"use client"
import { motion } from "framer-motion";

const Layout = ({}) => (
  <motion.div
  className="w-full h-dvh"
    initial={{ x: 300, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: 300, opacity: 0 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20,
    }}
  >
  
  </motion.div>
);
export default Layout;