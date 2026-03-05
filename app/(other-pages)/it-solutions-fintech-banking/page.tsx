import Cta from "@/components/other-pages/services/services34/Cta";
import Footer2 from "@/components/other-pages/services/services34/Footer2";

import Challages from "@/components/other-pages/services/services34/Challages";
import DetailsHero from "@/components/other-pages/services/services34/DetailsHero";
import Feedback from "@/components/other-pages/services/services34/Feedback";
import NextPrevNavigation from "@/components/other-pages/services/services34/NextPrevNavigation";
import ParallaxDivider2 from "@/components/other-pages/services/services34/ParallaxDivider2";
import Solutions from "@/components/other-pages/services/services34/Solutions";
import { Metadata } from "next";
export const metadata: Metadata = {
     title:
    " IT Solutions for Fintech and Banking | Secure & DORA Compliant | Smart IT.",
  description:
   "Modernize your financial institution with Smart IT’s secure cloud migration. We specialize in banking compliance (PCI DSS, DORA), Zero-Trust security, and legacy core modernization..",
};
export default function  itsolutionsfintechbankingPage() {
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
