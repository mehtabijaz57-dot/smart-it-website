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
                  Our Enterprise-Scale Azure Migration Approach
                </RevealText>
              </div>
            </div>
            <div className="col-12 col-xl-6 mxd-grid-item no-margin">
              <div className="mxd-project__content">
                <div className="mxd-project__paragraph medium-text">
                  <p className="anim-uni-in-up">
                  We don’t migrate into an empty cloud — we build a secure, governed Azure foundation first. Using Microsoft’s Cloud Adoption Framework and a Landing Zone Accelerator approach, we design environments with built-in security, compliance, and cost controls from day one.
                  </p>
                  <p className="anim-uni-in-up">
                     From application assessment and the “7 Rs” strategy to modernization on AKS and long-term FinOps optimization, we ensure your Azure platform is not just migrated — but engineered for scale, resilience, and continuous improvement.
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
            className="mxd-divider__image prj-details-img-004 parallax-img"
          />
        </div>
      </div>
      {/* Project Block - Parallax Fullwidth Image End */}
    </>
  );
}
