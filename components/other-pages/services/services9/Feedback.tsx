import RevealText from "../../../animation/RevealText";

export default function Feedback() {
  return (
    <div className="mxd-project__block">
      <div className="container-fluid px-0">
        <div className="row gx-0">
          <div className="col-12 col-xl-5 mxd-grid-item no-margin">
            <div className="mxd-project__subtitle">
              <RevealText as="h2" className="reveal-type anim-uni-in-up">
               Why Smart Information
                <br />
              Technologies?
              </RevealText>
            </div>
          </div>
          <div className="col-12 col-xl-6 mxd-grid-item no-margin">
            <div className="mxd-project__content">
              <div className="mxd-project__paragraph medium-text">
                <p className="anim-uni-in-up">
                  We don’t believe in lift-and-shift migrations.
                  Smart Information Technologies builds applications the cloud-native way —
                  aligned with CNCF standards, Kubernetes, DevSecOps, and serverless architecture. <br /><br />
                  Our focus is not just moving workloads to the cloud,
                  but creating resilient, scalable systems that reduce cost,
                  accelerate releases, and support long-term business growth.

                </p>
                <div className="mxd-project__client anim-uni-in-up">
                  <h5 className="anim-uni-in-up">Smart Information Technologies</h5><br />
                  <p className="t-small anim-uni-in-up">
                   Cloud-native migration strategy
                   
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
