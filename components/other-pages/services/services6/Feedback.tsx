import RevealText from "../../../animation/RevealText";

export default function Feedback() {
  return (
    <div className="mxd-project__block">
      <div className="container-fluid px-0">
        <div className="row gx-0">
          <div className="col-12 col-xl-5 mxd-grid-item no-margin">
            <div className="mxd-project__subtitle">
              <RevealText as="h2" className="reveal-type anim-uni-in-up">
                WHY 
                <br />
                 SMART IT
              </RevealText>
            </div>
          </div>
          <div className="col-12 col-xl-6 mxd-grid-item no-margin">
            <div className="mxd-project__content">
              <div className="mxd-project__paragraph medium-text">
                <p className="anim-uni-in-up">
                  Smart Information Technologies partners with enterprises to design, migrate, and 
                  optimize hybrid cloud environments that align with real business objectives.
                  With deep expertise across AWS, Azure, and Google Cloud, we take a business-first 
                  approach to cloud strategy — ensuring performance, security, compliance, and cost 
                  control across your entire infrastructure lifecycle.

                </p>
                <div className="mxd-project__client anim-uni-in-up">
                  <h5 className="anim-uni-in-up">Smart Information Technologies</h5><br />
                  <p className="t-small anim-uni-in-up">
                    Cloud & Infrastructure Specialists
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
