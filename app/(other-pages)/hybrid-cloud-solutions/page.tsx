import Cta from "@/components/other-pages/services/services6/Cta";
import Footer2 from "@/components/other-pages/services/services6/Footer2";

import Challages from "@/components/other-pages/services/services6/Challages";
import DetailsHero from "@/components/other-pages/services/services6/DetailsHero";
import Feedback from "@/components/other-pages/services/services6/Feedback";
import NextPrevNavigation from "@/components/other-pages/services/services6/NextPrevNavigation";
import ParallaxDivider2 from "@/components/other-pages/services/services6/ParallaxDivider2";
import Solutions from "@/components/other-pages/services/services6/Solutions";
import { Metadata } from "next";
export const metadata: Metadata = {
     title:
    " Hybrid Cloud Solutions & Cloud Migration Strategy | Smart Information Technologies.",
  description:
   " Scale your enterprise with secure hybrid cloud solutions. We provide tailored cloud migration strategies that balance performance, cost-efficiency, and data sovereignty.",
};
export default function HybridCloudSolutionsPage() {
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
