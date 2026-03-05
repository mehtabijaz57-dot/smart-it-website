import Cta from "@/components/other-pages/services/services20/Cta";
import Footer2 from "@/components/other-pages/services/services20/Footer2";

import Challages from "@/components/other-pages/services/services20/Challages";
import DetailsHero from "@/components/other-pages/services/services20/DetailsHero";
import Feedback from "@/components/other-pages/services/services20/Feedback";
import NextPrevNavigation from "@/components/other-pages/services/services20/NextPrevNavigation";
import ParallaxDivider2 from "@/components/other-pages/services/services20/ParallaxDivider2";
import Solutions from "@/components/other-pages/services/services20/Solutions";
import { Metadata } from "next";
export const metadata: Metadata = {
     title:
    " Business Intelligence (BI) Cloud Migration & Modernization | Smart IT.",
  description:
   "Don't just migrate reports modernize them. Smart Information Technologies delivers BI rationalization, semantic layer design, and Power BI/Tableau cloud migration.",
};
export default function BusinessIntelligenceCloudMigrationPage() {
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
