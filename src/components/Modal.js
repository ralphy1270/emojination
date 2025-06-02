"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactDOM from "react-dom";
import Image from "next/image";

import emojinationMaja from "@/public/images/modal/modal-image.png";
import emojinationMajaMobile from "@/public/images/modal/modal-image-mobile.png";
import halfCloud from "@/public/images/modal/half-cloud.png";

export default function Modal({ setModal }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent access to document before mount

  return ReactDOM.createPortal(
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ type: "tween", duration: 0.2 }}
      id="portal"
    >
      <div className="fixed inset-0 z-90">
        <div className="flex flex-row items-center justify-center w-full h-full pt-[60px] sm:pt-[56px]">
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 0.8 }}
            transition={{ type: "spring", duration: 0.2 }}
            className="relative sm:scale-80 flex flex-col items-center justify-start space-y-[40px] sm:space-y-2 bg-[#4AB3EC] py-[40px] px-[80px] text-[white] border-10 border-black rounded-2xl overflow-hidden"
          >
            <div className="flex flex-col items-center justify-center max-w-lg">
              <div className="uppercase font-bold font-poppins text-[20px] sm:text-[32px] text-center">
                Successfully Submitted!
              </div>
              <div className="text-[16px] sm:text-[20px] font-figtree leading-tight font-medium text-center italic">
                <p>
                  Thank you! Your entry has been submitted. Winners will be
                  announced on Month day, Year in the next Emojination episode.
                  Stay tuned!
                </p>
              </div>
            </div>
            <div className="w-full pb-7">
              <Image
                className="w-full h-auto hidden sm:block"
                alt=""
                src={emojinationMaja}
                priority
              />
              <Image
                className="w-full h-auto block sm:hidden scale-120"
                alt=""
                src={emojinationMajaMobile}
                priority
              />
            </div>
            <button
              className="px-[80px] py-[16px] sm:px-[100px] sm:py-[28px] text-xl rounded-lg font-bold text-black 
             bg-[#3DE93D] hover:bg-[#50D750] 
             shadow-[0_6px_12px_-3px_#0009] 
             border-b-[3pt] border-[#083acd]/40 uppercase cursor-pointer text-[20px] outline-2 active:outline-3 outline-black z-10"
              onClick={() => {
                setModal(false);
              }}
            >
              Okay
            </button>
            <Image
              className="absolute -bottom-9 -right-7"
              src={halfCloud}
              alt=""
              priority
            />
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.85 }}
        transition={{ type: "spring", duration: 0.2 }}
        className="fixed inset-0 bg-black z-80 text-white"
      ></motion.div>
    </motion.div>,
    document.body
  );
}
