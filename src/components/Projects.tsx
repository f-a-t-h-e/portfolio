import { motion } from "framer-motion";
import React from "react";
import { IconType } from "react-icons";
import Card from "./Card";

const projects: {
  cover: string;
  title: string;
  tools: { icon: IconType; name: string }[];
  details: string;
}[] = [];

type Props = {};

const Projects = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative text-center items-center
max-w-full justify-evenly mx-auto z-0 p-[0.5rem]"
    >
      <h3 className="uppercase tracking-[1.3rem] text-gray-500 text-2xl mb-10">
        Projects
      </h3>
      <div className="w-full absolute -top-[10rem] bg-[#F7ABBA]/10 left-0 h-[500px] -skew-y-12"></div>

      <div className="flex gap-[2.5rem] flex-wrap justify-center">
        {projects.map((project, i) => (
          <Card cover="a" key={i} />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
