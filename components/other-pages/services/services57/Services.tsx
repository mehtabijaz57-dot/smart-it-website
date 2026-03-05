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
                  <a href="legacy-system-modernization-services">
                    <div className="mxd-services-cards-s__inner justify-between bg-base-tint radius-l padding-4">
                      <div className="mxd-services-cards-s__title">
                        <h3 className="anim-uni-in-up">
                          Legacy System
                          <br />
                          Modernization Services
                        </h3>
                      </div>
                      <div className="mxd-services-cards-s__info width-50">
                        <div className="mxd-services-cards-s__tags">
                          <span className="tag tag-default tag-outline anim-uni-in-up">
                            Mainframe Modernization
                          </span>
                          <span className="tag tag-default tag-outline anim-uni-in-up">
                            Application Refactoring
                          </span>
                          <span className="tag tag-default tag-outline anim-uni-in-up">
                            Monolith to Microservices
                          </span>
                          <span className="tag tag-default tag-outline anim-uni-in-up">
                            Technical Debt Reduction
                          </span>

                        </div>
                        <p className="anim-uni-in-up">

                          Don't let legacy systems hold you back. Smart IT modernizes your mission-critical apps so you can stop maintaining and start innovating.
                        </p>
                      </div>
                      <div className="mxd-services-cards-s__image image-right">
                        <Image
                          className="mxd-move"
                          alt="Illustration"
                          src="/img/illustrations/services6_1.png"
                          width={910}
                          height={1200}
                        />
                      </div>
                    </div></a>
                </div>
                {/* item */}
                <div className="col-12 col-xl-4 mxd-services-cards-s__item mxd-grid-item anim-uni-scale-in-left">
                  <a href="application-rationalization">
                    <div className="mxd-services-cards-s__inner justify-end bg-accent radius-l padding-4">
                      <div className="mxd-services-cards-s__title">
                        <h3 className="opposite anim-uni-in-up">Application Rationalization </h3>
                      </div>
                      <div className="mxd-services-cards-s__info">
                        <div className="mxd-services-cards-s__tags">
                          <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                            Application Portfolio Optimization
                          </span>
                          <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                            IT Portfolio
                          </span>
                          {/* <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                            hybrid cloud
                          </span> */}
                        </div>
                        <p className="t-opposite anim-uni-in-up">

                          Cut costs and redundant apps to streamline your cloud migration.
                        </p>
                      </div>
                      <div className="mxd-services-cards-s__image image-top-right">
                        <Image
                          className="mxd-move"
                          alt="Illustration"
                          src="/img/illustrations/services6_02.png"
                          width={1200}
                          height={1200}
                        />
                      </div>
                    </div></a>
                </div>
                {/* item */}
                <div className="col-12 col-xl-4 mxd-services-cards-s__item mxd-grid-item anim-uni-scale-in-right">
                  <a href="microservices-architecture">
                    <div className="mxd-services-cards-s__inner bg-additional radius-l padding-4">
                      <div className="mxd-services-cards-s__title">
                        <h3 className="anim-uni-in-up">Microservices Architecture</h3>
                      </div>
                      <div className="mxd-services-cards-s__info">
                        <div className="mxd-services-cards-s__tags">
                          <span className="tag tag-default tag-outline anim-uni-in-up">
                            Cloud-Native Transformation
                          </span>
                          <span className="tag tag-default tag-outline anim-uni-in-up">
                            API-First Strategy
                          </span>
                        </div>
                        <p className="t-bright anim-uni-in-up">

                          Modernize to cloud-native microservices to scale faster and cut technical debt.
                        </p>
                      </div>
                      <div className="mxd-services-cards-s__image image-bottom">
                        <Image
                          className="mxd-"
                          alt="Illustration"
                          src="/img/illustrations/services6_3.png"
                          width={1200}
                          height={1200}
                        />
                      </div>
                    </div></a>
                </div>
                {/* item */}
                <div className="col-12 col-xl-4 mxd-services-cards-s__item mxd-grid-item anim-uni-scale-in">
                  <a href="cloud-native-app-development">
                    <div className="mxd-services-cards-s__inner bg-base-opp radius-l padding-4">
                      <div className="mxd-services-cards-s__title">
                        <h3 className="opposite anim-uni-in-up"> Cloud-Native App Development</h3>
                      </div>
                      <div className="mxd-services-cards-s__info">
                        <div className="mxd-services-cards-s__tags">
                          <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                            Cloud-native migration
                          </span>
                          <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                            Serverless computing
                          </span>
                        </div>
                        <p className="t-opposite anim-uni-in-up">
                           Build applications designed for scale, resilience, and speed.
                        </p>
                      </div>
                      <div className="mxd-services-cards-s__image image-bottom image-bottom-2">
                        <Image
                          alt="Illustration"
                          src="/img/illustrations/services6_4.png"
                          width={891}
                          height={1200}
                        />
                      </div>
                    </div></a>
                </div>
                {/* item */}
                {/* <div className="col-12 col-xl-4 mxd-services-cards-s__item mxd-grid-item anim-uni-scale-in-left">
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* Block - Services Cards #02 End */}
      </div>
    </div>
  );
}
