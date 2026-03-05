import Blogs from "@/components/common/Blogs";
import Cta from "@/components/common/Cta";
import Footer2 from "@/components/footers/Footer2";
import Hero from "@/components/other-pages/services/Hero";
import ParallaxDivider from "@/components/other-pages/services/ParallaxDivider";
import Services from "@/components/other-pages/services/Services";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Smart IT Services | Smart IT .",
  description:
   "Smart IT Information Technology || STRATEGIC MINDS FOR YOUR COMPANY'S GROWTH.",
};
export default function ServicesPage() {
  return (
    <>
      <main
        id="mxd-page-content"
        className="mxd-page-content inner-page-content"
      >
        <Hero />
        <Services />
        {/* <ParallaxDivider /> */}
        <Blogs />
        <Cta />
      </main>
      <Footer2 />
    </>
  );
}
