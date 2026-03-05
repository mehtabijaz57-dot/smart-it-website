import Cta from "@/components/other-pages/services/services69/Cta";
import Footer2 from "@/components/other-pages/services/services69/Footer2";

import Challages from "@/components/other-pages/services/services69/Challages";
import DetailsHero from "@/components/other-pages/services/services69/DetailsHero";
import Feedback from "@/components/other-pages/services/services69/Feedback";
import NextPrevNavigation from "@/components/other-pages/services/services69/NextPrevNavigation";
import ParallaxDivider2 from "@/components/other-pages/services/services69/ParallaxDivider2";
import Solutions from "@/components/other-pages/services/services69/Solutions";
import { Metadata } from "next";
export const metadata: Metadata = {
     title:
    "Smart IT Information Technology | STRATEGIC MINDS FOR YOUR COMPANY'S GROWTH.",
  description:
   "Smart IT Information Technology | STRATEGIC MINDS FOR YOUR COMPANY'S GROWTH.",
};
export default function Services69Page() {
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
