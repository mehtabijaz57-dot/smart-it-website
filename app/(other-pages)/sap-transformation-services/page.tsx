import Cta from "@/components/other-pages/services/services47/Cta";
import Footer2 from "@/components/other-pages/services/services47/Footer2";

import Challages from "@/components/other-pages/services/services47/Challages";
import DetailsHero from "@/components/other-pages/services/services47/DetailsHero";
import Feedback from "@/components/other-pages/services/services47/Feedback";
import NextPrevNavigation from "@/components/other-pages/services/services47/NextPrevNavigation";
import ParallaxDivider2 from "@/components/other-pages/services/services47/ParallaxDivider2";
import Solutions from "@/components/other-pages/services/services47/Solutions";
import { Metadata } from "next";
export const metadata: Metadata = {
     title:
    " SAP S/4HANA Transformation Services | RISE with SAP & Clean Core.",
  description:
   " Move beyond legacy ECC. Smart IT provides expert SAP S/4HANA transformation, focusing on Clean Core architecture, BTP extensions, and seamless cloud migration.",
};
export default function saptransformationservicesPage() {
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
