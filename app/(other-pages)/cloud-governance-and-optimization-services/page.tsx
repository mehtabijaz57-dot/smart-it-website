import Cta from "@/components/other-pages/services/services22/Cta";
import Footer2 from "@/components/other-pages/services/services22/Footer2";

import Challages from "@/components/other-pages/services/services22/Challages";
import DetailsHero from "@/components/other-pages/services/services22/DetailsHero";
import Feedback from "@/components/other-pages/services/services22/Feedback";
import NextPrevNavigation from "@/components/other-pages/services/services22/NextPrevNavigation";
import ParallaxDivider2 from "@/components/other-pages/services/services22/ParallaxDivider2";
import Solutions from "@/components/other-pages/services/services22/Solutions";
import { Metadata } from "next";
export const metadata: Metadata = {
     title:
    "Cloud Governance & Optimization Services | Smart IT Digital.",
  description:
   " Regain control of your cloud spend and security. Smart IT Digital provides enterprise-grade governance frameworks and FinOps-driven optimization.",
};
export default function CloudGovernanceandOptimizationServicesPage() {
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
