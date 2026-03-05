import Cta from "@/components/other-pages/services/services56/Cta";
import Footer2 from "@/components/other-pages/services/services56/Footer2";

import Challages from "@/components/other-pages/services/services56/Challages";
import DetailsHero from "@/components/other-pages/services/services56/DetailsHero";
import Feedback from "@/components/other-pages/services/services56/Feedback";
import NextPrevNavigation from "@/components/other-pages/services/services56/NextPrevNavigation";
import ParallaxDivider2 from "@/components/other-pages/services/services56/ParallaxDivider2";
import Solutions from "@/components/other-pages/services/services56/Solutions";
import Services from "@/components/other-pages/services/services56/Services";
import { Metadata } from "next";
export const metadata: Metadata = {
     title:
    "IoT & Digital Twin Solutions | Smart IT.",
  description:
   "Smart IT Information Technology | STRATEGIC MINDS FOR YOUR COMPANY'S GROWTH.",
};
export default function iotdigitaltwinpillerPage() {
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
