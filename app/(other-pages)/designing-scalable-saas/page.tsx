import BlogDetails from "@/components/other-pages/services/Designing-Scalable-SaaS/BlogDetails";
// import Blogs from "@/components/other-pages/services/Designing-Scalable-SaaS/Blogs";
import Cta from "@/components/other-pages/services/Designing-Scalable-SaaS/Cta";
import Footer2 from "@/components/other-pages/services/Designing-Scalable-SaaS/Footer2";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Designing-Scalable-SaaS blog| Smart Information Technologies",
  description:
    "Review how Smart Information Technologies collects, processes, and safeguards personal and enterprise data in accordance with GDPR, cloud governance, and AI compliance standards.",
};
export default function designingscalablesaasPage() {
  return (
    <>
      <main
        id="mxd-page-content"
        className="mxd-page-content inner-page-content"
      >
        <BlogDetails />
        {/* <Blogs desc="" title="More on topic" /> */}
        <Cta />
      </main>
      <Footer2 />
    </>
  );
}
