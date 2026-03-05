import RevealText from "../../../animation/RevealText";

export default function Feedback() {
  return (
    <div className="mxd-project__block">
      <div className="container-fluid px-0">
        <div className="row gx-0">
          <div className="col-12 col-xl-5 mxd-grid-item no-margin">
            <div className="mxd-project__subtitle">
              <RevealText as="h2" className="reveal-type anim-uni-in-up">
                Operational Transformation
              
              </RevealText>
            </div>
          </div>
          <div className="col-12 col-xl-6 mxd-grid-item no-margin">
            <div className="mxd-project__content">
              <div className="mxd-project__paragraph medium-text">
                <p className="anim-uni-in-up">
                  Enterprises reduced admin workload by over 40% using autonomous agents.
                  Sales teams gained a live 360° customer view without data duplication.
                  System releases became predictable with DevOps Center governance.
                  User adoption increased through simplified UI and change management.
                </p>
                <div className="mxd-project__client anim-uni-in-up">
                  <h5 className="anim-uni-in-up">Smart Information Technologies</h5>
                  <p className="t-small anim-uni-in-up">
                   Certified Salesforce Implementation Partner
                  
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
