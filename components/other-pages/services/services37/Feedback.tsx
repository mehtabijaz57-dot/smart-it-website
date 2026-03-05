import RevealText from "../../../animation/RevealText";

export default function Feedback() {
  return (
    <div className="mxd-project__block">
      <div className="container-fluid px-0">
        <div className="row gx-0">
          <div className="col-12 col-xl-5 mxd-grid-item no-margin">
            <div className="mxd-project__subtitle">
              <RevealText as="h2" className="reveal-type anim-uni-in-up">
                Performance that Sells.

              </RevealText>
            </div>
          </div>
          <div className="col-12 col-xl-6 mxd-grid-item no-margin">
            <div className="mxd-project__content">
              <div className="mxd-project__paragraph medium-text">
                <p className="anim-uni-in-up">
                  Retail and e-commerce brands rely on us to modernize their technology stacks without interrupting daily operations.
                  Our composable architectures enable rapid experimentation, faster deployments, and improved conversion metrics.
                  From global storefront rollouts to high-volume seasonal events, we engineer systems designed for growth and reliability.
                </p>
                <div className="mxd-project__client anim-uni-in-up">
                  <h5 className="anim-uni-in-up">Smart Information Technologies</h5>
                  <p className="t-small anim-uni-in-up">
                    Retail & E-commerce IT Solutions

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
