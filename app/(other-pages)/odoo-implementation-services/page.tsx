import Cta from "@/components/other-pages/services/services17/Cta";
import Footer2 from "@/components/other-pages/services/services17/Footer2";

import Challages from "@/components/other-pages/services/services17/Challages";
import DetailsHero from "@/components/other-pages/services/services17/DetailsHero";
import Feedback from "@/components/other-pages/services/services17/Feedback";
import NextPrevNavigation from "@/components/other-pages/services/services17/NextPrevNavigation";
import ParallaxDivider2 from "@/components/other-pages/services/services17/ParallaxDivider2";
import Solutions from "@/components/other-pages/services/services17/Solutions";
import { Metadata } from "next";
export const metadata: Metadata = {
     title:
    "Odoo Implementation Services | Custom ERP Solutions | Smart IT",
  description:
   " Modernize your business with Odoo. Smart IT provides expert Odoo implementation, Python customization, and Odoo.sh cloud migration for scalable enterprise growth.",
};
export default function OdooImplementationServicesPage() {
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
