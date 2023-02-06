import { motion } from "framer-motion";
import React from "react";
type Props = {};

const HeroBackground = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="bag absolute border border-yellow-500 rounded-full h-[200px] w-[200px]  animate-ping" />
      <div className="absolute border border-yellow-800 rounded-full h-[300px] w-[300px] " />
      <div className="absolute border border-yellow-900 rounded-full h-[500px] w-[500px]  " />
      <div className="absolute border border-yellow-800 rounded-full opacity-20 h-[650px] w-[650px]  animate-pulse" />
      <div className="absolute border border-yellow-900 rounded-full h-[800px] w-[800px]  " />
      <div className="" />
    </motion.div>
  );
};

export default HeroBackground;
