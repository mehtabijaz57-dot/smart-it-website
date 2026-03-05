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
                    <span className="current-item">Privacy Policy</span>
                  </div>
                </div>

                <div className="mxd-article__title loading__item">
                  <h1 className="h1-small">Privacy Policy</h1>
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
                    This Privacy Policy describes how Smart Information Technologies
                    collects, processes, stores, and protects personal and enterprise data
                    in connection with our cloud migration, modernization, and digital consulting services.
                  </p>

                  <p>
                    This Policy applies to all visitors, clients, partners, and users (“Data Subjects”)
                    interacting with our website, platforms, or professional services.
                  </p>

                  <p>
                    This Privacy Policy forms an integral part of our Terms of Use,
                    Cookie Policy, and any applicable Data Processing Agreement (DPA).
                  </p>
                </div>

                {/* TABLE OF CONTENTS */}
                <div className="mxd-article__block block-table-of-contents">
                  <p className="table-of-contents__title">Table of contents:</p>
                  <ul className="table-of-contents__nav">
                    <li><a href="#chapter-01">Privacy Principles & Data Inaccessibility</a></li>
                    <li><a href="#chapter-02">Roles Under Data Protection Law</a></li>
                    <li><a href="#chapter-03">Categories of Data We Process</a></li>
                    <li><a href="#chapter-04">Purpose & Legal Basis</a></li>
                    <li><a href="#chapter-05">Cloud Providers & Sub-Processors</a></li>
                    <li><a href="#chapter-06">Data Sovereignty & Transfers</a></li>
                  </ul>
                </div>

                {/* CHAPTER 01 */}
                <div id="chapter-01" className="mxd-article__block">
                  <h3>Privacy Principles & Data Inaccessibility Model</h3>

                  <p>
                    Smart IT Digital operates under a Privacy-by-Design and Privacy-by-Default framework.
                  </p>

                  <p>Our core principle is Data Inaccessibility, which means:</p>

                  <ul>
                    <li>We do not claim ownership of client data.</li>
                    <li>We do not access client content unless technically required for service execution.</li>
                    <li>Cryptographic control remains with the Client wherever technically feasible.</li>
                    <li>Cloud architectures are designed so that Smart IT Digital acts as a technical facilitator, not a data owner.</li>
                  </ul>

                  <p>
                    Privacy safeguards are embedded at the architectural level of every engagement.
                  </p>
                </div>

                {/* CHAPTER 02 */}
                <div id="chapter-02" className="mxd-article__block">
                  <h3>Roles Under Data Protection Law</h3>

                  <p>
                    Depending on the context of processing, Smart IT Digital may act as:
                  </p>

                  <ol>
                    <li>
                      <strong>Data Controller</strong>
                      <ul>
                        <li>
                          When processing website interaction data, business contact details, and communications.
                        </li>
                      </ul>
                    </li>

                    <li>
                      <strong>Data Processor</strong>
                      <ul>
                        <li>
                          When handling enterprise infrastructure, application data, or cloud configurations strictly under Client instruction.
                        </li>
                      </ul>
                    </li>
                  </ol>

                  <p>
                    Role definitions align with GDPR Articles 4, 24, and 28 and other applicable data protection regulations.
                  </p>
                </div>

                {/* CHAPTER 03 */}
                <div id="chapter-03" className="mxd-article__block">
                  <h3>Categories of Data We Process</h3>

                  <h5>Operational & Business Data (Controller Role)</h5>
                  <ul>
                    <li>Names and professional email addresses</li>
                    <li>Job titles and organizational identifiers</li>
                    <li>Website interaction telemetry (anonymized or aggregated)</li>
                  </ul>

                  <h5>Project & Technical Data (Processor Role)</h5>
                  <ul>
                    <li>Infrastructure metadata (configurations, logs, IP ranges)</li>
                    <li>Temporary staging data used during migration cutovers</li>
                    <li>AI-related datasets (where contractually defined)</li>
                  </ul>

                  <h5>AI Safeguards</h5>
                  <ul>
                    <li>Data sanitization and anonymization enforced</li>
                    <li>No personally identifiable information (PII) permitted in AI training pipelines</li>
                    <li>No client data used to train public or third-party AI models</li>
                  </ul>
                </div>

                {/* CHAPTER 04 */}
                <div id="chapter-04" className="mxd-article__block">
                  <h3>Purpose & Legal Basis of Processing</h3>

                  <p>We process data exclusively to:</p>
                  <ul>
                    <li>Architect and execute cloud migration and modernization projects</li>
                    <li>Secure infrastructure using Zero-Trust identity frameworks</li>
                    <li>Optimize cost, scalability, and performance (FinOps practices)</li>
                    <li>Comply with regulatory frameworks such as GDPR, DORA, and applicable AI laws</li>
                  </ul>

                  <p>Legal Bases Include:</p>
                  <ul>
                    <li>GDPR Article 6(1)(b): Contractual necessity</li>
                    <li>GDPR Article 6(1)(f): Legitimate interests</li>
                    <li>GDPR Article 6(1)(a): Explicit consent (where legally required)</li>
                  </ul>

                  <p>
                    We do not process data beyond the scope defined by contractual or legal obligations.
                  </p>
                </div>

                {/* CHAPTER 05 */}
                <div id="chapter-05" className="mxd-article__block">
                  <h3>Third-Party Cloud Providers & Sub-Processors</h3>

                  <p>
                    Smart IT Digital facilitates migration to hyperscale cloud providers including:
                  </p>

                  <ul>
                    <li>Amazon Web Services (AWS)</li>
                    <li>Microsoft Azure</li>
                    <li>Google Cloud Platform (GCP)</li>
                  </ul>

                  <p>
                    Once infrastructure is deployed, data governance is subject to the Client’s contractual relationship with the respective cloud provider.
                  </p>

                  <h6>We:</h6>
                  <ul>
                    <li>Configure sovereign and regional data controls</li>
                    <li>Do not authorize cross-border access without client instruction</li>
                    <li>Do not disclose project data to marketing or advertising entities</li>
                  </ul>
                </div>

                {/* CHAPTER 06 */}
                <div id="chapter-06" className="mxd-article__block">
                  <h3>Data Sovereignty & Cross-Border Transfers</h3>

                  <p>
                    Data residency and sovereignty are treated as legal constraints, not preferences.
                  </p>

                  <ul>
                    <li>EU data is retained within EU-designated regions by default</li>
                    <li>Cross-border transfers occur only when operationally required</li>
                    <li>Transfers are safeguarded using Standard Contractual Clauses (SCCs)</li>
                    <li>Technical access restrictions</li>
                    <li>Encryption and cryptographic key segregation</li>
                  </ul>
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
