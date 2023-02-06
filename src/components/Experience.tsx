import { motion } from "framer-motion";
import React from "react";
import ExperienceCard from "./ExperienceCard";

type Props = {};

const Experience = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center
       overflow-hidden md:text-left 
    px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="uppercase tracking-[1.3rem] text-gray-500 text-2xl">
        Experience
      </h3>

      <div
        className="w-[600px] md:w-[700px] xl:w-[1000px] flex space-x-5 overflow-x-scroll p-10 
      snap-x snap-mandatory scroll-smooth 
      scrollbar scrollbar-track-gray-200/30 scrollbar-thumb-black"
      >
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
};

export default Experience;
