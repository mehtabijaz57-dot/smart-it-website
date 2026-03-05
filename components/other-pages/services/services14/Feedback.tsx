import RevealText from "../../../animation/RevealText";

export default function Feedback() {
  return (
    <div className="mxd-project__block">
      <div className="container-fluid px-0">
        <div className="row gx-0">
          <div className="col-12 col-xl-5 mxd-grid-item no-margin">
            <div className="mxd-project__subtitle">
              <RevealText as="h2" className="reveal-type anim-uni-in-up">
                NOC-Powered Cloud Reliability
                <br />
                
              </RevealText>
            </div>
          </div>
          <div className="col-12 col-xl-6 mxd-grid-item no-margin">
            <div className="mxd-project__content">
              <div className="mxd-project__paragraph medium-text">
                <p className="anim-uni-in-up">
                  Our NOC monitors your cloud infrastructure in real time and handles incidents with tiered escalation. We collaborate with your SOC to catch performance and security issues early. This ensures 99.99% uptime, predictable costs, and operational peace of mind.
                </p>
                <div className="mxd-project__client anim-uni-in-up">
                  <h5 className="anim-uni-in-up"> Smart Information Technologies</h5><br />
                  <p className="t-small anim-uni-in-up">
                    Network Operations Center Services
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
