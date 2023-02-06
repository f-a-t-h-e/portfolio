import { motion } from "framer-motion";
import React from "react";
import Skill from "./Skill";
import {
  SiChakraui,
  SiCss3,
  SiGit,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiMaterialui,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiRedux,
  SiRust,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

type Props = {};

const skills = [
  {
    icon: SiJavascript,
    name: "JavaScript",
  },
  {
    icon: SiCss3,
    name: "CSS3",
  },
  {
    icon: SiHtml5,
    name: "HTML5",
  },
  {
    icon: SiTypescript,
    name: "TypeScript",
  },
  {
    icon: SiNestjs,
    name: "NestJS",
  },
  {
    icon: SiReact,
    name: "React",
  },
  {
    icon: SiNextdotjs,
    name: "NextJS",
  },
  {
    icon: SiGraphql,
    name: "Graphql",
  },
  {
    icon: SiRedux,
    name: "Redux",
  },
  {
    icon: SiPython,
    name: "Python",
  },
  {
    icon: SiPostgresql,
    name: "Postgresql",
  },
  {
    icon: SiJsonwebtokens,
    name: "Jsonwebtokens",
  },
  {
    icon: SiTailwindcss,
    name: "Tailwindcss",
  },
  {
    icon: SiStyledcomponents,
    name: "StyledComponents",
  },
  {
    icon: SiMaterialui,
    name: "MUI",
  },
  {
    icon: SiChakraui,
    name: "Chakraui",
  },
  {
    icon: SiRust,
    name: "Rust",
  },
  {
    icon: SiMongodb,
    name: "Mongodb",
  },
  {
    icon: SiMysql,
    name: "Mysql",
  },
  {
    icon: SiPostman,
    name: "Postman",
  },
  {
    icon: SiGit,
    name: "Git",
  },
];
const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative text-center items-center
    max-w-[2000px] xl:px-10 min-h-screen justify-evenly xl:space-y-0 mx-auto"
    >
      <h3 className="text-center uppercase tracking-[1.3rem] text-gray-500 text-2xl">
        Languages & Tools
      </h3>

      <div className="flex gap-5 flex-wrap max-w-full p-11">
        {skills.map((skill, i) => (
          <div className="w-[5rem] h-[5rem]" key={i}>
            <skill.icon className="w-full h-full" />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
