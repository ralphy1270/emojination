import React from "react";
import Image from "next/image";

import cloud from "../../public/images/features/cloud.png";
import cloudTop from "../../public/images/features/cloud-top.png";
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
    <div className="relative overflow-hidden py-1" id="features">
      <div className="relative flex flex-col items-center justify-center bg-[#EEB700]/75 py-40 md:py-60 xl:py-40">
        <div className="flex flex-col items-center justify-center w-screen pt-[40px] -space-y-[12px] xl:-space-y-[20px] z-20">
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
          <div className="flex flex-col items-center justify-center max-w-sm xl:w-full">
            <Image
              className="max-w-sm xl:max-w-[787px] pointer-events-none select-none"
              src={winner}
              alt=""
              priority
            />
          </div>
        </div>
        <div className="absolute flex items-center justify-center w-full h-full z-10">
          <Image
            className="xl:h-full xl:w-auto max-w-max h-full pointer-events-none select-none scale-105"
            src={confetti}
            alt=""
            priority
          />
        </div>
        <div className="absolute flex items-center justify-center w-full h-full z-0 overflow-hidden opacity-100">
          <Image
            className="hidden sm:block w-full h-full opacity-80 pointer-events-none select-none"
            src={yellowBackground}
            alt=""
            priority
          />
          <Image
            className="block sm:hidden w-full opacity-80 pointer-events-none select-none yellow-background-mobile"
            src={yellowBackgroundMobile}
            alt=""
            priority
          />
        </div>
        <div className="absolute flex items-center justify-center w-full h-full z-0 opacity-80">
          <Image
            className="xl:h-full xl:w-auto max-w-max h-full pointer-events-none select-none scale-110"
            src={smallConfetti}
            alt=""
            priority
          />
        </div>
        <div className="absolute w-full h-full z-40">
          <div className="relative w-full h-full">
            <div className="absolute max-w-[60px] xl:max-w-[100px] top-[240px] left-[20px] md:left-[180px] xl:top-[160px] xl:left-[360px] z-0">
              <Image
                className="max-w-[60px] xl:max-w-[100px] pointer-events-none select-none"
                src={emoji1}
                alt=""
                priority
              />
            </div>
            <div className="absolute max-w-[60px] xl:max-w-[100px] top-[240px] md:top-[280px] right-[20px] md:right-[160px] xl:right-[340px] xl:top-[200px] z-0">
              <Image
                className="max-w-[60px] xl:max-w-[100px] scale-x-[-1] pointer-events-none select-none"
                src={emoji1}
                alt=""
                priority
              />
            </div>
            <div className="absolute w-[190px] bottom-[240px] right-[240px] z-0">
              <Image
                className="xl:block hidden max-w-[190px] pointer-events-none select-none"
                src={emoji3}
                alt=""
                priority
              />
            </div>
            <div className="absolute max-w-[95px] xl:max-w-[190px] bottom-[140px] md:bottom-[220px] left-[12px] md:left-[200px] xl:bottom-[200px] xl:left-[160px] z-0">
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
      <div className="absolute top-12 md:top-19 xl:top-0 w-full -mt-1 z-30">
        <Image
          className="pointer-events-none select-none cloud-top w-full"
          src={cloudTop}
          alt=""
          priority
        />
      </div>
      <div className="absolute bottom-12 md:bottom-19 xl:bottom-0 w-full -mb-1 z-30">
        <Image
          className="pointer-events-none select-none cloud-bottom w-full"
          src={cloud}
          alt=""
          priority
        />
      </div>
    </div>
  );
}
