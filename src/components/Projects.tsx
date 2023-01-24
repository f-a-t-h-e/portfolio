import { motion } from "framer-motion";
import React from "react";

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative text-center md:text-left xl:flex-row items-center
md:flex-row max-w-full h-screen justify-evenly xl:space-y-0 mx-auto overflow-hidden z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[1.3rem] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center
          justify-center p-20 md:p-44 h-screen"
            key={project}
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="./assets/app-circleci_pipelines_workflows.png"
              alt=""
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7ABBA]/50">
                  Case study {project} of {projects.length}
                </span>{" "}
                UPS Clone
              </h4>

              <p className="text-lg text-center md:text-left">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. In,
                similique accusamus nihil ratione blanditiis, quae, delectus,
                voluptatum magnam distinctio aperiam eos? Maxime, repellat.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7ABBA]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
};

export default Projects;
