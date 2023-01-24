import { motion } from "framer-motion";
import React from "react";
import Skill from "./Skill";

type Props = {};

const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative text-center md:text-left xl:flex-row items-center
    md:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto"
    >
      <h3 className="absolute top-24 uppercase tracking-[1.3rem] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-32 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency.
      </h3>

      <div className="grid grid-cols-4 gap-5 ">
        <Skill direction={Math.random() > 0.5} />
        <Skill direction={Math.random() > 0.5} />
        <Skill direction={Math.random() > 0.5} />
        <Skill direction={Math.random() > 0.5} />
        <Skill direction={Math.random() > 0.5} />
      </div>
    </motion.div>
  );
};

export default Skills;
