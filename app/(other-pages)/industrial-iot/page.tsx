import Cta from "@/components/other-pages/services/services31/Cta";
import Footer2 from "@/components/other-pages/services/services31/Footer2";

import Challages from "@/components/other-pages/services/services31/Challages";
import DetailsHero from "@/components/other-pages/services/services31/DetailsHero";
import Feedback from "@/components/other-pages/services/services31/Feedback";
import NextPrevNavigation from "@/components/other-pages/services/services31/NextPrevNavigation";
import ParallaxDivider2 from "@/components/other-pages/services/services31/ParallaxDivider2";
import Solutions from "@/components/other-pages/services/services31/Solutions";
import { Metadata } from "next";
export const metadata: Metadata = {
     title:
    "Industrial IoT (IIoT) Cloud Migration Strategy | Smart IT.",
  description:
   " Modernize your OT environment. Smart IT delivers secure IIoT cloud migration, edge computing, and Digital Twin architecture for manufacturing and energy.",
};
export default function industrialIoTPage() {
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
