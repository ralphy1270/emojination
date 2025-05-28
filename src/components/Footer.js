import React from "react";

export default function Footer() {
  return (
    <div id="footer">
      <div className="bg-[#E2DEDF] flex flex-col md:flex-row items-start justify-around px-8 md:px-35 py-18 space-x-0 md:space-x-15 space-y-22 md:space-y-0">
        <div className="flex flex-col items-start justify-center space-y-18 font-poppins w-full md:w-1/3">
          <div className="flex flex-col items-start justify-center space-y-5">
            <div className="text-[20px] text-[#8C0A0A] font-bold uppercase">
              About Cignal
            </div>
            <div className="text-[18px]">
              Cignal is a multi-platform media company in the Philippines,
              offering a wide range of content through satellite television,
              streaming services, and digital platforms. With a strong
              commitment to delivering powerful stories and meaningful
              connections, Cignal continues to bring joy and entertainment to
              Filipinos everywhere - enriching lives through innovation,
              technology, and the Filipino spirit.
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center space-y-16 font-poppins w-full md:w-1/3">
          <div className="flex flex-col items-start justify-center space-y-5">
            <div className="text-[20px] text-[#8C0A0A] font-bold uppercase">
              Contact us
            </div>
            <div className="text-[18px]">
              <p className="text-[#8C0A0A] font-bold">Cignal Care Hotline</p>
              <p>
                6AM-12MN, Everyday Metro Manila Hotline: (02) 88-888-222
                Provincial (Toll Free) Hotline: #88-222 8AM - 8PM, Everyday Text
                Line: (4681) 8222 24/7 Live Chat
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center space-y-5">
            <div className="text-[20px] text-[#8C0A0A] font-bold uppercase">
              Cignal Sales Touchpoints
            </div>
            <div className="text-[18px]">
              9AM - 6PM, Daily Metro Manila Hotline: (02) 8888-5555 Provincial
              (Toll-Free): #88-555 Text line: (4861) 8555 or 0919-160-2044
              Email: sales@cignal.tv
            </div>
            <div className="text-[18px] text-[#8C0A0A] font-bold uppercase underline decoration-[#8C0A0A]">
              Terms of use
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <div className="flex flex-col items-start justify-center space-y-5">
            <div className="text-[20px] text-[#8C0A0A] font-bold uppercase">
              Subscribe to know the latest updates!
            </div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="text-[20px] text-gray-500 outline hover:outline-2 outline-gray-900 px-5 py-3 w-full rounded-md bg-white"
              autoComplete="off"
            />
            <button className="text-[20px] text-white px-5 py-3 w-full rounded-md bg-[#8C0A0A]">
                Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between bg-gray-950 text-white py-4">
        <div className="text-left pl-7 font-poppins font-normal text-base w-1/2">
          @2024 Cignal TV &middot; All rights reserved.
        </div>
        <div className="flex flex-row w-1/2 items-center justify-around">
          <div className="flex-1 cursor-pointer">Data Privacy</div>
          <div className="flex-1 cursor-pointer">Term of use</div>
          <div className="flex-1 cursor-pointer">Privacy policy</div>
        </div>
      </div>
    </div>
  );
}
