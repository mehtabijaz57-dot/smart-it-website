import Cta from "@/components/other-pages/services/services38/Cta";
import Footer2 from "@/components/other-pages/services/services38/Footer2";

import Challages from "@/components/other-pages/services/services38/Challages";
import DetailsHero from "@/components/other-pages/services/services38/DetailsHero";
import Feedback from "@/components/other-pages/services/services38/Feedback";
import NextPrevNavigation from "@/components/other-pages/services/services38/NextPrevNavigation";
import ParallaxDivider2 from "@/components/other-pages/services/services38/ParallaxDivider2";
import Solutions from "@/components/other-pages/services/services38/Solutions";
import { Metadata } from "next";
export const metadata: Metadata = {
     title:
    " Telecom & Media IT Solutions | NFV & 5G Core Strategy | Smart IT.",
  description:
   " Modernize your network with Smart IT’s Telecom Cloud Migration. We specialize in NFV, low-latency media streaming, and secure 5G cloudification for global broadcasters and operators.",
};
export default function  telecomandmediaPage() {
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
