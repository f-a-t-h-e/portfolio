import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="hidden md:flex justify-center pt-5 sticky top-0 z-[21] mb-[40vh] h-0">
      <Link href="#about">
        <button className="navButton border-x-0">About</button>
      </Link>
      {/* <Link href="#experience">
        <button className="navButton">Experience</button>
      </Link> */}
      <Link href="#languages & tools">
        <button className="navButton">LANGUAGES & TOOLS</button>
      </Link>
      <Link href="#projects">
        <button className="navButton border-x-0">Projects</button>
      </Link>
    </nav>
  );
};

export default Navbar;
