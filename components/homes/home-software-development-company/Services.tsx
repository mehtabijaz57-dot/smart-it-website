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
                  <a href="ai-ml-data-analytics-piller">
                    <div className="mxd-services-cards-s__inner justify-between bg-base-tint radius-l padding-4">
                      <div className="mxd-services-cards-s__title">
                        <h3 className="anim-uni-in-up">
                          AI,ML & Data
                          <br />
                          Analytics
                        </h3>
                      </div>
                      <div className="mxd-services-cards-s__info width-50">
                        <div className="mxd-services-cards-s__tags">
                          <span className="tag tag-default tag-outline anim-uni-in-up">
                            Advanced Analytics
                          </span>
                          <span className="tag tag-default tag-outline anim-uni-in-up">
                            Machine Learning
                          </span>
                          <span className="tag tag-default tag-outline anim-uni-in-up">
                            AI
                          </span>
                          <span className="tag tag-default tag-outline anim-uni-in-up">
                            Big Data
                          </span>
                          <span className="tag tag-default tag-outline anim-uni-in-up">
                            Data Platforms
                          </span>

                        </div>
                        <p className="anim-uni-in-up">
                          We design and deploy advanced platforms for big data, analytics, AI, and machine learning.
                          Our solutions help organizations turn complex data into actionable insights.
                        </p>
                      </div>
                      <div className="mxd-services-cards-s__image image-right">
                        <Image
                          className="mxd-move"
                          alt="Illustration"
                          src="/img/illustrations/1200x1200_service-image-01na.webp"
                          width={910}
                          height={1200}
                        />
                      </div>
                    </div></a>
                </div>
                {/* item */}
                <div className="col-12 col-xl-4 mxd-services-cards-s__item mxd-grid-item anim-uni-scale-in-left">
                  <a href="cloud-infrastructure-solutions-piller">
                    <div className="mxd-services-cards-s__inner justify-end bg-accent radius-l padding-4">
                      <div className="mxd-services-cards-s__title">
                        <h3 className="opposite anim-uni-in-up">Cloud & Infrastructure</h3>
                      </div>
                      <div className="mxd-services-cards-s__info">
                        <div className="mxd-services-cards-s__tags">
                          <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                            Migration
                          </span>
                          <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                            IaaS
                          </span>
                          <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                            Scalability
                          </span>
                        </div>
                        <p className="t-opposite anim-uni-in-up">
                          Optimizing cloud for performance, security, and excellence.
                        </p>
                      </div>
                      <div className="mxd-services-cards-s__image image-top-right">
                        <Image
                          className="mxd-rotate"
                          alt="Illustration"
                          src="/img/illustrations/1200x1200_service-image-n1.png"
                          width={1200}
                          height={1200}
                        />
                      </div>
                    </div></a>
                </div>
                {/* item */}
                <div className="col-12 col-xl-4 mxd-services-cards-s__item mxd-grid-item anim-uni-scale-in-right">
                  <a href="managed-services-piller">
                  <div className="mxd-services-cards-s__inner bg-additional radius-l padding-4">
                    <div className="mxd-services-cards-s__title">
                      <h3 className="anim-uni-in-up">Managed Services</h3>
                    </div>
                    <div className="mxd-services-cards-s__info">
                      <div className="mxd-services-cards-s__tags">
                        <span className="tag tag-default tag-outline anim-uni-in-up">
                          IT Ops
                        </span>
                        <span className="tag tag-default tag-outline anim-uni-in-up">
                          Service Desk
                        </span>
                        <span className="tag tag-default tag-outline anim-uni-in-up">
                          Network
                        </span>
                      </div>
                      <p className="t-bright anim-uni-in-up">
                        Full outsourcing of IT operations, service desks, and network operations.
                      </p>
                    </div>
                    <div className="mxd-services-cards-s__image image-bottom">
                      <Image
                        className="mxd-rotate-slow"
                        alt="Illustration"
                        src="/img/illustrations/1200x1200_service-image-n3.png"
                        width={1200}
                        height={1200}
                      />
                    </div>
                  </div></a>
                </div>
                {/* item */}
                <div className="col-12 col-xl-4 mxd-services-cards-s__item mxd-grid-item anim-uni-scale-in">
                  <a href="Cybersecurity-service-piller">
                  <div className="mxd-services-cards-s__inner bg-base-opp radius-l padding-4">
                    <div className="mxd-services-cards-s__title">
                      <h3 className="opposite anim-uni-in-up">Cybersecurity</h3>
                    </div>
                    <div className="mxd-services-cards-s__info">
                      <div className="mxd-services-cards-s__tags">
                        <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                          Zero Trust
                        </span>
                        <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                          Identity
                        </span>
                        <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                          Data Safety
                        </span>
                      </div>
                      <p className="t-opposite anim-uni-in-up">
                        Identity & access management with Zero Trust protocols.
                      </p>
                    </div>
                    <div className="mxd-services-cards-s__image image-bottom image-bottom-2">
                      <Image
                        alt="Illustration"
                        src="/img/illustrations/1200x1200_service-image-004.png"
                        width={891}
                        height={1200}
                      />
                    </div>
                  </div></a>
                </div>
                {/* item */}
                <div className="col-12 col-xl-4 mxd-services-cards-s__item mxd-grid-item anim-uni-scale-in-left">
                  <a href="iot-digital-twin-piller">
                  <div className="mxd-services-cards-s__inner justify-end bg-base-tint radius-l padding-4">
                    <div className="mxd-services-cards-s__title">
                      <h3 className="anim-uni-in-up">IoT & Smart City</h3>
                    </div>
                    <div className="mxd-services-cards-s__info">
                      <div className="mxd-services-cards-s__tags">
                        <span className="tag tag-default tag-outline anim-uni-in-up">
                          Digital Twins
                        </span>
                        <span className="tag tag-default tag-outline anim-uni-in-up">
                          Infrastructure
                        </span>

                      </div>
                      <p className="anim-uni-in-up">
                        Building intelligent, connected ecosystems for smarter urban living.

                      </p>
                    </div>
                    <div className="mxd-services-cards-s__image image-top">
                      <Image
                        alt="Illustration"
                        src="/img/illustrations/1200x1200_service-image-05.png"
                        width={1200}
                        height={996}
                      />
                    </div>
                  </div></a>
                </div>



                <div className="col-12 col-xl-8 mxd-services-cards-s__item mxd-grid-item anim-uni-scale-in-right">
                  <a href="application-modernization-piller">
                  <div className="mxd-services-cards-s__inner justify-between bg-base-tint radius-l padding-4">
                    <div className="mxd-services-cards-s__title">
                      <h3 className="anim-uni-in-up">
                        Legacy System
                        <br />
                        Modernization
                      </h3>
                    </div>
                    <div className="mxd-services-cards-s__info width-50">
                      <div className="mxd-services-cards-s__tags">
                        <span className="tag tag-default tag-outline anim-uni-in-up">
                          Legacy Modernization
                        </span>
                        <span className="tag tag-default tag-outline anim-uni-in-up">
                          Application Rationalization
                        </span>
                        <span className="tag tag-default tag-outline anim-uni-in-up">
                          App Optimization
                        </span>
                        <span className="tag tag-default tag-outline anim-uni-in-up">
                          Debt Reduction
                        </span>
                        <span className="tag tag-default tag-outline anim-uni-in-up">
                          Upgrade
                        </span>
                      </div>
                      <p className="anim-uni-in-up">
                        We modernize legacy systems & rationalize apps to improve performance & agility.
                        Our approach reduces cost & technical debt.
                      </p>
                    </div>
                    <div className="mxd-services-cards-s__image image-right">
                      <Image
                        className="mxd-pulse"
                        alt="Illustration"
                        src="/img/illustrations/1200MainLastService.png"
                        width={910}
                        height={1200}
                      />
                    </div>
                  </div></a>
                </div>
                {/* item */}
                <div className="col-12 col-xl-4 mxd-services-cards-s__item mxd-grid-item anim-uni-scale-in-left">
                  <a href="erp-customization-piller">
                  <div className="mxd-services-cards-s__inner justify-end bg-accent radius-l padding-4">
                    <div className="mxd-services-cards-s__title">
                      <h3 className="opposite anim-uni-in-up">ERP Customization</h3>
                    </div>
                    <div className="mxd-services-cards-s__info">
                      <div className="mxd-services-cards-s__tags">
                        <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                          SAP
                        </span>
                        <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                          Odoo
                        </span>
                        <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                          Oracle
                        </span>
                      </div>
                      <p className="t-opposite anim-uni-in-up">
                        Expertise in SAP, ODOO, Oracle, and MS Dynamics 365 customization.
                      </p>
                    </div>
                    <div className="mxd-services-cards-s__image image-top-right">
                      <Image
                        className="mxd-move"
                        alt="Illustration"
                        src="/img/illustrations/1200x1200_service-image-07.png"
                        width={1200}
                        height={1200}
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
