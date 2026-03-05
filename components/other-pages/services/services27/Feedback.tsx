import RevealText from "../../../animation/RevealText";

export default function Feedback() {
  return (
    <div className="mxd-project__block">
      <div className="container-fluid px-0">
        <div className="row gx-0">
          <div className="col-12 col-xl-5 mxd-grid-item no-margin">
            <div className="mxd-project__subtitle">
              <RevealText as="h2" className="reveal-type anim-uni-in-up">
                Why Smart IT
              
              </RevealText>
            </div>
          </div>
          <div className="col-12 col-xl-6 mxd-grid-item no-margin">
            <div className="mxd-project__content">
              <div className="mxd-project__paragraph medium-text">
                <p className="anim-uni-in-up">
                  We integrate threat intelligence with frameworks like NIST 800-53.
                  Our approach goes beyond scanning to deep architectural analysis.
                  Clients receive guidance tailored to their specific cloud environment.
                  Assessments support regulatory alignment and infrastructure resilience.
                  We deliver actionable security insights, not just vulnerability reports.
                </p>
                <div className="mxd-project__client anim-uni-in-up">
                  <h5 className="anim-uni-in-up">Cybersecurity Assessment</h5>
                  <p className="t-small anim-uni-in-up">
                    Smart Information Technologies
                   
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
