import Cta from "@/components/other-pages/services/services14/Cta";
import Footer2 from "@/components/other-pages/services/services14/Footer2";

import Challages from "@/components/other-pages/services/services14/Challages";
import DetailsHero from "@/components/other-pages/services/services14/DetailsHero";
import Feedback from "@/components/other-pages/services/services14/Feedback";
import NextPrevNavigation from "@/components/other-pages/services/services14/NextPrevNavigation";
import ParallaxDivider2 from "@/components/other-pages/services/services14/ParallaxDivider2";
import Solutions from "@/components/other-pages/services/services14/Solutions";
import { Metadata } from "next";
export const metadata: Metadata = {
     title:
    "24/7 Network Operations Center (NOC) Services | Smart IT",
  description:
   " Protect your cloud migration with 24/7 NOC services. Smart Information Technologies provides proactive monitoring, incident management, and MTTR reduction for hybrid cloud.",
};
export default function NetworkOperationPage() {
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
