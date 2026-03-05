import Cta from "@/components/other-pages/services/services9/Cta";
import Footer2 from "@/components/other-pages/services/services9/Footer2";

import Challages from "@/components/other-pages/services/services9/Challages";
import DetailsHero from "@/components/other-pages/services/services9/DetailsHero";
import Feedback from "@/components/other-pages/services/services9/Feedback";
import NextPrevNavigation from "@/components/other-pages/services/services9/NextPrevNavigation";
import ParallaxDivider2 from "@/components/other-pages/services/services9/ParallaxDivider2";
import Solutions from "@/components/other-pages/services/services9/Solutions";
import { Metadata } from "next";
export const metadata: Metadata = {
     title:
    " Cloud-Native App Development & Migration | Smart Information Technologies",
  description:
   "Move beyond lift-and-shift. Smart Information Technologies builds resilient, scalable cloud-native applications using Kubernetes, Serverless, and DevOps.",
};
export default function CloudNativeAppDevelopmentPage() {
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
