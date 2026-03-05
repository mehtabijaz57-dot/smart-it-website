import Cta from "@/components/other-pages/services/services7/Cta";
import Footer2 from "@/components/other-pages/services/services7/Footer2";

import Challages from "@/components/other-pages/services/services7/Challages";
import DetailsHero from "@/components/other-pages/services/services7/DetailsHero";
import Feedback from "@/components/other-pages/services/services7/Feedback";
import NextPrevNavigation from "@/components/other-pages/services/services7/NextPrevNavigation";
import ParallaxDivider2 from "@/components/other-pages/services/services7/ParallaxDivider2";
import Solutions from "@/components/other-pages/services/services7/Solutions";
import { Metadata } from "next";
export const metadata: Metadata = {
     title:
    "Legacy System Modernization Services | Smart Information Technology  ",
  description:
   "Smart Information Technology | STRATEGIC MINDS FOR YOUR COMPANY'S GROWTH.",
};
export default function LegacySystemModernizationServicesPage() {
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
