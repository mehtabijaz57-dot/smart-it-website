import Cta from "@/components/other-pages/services/services43/Cta";
import Footer2 from "@/components/other-pages/services/services43/Footer2";

import Challages from "@/components/other-pages/services/services43/Challages";
import DetailsHero from "@/components/other-pages/services/services43/DetailsHero";
import Feedback from "@/components/other-pages/services/services43/Feedback";
import NextPrevNavigation from "@/components/other-pages/services/services43/NextPrevNavigation";
import ParallaxDivider2 from "@/components/other-pages/services/services43/ParallaxDivider2";
import Solutions from "@/components/other-pages/services/services43/Solutions";
import { Metadata } from "next";
export const metadata: Metadata = {
     title:
    "Transportation & Logistics IT Solutions | 5G & IoT Visibility | Smart IT.",
  description:
   "Modernize your fleet with Smart IT’s Logistics Cloud Migration. We specialize in real-time asset tracking, eFTI compliance, and 5G-enabled supply chain visibility.",
};
export default function transportationlogisticsPage() {
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
