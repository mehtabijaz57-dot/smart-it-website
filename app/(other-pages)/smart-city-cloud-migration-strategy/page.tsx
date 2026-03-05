import Cta from "@/components/other-pages/services/services29/Cta";
import Footer2 from "@/components/other-pages/services/services29/Footer2";

import Challages from "@/components/other-pages/services/services29/Challages";
import DetailsHero from "@/components/other-pages/services/services29/DetailsHero";
import Feedback from "@/components/other-pages/services/services29/Feedback";
import NextPrevNavigation from "@/components/other-pages/services/services29/NextPrevNavigation";
import ParallaxDivider2 from "@/components/other-pages/services/services29/ParallaxDivider2";
import Solutions from "@/components/other-pages/services/services29/Solutions";
import { Metadata } from "next";
export const metadata: Metadata = {
     title:
    "Smart City Cloud Migration Strategy & Infrastructure | Smart IT.",
  description:
   "Modernize urban operations. Smart IT delivers secure smart city cloud migration, Digital Twins for urban planning, and sovereign data solutions for governments.",
};
export default function SmartCityCloudMigrationStrategyPage() {
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
