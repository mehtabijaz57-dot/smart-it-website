import Cta from "@/components/other-pages/services/services39/Cta";
import Footer2 from "@/components/other-pages/services/services39/Footer2";

import Challages from "@/components/other-pages/services/services39/Challages";
import DetailsHero from "@/components/other-pages/services/services39/DetailsHero";
import Feedback from "@/components/other-pages/services/services39/Feedback";
import NextPrevNavigation from "@/components/other-pages/services/services39/NextPrevNavigation";
import ParallaxDivider2 from "@/components/other-pages/services/services39/ParallaxDivider2";
import Solutions from "@/components/other-pages/services/services39/Solutions";
import { Metadata } from "next";
export const metadata: Metadata = {
     title:
    " Education IT Solutions | FERPA Compliant & Scalable | Smart IT.",
  description:
   "Modernize your campus with Smart IT’s Education Cloud Migration. We specialize in LMS auto-scaling, SIS integration, and secure, FERPA-compliant cloud infrastructure.",
};
export default function educationitsolutionsPage() {
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
