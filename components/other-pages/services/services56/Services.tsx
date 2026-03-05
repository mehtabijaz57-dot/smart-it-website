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
                  <a href="iot-solution-development">
                    <div className="mxd-services-cards-s__inner justify-between bg-base-tint radius-l padding-4">
                      <div className="mxd-services-cards-s__title">
                        <h3 className="anim-uni-in-up">
                          IoT Solution
                          <br />
                          Development
                        </h3>
                      </div>
                      <div className="mxd-services-cards-s__info width-50">
                        <div className="mxd-services-cards-s__tags">
                          <span className="tag tag-default tag-outline anim-uni-in-up">
                            IoT Lifecycle Management
                          </span>
                          <span className="tag tag-default tag-outline anim-uni-in-up">
                            Device Shadowing
                          </span>
                          <span className="tag tag-default tag-outline anim-uni-in-up">
                            MQTT/CoAP Protocol
                          </span>
                          <span className="tag tag-default tag-outline anim-uni-in-up">
                            Over-the-Air Updates
                          </span>

                        </div>
                        <p className="anim-uni-in-up">

                          Enterprise-grade IoT platforms designed to scale from 50 devices to 5 million — securely, reliably, and cloud-native.
                        </p>
                      </div>
                      <div className="mxd-services-cards-s__image image-right">
                        <Image
                          className="mxd-move"
                          alt="Illustration"
                          src="/img/illustrations/services5_01.png"
                          width={910}
                          height={1200}
                        />
                      </div>
                    </div></a>
                </div>
                {/* item */}
                <div className="col-12 col-xl-4 mxd-services-cards-s__item mxd-grid-item anim-uni-scale-in-left">
                  <a href="smart-city-cloud-migration-strategy">
                    <div className="mxd-services-cards-s__inner justify-end bg-accent radius-l padding-4">
                      <div className="mxd-services-cards-s__title">
                        <h3 className="opposite anim-uni-in-up">Smart City <br />Cloud  Migration </h3>
                      </div>
                      <div className="mxd-services-cards-s__info">
                        <div className="mxd-services-cards-s__tags">
                          <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                            Urban Data Sovereignty
                          </span>
                          <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                            IEEE P2784 Standards
                          </span>
                          {/* <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                            hybrid cloud
                          </span> */}
                        </div>
                        <p className="t-opposite anim-uni-in-up">

                          Powering smart cities with secure and connected cloud platforms.
                        </p>
                      </div>
                      <div className="mxd-services-cards-s__image image-top-right">
                        <Image
                          className="mxd-move"
                          alt="Illustration"
                          src="/img/illustrations/services5_02.png"
                          width={1200}
                          height={1200}
                        />
                      </div>
                    </div></a>
                </div>
                {/* item */}
                <div className="col-12 col-xl-4 mxd-services-cards-s__item mxd-grid-item anim-uni-scale-in-right">
                  <a href="digital-twinicloud-migration-strategy">
                    <div className="mxd-services-cards-s__inner bg-additional radius-l padding-4">
                      <div className="mxd-services-cards-s__title">
                        <h3 className="anim-uni-in-up">Digital Twin <br /> Cloud Migration</h3>
                      </div>
                      <div className="mxd-services-cards-s__info">
                        <div className="mxd-services-cards-s__tags">
                          <span className="tag tag-default tag-outline anim-uni-in-up">
                            OpenUSD Interoperability
                          </span>
                          <span className="tag tag-default tag-outline anim-uni-in-up">
                            Photorealistic Digital
                          </span>
                        </div>
                        <p className="t-bright anim-uni-in-up">

                          From static digital models to living, executable systems.
                        </p>
                      </div>
                      <div className="mxd-services-cards-s__image image-bottom">
                        <Image
                          className="mxd-"
                          alt="Illustration"
                          src="/img/illustrations/services5_03.png"
                          width={1200}
                          height={1200}
                        />
                      </div>
                    </div></a>
                </div>
                {/* item */}
                <div className="col-12 col-xl-4 mxd-services-cards-s__item mxd-grid-item anim-uni-scale-in">
                  <a href="industrial-iot">
                    <div className="mxd-services-cards-s__inner bg-base-opp radius-l padding-4">
                      <div className="mxd-services-cards-s__title">
                        <h3 className="opposite anim-uni-in-up"> Industrial IoT Cloud Migration</h3>
                      </div>
                      <div className="mxd-services-cards-s__info">
                        <div className="mxd-services-cards-s__tags">
                          <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                            Brownfield IoT Modernization
                          </span>
                          <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                            MQTT & OPC-UA
                          </span>
                        </div>
                        <p className="t-opposite anim-uni-in-up">
                          Securely modernizing OT systems with IIoT, without interrupting operations.
                        </p>
                      </div>
                      <div className="mxd-services-cards-s__image image-bottom image-bottom-2">
                        <Image
                          alt="Illustration"
                          src="/img/illustrations/services5_4.png"
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
