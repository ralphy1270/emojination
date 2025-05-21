"use client";
import React, { useState } from "react";

import Image from "next/image";
import { motion } from "framer-motion";

import arrow from "@/public/images/faq/arrow.png";

export default function FaqSection({question, children}) {
  const [expanded, setExpand] = useState(false);

  return (
    <div className="flex flex-col items-start justify-between w-full border-2 border-black rounded-lg overflow-hidden">
      <motion.div
        className={`flex items-center justify-between w-full text-xl font-bold text-gray-700 px-7 py-3.5 ${expanded ? "" : "border-b-2 rounded-none"} cursor-pointer`}
        animate={{ backgroundColor : expanded ? "#FFFFFF" : "#3DE93D" }}
        transition={{ type : "tween", duration: 0.1 }}
        onClick={() => setExpand((prev) => !prev)}
      >
        <span>{question}</span>
        <motion.div
          animate={{ rotate: expanded ? 0 : 180 }}
          transition={{ type: "tween", duration: 0.1 }}
        >
          <Image
            className="w-6 h-4 pointer-events-none select-none"
            style={{ height: "auto" }}
            src={arrow}
            alt=""
            priority
          />
        </motion.div>
      </motion.div>
      <motion.div
        animate={{ height: expanded ? 0 : "auto" }}
        transition={{ type: "tween", duration: 0.1 }}
        className="w-full text-xl font-bold text-gray-500"
      >
        <div className="w-full px-7 py-3.5">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
