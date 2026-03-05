import Cta from "@/components/other-pages/services/services10/Cta";
import Footer2 from "@/components/other-pages/services/services10/Footer2";

import Challages from "@/components/other-pages/services/services10/Challages";
import DetailsHero from "@/components/other-pages/services/services10/DetailsHero";
import Feedback from "@/components/other-pages/services/services10/Feedback";
import NextPrevNavigation from "@/components/other-pages/services/services10/NextPrevNavigation";
import ParallaxDivider2 from "@/components/other-pages/services/services10/ParallaxDivider2";
import Solutions from "@/components/other-pages/services/services10/Solutions";
import { Metadata } from "next";
export const metadata: Metadata = {
     title:
    "Application Rationalization Services | IT Portfolio Optimization ",
  description:
   "Clean up your IT portfolio before you migrate. Smart Information Technologies provides expert application rationalization to reduce costs and technical debt.",
};
export default function ApplicationRationalizationPage() {
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
