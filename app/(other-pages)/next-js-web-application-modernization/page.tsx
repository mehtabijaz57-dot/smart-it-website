import Cta from "@/components/other-pages/services/services48/Cta";
import Footer2 from "@/components/other-pages/services/services48/Footer2";

import Challages from "@/components/other-pages/services/services48/Challages";
import DetailsHero from "@/components/other-pages/services/services48/DetailsHero";
import Feedback from "@/components/other-pages/services/services48/Feedback";
import NextPrevNavigation from "@/components/other-pages/services/services48/NextPrevNavigation";
import ParallaxDivider2 from "@/components/other-pages/services/services48/ParallaxDivider2";
import Solutions from "@/components/other-pages/services/services48/Solutions";
import { Metadata } from "next";
export const metadata: Metadata = {
     title:
    "Next.js Web Modernization Services | Server Components & PPR Experts.",
  description:
   "Transform legacy web apps into high-performance Next.js 16 platforms. We specialize in App Router migration, React Server Components (RSC), and SEO optimization for 2026.",
};
export default function nextjswebapplicationmodernizationPage() {
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
