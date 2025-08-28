import React from "react";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="w-full">
      <Image
        src="/imagethree.png"
        alt="Hero banner"
        width={1920}   // replace with your actual image width
        height={600}   // replace with your actual image height
        priority       // load immediately (good for hero sections)
        quality={90}   // compress but keep quality
        className="w-full h-auto"
      />
    </div>
  );
};
