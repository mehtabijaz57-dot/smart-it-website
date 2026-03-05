import Cta from "@/components/other-pages/services/services11/Cta";
import Footer2 from "@/components/other-pages/services/services11/Footer2";

import Challages from "@/components/other-pages/services/services11/Challages";
import DetailsHero from "@/components/other-pages/services/services11/DetailsHero";
import Feedback from "@/components/other-pages/services/services11/Feedback";
import NextPrevNavigation from "@/components/other-pages/services/services11/NextPrevNavigation";
import ParallaxDivider2 from "@/components/other-pages/services/services11/ParallaxDivider2";
import Solutions from "@/components/other-pages/services/services11/Solutions";
import { Metadata } from "next";
export const metadata: Metadata = {
     title:
    " Zero Trust Architecture cloud migration || Smart IT Information Technology . ",
  description:
   "Smart IT Information Technology || STRATEGIC MINDS FOR YOUR COMPANY'S GROWTH.",
};
export default function ZeroTrustArchitecturePage() {
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
