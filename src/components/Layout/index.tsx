import Head from "next/head";
import React from "react";
import Header from "../Header";

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
        className="bg-black text-white h-screen snap-mandatory snap-y 
    overflow-y-scroll z-0 overflow-x-hidden scroll-smooth 
    scrollbar scrollbar-track-gray-200/30 scrollbar-thumb-black"
      >
        <Header />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
