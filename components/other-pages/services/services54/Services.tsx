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
                  <a href="it-operations-outsourcing-for-cloud">
                  <div className="mxd-services-cards-s__inner justify-between bg-base-tint radius-l padding-4">
                    <div className="mxd-services-cards-s__title">
                      <h3 className="anim-uni-in-up">
                         IT Operations 
                        <br />
                    Outsourcing
                      </h3>
                    </div>
                    <div className="mxd-services-cards-s__info width-50">
                      <div className="mxd-services-cards-s__tags">
                        <span className="tag tag-default tag-outline anim-uni-in-up">
                         Cloud Managed Services
                        </span>
                        <span className="tag tag-default tag-outline anim-uni-in-up">
                           Cloud Ops Outsourcing
                        </span>
                        <span className="tag tag-default tag-outline anim-uni-in-up">
                         Hybrid Cloud Management
                        </span>
                        <span className="tag tag-default tag-outline anim-uni-in-up">
                          IT Infrastructure
                        </span>
                       
                      </div>
                      <p className="anim-uni-in-up">
                        We manage your post-migration cloud operations with 24/7 monitoring, cost optimization, and security controls—so your teams can focus on innovation, not infrastructure.
                      </p>
                    </div>
                    <div className="mxd-services-cards-s__image image-right">
                      <Image
                      className="mxd-move"
                        alt="Illustration"
                        src="/img/illustrations/services3_01.png"
                        width={910}
                        height={1200}
                      />
                    </div>
                  </div></a>
                </div>
                {/* item */}
                <div className="col-12 col-xl-4 mxd-services-cards-s__item mxd-grid-item anim-uni-scale-in-left">
                  <a href="24-global-it-service-desk">
                  <div className="mxd-services-cards-s__inner justify-end bg-accent radius-l padding-4">
                    <div className="mxd-services-cards-s__title">
                      <h3 className="opposite anim-uni-in-up">24/7 Global <br /> IT Service Desk</h3>
                    </div>
                    <div className="mxd-services-cards-s__info">
                      <div className="mxd-services-cards-s__tags">
                        <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                           ITIL 4 Service Management
                        </span>
                        <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                        NOC Services
                        </span>
                        <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                          Mean Time to Resolution Optimization
                        </span>
                      </div>
                      <p className="t-opposite anim-uni-in-up">
                       Always-on IT support built for global cloud operations.
                      </p>
                    </div>
                    <div className="mxd-services-cards-s__image image-top-right">
                      <Image
                        className="mxd-move"
                        alt="Illustration"
                        src="/img/illustrations/services3_2.png"
                        width={1200}
                        height={1200}
                      />
                    </div>
                  </div></a>
                </div>
                {/* item */}
                <div className="col-12 col-xl-4 mxd-services-cards-s__item mxd-grid-item anim-uni-scale-in-right">
                  <a href="network-operation">
                  <div className="mxd-services-cards-s__inner bg-additional radius-l padding-4">
                    <div className="mxd-services-cards-s__title">
                      <h3 className="anim-uni-in-up">Network Operations Center</h3>
                    </div>
                    <div className="mxd-services-cards-s__info">
                      <div className="mxd-services-cards-s__tags">
                        <span className="tag tag-default tag-outline anim-uni-in-up">
                          Hybrid Cloud Monitoring
                        </span>
                        <span className="tag tag-default tag-outline anim-uni-in-up">
                         AIOps-driven NOC
                        </span>
                      </div>
                      <p className="t-bright anim-uni-in-up">
                    24/7 AIOps monitoring & response for hybrid-cloud.
                      </p>
                    </div>
                    <div className="mxd-services-cards-s__image image-bottom">
                      <Image
                        className="mxd-move"
                        alt="Illustration"
                        src="/img/illustrations/services3_3.png"
                        width={1200}
                        height={1200}
                      />
                    </div>
                  </div></a>
                </div>
                {/* item */}
                <div className="col-12 col-xl-4 mxd-services-cards-s__item mxd-grid-item anim-uni-scale-in">
                  <a href="infrastructure-managed-services">
                  <div className="mxd-services-cards-s__inner bg-base-opp radius-l padding-4">
                    <div className="mxd-services-cards-s__title">
                      <h3 className="opposite anim-uni-in-up">Infrastructure Managed Services</h3>
                    </div>
                    <div className="mxd-services-cards-s__info">
                      <div className="mxd-services-cards-s__tags">
                        <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                          Managed Cloud Infrastructure
                        </span>
                        <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                        OpEx IT Model
                        </span>
                      </div>
                      <p className="t-opposite anim-uni-in-up">
                       We manage and optimize your hybrid and cloud infrastructure .
                      </p>
                    </div>
                    <div className="mxd-services-cards-s__image image-bottom image-bottom-2">
                      <Image
                        alt="Illustration"
                        src="/img/illustrations/services3_4.png"
                        width={891}
                        height={1200}
                      />
                    </div>
                  </div></a>
                </div>
                {/* item */}
                {/* <div className="col-12 col-xl-4 mxd-services-cards-s__item mxd-grid-item anim-uni-scale-in-left">
                  <a href="predictive-analytics-cloud-strategy">
                  <div className="mxd-services-cards-s__inner justify-end bg-base-tint radius-l padding-4">
                    <div className="mxd-services-cards-s__title">
                      <h3 className="anim-uni-in-up">Predictive Analytics Cloud</h3>
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
                       We transform historical cloud data into predictive insights for future growth.

                      </p>
                    </div>
                    <div className="mxd-services-cards-s__image image-top">
                      <Image
                        alt="Illustration"
                        src="/img/illustrations/services1_5.png"
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
