import { motion } from "framer-motion";
import React from "react";
import { IconType, IconBase, GenIcon } from "react-icons";

type Props = {
  direction: boolean;
  icon: IconType;
  name: string;
};

const Skill = ({ direction, icon: Icon, name }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          x: direction ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32
        filter group-hover:grayscale transition duration-300 ease-in-out"
      >
        <Icon className="w-full h-full" />
      </motion.div>
    </div>
  );
};

export default Skill;
