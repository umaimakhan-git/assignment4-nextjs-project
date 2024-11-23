"use client";
import React from "react";
import Image from "next/image";

import Envelope from "@/app/assets/envlp.png";
import Twitter from "@/app/assets/twitter2.png";
import Instagram from "@/app/assets/insta.png";
import Facebook from "@/app/assets/facebook.png";
import Github from "@/app/assets/github2.png";
import Card from "@/app/assets/card2.png";
import Gpay from "@/app/assets/googlePay.png";
import Apay from "@/app/assets/applePay2.png";
import Paypal from "@/app/assets/paypal2.png";
import Visa from "@/app/assets/visa.png";

function Footer(){
  return (
    <div className="bg-gray-100">
      {/* Newsletter Section */}
      <div className="bg-black text-white rounded-[20px] flex flex-col lg:flex-row justify-between items-center p-6 lg:px-[64px] lg:py-[36px] mx-auto w-full max-w-[1240px] mb-[14px] ">
        <h1 className="text-[28px] lg:text-[32px] font-bold leading-tight text-center lg:text-left lg:w-[50%]">
          STAY UP TO DATE ABOUT OUR LATEST OFFERS
        </h1>
        <div className="flex flex-col md:flex-col lg:flex-col justify-center items-center mr-8 mt-7">
                  <div className="w-[311px] md:w-[600px]  mb-2 ml-8 md:ml-0 lg:ml-0 relative 
                  lg:h-[48px] lg:w-[349px] hover:scale-105 transition-transform duration-200">
                      
                      <input
                          type="email"
                          placeholder="Enter your email address"
                          className="pl-14 lg:pl-[80px] pr-4 py-2 w-full text-black rounded-full border border-gray-300 
                           focus:outline-none focus:ring-2"
                      />
                      <Image
                          src={Envelope}
                          alt="Envelope Icon"
                          className="h-[30px] w-[30px] absolute left-4 top-1/2 transform -translate-y-1/2 ml-1 lg:ml-5 items-center"
                      />
                  </div>

                  <button className="bg-white text-black px-1 py-2 w-[311px] md:w-[600px] lg:w-[349px] mb-2 ml-8 md:ml-0
                       lg:ml-0 rounded-full font-semibold hover:scale-x-110 border-2 ">
                      Subscribe to Newsletter
                  </button>
              </div>
      </div>

      {/* Footer Links Section */}
      <footer className="py-10">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-2xl font-bold mb-4">SHOP.CO</h3>
              <p className="text-gray-600">
                We have clothes that suit your style and that you’re proud to
                wear. From women to men.
              </p>
              <div className="flex space-x-4 mt-4">
                <Image src={Twitter} alt="Twitter" className="w-8 h-8" />
                <Image src={Instagram} alt="Instagram" className="w-8 h-8" />
                <Image src={Facebook} alt="Facebook" className="w-8 h-8" />
                <Image src={Github} alt="GitHub" className="w-8 h-8" />
              </div>
            </div>

            {/* Links */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <h4 className="font-bold text-lg mb-4">COMPANY</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <a href="#" className="hover:text-black">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black">
                      Works
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black">
                      Career
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-4">HELP</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <a href="#" className="hover:text-black">
                      Customer Support
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black">
                      Delivery Details
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black">
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-4">FAQ</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <a href="#" className="hover:text-black">
                      Account
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black">
                      Manage Deliveries
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black">
                      Orders
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black">
                      Payments
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-4">RESOURCES</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <a href="#" className="hover:text-black">
                      Free eBooks
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black">
                      Development Tutorials
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black">
                      How-To Blogs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black">
                      YouTube Playlist
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-300 mt-8 pt-6 flex flex-col lg:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">
              Shop.co © 2000-2023, All Rights Reserved
            </p>
            <div className="flex space-x-4 mt-4 lg:mt-0">
              <Image src={Visa} alt="Visa" className="w-12 h-8" />
              <Image src={Card} alt="Master Card" className="w-12 h-8" />
              <Image src={Paypal} alt="Paypal" className="w-12 h-8" />
              <Image src={Apay} alt="Apple Pay" className="w-12 h-8" />
              <Image src={Gpay} alt="Google Pay" className="w-12 h-8" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;