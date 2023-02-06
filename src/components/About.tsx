import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center "
    >
      <h3 className="absolute top-24 uppercase tracking-[1.3rem] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        src="/assets/photo.png"
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        className="w-56 h-56 md:h-96 xl:w=[500px] xl:h-[600px] md:w-64 relative 
        -mb-20 md:mb-0 flex-shrink-0 rounded-full md:rounded-lg object-cover"
        alt="Photo2"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className=" text-4xl font-semibold ">
          Here is a{" "}
          <span className="underline decoration-[#F7ABBA]/50">little</span>{" "}
          background
        </h4>

        <p className="text-base">
          I love making websites & platforms.
          <br />
          I enjoy coding & maths.
          <br />
        </p>
      </div>
    </motion.div>
  );
};

export default About;
