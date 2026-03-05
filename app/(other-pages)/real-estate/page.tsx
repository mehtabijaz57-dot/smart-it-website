import Cta from "@/components/other-pages/services/services40/Cta";
import Footer2 from "@/components/other-pages/services/services40/Footer2";

import Challages from "@/components/other-pages/services/services40/Challages";
import DetailsHero from "@/components/other-pages/services/services40/DetailsHero";
import Feedback from "@/components/other-pages/services/services40/Feedback";
import NextPrevNavigation from "@/components/other-pages/services/services40/NextPrevNavigation";
import ParallaxDivider2 from "@/components/other-pages/services/services40/ParallaxDivider2";
import Solutions from "@/components/other-pages/services/services40/Solutions";
import { Metadata } from "next";
export const metadata: Metadata = {
     title:
    " Real Estate & Construction IT Solutions | BIM & Digital Twins | Smart IT.",
  description:
   "Modernize your portfolio with Smart IT’s Real Estate Cloud Migration. We specialize in BIM Common Data Environments (CDE), IoT Digital Twins, and secure Construction ERP hosting.",
};
export default function realestatePage() {
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
