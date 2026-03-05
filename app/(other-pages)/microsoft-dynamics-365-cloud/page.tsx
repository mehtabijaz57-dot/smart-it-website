import Cta from "@/components/other-pages/services/services18/Cta";
import Footer2 from "@/components/other-pages/services/services18/Footer2";

import Challages from "@/components/other-pages/services/services18/Challages";
import DetailsHero from "@/components/other-pages/services/services18/DetailsHero";
import Feedback from "@/components/other-pages/services/services18/Feedback";
import NextPrevNavigation from "@/components/other-pages/services/services18/NextPrevNavigation";
import ParallaxDivider2 from "@/components/other-pages/services/services18/ParallaxDivider2";
import Solutions from "@/components/other-pages/services/services18/Solutions";
import { Metadata } from "next";
export const metadata: Metadata = {
     title:
    " Microsoft Dynamics 365 Cloud Services | AX & NAV Migration | Smart IT",
  description:
   "Modernize your enterprise with Dynamics 365. Smart IT provides expert implementation, Clean Core strategy, and Copilot AI integration to end the upgrade cycle forever.",
};
export default function MicrosoftDynamics365CloudPage() {
  return (
    <>
      <main
        id="mxd-page-content"
        className="mxd-page-content inner-page-content"
      >
        <DetailsHero />
        <ParallaxDivider2 />
        <div className="mxd-section mxd-project overflow-hidden">
          <div className="mxd-container grid-container">
            <Challages />
            <Solutions />
            <Feedback />
            <NextPrevNavigation />
          </div>
        </div>
        <Cta />
      </main>
      <Footer2 />
    </>
  );
}
