"use client";
import React from "react";

import Image from "next/image";

import arrow from "@/public/images/faq/arrow.png";

export default function FaqSection({question, children}) {

  return (
    <div className="flex flex-col items-start justify-between w-full border-2 border-black rounded-lg overflow-hidden z-10">
      <div
        className="flex items-center justify-between w-full text-xl font-bold bg-[#3DE93D] text-gray-700 px-[28px] py-[14px] border-b-2 rounded-none cursor-pointer"
      >
        <span>{question}</span>
      </div>
      <div
        className="w-full text-xl font-bold text-gray-500 h-auto"
      >
        <div className="w-full px-[28px] py-[14px] bg-white">
          {children}
        </div>
      </div>
    </div>
  );
}
