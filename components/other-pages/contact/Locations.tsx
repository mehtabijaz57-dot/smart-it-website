export default function Locations() {
  return (
    <div className="mxd-section padding-default">
      <div className="mxd-container grid-container">
        {/* Block - Text Block with H2 Title, Paragraph and Contact Lists Start */}
        <div className="mxd-block">
          <div className="container-fluid px-0">
            <div className="row gx-0">
              <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                <div className="mxd-block__name">
                  <h2 className="reveal-type anim-uni-in-up">
                    Welcome to our office
                  </h2>
                </div>
              </div>
              <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                <div className="mxd-block__content">
                  <div className="mxd-block__paragraph">
                    <p className="t-large t-bright anim-uni-in-up">
                      Inspiring ideas, creative insights, and smart technology solutions. 
                      Fueling innovation for your digital growth journey.
                    </p>
                    <div className="mxd-paragraph__lists">
                      <div className="container-fluid p-0">
                        <div className="row g-0">

                          {/* Delaware Office */}
                          <div className="col-12 col-md-6 col-xl-5 mxd-paragraph__lists-item">
                            <div className="mxd-paragraph__lists-title">
                              <p className="t-large t-bright t-caption anim-uni-in-up">
                               Emirates Tower, 2nd Floor F-7 Markaz, Islamabad.
                              </p>
                            </div>
                            <ul>
                              <li className="anim-uni-in-up">
                                {/* <a
                                  className="anim-uni-in-up"
                                  href="https://goo.gl/maps/placeholder"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  16192 Coastal Highway,
                                  <br />
                                  Lewes, County of Sussex, Delaware, USA
                                </a> */}
                              </li>
                            </ul>
                            <ul>
                              <li className="anim-uni-in-up">
                                <a href="tel:+92 51 209 9186">+92 51 209 9186</a>
                              </li>
                              <li className="anim-uni-in-up">
                                <a href="tel:+923333882626">+92 333 3882626</a>
                              </li>
                              <li className="anim-uni-in-up">
                                <a href="https://mail.google.com/mail/?view=cm&to=sales@smartitdigital.com" target="blank">
                                  sales@smartitdigital.com
                                </a>
                              </li>
                            </ul>
                          </div>

                          {/* Optional: Add another office if needed */}
                          {/* <div className="col-12 col-md-6 col-xl-5 mxd-paragraph__lists-item">
                            <div className="mxd-paragraph__lists-title">
                              <p className="t-large t-bright t-caption anim-uni-in-up">
                                [City Name]
                              </p>
                            </div>
                            <ul>
                              <li className="anim-uni-in-up">
                                <a href="[Google Maps Link]" target="_blank" rel="noopener noreferrer">
                                  [Address Line 1]
                                  <br />
                                  [City, State]
                                  <br />
                                  [Zip]
                                </a>
                              </li>
                            </ul>
                            <ul>
                              <li className="anim-uni-in-up">
                                <a href="tel:[Phone Number]">[Phone Number]</a>
                              </li>
                              <li className="anim-uni-in-up">
                                <a href="mailto:[Email]">[Email]</a>
                              </li>
                            </ul>
                          </div> */}

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Block - Text Block with H2 Title, Paragraph and Contact Lists End */}
      </div>
    </div>
  );
}
