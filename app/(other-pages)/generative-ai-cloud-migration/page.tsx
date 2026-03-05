import Cta from "@/components/other-pages/services/services19/Cta";
import Footer2 from "@/components/other-pages/services/services19/Footer2";

import Challages from "@/components/other-pages/services/services19/Challages";
import DetailsHero from "@/components/other-pages/services/services19/DetailsHero";
import Feedback from "@/components/other-pages/services/services19/Feedback";
import NextPrevNavigation from "@/components/other-pages/services/services19/NextPrevNavigation";
import ParallaxDivider2 from "@/components/other-pages/services/services19/ParallaxDivider2";
import Solutions from "@/components/other-pages/services/services19/Solutions";
import { Metadata } from "next";
export const metadata: Metadata = {
     title:
    "Generative AI Cloud Migration Strategy | Smart Information Technologies",
  description:
   "Accelerate migration with Generative AI. Smart Information Technologies uses AI for legacy code refactoring, synthetic data testing, and IaC generation.",
};
export default function GenerativeAICloudMigrationPage() {
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
