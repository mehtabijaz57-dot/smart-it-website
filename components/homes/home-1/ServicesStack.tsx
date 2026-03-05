import Link from "next/link";
import Image from "next/image";

import StackCards from "@/components/animation/StackCards";

export default function ServicesStack() {
  return (
    <div className="mxd-section padding-stacked-section">
      <div className="mxd-container grid-container">
        {/* Block - Services/Features Stacking Cards Start */}
        <div className="mxd-block mxd-grid-item no-margin">
          <div className="content__block">
            <StackCards className="stack-wrapper in-content-stack">
              {/* services stack single item */}

              <div className="mxd-services-stack__inner justify-between bg-base-opp">
                
                <div className="mxd-services-stack__controls">
                  <Link
                    className="btn btn-round btn-round-large btn-additional slide-right-up anim-no-delay"
                    href={`/cloud-infrastructure-solutions-piller`}
                  >
                    <i className="ph ph-arrow-up-right" />
                  </Link>
                </div>
                <div className="mxd-services-stack__title width-60">
                  <h3 className="opposite">Cloud Operations</h3>
                </div>
                <div className="mxd-services-stack__info width-60">
                  <div className="mxd-services-cards__tags">
                    <span className="tag tag-default tag-outline-opposite">
                      Cloud Migration
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                     Cloud Security
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Scalable Architecture
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                     DevOps 
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Cloud Automation
                    </span>
                  </div>
                  <p className="t-small-mobile t-opposite">
                    Cloud migration and operations (IaaS/PaaS/SaaS) for scalable growth.
                  </p>
                </div>
                <div className="services-stack__image">
                  <Image
                    className="service-img service-img-s"
                    alt="Service/Feature Image"
                    src="/img/services/800x800_ser-01.webp"
                    width={800}
                    height={800}
                  />
                  <Image
                    className="service-img service-img-m"
                    alt="Service/Feature Image"
                    src="/img/services/1000x1000_ser-01.png"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>

              


              {/* services stack single item */}

              <div className="mxd-services-stack__inner justify-between bg-accent">
                <div className="mxd-services-stack__controls">
                  <Link
                    className="btn btn-round btn-round-large btn-base slide-right-up anim-no-delay"
                    href={`/application-modernization-piller`}
                  >
                    <i className="ph ph-arrow-up-right" />
                  </Link>
                </div>
                <div className="mxd-services-stack__title width-60">
                  <h3 className="opposite">
                   Modernization
                    <br />
                    
                  </h3>
                </div>
                <div className="mxd-services-stack__info width-60">
                  <div className="mxd-services-cards__tags">
                    <span className="tag tag-default tag-outline-opposite">
                      Application Modernization
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      API Integration
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Digital Transformation
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      System Re-engineering
                    </span>
                  </div>
                  <p className="t-small-mobile t-opposite">
                    Application rationalization and modernization of legacy systems.
                  </p>
                </div>
                <div className="services-stack__image">
                  <Image
                    className="service-img service-img-s"
                    alt="Service/Feature Image"
                    src="/img/services/800x800_ser-02.webp"
                    width={800}
                    height={800}
                  />
                  <Image
                    className="service-img service-img-m"
                    alt="Service/Feature Image"
                    src="/img/services/1000x1000_ser-02.png"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>

              {/* services stack single item */}

              <div className="mxd-services-stack__inner radius-dark justify-between bg-base-tint">
                <div className="mxd-services-stack__controls">
                  <Link
                    className="btn btn-round btn-round-large btn-opposite slide-right-up anim-no-delay"
                    href={`/Cybersecurity-service-piller`}
                  >
                    <i className="ph ph-arrow-up-right" />
                  </Link>
                </div>
                <div className="mxd-services-stack__title width-60">
                  <h3>
                     Cybersecurity
                    <br />
                   
                  </h3>
                </div>
                <div className="mxd-services-stack__info width-60">
                  <div className="mxd-services-cards__tags">
                    <span className="tag tag-default tag-outline">
                      Zero Trust Security
                    </span>
                    <span className="tag tag-default tag-outline">
                      Network Security
                    </span>
                    <span className="tag tag-default tag-outline">
                     Data Protection
                    </span>
                    <span className="tag tag-default tag-outline">
                      Risk Assessment
                    </span>
                  </div>
                  <p className="t-small-mobile">
                    Identity & access management with Zero Trust protocols.
                  </p>
                </div>
                <div className="services-stack__image">
                  <Image
                    className="service-img service-img-s"
                    alt="Service/Feature Image"
                    src="/img/services/800x800_ser-03.webp"
                    width={800}
                    height={800}
                  />
                  <Image
                    className="service-img service-img-m"
                    alt="Service/Feature Image"
                    src="/img/services/1000x1000_ser-03.png"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>





              {/* services stack single item */}

              <div className="mxd-services-stack__inner justify-between bg-base-opp">
                <div className="mxd-services-stack__controls">
                  <Link
                    className="btn btn-round btn-round-large btn-additional slide-right-up anim-no-delay"
                    href={`/managed-services-piller`}
                  >
                    <i className="ph ph-arrow-up-right" />
                  </Link>
                </div>
                <div className="mxd-services-stack__title width-60">
                  <h3 className="opposite">
                    Managed Services
                    <br />
                    
                  </h3>
                </div>
                <div className="mxd-services-stack__info width-60">
                  <div className="mxd-services-cards__tags">
                    <span className="tag tag-default tag-outline-opposite">
                      IT Outsourcing
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                     Managed IT Services
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                     Service Desk Support
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                     24/7 IT Support
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Remote Monitoring
                    </span>
                  </div>
                  <p className="t-small-mobile t-opposite">
                    Full outsourcing of IT operations, service desks, and network operations.
                  </p>
                </div>
                <div className="services-stack__image">
                  <Image
                    className="service-img service-img-s"
                    alt="Service/Feature Image"
                    src="/img/services/800x800_ser-04.webp"
                    width={800}
                    height={800}
                  />
                  <Image
                    className="service-img service-img-m"
                    alt="Service/Feature Image"
                    src="/img/services/1000x1000_ser-04.png"
                    width={1000}
                    height={1000}
                  />
                </div>



                
              </div>


               <div className="mxd-services-stack__inner justify-between bg-accent">
                <div className="mxd-services-stack__controls">
                  <Link
                    className="btn btn-round btn-round-large btn-base slide-right-up anim-no-delay"
                    href={`/ai-ml-data-analytics-piller`}
                  >
                    <i className="ph ph-arrow-up-right" />
                  </Link>
                </div>
                <div className="mxd-services-stack__title width-60">
                  <h3 className="opposite">
                    Big Data & AI
                    <br />
                    
                  </h3>
                </div>
                <div className="mxd-services-stack__info width-60">
                  <div className="mxd-services-cards__tags">
                    <span className="tag tag-default tag-outline-opposite">
                      Big Data Analytics
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Predictive Analytics
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Data Warehousing
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                     Data Visualization
                    </span>
                  </div>
                  <p className="t-small-mobile t-opposite">
                    Leveraging AI/ML platforms and Big Data for actionable analytics.
                  </p>
                </div>
                <div className="services-stack__image">
                  <Image
                    className="service-img service-img-s"
                    alt="Service/Feature Image"
                    src="/img/services/800x800_ser-02.webp"
                    width={800}
                    height={800}
                  />
                  <Image
                    className="service-img service-img-m"
                    alt="Service/Feature Image"
                    src="/img/services/1000x1000_ser-05.png"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>

              {/* services stack single item */}

              <div className="mxd-services-stack__inner radius-dark justify-between bg-base-tint">
                <div className="mxd-services-stack__controls">
                  <Link
                    className="btn btn-round btn-round-large btn-opposite slide-right-up anim-no-delay"
                    href={`/iot-digital-twin-piller`}
                  >
                    <i className="ph ph-arrow-up-right" />
                  </Link>
                </div>
                <div className="mxd-services-stack__title width-60">
                  <h3>
                   Smart Platforms
                    <br />
                    
                  </h3>
                </div>
                <div className="mxd-services-stack__info width-60">
                  <div className="mxd-services-cards__tags">
                    <span className="tag tag-default tag-outline">
                      Internet of Things (IoT)
                    </span>
                    <span className="tag tag-default tag-outline">
                     Smart City Solutions
                    </span>
                    <span className="tag tag-default tag-outline">
                      Smart Infrastructure
                    </span>
                    <span className="tag tag-default tag-outline">
                     Sensor Integration
                    </span>
                  </div>
                  <p className="t-small-mobile">
                    IoT, smart-city, and infrastructure digital twin platform solutions.
                  </p>
                </div>
                <div className="services-stack__image">
                  <Image
                    className="service-img service-img-s"
                    alt="Service/Feature Image"
                    src="/img/services/800x800_ser-03.webp"
                    width={800}
                    height={800}
                  />
                  <Image
                    className="service-img service-img-m"
                    alt="Service/Feature Image"
                    src="/img/services/1000x1000_ser-06.png"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>



<div className="mxd-services-stack__inner justify-between bg-base-opp">
                <div className="mxd-services-stack__controls">
                  <Link
                    className="btn btn-round btn-round-large btn-additional slide-right-up anim-no-delay"
                    href={`/erp-customization-piller`}
                  >
                    <i className="ph ph-arrow-up-right" />
                  </Link>
                </div>
                <div className="mxd-services-stack__title width-60">
                  <h3 className="opposite">ERP Customization</h3>
                </div>
                <div className="mxd-services-stack__info width-60">
                  <div className="mxd-services-cards__tags">
                    <span className="tag tag-default tag-outline-opposite">
                     ERP Implementation
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      SAP Customization
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                     Odoo Development
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Oracle ERP Solutions
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      ERP Integration
                    </span>
                  </div>
                  <p className="t-small-mobile t-opposite">
                    Expertise in SAP, ODOO, Oracle, and MS Dynamics 365 customization.
                  </p>
                </div>
                <div className="services-stack__image">
                  <Image
                    className="service-img service-img-s"
                    alt="Service/Feature Image"
                    src="/img/services/800x800_ser-01.webp"
                    width={800}
                    height={800}
                  />
                  <Image
                    className="service-img service-img-m"
                    alt="Service/Feature Image"
                    src="/img/services/1000x1000_ser-07.png"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>

            </StackCards>
          </div>
        </div>
        {/* Block - Services/Features Stacking Cards End */}
      </div>
    </div>
  );
}
