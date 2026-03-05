import RevealText from "../../../animation/RevealText";

export default function Feedback() {
  return (
    <div className="mxd-project__block">
      <div className="container-fluid px-0">
        <div className="row gx-0">
          <div className="col-12 col-xl-5 mxd-grid-item no-margin">
            <div className="mxd-project__subtitle">
              <RevealText as="h2" className="reveal-type anim-uni-in-up">
                Operational Excellence
              </RevealText>
            </div>
          </div>
          <div className="col-12 col-xl-6 mxd-grid-item no-margin">
            <div className="mxd-project__content">
              <div className="mxd-project__paragraph medium-text">
                <p className="anim-uni-in-up">
                  Their ERP customization aligned perfectly with our business processes.
                  Automation reduced manual workload significantly.
                  Real-time reporting improved our strategic decision-making.
                  A reliable partner for digital transformation.
                </p>
                <div className="mxd-project__client anim-uni-in-up">
                  <h5 className="anim-uni-in-up">Smart Information Technology</h5>
                  <p className="t-small anim-uni-in-up">
                   Best ERP Customization Services
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
