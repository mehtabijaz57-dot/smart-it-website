import Cta from "@/components/other-pages/services/services54/Cta";
import Footer2 from "@/components/other-pages/services/services54/Footer2";

import Challages from "@/components/other-pages/services/services54/Challages";
import DetailsHero from "@/components/other-pages/services/services54/DetailsHero";
import Feedback from "@/components/other-pages/services/services54/Feedback";
import NextPrevNavigation from "@/components/other-pages/services/services54/NextPrevNavigation";
import ParallaxDivider2 from "@/components/other-pages/services/services54/ParallaxDivider2";
import Solutions from "@/components/other-pages/services/services54/Solutions";
import Services from "@/components/other-pages/services/services54/Services";
import { Metadata } from "next";
export const metadata: Metadata = {
     title:
    " Managed IT Services| Smart IT Information Technology.",
  description:
   "Smart IT Information Technology | STRATEGIC MINDS FOR YOUR COMPANY'S GROWTH.",
};
export default function managedservicespillerPage() {
  return (
    <>
      <main
        id="mxd-page-content"
        className="mxd-page-content inner-page-content"
      >
        <DetailsHero />
          <Services/>
        {/* <ParallaxDivider2 /> */}
        
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
