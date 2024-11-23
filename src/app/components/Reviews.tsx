"use client";
import React from "react";
import Image from "next/image";
import greenTick from "@/app/assets/greenTick.png";
import fiveStars from "@/app/assets/5stars.png";

function Reviews() {
    return (
        <div className="w-full relative px-4 lg:px-20 py-6 lg:py-10">
            {/* Title */}
            <h1 className="text-black font-bold text-2xl lg:text-4xl mb-6 lg:mb-10">
                OUR HAPPY CUSTOMERS
            </h1>

            {/* Reviews container */}
            <div className="flex flex-col lg:flex-row lg:gap-8">
                {/* 1st customer */}
                <div className="w-full lg:w-1/3 p-6 rounded-2xl border border-black/10 hover:shadow-lg transition-transform duration-300 hover:scale-105">
                    <div className="flex flex-col gap-4">
                        <Image src={fiveStars} alt="Five Stars Rating" />
                        <div>
                            <h3 className="flex items-center font-bold text-lg">
                                Sarah M.
                                <span className="ml-2 w-4 h-4 lg:w-6 lg:h-6">
                                    <Image src={greenTick} alt="Verified User Tick" />
                                </span>
                            </h3>
                            <p className="text-sm lg:text-base text-gray-600 mt-2">
                                &quot;I&apos;m blown away by the quality and style of the clothes I received from Shop.co.
                                From casual wear to elegant dresses, every piece I&apos;ve bought has exceeded my expectations.&quot;
                            </p>
                        </div>
                    </div>
                </div>

                {/* 2nd customer */}
                <div className="hidden lg:block w-full lg:w-1/3 p-6 rounded-2xl border border-black/10 hover:shadow-lg transition-transform duration-300 hover:scale-105">
                    <div className="flex flex-col gap-4">
                        <Image src={fiveStars} alt="Five Stars Rating" />
                        <div>
                            <h3 className="flex items-center font-bold text-lg">
                                James L.
                                <span className="ml-2 w-4 h-4 lg:w-6 lg:h-6">
                                    <Image src={greenTick} alt="Verified User Tick" />
                                </span>
                            </h3>
                            <p className="text-sm lg:text-base text-gray-600 mt-2">
                                &quot;As someone who&apos;s always on the lookout for unique fashion pieces, I&apos;m thrilled to have stumbled upon Shop.co.
                                The selection of clothes is not only diverse but also on-point with the latest trends.&quot;
                            </p>
                        </div>
                    </div>
                </div>

                {/* 3rd customer */}
                <div className="hidden lg:block w-full lg:w-1/3 p-6 rounded-2xl border border-black/10 hover:shadow-lg transition-transform duration-300 hover:scale-105">
                    <div className="flex flex-col gap-4">
                        <Image src={fiveStars} alt="Five Stars Rating" />
                        <div>
                            <h3 className="flex items-center font-bold text-lg">
                                Emma W.
                                <span className="ml-2 w-4 h-4 lg:w-6 lg:h-6">
                                    <Image src={greenTick} alt="Verified User Tick" />
                                </span>
                            </h3>
                            <p className="text-sm lg:text-base text-gray-600 mt-2">
                                &quot;Shop.co has become my go-to for stylish, comfortable clothing that suits all my needs. Their customer service is unmatched!&quot;
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reviews;
