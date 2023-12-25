import React from "react";
import MobileHeader from "../components/layout/MobileHeader";
import DesktopHeader from "../components/layout/DesktopHeader";
import Footer from "../components/layout/Footer";
import Image from "next/image";

const comingsoon = () => {
  return (
    <>
      <DesktopHeader bgColor="bg-white" textColor="text-gray-800" />
      <MobileHeader color="cyan" />
      <div className="flex flex-col h-screen justify-center items-center">
        <h1 className="text-gray-700 text-4xl font-bold">Coming Soon</h1>

        <Image
          src="/coming-soon.gif"
          alt="coming soon"
          width={600}
          height={600}
        />
      </div>
      <Footer />
    </>
  );
};

export default comingsoon;
