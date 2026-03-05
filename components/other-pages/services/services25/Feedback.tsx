import RevealText from "../../../animation/RevealText";

export default function Feedback() {
  return (
    <div className="mxd-project__block">
      <div className="container-fluid px-0">
        <div className="row gx-0">
          <div className="col-12 col-xl-5 mxd-grid-item no-margin">
            <div className="mxd-project__subtitle">
              <RevealText as="h2" className="reveal-type anim-uni-in-up">
                Security Outcomes
              
              </RevealText>
            </div>
          </div>
          <div className="col-12 col-xl-6 mxd-grid-item no-margin">
            <div className="mxd-project__content">
              <div className="mxd-project__paragraph medium-text">
                <p className="anim-uni-in-up">
                  This identity-first approach delivers measurable security and operational gains. Automated provisioning accelerates onboarding, while least-privilege access limits the blast radius of compromised credentials. Continuous visibility and real-time auditing simplify compliance with SOC 2, HIPAA, and GDPR across cloud environments.
                </p>
                <div className="mxd-project__client anim-uni-in-up">
                  <h5 className="anim-uni-in-up">CISO & Security Architecture Focus</h5>
                  <p className="t-small anim-uni-in-up">
                    Enterprise Cloud Security
                  
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
