import Cta from "@/components/other-pages/services/services1/Cta";
import Footer2 from "@/components/other-pages/services/services1/Footer2";

import Challages from "@/components/other-pages/services/services1/Challages";
import DetailsHero from "@/components/other-pages/services/services1/DetailsHero";
import Feedback from "@/components/other-pages/services/services1/Feedback";
import NextPrevNavigation from "@/components/other-pages/services/services1/NextPrevNavigation";
import ParallaxDivider2 from "@/components/other-pages/services/services1/ParallaxDivider2";
import Solutions from "@/components/other-pages/services/services1/Solutions";
import Services from "@/components/other-pages/services/services1/Services";

import { Metadata } from "next";
export const metadata: Metadata = {
     title:
    " AI,ML & Data Analytics | Smart Information Technology .",
  description:
   "Smart Information Technology | STRATEGIC MINDS FOR YOUR COMPANY'S GROWTH.",
};
export default function AIMLDataAnalyticspillerPage() {
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
