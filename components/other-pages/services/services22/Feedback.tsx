import RevealText from "../../../animation/RevealText";

export default function Feedback() {
  return (
    <div className="mxd-project__block">
      <div className="container-fluid px-0">
        <div className="row gx-0">
          <div className="col-12 col-xl-5 mxd-grid-item no-margin">
            <div className="mxd-project__subtitle">
              <RevealText as="h2" className="reveal-type anim-uni-in-up">
                Business Outcomes

              </RevealText>
            </div>
          </div>
          <div className="col-12 col-xl-6 mxd-grid-item no-margin">
            <div className="mxd-project__content">
              <div className="mxd-project__paragraph medium-text">
                <p className="anim-uni-in-up">
                  Predictable cloud budgets with real-time cost monitoring and alerts.
                  Up to 40% reduction in cloud waste within the first 90 days.
                  Stronger security posture through automated governance policies.
                  Improved application performance with optimized resource allocation.
                  Audit-ready compliance across AWS, Azure, and multi-cloud environments.
                </p>
                <div className="mxd-project__client anim-uni-in-up">
                  <h5 className="anim-uni-in-up">Smart IT Digital Team</h5>
                  <p className="t-small anim-uni-in-up">
                    Cloud Governance Experts 
                   
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
