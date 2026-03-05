import Cta from "@/components/other-pages/services/services55/Cta";
import Footer2 from "@/components/other-pages/services/services55/Footer2";

import Challages from "@/components/other-pages/services/services55/Challages";
import DetailsHero from "@/components/other-pages/services/services55/DetailsHero";
import Feedback from "@/components/other-pages/services/services55/Feedback";
import NextPrevNavigation from "@/components/other-pages/services/services55/NextPrevNavigation";
import ParallaxDivider2 from "@/components/other-pages/services/services55/ParallaxDivider2";
import Solutions from "@/components/other-pages/services/services55/Solutions";
import Services from "@/components/other-pages/services/services55/Services";
import { Metadata } from "next";
export const metadata: Metadata = {
     title:
    "Cybersecurity-service | Smart Information Technology.",
  description:
   "Smart IT Information Technology | STRATEGIC MINDS FOR YOUR COMPANY'S GROWTH.",
};
export default function CybersecurityservicepillerPage() {
  return (
    <>
      <main
        id="mxd-page-content"
        className="mxd-page-content inner-page-content"
      >
        <DetailsHero />
        {/* <ParallaxDivider2 /> */}
         <Services/>
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
