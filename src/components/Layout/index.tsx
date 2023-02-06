import Head from "next/head";
import React from "react";
import Header from "../Header";
import Hero from "../Hero";
import Navbar from "../Navbar";

type Props = {
  children: React.ReactNode;
  title?: string;
  description?: string;
};

const Layout = ({ children, title, description }: Props) => {
  return (
    <>
      <Head>
        <title>{title || "Fathy Osama"}</title>
        <meta
          name="description"
          content={description || "Full stack developer"}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="bg-black text-white h-screen 
    overflow-y-scroll z-0 overflow-x-hidden scroll-smooth 
    md:scrollbar scrollbar-track-gray-200/30 scrollbar-thumb-black selection:bg-[#322a0074] selection:text-white"
      >
        <Header />
        {/* Hero */}
        <section
          id="hero"
          className="flex justify-center items-center mt-[50vh] h-[1px] w-screen snap-start mb-[50vh] md:mb-32"
        >
          <Hero />
        </section>
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
