import Cta from "@/components/other-pages/services/services57/Cta";
import Footer2 from "@/components/other-pages/services/services57/Footer2";

import Challages from "@/components/other-pages/services/services57/Challages";
import DetailsHero from "@/components/other-pages/services/services57/DetailsHero";
import Feedback from "@/components/other-pages/services/services57/Feedback";
import NextPrevNavigation from "@/components/other-pages/services/services57/NextPrevNavigation";
import ParallaxDivider2 from "@/components/other-pages/services/services57/ParallaxDivider2";
import Solutions from "@/components/other-pages/services/services57/Solutions";
import Services from "@/components/other-pages/services/services57/Services";
import { Metadata } from "next";
export const metadata: Metadata = {
     title:
    "Application Modernization Piller |Smart IT.",
  description:
   "Smart IT Information Technology | STRATEGIC MINDS FOR YOUR COMPANY'S GROWTH.",
};
export default function applicationmodernizationpillerPage() {
  return (
    <>
      <main
        id="mxd-page-content"
        className="mxd-page-content inner-page-content"
      >
        <DetailsHero />
       <Services/>
        {/* <ParallaxDivider2 /> */}
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
