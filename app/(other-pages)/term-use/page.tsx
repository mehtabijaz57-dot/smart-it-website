import BlogDetails from "@/components/other-pages/services/term&condition/BlogDetails";
// import Blogs from "@/components/other-pages/services/term&condition/Blogs";
import Cta from "@/components/other-pages/services/term&condition/Cta";
import Footer2 from "@/components/other-pages/services/term&condition/Footer2";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Terms of Use | Smart Information Technologies",
  description:
    "Review the official Terms of Use for Smart Information Technologies outlining service scope, intellectual property rights, liability limitations, AI governance, and compliance standards.",
};
export default function termusePage() {
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
