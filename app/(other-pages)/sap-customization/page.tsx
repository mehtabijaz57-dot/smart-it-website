import Cta from "@/components/other-pages/services/services5/Cta";
import Footer2 from "@/components/other-pages/services/services5/Footer2";

import Challages from "@/components/other-pages/services/services5/Challages";
import DetailsHero from "@/components/other-pages/services/services5/DetailsHero";
import Feedback from "@/components/other-pages/services/services5/Feedback";
import NextPrevNavigation from "@/components/other-pages/services/services5/NextPrevNavigation";
import ParallaxDivider2 from "@/components/other-pages/services/services5/ParallaxDivider2";
import Solutions from "@/components/other-pages/services/services5/Solutions";
import { Metadata } from "next";
export const metadata: Metadata = {
     title:
    " SAP Customization Services | Clean Core & BTP Extensibility Experts",
  description:
   "Transform your ERP with Smart IT’s SAP customization services. We specialize in S/4HANA Clean Core strategy, ABAP RAP, and side-by-side BTP development.",
};
export default function SAPCustomizationPage() {
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
