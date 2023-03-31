import React from "react";

import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <div>
      <MDBFooter className="bg-dark text-center text-white  text-lg-start ">
        <section className="d-flex justify-content-center justify-content-lg-between p-3 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="" className="me-4 text-reset">
              <MDBIcon outline color="light" fab icon="facebook-f" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon outline color="light" fab icon="twitter" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon outline color="light" fab icon="instagram" />
            </a>
          </div>
        </section>

        <section className="">
          <MDBContainer className="text-center text-md-start mt-2">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <MDBIcon color="secondary" icon="gem" className="me-3" />
                  Store
                </h6>
                <p>
                  Here you can get all the latest and high quality products.{" "}
                </p>
              </MDBCol>

              {/*  <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Angular
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    React
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Vue
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Laravel
                  </a>
                </p>
              </MDBCol> */}

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-1">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Privacy Notice
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Terms & Conditions
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    About
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <MDBIcon color="secondary" icon="home" className="me-2" />
                  Vizag,Andhra Pradesh, India
                </p>
                <p>
                  <MDBIcon color="secondary" icon="envelope" className="me-3" />
                  store@gmail.com
                </p>
                <p>
                  <MDBIcon color="secondary" icon="phone" className="me-3" /> +
                  91 234 567 8812
                </p>
                <p>
                  <MDBIcon color="secondary" icon="print" className="me-3" /> +
                  91 234 567 8912
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center p-2"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2023 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            Store.com
          </a>
        </div>
      </MDBFooter>
    </div>
  );
};

export default Footer;
