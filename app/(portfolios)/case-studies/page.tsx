import Cta from "@/components/common/Cta";
import Footer2 from "@/components/footers/Footer2";

import MarqueeSlider from "@/components/portfolios/MarqueeSlider";
import ParallaxDivider from "@/components/portfolios/ParallaxDivider";
import PortfolioMasonry from "@/components/portfolios/PortfolioMasonry";
import Testimonials from "@/components/common/Testimonials";
import { Metadata } from "next";
export const metadata: Metadata = {
   title:
    " Case Studies of Smart IT | Smart  Information Technology.",
  description:
   " Smart Information Technology || STRATEGIC MINDS FOR YOUR COMPANY'S GROWTH.",
};
export default function CasestudiesPage() {
  return (
    <>
      <main
        id="mxd-page-content"
        className="mxd-page-content inner-page-content"
      >
        <PortfolioMasonry />
        <ParallaxDivider /> <MarqueeSlider />
        <Testimonials />
        <Cta />
      </main>
      <Footer2 />
    </>
  );
}
