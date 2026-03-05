import BlogDetails from "@/components/other-pages/services/cookie-policy/BlogDetails";
// import Blogs from "@/components/other-pages/services/term&condition/Blogs";
import Cta from "@/components/other-pages/services/cookie-policy/Cta";
import Footer2 from "@/components/other-pages/services/cookie-policy/Footer2";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Privacy Policy | Smart Information Technologies",
  description:
    "Review how Smart Information Technologies collects, processes, and safeguards personal and enterprise data in accordance with GDPR, cloud governance, and AI compliance standards.",
};
export default function cookiepolicyPage() {
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
