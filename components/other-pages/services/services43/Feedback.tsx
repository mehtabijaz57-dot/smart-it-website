import RevealText from "../../../animation/RevealText";

export default function Feedback() {
  return (
    <div className="mxd-project__block">
      <div className="container-fluid px-0">
        <div className="row gx-0">
          <div className="col-12 col-xl-5 mxd-grid-item no-margin">
            <div className="mxd-project__subtitle">
              <RevealText as="h2" className="reveal-type anim-uni-in-up">
                From Tracking to Orchestration

              </RevealText>
            </div>
          </div>
          <div className="col-12 col-xl-6 mxd-grid-item no-margin">
            <div className="mxd-project__content">
              <div className="mxd-project__paragraph medium-text">
                <p className="anim-uni-in-up">
                  Smart Information Technologies implemented AI-driven route optimization.
                  Operational disruptions are now resolved automatically.
                  Driver administrative workload reduced significantly.
                  Digital Twin modeling improved forecasting accuracy.
                  Cybersecurity controls protect our freight ecosystem.
                  Our logistics network now adapts proactively to change.
                </p>
                <div className="mxd-project__client anim-uni-in-up">
                  <h5 className="anim-uni-in-up">Smart Information Technologies</h5>
                  <p className="t-small anim-uni-in-up">
                    Transportation & Logistics IT Solutions

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
