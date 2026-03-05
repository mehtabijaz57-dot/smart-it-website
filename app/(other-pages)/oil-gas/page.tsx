import Cta from "@/components/other-pages/services/services41/Cta";
import Footer2 from "@/components/other-pages/services/services41/Footer2";

import Challages from "@/components/other-pages/services/services41/Challages";
import DetailsHero from "@/components/other-pages/services/services41/DetailsHero";
import Feedback from "@/components/other-pages/services/services41/Feedback";
import NextPrevNavigation from "@/components/other-pages/services/services41/NextPrevNavigation";
import ParallaxDivider2 from "@/components/other-pages/services/services41/ParallaxDivider2";
import Solutions from "@/components/other-pages/services/services41/Solutions";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Oil & Gas IT Solutions | SCADA & IIoT Security | Smart IT.",
  description:
    " Modernize your critical infrastructure with Smart IT’s Energy Cloud Migration. We specialize in NERC CIP compliance, Predictive Maintenance (APM), and secure SCADA-to-Cloud architectures.",
};
export default function oilgasPage() {
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
