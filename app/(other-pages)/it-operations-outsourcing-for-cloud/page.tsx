import Cta from "@/components/other-pages/services/services13/Cta";
import Footer2 from "@/components/other-pages/services/services13/Footer2";

import Challages from "@/components/other-pages/services/services13/Challages";
import DetailsHero from "@/components/other-pages/services/services13/DetailsHero";
import Feedback from "@/components/other-pages/services/services13/Feedback";
import NextPrevNavigation from "@/components/other-pages/services/services13/NextPrevNavigation";
import ParallaxDivider2 from "@/components/other-pages/services/services13/ParallaxDivider2";
import Solutions from "@/components/other-pages/services/services13/Solutions";
import { Metadata } from "next";
export const metadata: Metadata = {
     title:
    " IT Operations Outsourcing for Cloud Success | Smart Information Technologies",
  description:
   "Stop struggling with cloud complexity. Smart Information Technologies provides expert IT Operations Outsourcing to ensure 24/7 uptime, cost control, and security post-migration.",
};
export default function ITOperationsOutsourcingforCloudPage() {
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
