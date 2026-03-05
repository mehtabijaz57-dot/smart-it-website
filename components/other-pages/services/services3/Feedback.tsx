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
                  We specialize in designing and modernizing enterprise-grade IoT platforms that scale securely from pilot to production. With deep expertise in cloud-native architectures, device lifecycle management, OTA updates, and security-first engineering, we help organizations build reliable, future-ready IoT ecosystems without vendor lock-in.
                </p>
                <div className="mxd-project__client anim-uni-in-up">
                  <h5 className="anim-uni-in-up">Cloud Engineering Team</h5><br />
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
