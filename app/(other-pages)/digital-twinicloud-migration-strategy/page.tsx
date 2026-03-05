import Cta from "@/components/other-pages/services/services30/Cta";
import Footer2 from "@/components/other-pages/services/services30/Footer2";

import Challages from "@/components/other-pages/services/services30/Challages";
import DetailsHero from "@/components/other-pages/services/services30/DetailsHero";
import Feedback from "@/components/other-pages/services/services30/Feedback";
import NextPrevNavigation from "@/components/other-pages/services/services30/NextPrevNavigation";
import ParallaxDivider2 from "@/components/other-pages/services/services30/ParallaxDivider2";
import Solutions from "@/components/other-pages/services/services30/Solutions";
import { Metadata } from "next";
export const metadata: Metadata = {
     title:
    " Digital Twin Cloud Migration & Platform Strategy | Smart IT.",
  description:
   "Scale your virtual assets. Smart IT provides expert Digital Twin cloud migration, OpenUSD integration, and real-time simulation for Industry 4.0 and Smart Cities.",
};
export default function  DigitalTwinCloudMigrationStrategyPage() {
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
