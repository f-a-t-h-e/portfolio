import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="hidden md:flex justify-center pt-5 sticky top-0 z-[21] mb-[40vh] h-0">
      <Link href="#about">
        <button className="heroButton">About</button>
      </Link>
      <Link href="#experience">
        <button className="heroButton">Experience</button>
      </Link>
      <Link href="#skills">
        <button className="heroButton">Skills</button>
      </Link>
      <Link href="#projects">
        <button className="heroButton">Projects</button>
      </Link>
    </nav>
  );
};

export default Navbar;
