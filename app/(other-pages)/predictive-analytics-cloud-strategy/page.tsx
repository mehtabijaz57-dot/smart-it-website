import Cta from "@/components/other-pages/services/services21/Cta";
import Footer2 from "@/components/other-pages/services/services21/Footer2";

import Challages from "@/components/other-pages/services/services21/Challages";
import DetailsHero from "@/components/other-pages/services/services21/DetailsHero";
import Feedback from "@/components/other-pages/services/services21/Feedback";
import NextPrevNavigation from "@/components/other-pages/services/services21/NextPrevNavigation";
import ParallaxDivider2 from "@/components/other-pages/services/services21/ParallaxDivider2";
import Solutions from "@/components/other-pages/services/services21/Solutions";
import { Metadata } from "next";
export const metadata: Metadata = {
     title:
    "Predictive Analytics & Modeling Services | Cloud Migration Strategy",
  description:
   "Move from reactive reporting to proactive intelligence. Smart IT delivers cloud-based predictive analytics, Feature Stores, and MLOps automation.",
};
export default function PredictiveAnalyticsCloudStrategyPage() {
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
