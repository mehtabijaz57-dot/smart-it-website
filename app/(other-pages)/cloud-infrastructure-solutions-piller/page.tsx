import Cta from "@/components/other-pages/services/services23/Cta";
import Footer2 from "@/components/other-pages/services/services23/Footer2";

import Challages from "@/components/other-pages/services/services23/Challages";
import DetailsHero from "@/components/other-pages/services/services23/DetailsHero";
import Feedback from "@/components/other-pages/services/services23/Feedback";
import NextPrevNavigation from "@/components/other-pages/services/services23/NextPrevNavigation";
import ParallaxDivider2 from "@/components/other-pages/services/services23/ParallaxDivider2";
import Solutions from "@/components/other-pages/services/services23/Solutions";
import Services from "@/components/other-pages/services/services23/Services";
import { Metadata } from "next";
export const metadata: Metadata = {
     title:
    "cloud-infrastructure-solutions-| Smart IT.",
  description:
   "Smart IT Information Technology | STRATEGIC MINDS FOR YOUR COMPANY'S GROWTH.",
};
export default function cloudinfrastructuresolutionspillerPage() {
  return (
    <>
      <main
        id="mxd-page-content"
        className="mxd-page-content inner-page-content"
      >
        <DetailsHero />
        {/* <ParallaxDivider2 /> */}
         <Services/>
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
