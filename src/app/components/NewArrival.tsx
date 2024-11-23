"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";


import BlackShirt from "@/app/assets/black-shirt.png";
import Pents from "@/app/assets/blue-jeans.png";
import CheckedShirt from "@/app/assets/check-shirt.png";
import OrangeShirt from "@/app/assets/orange-shirt.png";
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

function NewArrivals() {
  const products: Product[] = [
    {
      image: BlackShirt,
      title: "T-shirt with Tape Details",
      rating: 4.5,
      price: "$120",
    },
    {
      image: Pents,
      title: "Skinny Fit Jeans",
      rating: 3.5,
      price: "$240",
      oldPrice: "$260",
      discount: "-20%",
    },
    {
      image: CheckedShirt,
      title: "Checkered Shirt",
      rating: 4.0,
      price: "$180",
    },
    {
      image: OrangeShirt,
      title: "Sleeve Striped T-Shirt",
      rating: 5.0,
      price: "$130",
      oldPrice: "$160",
      discount: "-30%",
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

export default NewArrivals;
