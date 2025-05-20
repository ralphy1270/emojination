import React from "react";
import Image from "next/image";

import FaqSection from "./FaqSection";

export default function Faq() {
  return (
    <div id="faq">
      <div className="flex items-center justify-center py-7">
        <span className="font-comic text-[32px]">Promotion Mechanics</span>
      </div>
      <div className="flex flex-col items-center justify-start py-5 px-75 space-y-12">
        <FaqSection question="Who can join?">
          This contest is open to all Filipinos who are 18 years old and above.
        </FaqSection>
        <FaqSection question="How to join?">
          Answer the form along with your first name, last name, birthday,
          address, contact number, and email address
        </FaqSection>
        <FaqSection question="When is the deadline for submission?">
          Make sure to submit your entry right after the episode airs, as the
          deadline is the following Monday at 12:00 PM (noon), and remember that
          only one entry per person is allowed each week.
        </FaqSection>
        <FaqSection question="When are the winners be announced?">
          The Emojination team will announce the winners during the next airing
          episode on the following Saturday.
        </FaqSection>
        <FaqSection question="What are the prizes?">
          5 winners will be selected using a randomizer per week, and if you’re
          one of them, the Emojination staff will reach out to you via email or
          phone call to confirm your prize. Winners will received 2,000 (two
          thousand pesos) per week. The winner will receive their cash prize via
          Bank transfer, remittance, and transaction fees will be shouldered by
          the show
        </FaqSection>
      </div>
    </div>
  );
}
