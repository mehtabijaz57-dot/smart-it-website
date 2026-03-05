import Image from "next/image";
import Link from "next/link";

import AnimatedButton from "../../../../components/animation/AnimatedButton";

export default function BlogDetails() {
  return (
    <div className="mxd-section padding-pre-title">
      <div className="mxd-container grid-container">
        <div className="mxd-article-area loading-wrap">
          {/* Article Container Start */}
          <div className="mxd-article-container mxd-grid-item no-margin">
            {/* Article Start */}
            <article className="mxd-article">
              {/* Article Headline Start */}
              <div className="mxd-article__headline">
                <div className="mxd-article__meta">
                  <div className="mxd-article__breadcrumbs loading__item">
                    <span>
                      <Link href={`#`}>Home</Link>
                    </span>
                    <span>
                      <Link href={`#`}> Legal </Link>
                    </span>
                    <span className="current-item">
                      Terms of Use
                      {/* <a href="#">My journey into the future of art</a> */}
                    </span>
                  </div>
                  <div className="mxd-article__data loading__item">
                    <span className="meta-date">

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        viewBox="0 0 20 20"
                      >
                        <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z" />
                      </svg>
                    </span>
                    <span className="meta-time"></span>
                  </div>
                </div>
                <div className="mxd-article__title loading__item">
                  <h1 className="h1-small">
                    Terms of Use
                  </h1>
                </div>
                <div className="mxd-article__tags loading__item">
                  <span className="tag tag-default tag-outline tag-link-outline">
                    <Link href={`#`}>Midjourney</Link>
                  </span>
                  <span className="tag tag-default tag-outline tag-link-outline">
                    <Link href={`#`}>AI</Link>
                  </span>
                  <span className="tag tag-default tag-outline tag-link-outline">
                    <Link href={`#`}>Editorial</Link>
                  </span>
                </div>
              </div>
              {/* Article Headline End */}
              {/* Article Thumb Start */}
              {/* <div className="mxd-article__thumb loading__fade">
                <Image
                  alt="Article Thumbnail"
                  src="/img/blog/article/1920x1280_tm-01.webp"
                  width={1920}
                  height={1280}
                />
              </div> */}
              {/* Article Thumb End */}
              {/* Article Content Start */}
              <div className="mxd-article__content">
                <div className="mxd-article__block">
                  <p className="t-large mxd-article__excerpt">
                    Welcome to Smart Information Technologies (“Smart IT Digital”). <br />

                    These Terms of Use (“Terms”) govern your access to and use of our consulting services, cloud migration strategies, architectural modernization frameworks, proprietary methodologies, and related resources (collectively, the “Services”).
                  </p>
                  <p>
                    By accessing our website, engaging our consultancy, or utilizing any of our materials, you agree to be legally bound by these Terms. If you do not agree with these Terms, you must discontinue use of our Services immediately.

                    These Terms define the legal boundaries of our professional relationship and outline rights, responsibilities, and limitations applicable to both parties.
                  </p>
                </div>
                <div className="mxd-article__block block-table-of-contents">
                  <p className="table-of-contents__title">Table of contents:</p>
                  <ul className="table-of-contents__nav">
                    <li>
                      <a href="#chapter-01">Scope of Professional Engagement</a>
                    </li>
                    <li>
                      <a href="#chapter-02">Acceptable Use and Conduct</a>
                    </li>
                    <li>
                      <a href="#chapter-03">Client Responsibilities</a>
                    </li>
                    <li>
                      <a href="#chapter-04">Intellectual Property and Clean Core Philosophy</a>
                    </li>
                    <li>
                      <a href="#chapter-05">AI and Automated Orchestration</a>
                    </li>
                    <li>
                      <a href="#chapter-06">Limitation of Liability and Shared Responsibility</a>
                    </li>
                  </ul>
                </div>
                <div id="chapter-01" className="mxd-article__block">
                  <h3>Scope of Professional Engagement</h3>
                  <p>
                    Smart IT Digital provides enterprise-grade consulting and technical execution services including, but not limited to: <br /><br />

                    Cloud Strategy and Rationalization: <br /><br />

                    Evaluation, planning, and structured migration of enterprise workloads to public, private, or hybrid cloud environments. <br /><br />

                    Architectural Modernization: <br /><br />

                    Transformation of legacy systems into cloud-native, containerized, and AI-ready architectures. <br /><br />

                    Governance and Compliance: <br /><br />

                    Alignment of cloud environments with regulatory and security standards including GDPR, DORA, SOC2, and other applicable frameworks. <br /><br />

                    The specific scope of work for each engagement shall be defined in a mutually executed Service Agreement or Statement of Work (SOW).
                  </p>
                </div>
                {/* <div className="mxd-article__block block-quote">
                  <blockquote>
                    <p className="quote__text">
                      AI didn&apos;t replace my creativity — it amplified it,
                      unlocking possibilities I hadn&apos;t even imagined.
                    </p>
                    <p className="quote__cite">
                      <cite>Alex Walker</cite>
                    </p>
                  </blockquote>
                </div>
                <div className="mxd-article__block">
                  <p>
                    At first, using AI felt like learning a new language.
                    Experimenting with prompts and settings was a mix of trial
                    and error, but it quickly became clear that these tools can
                    be useful. What surprised me most was how seamlessly AI
                    could complement my existing workflow, turning vague ideas
                    into great visuals in ways I hadn&apos;t expected.
                  </p>
                </div> */}
                <div id="chapter-02" className="mxd-article__block">
                  <h3>Acceptable Use and Conduct</h3>
                  <p>
                    Our Services are intended strictly for lawful, professional, and enterprise transformation purposes.


                  </p>
                  <ol className="article-ol">
                    <li>
                      You agree not to:
                      <ul className="article-ul">
                        <li>Use our Services for any unlawful activity or violation of international data protection regulations.</li>
                        <li>Reverse-engineer, replicate, or decompile proprietary migration frameworks or architectural templates</li>
                        <li>Attempt to bypass cloud security controls or provider guardrails</li>
                        <li>Conduct unauthorized stress testing, penetration testing, or infrastructure probing</li>
                        <li>Use automated systems to scrape, extract, or reproduce our intellectual property</li>
                      </ul>

                    </li>
                    {/* <li>
                      It&apos;s not always perfect
                      <ul>
                        <li>AI struggles with style consistency.</li>
                        <li>
                          It can take time to refine results to match a vision.
                        </li>
                      </ul>
                    </li> */}
                    {/* <li>
                      It raises ethical questions
                      <ul>
                        <li>Who owns the artwork?</li>
                        <li>Is AI-generated content truly “original”?</li>
                      </ul>
                    </li> */}
                  </ol>
                </div>
                {/* <div className="mxd-article__block block-image">
                  <div className="block-image__container">
                    <Image
                      alt="Article Image"
                      src="/img/blog/article/1920x1280_img-01.webp"
                      width={1920}
                      height={1280}
                    />
                    <div className="block-image__tags">
                      <span className="tag tag-default tag-permanent">
                        AI generated image
                      </span>
                    </div>
                  </div>
                </div> */}
                <div id="chapter-03" className="mxd-article__block">
                  <h3>Client Responsibilities</h3>
                  <p>
                    A successful transformation engagement is a collaborative effort. <br />
                    The Client agrees to:
                  </p>
                  <h5>Accuracy of Information</h5>
                  <p>
                    Provide complete, accurate, and up-to-date infrastructure data and metadata.
                  </p>
                  <h5>Licensing Compliance</h5>
                  <p>
                    Ensure all legacy software and workloads are properly licensed for cloud deployment.
                  </p>
                  <h5>Credential Security</h5>
                  <p>
                    Maintain strict control and confidentiality over administrative access credentials granted during the engagement.
                  </p>
                  <h5>Operational Cooperation</h5>
                  <p>Provide timely feedback, approvals, and access necessary for project completion.

                    Failure to meet these responsibilities may result in delays or additional service costs.</p>
                </div>
                {/* <div className="mxd-article__block block-image">
                  <div className="block-image__container">
                    <Image
                      alt="Article Image"
                      src="/img/blog/article/1200x1200_img-01.webp"
                      width={1200}
                      height={1200}
                    />
                    <div className="block-image__tags">
                      <span className="tag tag-default tag-permanent">
                        AI generated pattern
                      </span>
                    </div>
                  </div>
                  <div className="block-image__container">
                    <Image
                      alt="Article Image"
                      src="/img/blog/article/1200x1200_img-02.webp"
                      width={1200}
                      height={1200}
                    />
                    <div className="block-image__tags">
                      <span className="tag tag-default tag-permanent">
                        AI generated image
                      </span>
                    </div>
                  </div>
                </div> */}
                <div id="chapter-04" className="mxd-article__block">
                  <h3>The Intellectual Property and Clean Core Philosophy</h3>
                  <p>
                    <span>Smart IT Digital Property.</span>All pre-existing methodologies, frameworks, migration scripts, architectural templates, and proprietary tools remain the exclusive property of Smart IT Digital.
                  </p>
                  <p>
                    <span>Client Deliverables.</span>
                    Upon full payment of applicable fees, the Client is granted a perpetual, non-exclusive, non-transferable license to use deliverables created during the engagement strictly for internal business operations.
                  </p>
                  <p>
                    <span>Open Source Components.</span>
                    Certain solutions may incorporate open-source technologies such as Terraform modules, Kubernetes frameworks, or other libraries governed by their respective licenses (e.g., MIT, Apache). Such components remain subject to their original licensing terms.
                  </p>
                </div>
                <div id="chapter-05" className="mxd-article__block">
                  <h3>AI and Automated Orchestration</h3>
                  <p>
                    As of 2026, Smart IT Digital utilizes Autonomous Agents and AI-Assisted Code Generation to enhance efficiency and accelerate migration timelines.
                  </p>
                  <ul><h6>Human Oversight</h6><br />
                    <li>All AI-generated outputs are reviewed, validated, and approved by a Certified Human Architect prior to implementation.</li><br />

                    <h6>Data Privacy Commitment</h6><br />
                    <li>
                      Client proprietary data will not be used to train public or third-party artificial intelligence models.

                      We maintain strict internal governance over automated systems to ensure quality, compliance, and security.
                    </li>

                  </ul>
                </div>
                <div id="chapter-06" className="mxd-article__block">
                  <h3>Limitation of Liability and Shared Responsibility</h3>
                  
                  <p>
                    Cloud computing operates under a Shared Responsibility Model.
                  </p>
                  <ul>
                    <h6>Provider-Level Responsibility</h6><br />
                    <li>
                      Smart IT Digital is not liable for outages, data loss, service interruptions, or security incidents caused by third-party Cloud Service Providers including AWS, Microsoft Azure, or Google Cloud.
                    </li><br />
                    <h6>Limitation of Consulting Liability</h6>
                    <li>
                    Our total liability shall be strictly limited to the professional fees paid for the specific phase of work in which the claim arises.
                    </li><br />
                    <p>Under no circumstances shall Smart IT Digital be liable for:</p><br />

                    <li>
                     Lost profits
                    </li>
                    <li>Indirect or consequential damages</li>
                    <li>Business interruption losses</li>
                    <li>Migration cutover-related downtime</li>
                  </ul>
                </div>
              </div>
              {/* Article Content End */}
            </article>
            {/* Article End */}
            {/* Article Author Start */}
            {/* <div className="mxd-article-author">
              <div className="mxd-article-author__data">
                <a className="mxd-article-author__avatar" href="#">
                  <Image
                    alt="Avatar"
                    src="/img/avatars/300x300_ava-07.webp"
                    width={300}
                    height={300}
                  />
                </a>
                <div className="mxd-article-author__info">
                  <h5 className="mxd-article-author__name">
                    <a href="#">Johanna Cherry</a>
                    <small className="mxd-article-author__position">
                      Brand Identity Expert
                    </small>
                  </h5>
                  <div className="mxd-article-author__socials">
                    <span className="tag tag-default tag-opposite tag-link-opposite">
                      <a href="https://www.linkedin.com/" target="_blank">
                        LinkedIn
                      </a>
                    </span>
                    <span className="tag tag-default tag-opposite tag-link-opposite">
                      <a href="https://www.behance.net/" target="_blank">
                        Behance
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="mxd-article-author__quote">
                <p>
                  With years of experience blending creativity and strategy, she
                  helps businesses stand out and connect with their audiences on
                  a deeper level. When not designing, Johanna explores emerging
                  trends in branding and shares her insights with the creative
                  community.
                </p>
              </div>
            </div> */}
            {/* Article Author End */}
            {/* Article Navigation Start */}
            {/* <div className="mxd-article-navigation">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-6 mxd-article-navigation__navitem left">
                    <AnimatedButton
                      className="btn btn-line-small btn-muted anim-no-delay slide-left"
                      as={"a"}
                      text="Prev"
                      position={"previous"}
                    >
                      <i className="ph ph-arrow-left" />
                    </AnimatedButton>
                    <a className="mxd-article-navigation__link" href="#">
                      <span>
                        Designing for the future of interactive digital spaces
                      </span>
                    </a>
                  </div>
                  <div className="col-6 mxd-article-navigation__navitem right">
                    <AnimatedButton
                      className="btn btn-line-small btn-muted anim-no-delay slide-right"
                      as={"a"}
                      text="Next"
                      position={"next"}
                    >
                      <i className="ph ph-arrow-right" />
                    </AnimatedButton>
                    <a className="mxd-article-navigation__link" href="#">
                      <span>
                        Mastering the art of minimalist web design with impact
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
            {/* Article Navigation End */}
            {/* Article Comments Start */}

            {/* Article Comments End */}
          </div>
          {/* Article Container End */}
        </div>
      </div>
    </div>
  );
}
