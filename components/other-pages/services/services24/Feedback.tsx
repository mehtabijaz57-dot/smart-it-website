import RevealText from "../../../animation/RevealText";

export default function Feedback() {
  return (
    <div className="mxd-project__block">
      <div className="container-fluid px-0">
        <div className="row gx-0">
          <div className="col-12 col-xl-5 mxd-grid-item no-margin">
            <div className="mxd-project__subtitle">
              <RevealText as="h2" className="reveal-type anim-uni-in-up">
                Why Choose Us
              </RevealText>
            </div>
          </div>
          <div className="col-12 col-xl-6 mxd-grid-item no-margin">
            <div className="mxd-project__content">
              <div className="mxd-project__paragraph medium-text">
                <p className="anim-uni-in-up">

                  We put strategy before execution to eliminate guesswork and reduce migration risks.
                  Our focus remains on business outcomes rather than unnecessary technical complexity.
                  Security, governance, and compliance are integrated into the entire migration process.
                  We act as a long-term strategic partner, not just a migration service provider.
                </p>
                <div className="mxd-project__client anim-uni-in-up">
                  <h5 className="anim-uni-in-up">Cloud Migration</h5>
                  <p className="t-small anim-uni-in-up">
                    Enterprise Cloud Services
                   
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
