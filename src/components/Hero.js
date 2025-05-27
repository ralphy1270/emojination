"use client";
import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import kaHome from "../../public/images/hero/ka-home.png";
import bigEmoji from "../../public/images/hero/big_emoji.png";
import twoThousand from "../../public/images/hero/2000.png";
import manoodSumgot from "../../public/images/hero/manood-sumagot.png";
import cloud from "../../public/images/hero/cloud.png";
import backgroundBuilding from "../../public/images/hero/background-building.png";
import background from "../../public/images/hero/background.png";
import egroup1 from "../../public/images/hero/egroup1.png";
import egroup2 from "../../public/images/hero/egroup2.png";
import gifEmoji from "../../public/images/hero/gif-emoji.gif";
import emoji1 from "../../public/images/hero/emoji1.png";
import emoji3 from "../../public/images/hero/emoji3.png";
import emoji4 from "../../public/images/hero/emoji4.png";
import backgroundCircles from "../../public/images/hero/background-circles.png";
import textContent from "../../public/images/hero/text-content.png";

export default function Hero() {
  const [index, setIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % 2); // Only two images
  }, 7000); // Change image every 7 seconds
  return () => clearInterval(interval);
}, []);

  return (
    <div id="Hero">
      <div className="relative flex flex-col md:flex-row items-center justify-center bg-[#4AB3EC] border-t-[11px] border-t-black mt-1 overflow-hidden">
        <div
          id="hero-main"
          className="order-2 md:order-1 relative flex flex-col items-center md:items-start justify-center md:justify-start w-full md:w-[60%] z-30 md:mt-0 mt-8"
        >
          <Image
            className="absolute w-[920px] md:ml-5 md:mt-6 z-0 pointer-events-none select-none"
            src={background}
            alt=""
            priority
          />
          <AnimatePresence mode="wait">
            {index == 0 && (
              <motion.div
                key="group1"
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "tween", duration: 0.2 }}
                className="relative w-full"
              >
                <Image
                  className="w-lg md:w-[960px] md:-ml-5 md:mt-14 z-30 pointer-events-none select-none"
                  src={egroup1}
                  alt=""
                  priority
                />
              </motion.div>
            )}
            {index == 1 && (
              <motion.div
                key="group2"
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "tween", duration: 0.2 }}
                className="relative w-full"
              >
                <Image
                  className="w-lg md:w-[960px] md:-ml-5 md:mt-14 z-30 pointer-events-none select-none"
                  src={egroup2}
                  alt=""
                  priority
                />
              </motion.div>
            )}
          </AnimatePresence>
          <div className="absolute w-full h-full z-20">
            <div className="relative w-full h-full">
              <Image
                className="absolute w-[50px] xl:w-[100px] left-10 md:top-7 md:left-30 pointer-events-none select-none md:scale-150 xl:scale-100"
                src={emoji1}
                alt=""
                priority
              />
              <Image
                className="absolute w-[50px] xl:w-[100px] right-5 md:top-4 md:right-12 scale-x-[-1] pointer-events-none select-none md:scale-150 xl:scale-100"
                src={emoji1}
                alt=""
                priority
              />
              <Image
                className="absolute w-[90px] xl:w-[190px] top-15 right-0 md:top-48 md:right-0 pointer-events-none select-none md:scale-150 xl:scale-100"
                src={emoji3}
                alt=""
                priority
              />
              <Image
                className="absolute w-[80px] xl:w-[190px] bottom-20 md:bottom-25 left-7 pointer-events-none select-none md:scale-150 xl:scale-100"
                src={emoji4}
                alt=""
                priority
              />
              <Image
                className="absolute w-[140px] xl:w-[290px] bottom-25 right-0 md:bottom-25 md:right-10 pointer-events-none select-none md:scale-150 xl:scale-100"
                src={gifEmoji}
                alt=""
                priority
              />
            </div>
          </div>
        </div>
        <div
          id="hero-content"
          className="flex flex-col items-center justify-center md:justify-start -space-y-9 md:-space-y-8 xl:-space-y-12 order-1 md:order-2 w-full md:w-[40%] z-20 pt-9 md:pr-18 md:pb-50"
        >
          <Image
            className="w-[240px] md:w-[359px] h-auto pointer-events-none select-none"
            src={bigEmoji}
            alt="big emoji"
            priority
          />
          <Image
            className="w-[380px] md:w-[511.6970930337607px] h-auto rotate-6 -mt-3 md:-mt-3 pointer-events-none select-none"
            src={kaHome}
            alt="ka nation at home"
            priority
          />
          <Image
            className="w-[350px] md:w-[520px] h-auto pointer-events-none select-none"
            src={manoodSumgot}
            alt="manood sumagot, manalo ng"
            priority
          />
          <Image
            className="w-[350px] md:w-[446px] h-auto mt-3 pointer-events-none select-none"
            src={twoThousand}
            alt="2000 pesos"
            priority
          />
          <Image
            className="w-[440px] md:w-[510px] mt-7 md:mt-15 pointer-events-none select-none"
            src={textContent}
            alt=""
            priority
          />
        </div>
        <div className="absolute w-full h-full z-10 overflow-hidden">
          <Image
            className="w-screen md:scale-170 scale-500 h-auto pointer-events-none select-none"
            src={backgroundCircles}
            alt=""
            priority
          />
        </div>
        <div className="absolute bottom-7 md:bottom-0 w-full z-50">
          <Image
            className="pointer-events-none select-none w-full scale-350 md:scale-105"
            src={cloud}
            alt=""
            priority
          />
        </div>
        <div className="absolute -bottom-5 w-full z-0">
          <Image
            className="pointer-events-none select-none"
            src={backgroundBuilding}
            alt=""
            priority
          />
        </div>
      </div>
    </div>
  );
}
