import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import HeroBackground from "./HeroBackground";

type Props = {};

const Hero = (props: Props) => {
  const [text, helper] = useTypewriter({
    words: [
      "May Peace be upon you!",
      "I'm Fathy Osama",
      "I hope you enjoy this tour!",
    ],
    loop: 0,
    // onLoopDone: () => console.log(`loop completed after 3 runs.`),
    delaySpeed: 2000,
  });
  return (
    <div className="w-[100%]">
      <HeroBackground />
      <div className="relative flex justify-center items-center">
        <div className="absolute w-32 h-32">
          <Image
            className="rounded-full object-cover"
            src="/assets/photo.png"
            alt="Photo"
            fill
            sizes="(max-width: 768px) 6rem,
              (max-width: 1200px) 8rem,
              8rem"
          />
        </div>
      </div>

      <div className="flex items-center justify-center flex-col z-[1] relative mt-32">
        <h2 className="text-sm text-center uppercase text-[gold] pd-2 tracking-[1rem]">
          Fullstack developer
        </h2>
        <h1 className="text-5xl text-center lg:text-6xl font-semibold h-0">
          <span className="-mr-2">{text}</span>
          <Cursor cursorColor="#7ABBA" />
        </h1>
      </div>
    </div>
  );
};

export default Hero;
