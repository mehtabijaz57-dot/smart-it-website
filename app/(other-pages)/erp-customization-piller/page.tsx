import Cta from "@/components/other-pages/services/services58/Cta";
import Footer2 from "@/components/other-pages/services/services58/Footer2";

import Challages from "@/components/other-pages/services/services58/Challages";
import DetailsHero from "@/components/other-pages/services/services58/DetailsHero";
import Feedback from "@/components/other-pages/services/services58/Feedback";
import NextPrevNavigation from "@/components/other-pages/services/services58/NextPrevNavigation";
import ParallaxDivider2 from "@/components/other-pages/services/services58/ParallaxDivider2";
import Solutions from "@/components/other-pages/services/services58/Solutions";
import Services from "@/components/other-pages/services/services58/Services";
import { Metadata } from "next";
export const metadata: Metadata = {
     title:
    "ERP Customization Services | Smart IT .",
  description:
   "Smart IT Information Technology | STRATEGIC MINDS FOR YOUR COMPANY'S GROWTH.",
};
export default function erpcustomizationpillerPage() {
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
