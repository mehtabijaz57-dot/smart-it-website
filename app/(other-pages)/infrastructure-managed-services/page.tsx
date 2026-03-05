import Cta from "@/components/other-pages/services/services15/Cta";
import Footer2 from "@/components/other-pages/services/services15/Footer2";

import Challages from "@/components/other-pages/services/services15/Challages";
import DetailsHero from "@/components/other-pages/services/services15/DetailsHero";
import Feedback from "@/components/other-pages/services/services15/Feedback";
import NextPrevNavigation from "@/components/other-pages/services/services15/NextPrevNavigation";
import ParallaxDivider2 from "@/components/other-pages/services/services15/ParallaxDivider2";
import Solutions from "@/components/other-pages/services/services15/Solutions";
import { Metadata } from "next";
export const metadata: Metadata = {
     title:
    "Infrastructure Managed Services | Cloud & Hybrid IT | Smart IT",
  description:
   "Move from legacy hardware to agile cloud operations. Smart Information Technologies provides 24/7 infrastructure managed services, IaC, and FinOps optimization.",
};
export default function InfrastructureManagedServicesPage() {
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
