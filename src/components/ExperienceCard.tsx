import { motion } from "framer-motion";
import { TbBrandCss3, TbBrandHtml5, TbBrandJavascript } from "react-icons/tb";
import React from "react";

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 
    hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src="/assets/photo.png"
        alt="image1"
        className="w-32 h-32  xl:w=[200px] xl:h-[200px]
        rounded-full object-cover object-top"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">BACKEND</h4>
        <p className="text-2xl font-bold mt-1">Myself</p>
        <div className="flex space-x-2 my-2 text-7xl">
          {/* TO_DO : Make these dynamic */}
          <TbBrandJavascript />
          <TbBrandCss3 />
          <TbBrandHtml5 />
        </div>
        <p className="uppercase py-5 text-gray-300 ">Started... - Ended...</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary points...</li>
          <li>Summary points...</li>
          <li>Summary points...</li>
          <li>Summary points...</li>
          <li>Summary points...</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
