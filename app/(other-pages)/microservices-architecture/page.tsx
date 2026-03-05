import Cta from "@/components/other-pages/services/services8/Cta";
import Footer2 from "@/components/other-pages/services/services8/Footer2";

import Challages from "@/components/other-pages/services/services8/Challages";
import DetailsHero from "@/components/other-pages/services/services8/DetailsHero";
import Feedback from "@/components/other-pages/services/services8/Feedback";
import NextPrevNavigation from "@/components/other-pages/services/services8/NextPrevNavigation";
import ParallaxDivider2 from "@/components/other-pages/services/services8/ParallaxDivider2";
import Solutions from "@/components/other-pages/services/services8/Solutions";
import { Metadata } from "next";
export const metadata: Metadata = {
     title:
    "Microservices Architecture & Cloud Migration | Smart Information Technologies ",
  description:
   " Scale faster and reduce technical debt. Smart Information Technologies provides expert Monolith-to-Microservices migration strategies using Kubernetes and DevOps.",
};
export default function MicroservicesArchitecturePage() {
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
