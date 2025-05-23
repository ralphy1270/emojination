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
      <div className="relative flex flex-col xl:flex-row items-center justify-center bg-[#4AB3EC] border-t-[11px] border-t-black mt-1 overflow-hidden">
        <div
          id="hero-main"
          className="order-2 xl:order-1 relative flex flex-col items-start justify-start w-full xl:w-[60%] z-30"
        >
          <Image
            className="absolute w-[920px] xl:ml-5 xl:mt-6 z-0 pointer-events-none select-none"
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
                  className="w-[960px] xl:-ml-5 xl:mt-14 z-30 pointer-events-none select-none"
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
                  className="w-[960px] xl:-ml-5 xl:mt-14 z-30 pointer-events-none select-none"
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
                className="absolute w-[100px] top-7 left-30 pointer-events-none select-none"
                src={emoji1}
                alt=""
                priority
              />
              <Image
                className="absolute w-[100px] top-4 right-12 scale-x-[-1] pointer-events-none select-none"
                src={emoji1}
                alt=""
                priority
              />
              <Image
                className="absolute w-[190px] top-48 right-0 pointer-events-none select-none"
                src={emoji3}
                alt=""
                priority
              />
              <Image
                className="absolute w-[190px] bottom-25 left-7 pointer-events-none select-none"
                src={emoji4}
                alt=""
                priority
              />
              <Image
                className="absolute w-[290px] bottom-25 right-10 pointer-events-none select-none"
                src={gifEmoji}
                alt=""
                priority
              />
            </div>
          </div>
        </div>
        <div
          id="hero-content"
          className="flex flex-col items-center justify-center xl:justify-start -space-y-12 order-1 xl:order-2 w-full xl:w-[40%] z-20 pt-9 xl:pr-18 xl:pb-50"
        >
          <Image
            className="w-[359px] h-auto pointer-events-none select-none"
            src={bigEmoji}
            alt="big emoji"
            priority
          />
          <Image
            className="w-[511.6970930337607px] h-auto rotate-6 -mt-3 pointer-events-none select-none"
            src={kaHome}
            alt="ka nation at home"
            priority
          />
          <Image
            className="w-[520px] h-auto pointer-events-none select-none"
            src={manoodSumgot}
            alt="manood sumagot, manalo ng"
            priority
          />
          <Image
            className="w-[446px] h-auto mt-3 pointer-events-none select-none"
            src={twoThousand}
            alt="2000 pesos"
            priority
          />
          <Image
            className="w-[510px] mt-15 pointer-events-none select-none"
            src={textContent}
            alt=""
            priority
          />
        </div>
        <div className="absolute w-full h-full z-10 overflow-hidden">
          <Image
            className="w-screen xl:scale-170 scale-500 h-auto pointer-events-none select-none"
            src={backgroundCircles}
            alt=""
            priority
          />
        </div>
        <div className="absolute bottom-0 w-full z-50">
          <Image
            className="pointer-events-none select-none w-full scale-105"
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
