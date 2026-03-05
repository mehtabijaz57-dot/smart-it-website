import Cta from "@/components/other-pages/services/services28/Cta";
import Footer2 from "@/components/other-pages/services/services28/Footer2";

import Challages from "@/components/other-pages/services/services28/Challages";
import DetailsHero from "@/components/other-pages/services/services28/DetailsHero";
import Feedback from "@/components/other-pages/services/services28/Feedback";
import NextPrevNavigation from "@/components/other-pages/services/services28/NextPrevNavigation";
import ParallaxDivider2 from "@/components/other-pages/services/services28/ParallaxDivider2";
import Solutions from "@/components/other-pages/services/services28/Solutions";
import { Metadata } from "next";
export const metadata: Metadata = {
     title:
    "24/7 Global IT Service Desk | Smart IT Information Technology.",
  description:
   "Smart IT Information Technology | STRATEGIC MINDS FOR YOUR COMPANY'S GROWTH.",
};
export default function globalitservicedeskPage() {
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
