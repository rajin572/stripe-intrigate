"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

const revelVariants = {
  hidden: {
    opacity: 0.5,
    y: "100%",
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
const slideVarients = {
  hidden: {
    left: 0,
  },
  visible: {
    left: "100%",
  },
};

const Revel = ({ children, className, delay = 0, duration = 1 }) => {
  const ref = useRef(null);
  const isInview = useInView(ref);

  return (
    <div ref={ref} className={cn("relative w-fit overflow-hidden", className)}>
      <motion.div
        variants={revelVariants}
        initial="hidden"
        animate={isInview ? "visible" : "hidden"}
        transition={{ duration, delay }}
        className="-z-10"
      >
        {children}
      </motion.div>
      {/* <motion.div
        variants={slideVarients}
        initial="hidden"
        whileInView={"visible"}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className="absolute top-0 left-0 bottom-0 right-0 bg-[#00ffc8] z-20"
      /> */}
    </div>
  );
};

export default Revel;
