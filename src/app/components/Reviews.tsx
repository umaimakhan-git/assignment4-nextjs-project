"use client";
import React from "react";
import Image from "next/image";
import greenTick from "@/app/assets/greenTick.png";
import fiveStars from "@/app/assets/5stars.png";

function Reviews() {
    return (
        <div className="w-full min-h-screen rounded-[20px] relative">
            <h1 className="text-[#000000] absolute leading-[36px] left-[16px] font-bold text-[32px] w-[286px] h-[72px] mt-10 lg:pt-10 lg:w-[654px] lg:text-[48px] lg:leading-[57.6px] lg:h-[58px] lg:left-[100px]">
                OUR HAPPY CUSTOMERS
            </h1>

            <div className="flex flex-wrap justify-center gap-[20px] mt-10 absolute top-[130px] left-[16px] lg:left-[100px] lg:top-[200px]">
                
                {/* 1st customer */}
                <div className="w-[358px] h-[186.19px] rounded-[20px] p-6 border-[#000000] border-opacity-10 border lg:w-[400px] lg:h-[240px] lg:p-8 mb-5 lg:mb-0 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"> 
                    
                    <div className="flex flex-col gap-[22px]">
                        
                        <div className="flex gap-[5.5px] lg:gap-[6.49px] ">
                            <Image
                                src={fiveStars}
                                alt="Five Stars Rating"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <h3 className="flex items-center font-bold text-[16px] leading-[22px] lg:text-[20px] lg:leading-[24px]">
                                Sarah M.
                                <span className="ml-2 w-[15.44px] h-[15.44px] lg:w-[24px] lg:h-[24px]">
                                    <Image src={greenTick} alt="Verified User Tick" className="w-full h-full object-contain" /> 
                                </span>
                            </h3>
                            <p className="font-normal text-[14px] leading-[20px] opacity-60 lg:text-[16px] lg:leading-[22px]">
                                &quot;I&apos;m blown away by the quality and style of the clothes I received from Shop.co.
                                From casual wear to elegant dresses, every piece I&apos;ve bought has exceeded my expectations.&quot;
                            </p>
                        </div>
                    </div>
                </div>

                {/* 2nd customer */}
                <div className="w-[358px] h-[186.19px] rounded-[20px] p-6 border-[#000000] border-opacity-10 border lg:w-[400px] lg:h-[240px] lg:p-8 mb-5 lg:mb-0 hidden lg:block hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"> 
                    <div className="flex flex-col gap-[22px]">
                        <div className="flex gap-[5.5px] lg:gap-[6.49px]">
                            <Image
                                src={fiveStars}
                                alt="Five Stars Rating"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <h3 className="flex items-center font-bold text-[16px] leading-[22px] lg:text-[20px] lg:leading-[24px]">
                                James L.
                                <span className="ml-2 w-[15.44px] h-[15.44px] lg:w-[24px] lg:h-[24px]">
                                    <Image src={greenTick} alt="Verified User Tick" className="w-full h-full object-contain" /> 
                                </span>
                            </h3>
                            <p className="font-normal text-[14px] leading-[20px] opacity-60 lg:text-[16px] lg:leading-[22px]">
                                &quot;As someone who&apos;s always on the lookout for unique fashion pieces, I&apos;m thrilled to have stumbled upon Shop.co.
                                The selection of clothes is not only diverse but also on-point with the latest trends.&quot;
                            </p>
                        </div>
                    </div>
                </div>

                {/* 3rd customer */}
                <div className="w-[358px] h-[186.19px] rounded-[20px] p-6 border-[#000000] border-opacity-10 border lg:w-[400px] lg:h-[240px] lg:p-8 mb-5 lg:mb-0 hidden lg:block hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
                    <div className="flex flex-col gap-[22px]">
                        <div className="flex gap-[5.5px] lg:gap-[6.49px]">
                            <Image
                                src={fiveStars}
                                alt="Five Stars Rating" 
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <h3 className="flex items-center font-bold text-[16px] leading-[22px] lg:text-[20px] lg:leading-[24px]">
                                Emma W.
                                <span className="ml-2 w-[15.44px] h-[15.44px] lg:w-[24px] lg:h-[24px]">
                                    <Image src={greenTick} alt="Verified User Tick" className="w-full h-full object-contain" />  
                                </span>
                            </h3>
                            <p className="font-normal text-[14px] leading-[20px] opacity-60 lg:text-[16px] lg:leading-[22px]">
                                &quot;Shop.co has become my go-to for stylish, comfortable clothing that suits all my needs. Their customer service is unmatched!&quot;
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
