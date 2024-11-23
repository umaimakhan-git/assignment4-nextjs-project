"use client";
import React from "react";
import Casual from "@/app/assets/bottom1.png";
import Formal from "@/app/assets/bottom2.png";
import Party from "@/app/assets/bottom3.png";
import Gym from "@/app/assets/bottom4.png";
import Image from "next/image";

function DressStyle() {
  return (
    <div className="w-full min-h-screen rounded-[20px] bg-[#F0F0F0] mx-5 flex flex-col items-center pb-10">
      <h1 className="text-[#000000] leading-[36px] font-bold text-[32px] text-center mt-10 lg:w-[687px] lg:text-[48px] lg:leading-[57.6px] lg:h-[58px]">
        BROWSE BY DRESS STYLE
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10 justify-items-center">
        {/* Casual */}
        <div className="relative w-[310px] h-[190px] lg:w-[484px] lg:h-[289px] transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
          <Image
            src={Casual}
            alt="Casual Wear"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute top-[20px] left-[20px] lg:top-[25px] lg:left-[36px] text-[#000000] font-bold text-[24px] leading-[32px] sm:text-[28px] sm:leading-[40px] lg:text-[36px] lg:leading-[48.6px]">
            Casual
          </div>
        </div>
        {/* Formal */}
        <div className="relative w-[310px] h-[190px] lg:w-[584px] lg:h-[289px] transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
          <Image
            src={Formal}
            alt="Formal Wear"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute top-[20px] left-[20px] lg:top-[25px] lg:left-[36px] text-[#000000] font-bold text-[24px] leading-[32px] sm:text-[28px] sm:leading-[40px] lg:text-[36px] lg:leading-[48.6px]">
            Formal
          </div>
        </div>
        {/* Party */}
        <div className="relative w-[310px] h-[190px] lg:w-[584px] lg:h-[289px] transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
          <Image
            src={Party}
            alt="Party Wear"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute top-[20px] left-[20px] lg:top-[25px] lg:left-[36px] text-[#000000] font-bold text-[24px] leading-[32px] sm:text-[28px] sm:leading-[40px] lg:text-[36px] lg:leading-[48.6px]">
            Party
          </div>
        </div>
        {/* Gym */}
        <div className="relative w-[310px] h-[190px] lg:w-[484px] lg:h-[289px] transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
          <Image
            src={Gym}
            alt="Gym Wear"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute top-[20px] left-[20px] lg:top-[25px] lg:left-[36px] text-[#000000] font-bold text-[24px] leading-[32px] sm:text-[28px] sm:leading-[40px] lg:text-[36px] lg:leading-[48.6px]">
            Gym
          </div>
        </div>
      </div>
    </div>
  );
};

export default DressStyle;
