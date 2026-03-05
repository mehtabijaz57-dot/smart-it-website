import Blogs1 from "@/components/blogs/Blogs1";
import Cta from "@/components/common/Cta";
import Footer2 from "@/components/footers/Footer2";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Blog  | Smart Inforrmation Technology.",
  description:
    "Blog Standard | Smart Inforrmation Technology.",
};
export default function BlogStandardPage() {
  return (
    <>
      <main
        id="mxd-page-content"
        className="mxd-page-content inner-page-content"
      >
        <Blogs1 />
        <Cta />
      </main>
      <Footer2 />
    </>
  );
}
