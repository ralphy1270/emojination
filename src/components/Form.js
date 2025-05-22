"use client";
import React, { useEffect, useState } from "react";

import QuestionSection from "@/src/components/QuestionSection";

import questionImage1 from "@/public/images/form/question-image1.png";
import imageTest1 from "@/public/images/form/face1.png";
import imageTest2 from "@/public/images/form/ocean-wave1.png";

const components = [
  <QuestionSection key="question1" image={questionImage1} />,
  <QuestionSection key="question2" image={imageTest1} />,
  <QuestionSection key="question3" image={imageTest2} />,
  <QuestionSection key="question4" image={questionImage1} />,
  <QuestionSection key="question5" image={imageTest1} />,
  <QuestionSection key="question6" image={imageTest2} />,
];

// May 25, 2025 at 6:00 PM
const startDate = new Date("2025-06-01T18:00:00");

function getCurrentComponentIndex() {
  const now = new Date();

  // If before May 18, always show first component
  if (now < startDate) return 0;

  const msPerWeek = 7 * 24 * 60 * 60 * 1000; // One week in ms
  const weeksPassed = Math.floor(
    (now.getTime() - startDate.getTime()) / msPerWeek
  );

  // Loop back to start after component 6
  return weeksPassed % components.length;
}

export default function Form() {
  const [index, setIndex] = useState(getCurrentComponentIndex());
  console.log("5:25pm");
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(getCurrentComponentIndex());
    }, 1000 * 60); // check every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="form">
      <div className="flex flex-row items-start justify-center pt-7 pb-13">
        <div className="flex items-center justify-center">
          <span className="font-comic text-[32px] uppercase">
            Emoji Question of the Week:
          </span>
        </div>
      </div>
      {components[index]}
      <div className="px-75 font-figtree font-bold text-base text-center italic">
        Promo runs from
        <span className="font-extrabold"> May 31, 2025 to August 09, 2025</span>
        . Per DTI-Fair Trade Permit No. FTEB-206859 Series of 2024. Click{" "}
        <span className="text-[#4363F8] cursor-pointer">here</span> for more
        details{" "}
      </div>
    </div>
  );
}
