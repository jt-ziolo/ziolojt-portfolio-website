"use client";

import { motion, MotionConfig } from "framer-motion";

/**
 * Page transition using framer motion
 * This transition/animation is page-wide and should be simple
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75, delay: 0.5 }}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}
