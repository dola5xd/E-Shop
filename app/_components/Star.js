"use client";
import { motion } from "framer-motion";

function Star({ className }) {
  return (
    <motion.svg
      width="104"
      height="104"
      viewBox="0 0 104 104"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatType: "loop",
      }}
      className={className}
    >
      <path
        d="M52 0C53.7654 27.955 76.0448 50.2347 104 52C76.0448 53.7654 53.7654 76.0448 52 104C50.2347 76.0448 27.955 53.7654 0 52C27.955 50.2347 50.2347 27.955 52 0Z"
        fill="black"
      />
    </motion.svg>
  );
}

export default Star;
