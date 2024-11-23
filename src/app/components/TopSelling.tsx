"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import GreenLine from "@/app/assets/green-line.png";
import Orange from "@/app/assets/full-orange.png";
import Shorts from "@/app/assets/shorts.png";
import Black from "@/app/assets/black-paints.png";
import FullStar from "@/app/assets/fullStar.png";
import HalfStar from "@/app/assets/halfStar.png";

type Product = {
  image: string | StaticImageData;
  title: string;
  rating?: number;
  price: string;
  oldPrice?: string;
  discount?: string;
};

const generateStars = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= Math.floor(rating); i++) {
    stars.push(FullStar);
  }

  
  if (rating % 1 !== 0) {
    stars.push(HalfStar);
  }

  return stars;
};

function TopSelling() {
  const products: Product[] = [
    {
      image: GreenLine,
      title: "Vertical Striped Shirt",
      rating: 5.0,
      price: "$212",
      oldPrice: "$232",
      discount: "-20%",
    },
    {
      image: Orange,
      title: "Courage Graphic T-shirt",
      rating: 4.0,
      price: "$145",
    },
    {
      image: Shorts,
      title: "Loose Fit Bermuda Shorts",
      rating: 3.0,
      price: "$80",
    },
    {
      image: Black,
      title: "Faded Skinny Jeans",
      rating: 4.5,
      price: "$210",
    },
  ];

  return (
    <div className="relative py-8">
      <h2 className="font-bold text-3xl lg:text-4xl text-center hover:scale-110 transition duration-200">
        NEW ARRIVALS
      </h2>
      <div className="flex flex-wrap justify-evenly py-5 gap-5">
        {products.map((product, index) => (
          <div key={index} className="w-48 lg:w-72">
            <Image
              src={product.image}
              alt={product.title}
              className="rounded-2xl hover:scale-95"
              layout="responsive"
            />
            <p className="font-bold text-sm lg:text-lg mt-2 hover:scale-95 transition duration-200">
              {product.title}
            </p>
            <div className="flex items-center gap-1 mt-1">
              {/* Ratings */}
              {product.rating &&
                generateStars(product.rating).map((star, starIndex) => (
                  <Image
                    key={starIndex}
                    src={star}
                    alt={`Star ${starIndex + 1}`}
                    width={16}
                    height={16}
                  />
                ))}
              
              <span className="text-sm lg:text-base ml-1">
                {product.rating?.toFixed(1)}/
                <span className="opacity-60">5</span>
              </span>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <p className="font-bold text-lg lg:text-xl">{product.price}</p>
              {product.oldPrice && (
                <p className="text-sm lg:text-base text-gray-500 line-through">
                  {product.oldPrice}
                </p>
              )}
              {product.discount && (
                <button className="ml-2 bg-red-100 text-red-500 rounded-full text-xs px-2 py-1 hover:bg-red-500 hover:text-white transition duration-200">
                  {product.discount}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button className="border border-black px-6 py-2 rounded-full hover:bg-black hover:text-white hover:scale-110 transition duration-200">
          View All
        </button>
      </div>
      <div className="mt-10 w-full lg:w-4/5 mx-auto border-t"></div>
    </div>
  );
};

export default TopSelling;
