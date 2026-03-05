import Cta from "@/components/other-pages/services/services4/Cta";
import Footer2 from "@/components/other-pages/services/services4/Footer2";

import Challages from "@/components/other-pages/services/services4/Challages";
import DetailsHero from "@/components/other-pages/services/services4/DetailsHero";
import Feedback from "@/components/other-pages/services/services4/Feedback";
import NextPrevNavigation from "@/components/other-pages/services/services4/NextPrevNavigation";
import ParallaxDivider2 from "@/components/other-pages/services/services4/ParallaxDivider2";
import Solutions from "@/components/other-pages/services/services4/Solutions";
import { Metadata } from "next";
export const metadata: Metadata = {
     title:
    " Microsoft Azure Cloud Migration Services | Smart IT ",
  description:
   "Stop lifting and shifting and start modernizing. Smart IT provides expert Azure migration services focused on Landing Zones, AKS, and cost optimization using Azure Hybrid Benefit.",
};
export default function MicrosoftAzureCloudMigrationPage() {
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
