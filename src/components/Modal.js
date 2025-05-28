"use client";

import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

export default function Modal() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent access to document before mount

  return ReactDOM.createPortal(
    <div id="portal">
      {/* <div className="fixed inset-0 z-90">
        <div className="relative w-full h-full bg-red-1">
            <div className="absolute left-80 bottom-0 text-white">
                Hello World
            </div>
        </div>
      </div>
      <div className="fixed inset-0 bg-black opacity-85 z-80">hello black</div> */}
     
    </div>,
    document.body
  );
}
