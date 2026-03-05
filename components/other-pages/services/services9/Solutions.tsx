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
                  Our Cloud-Native Development Approach
                </RevealText>
              </div>
            </div>
            <div className="col-12 col-xl-6 mxd-grid-item no-margin">
              <div className="mxd-project__content">
                <div className="mxd-project__paragraph medium-text">
                  <p className="anim-uni-in-up">
                   At Smart Information Technologies, we don’t just migrate applications — we redesign them for the cloud. Our teams optimize each application for performance, resilience, and modern scalability.
                  </p>
                  <p className="anim-uni-in-up">
                   Following CNCF standards, we ensure portability and security across environments. With elastic architecture, your applications effortlessly adapt to evolving business needs.
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
            className="mxd-divider__image prj-details-img-009 parallax-img"
          />
        </div>
      </div>
      {/* Project Block - Parallax Fullwidth Image End */}
    </>
  );
}
