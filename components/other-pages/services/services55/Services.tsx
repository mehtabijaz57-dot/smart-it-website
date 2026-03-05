import Image from "next/image";

export default function Services() {
  return (

    <div className="mxd-section overflow-hidden padding-pre-title">
      <div className="mxd-container grid-container">
        {/* Block - Services Cards #02 Start */}
        <div className="mxd-block">
          <div className="mxd-services-cards-s">
            <div className="container-fluid px-0">
              <div className="row gx-0">
                {/* item */}

                <div className="col-12 col-xl-8 mxd-services-cards-s__item mxd-grid-item anim-uni-scale-in-right">
                  <a href="identity-and-access-management">
                    <div className="mxd-services-cards-s__inner justify-between bg-base-tint radius-l padding-4">
                      <div className="mxd-services-cards-s__title">
                        <h3 className="anim-uni-in-up">
                          Identity and Access
                          <br />
                          Management
                        </h3>
                      </div>
                      <div className="mxd-services-cards-s__info width-50">
                        <div className="mxd-services-cards-s__tags">
                          <span className="tag tag-default tag-outline anim-uni-in-up">
                            Zero Trust Identity Architecture
                          </span>
                          <span className="tag tag-default tag-outline anim-uni-in-up">
                            CIEM
                          </span>
                          <span className="tag tag-default tag-outline anim-uni-in-up">
                            Non-Human Identity
                          </span>
                          <span className="tag tag-default tag-outline anim-uni-in-up">
                            Federated Identity Strategy
                          </span>

                        </div>
                        <p className="anim-uni-in-up">

                          Secure your cloud migration by treating identity as the new perimeter.We design Zero Trust IAM architectures that eliminate privilege creep.
                        </p>
                      </div>
                      <div className="mxd-services-cards-s__image image-right">
                        <Image
                          className="mxd-move"
                          alt="Illustration"
                          src="/img/illustrations/services4_01.png"
                          width={910}
                          height={1200}
                        />
                      </div>
                    </div></a>
                </div>
                {/* item */}
                <div className="col-12 col-xl-4 mxd-services-cards-s__item mxd-grid-item anim-uni-scale-in-left">
                  <a href="zero-trust-architecture">
                    <div className="mxd-services-cards-s__inner justify-end bg-accent radius-l padding-4">
                      <div className="mxd-services-cards-s__title">
                        <h3 className="opposite anim-uni-in-up">Zero Trust Architecture </h3>
                      </div>
                      <div className="mxd-services-cards-s__info">
                        <div className="mxd-services-cards-s__tags">
                          <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                            Software-Defined Perimeter
                          </span>
                          <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                            Implicit trust
                          </span>
                          {/* <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                            hybrid cloud
                          </span> */}
                        </div>
                        <p className="t-opposite anim-uni-in-up">

                          Design cloud environments with no implicit trust.
                        </p>
                      </div>
                      <div className="mxd-services-cards-s__image image-top-right">
                        <Image
                          className="mxd-move"
                          alt="Illustration"
                          src="/img/illustrations/services4_2.png"
                          width={1200}
                          height={1200}
                        />
                      </div>
                    </div></a>
                </div>
                {/* item */}
                <div className="col-12 col-xl-4 mxd-services-cards-s__item mxd-grid-item anim-uni-scale-in-right">
                  <a href="cloud-migration-security">
                    <div className="mxd-services-cards-s__inner bg-additional radius-l padding-4">
                      <div className="mxd-services-cards-s__title">
                        <h3 className="anim-uni-in-up">Cloud Migration Security</h3>
                      </div>
                      <div className="mxd-services-cards-s__info">
                        <div className="mxd-services-cards-s__tags">
                          <span className="tag tag-default tag-outline anim-uni-in-up">
                            Cloud Security Governance
                          </span>
                          <span className="tag tag-default tag-outline anim-uni-in-up">
                            Data Sovereignty
                          </span>
                        </div>
                        <p className="t-bright anim-uni-in-up">
                          Smart IT Secure, compliant, and risk-aware cloud migrations.
                        </p>
                      </div>
                      <div className="mxd-services-cards-s__image image-bottom">
                        <Image
                          className="mxd-"
                          alt="Illustration"
                          src="/img/illustrations/services4_3.png"
                          width={1200}
                          height={1200}
                        />
                      </div>
                    </div></a>
                </div>
                {/* item */}
                <div className="col-12 col-xl-4 mxd-services-cards-s__item mxd-grid-item anim-uni-scale-in">
                  <a href="cloud-threat-intelligence">
                    <div className="mxd-services-cards-s__inner bg-base-opp radius-l padding-4">
                      <div className="mxd-services-cards-s__title">
                        <h3 className="opposite anim-uni-in-up"> Cloud Threat Intelligence</h3>
                      </div>
                      <div className="mxd-services-cards-s__info">
                        <div className="mxd-services-cards-s__tags">
                          <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                            Threat Hunting
                          </span>
                          <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                            Real-time Cloud Monitoring
                          </span>
                        </div>
                        <p className="t-opposite anim-uni-in-up">
                          Smart cloud security that stops threats before they touch your business.
                        </p>
                      </div>
                      <div className="mxd-services-cards-s__image image-bottom image-bottom-2">
                        <Image
                          alt="Illustration"
                          src="/img/illustrations/services4_4.png"
                          width={891}
                          height={1200}
                        />
                      </div>
                    </div></a>
                </div>
                {/* item */}
                <div className="col-12 col-xl-4 mxd-services-cards-s__item mxd-grid-item anim-uni-scale-in-left">
                  <a href="cloud-vulnerability-assessment">
                    <div className="mxd-services-cards-s__inner justify-end bg-base-tint radius-l padding-4">
                      <div className="mxd-services-cards-s__title">
                        <h3 className="anim-uni-in-up">Cloud Vulnerability Assessment</h3>
                      </div>
                      <div className="mxd-services-cards-s__info">
                        <div className="mxd-services-cards-s__tags">
                          <span className="tag tag-default tag-outline anim-uni-in-up">
                            Cloud Infrastructure Audit
                          </span>
                          <span className="tag tag-default tag-outline anim-uni-in-up">
                            CVSS Scoring
                          </span>

                        </div>
                        <p className="anim-uni-in-up">
                          Fixing cloud vulnerabilities before they become threats.

                        </p>
                      </div>
                      <div className="mxd-services-cards-s__image image-top">
                        <Image
                          alt="Illustration"
                          src="/img/illustrations/services4_5.png"
                          width={1200}
                          height={996}
                        />
                      </div>
                    </div></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Block - Services Cards #02 End */}
      </div>
    </div>
  );
}
