import RevealText from "../../../animation/RevealText";

export default function Feedback() {
  return (
    <div className="mxd-project__block">
      <div className="container-fluid px-0">
        <div className="row gx-0">
          <div className="col-12 col-xl-5 mxd-grid-item no-margin">
            <div className="mxd-project__subtitle">
              <RevealText as="h2" className="reveal-type anim-uni-in-up">
               Why Modernize Now?
                <br />
               
              </RevealText>
            </div>
          </div>
          <div className="col-12 col-xl-6 mxd-grid-item no-margin">
            <div className="mxd-project__content">
              <div className="mxd-project__paragraph medium-text">
                <p className="anim-uni-in-up">
                 Legacy systems are often the weakest link in enterprise security and scalability.
                 Modernization embeds security by design to address today’s threat landscape.
                 Cloud-native architectures scale on demand, eliminating wasted infrastructure costs.
                 DevOps-ready systems enable faster, safer releases — in hours, not months.
                </p>
                <div className="mxd-project__client anim-uni-in-up">
                  <h5 className="anim-uni-in-up">Smart Information Technologies</h5><br />
                  <p className="t-small anim-uni-in-up">
                    Enterprise Modernization & Cloud Transformation Experts
                  
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
