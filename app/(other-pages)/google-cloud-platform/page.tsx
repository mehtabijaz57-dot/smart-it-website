import Cta from "@/components/other-pages/services/services45/Cta";
import Footer2 from "@/components/other-pages/services/services45/Footer2";

import Challages from "@/components/other-pages/services/services45/Challages";
import DetailsHero from "@/components/other-pages/services/services45/DetailsHero";
import Feedback from "@/components/other-pages/services/services45/Feedback";
import NextPrevNavigation from "@/components/other-pages/services/services45/NextPrevNavigation";
import ParallaxDivider2 from "@/components/other-pages/services/services45/ParallaxDivider2";
import Solutions from "@/components/other-pages/services/services45/Solutions";
import { Metadata } from "next";
export const metadata: Metadata = {
     title:
    " GCP Cloud Migration Services | BigQuery & Vertex AI Experts | Smart IT.",
  description:
   " Transform your enterprise with Smart IT’s Google Cloud (GCP) migration services. We specialize in AI-driven refactoring, BigQuery data lakes, and Vertex AI agentic modernization.",
};
export default function googlecloudplatformPage() {
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
