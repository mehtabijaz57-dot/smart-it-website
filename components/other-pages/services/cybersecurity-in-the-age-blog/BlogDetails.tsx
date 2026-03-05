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
                    <span className="current-item">Cybersecurity</span>
                  </div>
                </div>

                <div className="mxd-article__title loading__item">
                  <h1 className="h1-small">Cybersecurity in the Age of Cloud Computing</h1>
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
                    Cloud computing has transformed business operations — but it has also expanded the threat landscape.
                  </p>

                  <p>
                    As companies migrate infrastructure to the cloud, they must secure:
                  </p>
                  <ul>
                    <li>Sensitive customer data</li>
                    <li>Application layers</li>
                    <li>APIs and integrations</li>
                    <li>Identity & access controls</li>
                  </ul>

                  <p>
                    Security is no longer perimeter-based. It is distributed, dynamic, and continuous.
                  </p>
                </div>

                {/* TABLE OF CONTENTS */}
                <div className="mxd-article__block block-table-of-contents">
                  <p className="table-of-contents__title">Table of contents:</p>
                  <ul className="table-of-contents__nav">
                    <li><a href="#chapter-01">The New Cloud Threat Landscape</a></li>
                    <li><a href="#chapter-02">Zero Trust Security Model</a></li>
                    <li><a href="#chapter-03">Identity & Access Management (IAM)</a></li>
                    <li><a href="#chapter-04">Data Encryption & Protection</a></li>
                    <li><a href="#chapter-05">Compliance & Regulatory Frameworks</a></li>
                    <li><a href="#chapter-06">Continuous Monitoring & Threat Detection</a></li>
                  </ul>
                </div>

                {/* CHAPTER 01 */}
                <div id="chapter-01" className="mxd-article__block">
                  <h3>THE NEW CLOUD THREAT LANDSCAPE</h3>

                  <p>Cloud adoption introduces risks such as:
                  </p>

                  {/* <p>Our core principle is Data Inaccessibility, which means:</p> */}

                  <ul>
                    <li>Misconfigured storage.</li>
                    <li>Weak authentication controls</li>
                    <li>API vulnerabilities</li>
                    <li>Insider threats</li>
                  </ul>

                  <p>
                   Modern cybersecurity must evolve alongside infrastructure.
                  </p>
                </div>

                {/* CHAPTER 02 */}
                <div id="chapter-02" className="mxd-article__block">
                  <h3>ZERO TRUST SECURITY MODEL</h3>

                  <p>
                    Zero Trust assumes:
                  </p>

                  <ol>
                    <li>
                      {/* <strong>Data Controller</strong> */}
                      <ul>
                        <li>
                        Continuous authentication
                        </li>
                        <li>Micro-segmentation</li>
                        <li>Least privilege access</li>
                        <li>Real-time threat analysis</li>
                       
                      </ul>
                    </li>

                    <li>
                      {/* <strong>Data Processor</strong> */}
                      {/* <ul>
                        <li>
                          When handling enterprise infrastructure, application data, or cloud configurations strictly under Client instruction.
                        </li>
                      </ul> */}
                    </li>
                  </ol>

                  <p>
                     This model significantly reduces attack surfaces.
                  </p>
                </div>

                {/* CHAPTER 03 */}
                <div id="chapter-03" className="mxd-article__block">
                  <h3>IDENTITY & ACCESS MANAGEMENT (IAM)</h3>

                  <h5>Strong identity control ensures secure access. <br />Best practices:</h5>
                  <ul>
                    <li>Multi-factor authentication (MFA)</li>
                    <li>Role-based access control (RBAC)</li>
                    <li>Privileged access management</li>
                  </ul>

                  {/* <h5>Project & Technical Data (Processor Role)</h5>
                  <ul>
                    <li>Infrastructure metadata (configurations, logs, IP ranges)</li>
                    <li>Temporary staging data used during migration cutovers</li>
                    <li>AI-related datasets (where contractually defined)</li>
                  </ul> */}

                  {/* <h5>AI Safeguards</h5>
                  <ul>
                    <li>Data sanitization and anonymization enforced</li>
                    <li>No personally identifiable information (PII) permitted in AI training pipelines</li>
                    <li>No client data used to train public or third-party AI models</li>
                  </ul> */}
                </div>

                {/* CHAPTER 04 */}
                <div id="chapter-04" className="mxd-article__block">
                  <h3>DATA ENCRYPTION & PROTECTION</h3>

                  <p>Data protection strategies include:</p>
                  <ul>
                    <li>End-to-end encryption</li>
                    <li>Encryption at rest and in transit</li>
                    <li>Secure key management</li>
                    <li>Tokenization & masking</li>
                  </ul>

                  {/* <p>Legal Bases Include:</p>
                  <ul>
                    <li>GDPR Article 6(1)(b): Contractual necessity</li>
                    <li>GDPR Article 6(1)(f): Legitimate interests</li>
                    <li>GDPR Article 6(1)(a): Explicit consent (where legally required)</li>
                  </ul> */}

                  <p>
                   Data confidentiality builds customer trust.
                  </p>
                </div>

                {/* CHAPTER 05 */}
                <div id="chapter-05" className="mxd-article__block">
                  <h3>COMPLIANCE & REGULATORY FRAMEWORKS</h3>

                  <p>
                    Global cloud systems must comply with:
                  </p>

                  <ul>
                    <li>GDPR</li>
                    <li>SOC 2</li>
                    <li>ISO 27001</li>
                  </ul>

                  <p>
                   Compliance is not just legal — it enhances credibility.
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
                  <h3>CONTINUOUS MONITORING & THREAT DETECTION</h3>

                  <p>
                   Modern cloud security relies on:
                  </p>

                  <ul>
                    <li>Real-time monitoring tools</li>
                    <li>Automated vulnerability scanning</li>
                    <li>AI-based anomaly detection</li>
                    <li>Incident response automation</li>
                    
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
