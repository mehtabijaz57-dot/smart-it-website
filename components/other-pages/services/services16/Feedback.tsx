import RevealText from "../../../animation/RevealText";

export default function Feedback() {
  return (
    <div className="mxd-project__block">
      <div className="container-fluid px-0">
        <div className="row gx-0">
          <div className="col-12 col-xl-5 mxd-grid-item no-margin">
            <div className="mxd-project__subtitle">
              <RevealText as="h2" className="reveal-type anim-uni-in-up">
                Why Smart Information
                <br />
                Technologies
              </RevealText>
            </div>
          </div>
          <div className="col-12 col-xl-6 mxd-grid-item no-margin">
            <div className="mxd-project__content">
              <div className="mxd-project__paragraph medium-text">
                <p className="anim-uni-in-up">
                  Smart IT blends deep data engineering expertise with a business-first modernization strategy.
                  We bring multi-cloud experience across AWS, Azure, and GCP data platforms.
                  Our proven migration patterns ensure zero data loss and minimal operational disruption.
                  We future-proof your architecture for AI use cases like Vector Databases and RAG systems.
                </p>
                <div className="mxd-project__client anim-uni-in-up">
                  <h5 className="anim-uni-in-up">Smart Information Technologies</h5><br />
                  <p className="t-small anim-uni-in-up">
                    Enterprise Data & AI Architecture Experts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
