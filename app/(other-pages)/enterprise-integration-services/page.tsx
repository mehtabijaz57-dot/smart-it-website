import Cta from "@/components/other-pages/services/services33/Cta";
import Footer2 from "@/components/other-pages/services/services33/Footer2";

import Challages from "@/components/other-pages/services/services33/Challages";
import DetailsHero from "@/components/other-pages/services/services33/DetailsHero";
import Feedback from "@/components/other-pages/services/services33/Feedback";
import NextPrevNavigation from "@/components/other-pages/services/services33/NextPrevNavigation";
import ParallaxDivider2 from "@/components/other-pages/services/services33/ParallaxDivider2";
import Solutions from "@/components/other-pages/services/services33/Solutions";
import { Metadata } from "next";
export const metadata: Metadata = {
     title:
    "Enterprise Integration Services | iPaaS & API Management | Smart IT.",
  description:
   "Connect your ERP, CRM, and cloud apps with Smart IT’s Enterprise Integration Services. We specialize in iPaaS, real-time data sync, and API governance for the modern enterprise.",
};
export default function EnterpriseIntegrationServicesPage() {
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
