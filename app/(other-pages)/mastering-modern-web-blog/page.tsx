import BlogDetails from "@/components/other-pages/services/Mastering-Modern-Web-blog/BlogDetails";
// import Blogs from "@/components/other-pages/services/Mastering-Modern-Web-blog/Blogs";
import Cta from "@/components/other-pages/services/Mastering-Modern-Web-blog/Cta";
import Footer2 from "@/components/other-pages/services/Mastering-Modern-Web-blog/Footer2";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Mastering-Modern-Web-blog | Smart Information Technologies",
  description:
    "Review how Smart Information Technologies collects, processes, and safeguards personal and enterprise data in accordance with GDPR, cloud governance, and AI compliance standards.",
};
export default function MasteringModernWebblogPage() {
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
