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

export default function Features() {
  return (
    <div id="features">
      <div className="relative flex flex-col items-center justify-center overflow-hidden bg-[#EEB700]/80">
        <div className="w-full -mt-1 z-30">
          <Image
            className="pointer-events-none select-none scale-x-[-1] w-full rotate-180"
          
            src={cloud}
            alt=""
            priority
          />
        </div>
        <div className="flex flex-col items-center justify-center w-screen pt-10 -space-y-8 z-20">
          <div className="flex flex-col items-center justify-center relative w-full">
            <Image className="max-w-[246px] z-10" src={prize} alt="" priority />
            <Image
              className="absolute top-2 max-w-[246px] pointer-events-none select-none"
            
              src={prizeShadow}
              alt=""
              priority
            />
          </div>
          <div className="flex flex-col items-center justify-between w-full">
            <Image className="max-w-[787px] pointer-events-none select-none" src={winner} alt="" priority />
          </div>
        </div>
        <div className="w-full -mb-1 z-30">
          <Image
            className="pointer-events-none select-none w-full"
          
            src={cloud}
            alt=""
            priority
          />
        </div>
        <div className="absolute w-full z-10">
          <Image className="w-full pointer-events-none select-none" src={confetti} alt="" priority />
        </div>
        <div className="absolute w-full z-0">
          <Image
            className="w-full opacity-80 pointer-events-none select-none"
            src={yellowBackground}
          
            alt=""
            priority
          />
        </div>
        <div className="absolute w-full z-0">
          <Image className="w-full pointer-events-none select-none" src={smallConfetti} alt="" priority />
        </div>
        <div className="absolute w-full h-full z-40">
          <div className="relative w-full h-full">
            <div className="absolute w-[100px] top-40 left-90 z-0">
              <Image
                className="max-w-[100px] pointer-events-none select-none"
                src={emoji1}
              
                alt=""
                priority
              />
            </div>
            <div className="absolute w-[100px] right-85 top-50 z-0">
              <Image className="max-w-[100px] scale-x-[-1] pointer-events-none select-none" src={emoji1} alt="" priority />
            </div>
            <div className="absolute w-[190px] bottom-60 right-60 z-0">
              <Image className="max-w-[190px] pointer-events-none select-none" src={emoji3} alt="" priority />
            </div>
            <div className="absolute w-[190px] bottom-50 left-40 z-0">
              <Image className="max-w-[190px] pointer-events-none select-none" src={emoji4} alt="" priority />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
