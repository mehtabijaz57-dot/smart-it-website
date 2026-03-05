import Cta from "@/components/other-pages/services/services44/Cta";
import Footer2 from "@/components/other-pages/services/services44/Footer2";

import Challages from "@/components/other-pages/services/services44/Challages";
import DetailsHero from "@/components/other-pages/services/services44/DetailsHero";
import Feedback from "@/components/other-pages/services/services44/Feedback";
import NextPrevNavigation from "@/components/other-pages/services/services44/NextPrevNavigation";
import ParallaxDivider2 from "@/components/other-pages/services/services44/ParallaxDivider2";
import Solutions from "@/components/other-pages/services/services44/Solutions";
import { Metadata } from "next";
export const metadata: Metadata = {
     title:
    "AWS Cloud Migration Consulting | 7 Rs Strategy & FinOps | Smart IT.",
  description:
   "Modernize your enterprise with Smart IT’s AWS Cloud Migration Services. We specialize in the 7 Rs strategy, AWS Landing Zones, and FinOps cost optimization to de-risk your journey.",
};
export default function awscloudmigrationconsultingservicesPage() {
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
