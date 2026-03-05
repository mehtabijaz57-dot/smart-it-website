import Cta from "@/components/other-pages/services/services46/Cta";
import Footer2 from "@/components/other-pages/services/services46/Footer2";

import Challages from "@/components/other-pages/services/services46/Challages";
import DetailsHero from "@/components/other-pages/services/services46/DetailsHero";
import Feedback from "@/components/other-pages/services/services46/Feedback";
import NextPrevNavigation from "@/components/other-pages/services/services46/NextPrevNavigation";
import ParallaxDivider2 from "@/components/other-pages/services/services46/ParallaxDivider2";
import Solutions from "@/components/other-pages/services/services46/Solutions";
import { Metadata } from "next";
export const metadata: Metadata = {
     title:
    " Salesforce Implementation Services | Agentforce & Data Cloud Experts.",
  description:
   " Transform your business with Smart IT’s Salesforce Implementation. We specialize in Agentforce autonomous agents, Data Cloud identity resolution, and seamless ERP integration for 2026.",
};
export default function salesforceimplementationservicesPage() {
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
