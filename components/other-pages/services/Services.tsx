import Blogs from "@/components/common/Blogs";
import Cta from "@/components/common/Cta";
import Footer2 from "@/components/footers/Footer2";

import About from "@/components/homes/home-1/About";
import Approch from "@/components/common/Approch";
import Awards from "@/components/common/Awards";

// import Devider from "@/components/homes/home-1/Devider";
import Facts from "@/components/common/Facts";
import Marquee from "@/components/homes/home-1/Marquee";
import MarqueeSection2 from "@/components/homes/home-1/MarqueeSection2";
import MarqueeSlider from "@/components/common/MarqueeSlider";
import Partners from "@/components/homes/home-1/Partners";
import Projects from "@/components/homes/home-1/Projects";
import ServicesStack from "@/components/homes/home-1/ServicesStack";
import Testimonials from "@/components/homes/home-1/Testimonials";
import { Metadata } from "next";
export const metadata: Metadata = {
   title:
    "Services of Smart IT | STRATEGIC MINDS FOR YOUR COMPANY'S GROWTH",
  description:
   "Smart Information Technology - STRATEGIC MINDS FOR YOUR COMPANY'S GROWTH",
};
export default function HomeMainPage() {
  return (
    <>
      <main id="mxd-page-content" className="mxd-page-content">
       <br />
        {/* <Devider /> */}
         <ServicesStack />
        <Marquee />
    
       
        <Approch />
        <MarqueeSlider />
        <Awards />
        <Testimonials />
        <MarqueeSection2 />
        {/* <Partners /> */}
      
        {/* <Cta /> */}
      </main>
      
    </>
  );
}
