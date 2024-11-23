"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";

// Components
import DressStyle from "./components/DressStyle";
import Footer from "./components/Footer";
import NewArrival from "./components/NewArrival";
import Reviews from "./components/Reviews";
import TopSelling from "./components/TopSelling";

// Assets
import X from "@/app/assets/x.png";
import Hamburger from "@/app/assets/Hamburger.png";
import Search from "@/app/assets/search.png";
import CartUser from "@/app/assets/cartuser.png";
import Main from "@/app/assets/main.png";
import BigVector from "@/app/assets/big-star.png";
import SmallVector from "@/app/assets/small-star.png";
import Versace from "@/app/assets/versace.png";
import Zara from "@/app/assets/zara-logo-1 1.png";
import Gucci from "@/app/assets/gucci-logo-1 1.png";
import CalvinKlein from "@/app/assets/Calvin.png";
import Prada from "@/app/assets/prada-logo-1 1.png";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="w-full min-h-screen bg-[#ffffff] mx-auto relative">
        {/* Discount Announcement */}
        <div className="bg-[#000000] text-[#ffffff] py-2 px-4 flex justify-between items-center">
          <p className="font-normal text-[12px] text-center mx-auto">
            Sign up and get 20% off on your first order.
            <span className="font-medium underline cursor-pointer ml-2">
              Sign Up Now
            </span>
          </p>
        </div>

        {/* Header Section */}
        <header className="flex items-center justify-between px-4 lg:px-12 py-6">
          {/* Hamburger Menu for Mobile */}
          <div className="lg:hidden">
            <Image
              src={Hamburger}
              alt="Hamburger Icon"
              className="w-6 h-6 cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>

          {/* Logo */}
          <div className="font-bold text-[25.2px] lg:text-[32px] leading-[30.24px]">
            SHOP.CO
          </div>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex gap-8 items-center font-normal text-[16px]">
            <li className="hover:underline hover:scale-105 transition duration-200">
              Shop
            </li>
            <li className="hover:underline hover:scale-105 transition duration-400">
              On Sale
            </li>
            <li className="hover:underline hover:scale-105 transition duration-400">
              New Arrivals
            </li>
            <li className="hover:underline hover:scale-105 transition duration-400">
              Brands
            </li>
          </ul>

          {/* Desktop Search Bar */}
          <div className="hidden lg:flex w-[477px] h-[48px] px-4 py-3 gap-3 bg-[#F0F0F0] rounded-full items-center hover:shadow-lg hover:scale-105 transition-all duration-300">
            <Image src={Search} alt="Search Icon" />
            <p className="text-[#655e5e]">Search for products...</p>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <Image src={Search} alt="Search Icon" className="w-6 h-6 lg:hidden" />
            <Image src={CartUser} alt="Cart Icon" className="w-14 h-6" />
          </div>
        </header>

        {/* Mobile Navigation Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-[#242323] text-white z-50 transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300`}
        >
          <div className="flex justify-between items-center px-6 py-4">
            <div className="font-bold text-[25px]">SHOP.CO</div>
            <div
              className="cursor-pointer hover:scale-125 transition-transform"
              onClick={() => setMenuOpen(false)}
            >
              <Image src={X} alt="Close Icon" />
            </div>
          </div>
          <ul className="flex flex-col items-center py-10 space-y-6 font-medium text-xl">
            <li className="hover:text-orange-300 cursor-pointer">Shop</li>
            <li className="hover:text-orange-300 cursor-pointer">On Sale</li>
            <li className="hover:text-orange-300 cursor-pointer">New Arrivals</li>
            <li className="hover:text-orange-300 cursor-pointer">Brands</li>
          </ul>
        </div>

        {/* Hero Section */}
        <div className="bg-[#F2F0F1] w-full h-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 lg:px-12 py-6">
          {/* Text Section */}
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-[#000000] font-bold text-[40px] mb-4 lg:text-[68px]">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="text-[#000000] text-opacity-60 text-[16px] mb-6">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense of style.
            </p>
            <button className="w-full lg:w-[210px] h-[52px] rounded-full bg-[#000000] text-[#ffffff] font-medium text-[16px] hover:scale-105 transition-all mb-8">
              Shop Now
            </button>
          </div>

          {/* Image Section */}
          <div className="relative flex items-center group">
            <Image
              src={Main}
              alt="Trendy fashionable couple posing"
              width={390}
              height={448}
              className="object-cover w-full h-auto"
            />
            <span className="absolute w-[50px] h-[50px] top-[20%] right-[10%] group-hover:scale-110 transition-all">
              <Image src={BigVector} alt="Star Icon" />
            </span>
            <span className="absolute w-[30px] h-[30px] bottom-[45%] left-[40px] group-hover:scale-110 transition-all">
              <Image src={SmallVector} alt="Star Icon" />
            </span>
          </div>
        </div>

        
        {/* Brand Logos Section */}
        <div className="h-[146px] w-full bg-[#000000] grid grid-cols-3 gap-4 items-center lg:h-[122px] lg:grid-cols-5 py-8">
          {[Versace, Zara, Gucci, Prada, CalvinKlein].map((logo, idx) => (
            <div
              key={idx}
              className="mx-auto group relative w-[100px] lg:w-[150px]"
            >
              <Image
                src={logo}
                alt={`Brand Logo ${idx}`}
                className="transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:brightness-125"
              />
            </div>
          ))}
        </div>
      </div>

      
      <NewArrival />
      <TopSelling />
      <DressStyle />
      <Reviews />
      <Footer />
    </>
  );
};

export default Home;
