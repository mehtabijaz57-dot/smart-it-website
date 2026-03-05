import Cta from "@/components/other-pages/services/services49/Cta";
import Footer2 from "@/components/other-pages/services/services49/Footer2";

import Challages from "@/components/other-pages/services/services49/Challages";
import DetailsHero from "@/components/other-pages/services/services49/DetailsHero";
import Feedback from "@/components/other-pages/services/services49/Feedback";
import NextPrevNavigation from "@/components/other-pages/services/services49/NextPrevNavigation";
import ParallaxDivider2 from "@/components/other-pages/services/services49/ParallaxDivider2";
import Solutions from "@/components/other-pages/services/services49/Solutions";
import { Metadata } from "next";
export const metadata: Metadata = {
     title:
    "PHP Web Application Modernization | Smart IT.",
  description:
   " Access practitioner-led guides on FinOps, Zero Trust cloud architecture, and AI-ready migration strategies for 2026.",
};
export default function phpmodernwebPage() {
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
