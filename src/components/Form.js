import React from "react";
import QuestionSection from "@/src/components/QuestionSection";
import oceanWave from "../../public/images/form/ocean-wave.png";
import face from "../../public/images/form/face.png";

export default function Form() {

  return (
    <div id="form">
      <div className="flex flex-row items-start justify-center py-14">
        <div className="flex items-center justify-center">
          <span className="font-comic text-[32px] uppercase">
            Emojination Question of the Week:
          </span>
        </div>
      </div>
      <QuestionSection image1={oceanWave} image2={face} />
    </div>
  );
}