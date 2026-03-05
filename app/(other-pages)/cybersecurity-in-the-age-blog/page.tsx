import BlogDetails from "@/components/other-pages/services/cybersecurity-in-the-age-blog/BlogDetails";
// import Blogs from "@/components/other-pages/services/cybersecurity-in-the-age-blog/Blogs";
import Cta from "@/components/other-pages/services/cybersecurity-in-the-age-blog/Cta";
import Footer2 from "@/components/other-pages/services/cybersecurity-in-the-age-blog/Footer2";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "cybersecurity-in-the-age-blog | Smart Information Technologies",
  description:
    "Review how Smart Information Technologies collects, processes, and safeguards personal and enterprise data in accordance with GDPR, cloud governance, and AI compliance standards.",
};
export default function cybersecurityintheageblogPage() {
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
