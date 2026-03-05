import RevealText from "../../../animation/RevealText";
import BackgroundParallax from "../../../animation/BackgroundParallax";

export default function Solutions() {
  return (
    <>
      {/* Project Block - Solution Description with H2 Title and Paragraph Start */}
      <div className="mxd-project__block">
        <div className="container-fluid px-0">
          <div className="row gx-0">
            <div className="col-12 col-xl-5 mxd-grid-item no-margin">
              <div className="mxd-project__subtitle">
                <RevealText as="h2" className="reveal-type anim-uni-in-up">
                  Our SAP Customization Methodology
                </RevealText>
              </div>
            </div>
            <div className="col-12 col-xl-6 mxd-grid-item no-margin">
              <div className="mxd-project__content">
                <div className="mxd-project__paragraph medium-text">
                  <p className="anim-uni-in-up">
                    We approach SAP customization with a Clean Core mindset, focusing on long-term scalability and upgrade safety. Our process begins with assessing existing custom developments, followed by side-by-side extensibility on SAP BTP using secure APIs.
                  </p>
                  <p className="anim-uni-in-up">
                    We enhance processes through AI-powered intelligent workflows and deliver modern, role-based SAP Fiori experiences that improve usability without compromising the S/4HANA core.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Project Block - Solution Description with H2 Title and Paragraph End */}
      {/* Project Block - Parallax Fullwidth Image Start */}
      <div className="mxd-project__block mxd-grid-item no-margin">
        <div className="mxd-divider">
          <BackgroundParallax
            scale={1.5}
            className="mxd-divider__image prj-details-img-005 parallax-img"
          />
        </div>
      </div>
      {/* Project Block - Parallax Fullwidth Image End */}
    </>
  );
}
