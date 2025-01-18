import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const AnimatedUnderline = ({ className = "" }) => {
  return (
    <div>
      <motion.p
        className={cn("w-32 h-1 rounded-xl bg-secondary-color", className)}
        initial={{ x: -20 }}
        animate={{ x: 20 }}
        transition={{
          delay: 1.5,
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      ></motion.p>
    </div>
  );
};

export default AnimatedUnderline;
