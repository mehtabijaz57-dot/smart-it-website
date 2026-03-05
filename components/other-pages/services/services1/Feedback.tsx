import RevealText from "../../../animation/RevealText";

export default function Feedback() {
  return (
    <div className="mxd-project__block">
      <div className="container-fluid px-0">
        <div className="row gx-0">
          <div className="col-12 col-xl-5 mxd-grid-item no-margin">
            <div className="mxd-project__subtitle">
              <RevealText as="h2" className="reveal-type anim-uni-in-up">
               Why Smart 
                <br />
               Information Technologies?
              </RevealText>
            </div>
          </div>
          <div className="col-12 col-xl-6 mxd-grid-item no-margin">
            <div className="mxd-project__content">
              <div className="mxd-project__paragraph medium-text">
                <p className="anim-uni-in-up">
                 We bring deep industry expertise, build cloud-agnostic AI platforms to avoid vendor lock-in, and follow a human-led strategy that aligns every AI model with your business goals—ensuring real, measurable impact instead of just experimentation.
                </p>
                <div className="mxd-project__client anim-uni-in-up">
                  <h5 className="anim-uni-in-up">Enterprise AI Strategy Team</h5><br />
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
