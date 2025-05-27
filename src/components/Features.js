import React from "react";
import Image from "next/image";

import cloud from "../../public/images/features/cloud.png";
import prize from "../../public/images/features/prizes.png";
import prizeShadow from "../../public/images/features/prizes-shadow.png";
import winner from "../../public/images/features/5winners.png";
import confetti from "../../public/images/features/confetti.png";
import smallConfetti from "../../public/images/features/small-confetti.png";
import yellowBackground from "../../public/images/features/yellow-background.png";
import emoji1 from "../../public/images/hero/emoji1.png";
import emoji3 from "../../public/images/hero/emoji3.png";
import emoji4 from "../../public/images/hero/emoji4.png";
import yellowBackgroundMobile from "../../public/images/features/yellow-background-mobile.png";

export default function Features() {
  return (
    <div id="features">
      <div className="relative flex flex-col items-center justify-center overflow-hidden bg-[#EEB700]/75 py-40 xl:py-40">
        <div className="flex flex-col items-center justify-center w-screen pt-10 -space-y-3 xl:-space-y-8 z-20">
          <div className="flex flex-col items-center justify-center relative w-full">
            <Image
              className="max-w-[250px] xl:max-w-[446px] z-10"
              src={prize}
              alt=""
              priority
            />
            <Image
              className="absolute top-1 xl:top-2 max-w-[250px] xl:max-w-[446px] pointer-events-none select-none"
              src={prizeShadow}
              alt=""
              priority
            />
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <Image
              className="max-w-[470px] xl:max-w-[787px] pointer-events-none select-none"
              src={winner}
              alt=""
              priority
            />
          </div>
        </div>
        <div className="absolute top-12 xl:top-0 w-full -mt-1 z-30">
          <Image
            className="pointer-events-none select-none scale-350 xl:scale-100 w-full rotate-180"
            src={cloud}
            alt=""
            priority
          />
        </div>
        <div className="absolute bottom-12 xl:bottom-0 w-full -mb-1 z-30">
          <Image
            className="pointer-events-none select-none scale-350 xl:scale-100 w-full"
            src={cloud}
            alt=""
            priority
          />
        </div>
        <div className="absolute flex items-center justify-center w-full h-full z-10">
          <Image
            className="xl:w-full xl:h-auto max-w-max h-full pointer-events-none select-none"
            src={confetti}
            alt=""
            priority
          />
        </div>
        <div className="absolute flex items-center justify-center w-full h-full z-0 overflow-hidden opacity-100">
          <Image
            className="hidden xl:block w-full max-h-max opacity-80 pointer-events-none select-none"
            src={yellowBackground}
            alt=""
            priority
          />
          <Image
            className="block xl:hidden w-full opacity-80 pointer-events-none select-none scale-220"
            src={yellowBackgroundMobile}
            alt=""
            priority
          />
        </div>
        <div className="absolute flex items-center justify-center w-full h-full z-0 opacity-80">
          <Image
            className="xl:w-full xl:max-h-max max-w-max h-full pointer-events-none select-none"
            src={smallConfetti}
            alt=""
            priority
          />
        </div>
        <div className="absolute w-full h-full z-40">
          <div className="relative w-full h-full">
            <div className="absolute max-w-[60px] xl:max-w-[100px] top-55 left-5 xl:top-40 xl:left-90 z-0">
              <Image
                className="max-w-[60px] xl:max-w-[100px] pointer-events-none select-none"
                src={emoji1}
                alt=""
                priority
              />
            </div>
            <div className="absolute max-w-[60px] xl:max-w-[100px] top-60 right-5 xl:right-85 xl:top-50 z-0">
              <Image
                className="max-w-[60px] xl:max-w-[100px] scale-x-[-1] pointer-events-none select-none"
                src={emoji1}
                alt=""
                priority
              />
            </div>
            <div className="absolute w-[190px] bottom-60 right-60 z-0">
              <Image
                className="xl:block hidden max-w-[190px] pointer-events-none select-none"
                src={emoji3}
                alt=""
                priority
              />
            </div>
            <div className="absolute max-w-[95px] xl:max-w-[190px] bottom-40 left-3 xl:bottom-50 xl:left-40 z-0">
              <Image
                className="max-w-[95px] xl:max-w-[190px] pointer-events-none select-none"
                src={emoji4}
                alt=""
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
