import Link from "next/link";

export default function BlogDetails() {
  return (
    <div className="mxd-section padding-pre-title">
      <div className="mxd-container grid-container">
        <div className="mxd-article-area loading-wrap">
          <div className="mxd-article-container mxd-grid-item no-margin">
            <article className="mxd-article">

              {/* ================= HEADLINE ================= */}
              <div className="mxd-article__headline">

                <div className="mxd-article__meta">
                  <div className="mxd-article__breadcrumbs loading__item">
                    <span><Link href="#">Home</Link></span>
                    <span><Link href="#">Legal</Link></span>
                    <span className="current-item">Cookie & Tracking Policy</span>
                  </div>
                </div>

                <div className="mxd-article__title loading__item">
                  <h1 className="h1-small">Cookie & Tracking Policy</h1>
                </div>

              </div>

              {/* ================= CONTENT ================= */}
              <div className="mxd-article__content">

                {/* INTRO */}
                <div className="mxd-article__block">
                  <p className="t-large mxd-article__excerpt">
                    Welcome to Smart Information Technologies (“Smart IT Digital”).
                  </p>

                  <p>
                    This Cookie & Tracking Policy (“Policy”) explains how Smart Information Technologies  uses cookies, local storage, and similar technologies across its digital platforms.
                  </p>

                  <p>
                    This Policy applies to all visitors, clients, and users (“Users”) who access our public website, secure client portals, or related digital services.
                  </p>

                  <p>
                    This Policy forms an integral part of our Privacy Policy and Terms of Use.
                  </p>
                </div>

                {/* TABLE OF CONTENTS */}
                <div className="mxd-article__block block-table-of-contents">
                  <p className="table-of-contents__title">Table of contents:</p>
                  <ul className="table-of-contents__nav">
                    <li><a href="#chapter-01">Purpose & Legal Basis</a></li>
                    <li><a href="#chapter-02">Definition of Cookies</a></li>
                    <li><a href="#chapter-03">Cookie Categories We Use</a></li>
                    <li><a href="#chapter-04">Third-Party Providers</a></li>
                    <li><a href="#chapter-05">Consent Management & User Control</a></li>
                    <li><a href="#chapter-06">Cross-Border Data Transfers</a></li>
                  </ul>
                </div>

                {/* CHAPTER 01 */}
                <div id="chapter-01" className="mxd-article__block">
                  <h3>Purpose & Legal Basis</h3>

                  <p>
                    Smart IT Digital uses cookies strictly to ensure:
                  </p>

                  {/* <p>Our core principle is Data Inaccessibility, which means:</p> */}

                  <ul>
                    <li>Platform security</li>
                    <li>Operational reliability</li>
                    <li>Regulatory compliance</li>
                    <li>Performance monitoring of cloud-related digital assets</li>
                  </ul>

                  <p>
                    Cookies are not used for uncontrolled advertising, behavioral profiling, or resale of personal data.
                  </p>
                </div>

                {/* CHAPTER 02 */}
                <div id="chapter-02" className="mxd-article__block">
                  <h3>Definition of Cookies (Enterprise Context)</h3>

                  <p>
                    Depending on the context of processing, Smart IT Digital may act as:
                  </p>

                  <ol>
                    <li>
                      {/* <strong>Data Controller</strong> */}
                      <ul>
                        <li>
                          Cookies are small text files placed on a User’s device that enable secure communication between the browser and Smart IT Digital’s cloud-hosted infrastructure.In the context of enterprise cloud consulting, cookies function as operational controls — not marketing trackers.They support authentication, session continuity, and system integrity.
                        </li>
                      </ul>
                    </li>

                    {/* <li>
                      <strong>Data Processor</strong>
                      <ul>
                        <li>
                          When handling enterprise infrastructure, application data, or cloud configurations strictly under Client instruction.
                        </li>
                      </ul>
                    </li> */}
                  </ol>

                  {/* <p>
                    Role definitions align with GDPR Articles 4, 24, and 28 and other applicable data protection regulations.
                  </p> */}
                </div>

                {/* CHAPTER 03 */}
                <div id="chapter-03" className="mxd-article__block">
                  <h3>Cookie Categories We Use</h3>

                  <h5>Essential & Security Cookies (Mandatory)</h5><br />
                  <p>These cookies are strictly necessary and cannot be disabled.They support:</p>
                  <ul>
                    <li>Secure session authentication</li>
                    <li>Access control enforcement</li>
                    <li>Fraud detection and abuse prevention</li>
                    <li>Load balancing and system availability monitoring</li>
                  </ul>

                  <h5>Performance & Infrastructure Telemetry Cookies</h5>
                  <p>These cookies measure platform reliability and infrastructure health.

                    They support:</p>
                  <ul>
                    <li>Latency and uptime monitoring</li>
                    <li>Error diagnostics and system failure reporting</li>
                    <li>Geographic performance optimization</li>
                  </ul>

                  <h5>Functional & Preference Cookies</h5><p>These cookies store user-selected preferences such as:</p>
                  <ul>
                    <li>Language selection</li>
                    <li>Regional compliance displays</li>
                    <li>Progress state within cloud readiness or diagnostic tools</li>
                  </ul>
                </div>

                {/* CHAPTER 04 */}
                <div id="chapter-04" className="mxd-article__block">
                  <h3>Third-Party Providers</h3>

                  <p>Where cookies are set by third-party services:</p>
                  <ul>
                    <li>They operate under their own privacy policies</li>
                    <li>We configure them to maximum privacy-preserving settings</li>
                    <li>Data is not knowingly transferred outside approved jurisdictions without safeguards</li>
                    
                  </ul>

                  <p>We do not authorize third-party marketing networks to access project-related environments.</p>
                  {/* <ul>
                    <li>GDPR Article 6(1)(b): Contractual necessity</li>
                    <li>GDPR Article 6(1)(f): Legitimate interests</li>
                    <li>GDPR Article 6(1)(a): Explicit consent (where legally required)</li>
                  </ul> */}

                  {/* <p>
                    We do not process data beyond the scope defined by contractual or legal obligations.
                  </p> */}
                </div>

                {/* CHAPTER 05 */}
                <div id="chapter-05" className="mxd-article__block">
                  <h3>Consent Management & User Control</h3>

                  <p>
                   Users may control cookie usage through:
                  </p>

                  <ul>
                    <li>Our Consent Management Platform (CMP)</li>
                    <li>Browser-level privacy settings</li>
                    <li>Global Privacy Control (GPC) signals (automatically respected where supported)</li>
                  </ul>

                  <p>
                   Consent may be withdrawn at any time without affecting access to core site functionality, except where essential cookies are required for security or authentication.
                  </p>

                  {/* <h6>We:</h6>
                  <ul>
                    <li>Configure sovereign and regional data controls</li>
                    <li>Do not authorize cross-border access without client instruction</li>
                    <li>Do not disclose project data to marketing or advertising entities</li>
                  </ul> */}
                </div>

                {/* CHAPTER 06 */}
                <div id="chapter-06" className="mxd-article__block">
                  <h3>Cross-Border Data Transfers</h3>

                  <p>
                   Where cookie-related data is processed outside the User’s jurisdiction, we implement:
                  </p>

                  <ul>
                    <li>Standard Contractual Clauses (SCCs)</li>
                    <li>Technical and organizational safeguards</li>
                    <li>Data minimization principles</li>
                  
                  </ul>
                  <p>Data sovereignty considerations are applied consistently with our Privacy Policy.</p>
                </div>

              </div>
              {/* ================= CONTENT END ================= */}

            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
