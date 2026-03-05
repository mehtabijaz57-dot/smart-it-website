import Cta from "@/components/other-pages/services/services32/Cta";
import Footer2 from "@/components/other-pages/services/services32/Footer2";

import Challages from "@/components/other-pages/services/services32/Challages";
import DetailsHero from "@/components/other-pages/services/services32/DetailsHero";
import Feedback from "@/components/other-pages/services/services32/Feedback";
import NextPrevNavigation from "@/components/other-pages/services/services32/NextPrevNavigation";
import ParallaxDivider2 from "@/components/other-pages/services/services32/ParallaxDivider2";
import Solutions from "@/components/other-pages/services/services32/Solutions";
import { Metadata } from "next";
export const metadata: Metadata = {
     title:
    "Oracle ERP Cloud Services | Implementation & OCI Migration | Smart IT.",
  description:
   "Modernize your enterprise with Oracle ERP Cloud. Smart IT provides expert implementation, OIC integration, and quarterly update management for a predictive, data-driven business.",
};
export default function OracleERPCloudServicesPage() {
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
