"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default function ParallaxScroll({
  children,
  distance,
}: {
  children: React.ReactNode;
  distance: number;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, distance);

  return (
    <motion.div style={{ y }} ref={ref}>
      {children}
    </motion.div>
  );
}
