import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  return (
    <header
      className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5 text-gray-400 
    text-3xl"
    >
      <motion.div className="flex flex-row gap-2 items-center">
        <Link
          href={{ pathname: "https://www.linkedin.com/in/fathy-osama/" }}
          target="_blank"
        >
          <FaLinkedinIn className="hover:text-white" />
        </Link>

        <Link
          href={{ pathname: "https://www.github.com/f-a-t-h-e/" }}
          target="_blank"
        >
          <FaGithub className="hover:text-white" />
        </Link>
      </motion.div>

      <motion.div className="flex flex-row items-center hover:text-white cursor-pointer">
        <FiMail />
        <p className="uppercase hidden md:inline-flex text-sm ">Get in touch</p>
      </motion.div>
    </header>
  );
};

export default Header;
