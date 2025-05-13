import Link from "next/link";
import React from "react";
import Image from "next/image";

import cignalTv from "../../public/images/logo/Cignal.png"

export default function nav() {
  return (
    <section id="Nav">
      <div className="flex flex-col text-center">
        <div className="flex flex-row items-end xl:items-center justify-around px-5 h-[144px] xl:h-[50px] text-white text-sm font-poppins font-bold bg-[#8C0A0A] uppercase">
          <div className="relative xl:w-2/12">
            <Image className="xl:absolute rounded xl:rounded-none max-w-32 xl:left-15 mb-1.5 xl:-top-4" src={cignalTv} alt="CignalTv logo" priority/>
          </div>
          <div className="hidden xl:flex xl:items-center xl:justify-around xl:-space-x-26 w-6/12">
            <div className="group flex flex-row items-center justify-center space-x-2">
              <Link href="#plan">Plans</Link>
              <svg
                className="rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="11"
                fill="#D9D9D9"
                viewBox="0 0 24 24"
              >
                <path d="M12.87 3.51c-.35-.63-1.39-.63-1.74 0l-9 16c-.17.31-.17.69 0 1s.51.5.86.5h18c.36 0 .68-.19.86-.5s.18-.69 0-1z"></path>
              </svg>
            </div>
            <div className="group">
              <Link href="#channels">Channels</Link>
            </div>
            <div className="group">
              <Link href="#promos">Promos</Link>
            </div>
            <div className="group">
              <Link href="#adson">Add-Ons</Link>
            </div>
            <div className="group">
              <Link href="#aboutus">About Us</Link>
            </div>
            <div className="group flex flex-row items-center justify-center space-x-2">
              <Link href="#support">Support</Link>
              <svg
                className="rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="11"
                fill="#D9D9D9"
                viewBox="0 0 24 24"
              >
                <path d="M12.87 3.51c-.35-.63-1.39-.63-1.74 0l-9 16c-.17.31-.17.69 0 1s.51.5.86.5h18c.36 0 .68-.19.86-.5s.18-.69 0-1z"></path>
              </svg>
            </div>
            <div className="group">
              <Link href="#livechat">Live Chat</Link>
            </div>
          </div>
          <div className="hidden xl:flex xl:items-center xl:justify-center xl:space-x-8 w-4/12">
            <div className="group flex flex-row items-center justify-center space-x-2">
              <Link href="#plan">Account Portal</Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#ffffff"
                viewBox="0 0 24 24"
              >
                <path d="M12 2a5 5 0 1 0 0 10 5 5 0 1 0 0-10M4 22h16c.55 0 1-.45 1-1v-1c0-3.86-3.14-7-7-7h-4c-3.86 0-7 3.14-7 7v1c0 .55.45 1 1 1"></path>
              </svg>
            </div>
            <div className="group flex flex-row items-center justify-center space-x-2">
              <input
                type="text"
                className="outline outline-none bg-white font-bold w-[169px] text-black px-1"
              />
              <svg
                className="cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#ffffff"
                viewBox="0 0 24 24"
              >
                <path d="M10.5 19c1.98 0 3.81-.69 5.25-1.83L20 21.42l1.41-1.41-4.25-4.25a8.47 8.47 0 0 0 1.83-5.25c0-4.69-3.81-8.5-8.5-8.5S2 5.81 2 10.5 5.81 19 10.5 19m0-15c3.58 0 6.5 2.92 6.5 6.5S14.08 17 10.5 17 4 14.08 4 10.5 6.92 4 10.5 4"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="h-[42px]"></div>
      </div>
    </section>
  );
}
