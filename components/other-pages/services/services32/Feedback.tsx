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

                  Our certified Oracle consultants bring deep expertise in Financials, PPM, and Procurement.
                  We specialize in hybrid environments where cloud and on-premise systems coexist.
                  Beyond implementation, we help build an internal Oracle Center of Excellence.
                  We focus on measurable ROI, process optimization, and long-term enterprise success.
                </p>
                <div className="mxd-project__client anim-uni-in-up">
                  <h5 className="anim-uni-in-up">Smart Information Technologies</h5>
                  <p className="t-small anim-uni-in-up">
                    Oracle ERP Cloud Experts
                    
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
