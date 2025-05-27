import React from "react";
import Image from "next/image";

import victory1 from "../../public/images/faq/victory1.gif";
import victory2 from "../../public/images/faq/victory2.gif";
import victory3 from "../../public/images/faq/victory3.gif";
import backgroundBuilding from "../../public/images/faq/background-building.png";

import FaqSection from "./FaqSection";

export default function Faq() {
  return (
    <div id="faq">
      <div className="relative h-fit xl:h-[1280px] overflow-hidden pb-30">
        <div className="flex items-center justify-center py-3 xl:pt-7 xl:pb-2">
          <span className="font-bangers text-[40px] xl:text-[52px]">Promotion Mechanics</span>
        </div>
        <div className="flex flex-col items-center justify-start xl:py-0 px-5 xl:px-75 space-y-12">
          <FaqSection question="Who can join?">
            This contest is open to all Filipinos who are 18 years old and
            above.
          </FaqSection>
          <FaqSection question="How to join?">
            Answer the form along with your first name, last name, birthday,
            address, contact number, and email address
          </FaqSection>
          <FaqSection question="When is the deadline for submission?">
            Make sure to submit your entry right after the episode airs, as the
            deadline is the following Monday at 12:00 PM (noon), and remember
            that only one entry per person is allowed each week.
          </FaqSection>
          <FaqSection question="When are the winners be announced?">
            The Emojination team will announce the winners during the next
            airing episode on the following Saturday.
          </FaqSection>
          <FaqSection question="What are the prizes?">
            5 winners will be selected using a randomizer per week, and if
            you’re one of them, the Emojination staff will reach out to you via
            email or phone call to confirm your prize. Winners will received
            2,000 (two thousand pesos) per week. The winner will receive their
            cash prize via Bank transfer, remittance, and transaction fees will
            be shouldered by the show
          </FaqSection>
          <Image
            className="xl:block hidden absolute -left-20 max-w-[490px] pointer-events-none select-none"
            src={victory1}
            alt=""
            priority
          />
          <Image
            className="xl:block hidden absolute bottom-45 -left-18 max-w-[430px] pointer-events-none select-none"
            src={victory2}
            alt=""
            priority
          />
          <Image
            className="xl:block hidden absolute top-75 -right-14  max-w-[420px] pointer-events-none select-none"
            src={victory3}
            alt=""
            priority
          />
        </div>
        <Image
          className="pointer-events-none select-none absolute bottom-20 xl:bottom-0 max-w-full scale-300 xl:scale-100"
          src={backgroundBuilding}
          alt=""
          priority
        />
      </div>
    </div>
  );
}
