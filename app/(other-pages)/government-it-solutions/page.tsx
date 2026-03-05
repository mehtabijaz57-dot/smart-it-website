import Cta from "@/components/other-pages/services/services42/Cta";
import Footer2 from "@/components/other-pages/services/services42/Footer2";

import Challages from "@/components/other-pages/services/services42/Challages";
import DetailsHero from "@/components/other-pages/services/services42/DetailsHero";
import Feedback from "@/components/other-pages/services/services42/Feedback";
import NextPrevNavigation from "@/components/other-pages/services/services42/NextPrevNavigation";
import ParallaxDivider2 from "@/components/other-pages/services/services42/ParallaxDivider2";
import Solutions from "@/components/other-pages/services/services42/Solutions";
import { Metadata } from "next";
export const metadata: Metadata = {
     title:
    "Government IT Solutions | FedRAMP & Zero Trust | Smart IT.",
  description:
   "Modernize your agency with Smart IT’s Government Cloud Migration. We specialize in FedRAMP compliance, NIST Zero Trust architecture, and legacy IT modernization for the public sector.",
};
export default function governmentitsolutionsPage() {
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
