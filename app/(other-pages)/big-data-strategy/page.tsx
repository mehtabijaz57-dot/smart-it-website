import Cta from "@/components/other-pages/services/services16/Cta";
import Footer2 from "@/components/other-pages/services/services16/Footer2";

import Challages from "@/components/other-pages/services/services16/Challages";
import DetailsHero from "@/components/other-pages/services/services16/DetailsHero";
import Feedback from "@/components/other-pages/services/services16/Feedback";
import NextPrevNavigation from "@/components/other-pages/services/services16/NextPrevNavigation";
import ParallaxDivider2 from "@/components/other-pages/services/services16/ParallaxDivider2";
import Solutions from "@/components/other-pages/services/services16/Solutions";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Big Data Strategy & Architecture Services | Cloud Data Migration",
  description:
    "Modernize your data estate with Smart IT. Expert Big Data strategy and Lakehouse architecture to power real-time analytics and AI readiness.",
};
export default function BigDataStrategyPage() {
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
