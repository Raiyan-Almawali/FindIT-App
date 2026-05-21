import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const HelpCenter = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>

        {/* Hero */}
        <Row className="text-center mt-5 mb-4">
          <Col>
            <h1 style={{ fontWeight: "800", fontSize: "2.5rem" }}>
              How can we assist your narrative?
            </h1>
            <p className="text-muted mx-auto" style={{ maxWidth: "500px" }}>
              Our curator team is here to support your creative journey. Browse
              our structured guides or connect with a specialist.
            </p>
          </Col>
        </Row>

        {/* Policies Card */}
        <Row className="mb-5">
          <Col>
            <div className="help-card p-4">
              <div className="help-icon mb-3">
                <i className="bi bi-stack"></i>
              </div>
              <h4 className="fw-bold">Policies</h4>
              <p className="text-muted">
                Review our community standards and legal frameworks for
                professional conduct.
              </p>

              <div className="help-link-item">
                <span>Editorial Standards</span>
                <Link to="/Policies#editorial">
                  <i className="bi bi-box-arrow-up-right"></i>
                </Link>
              </div>
              <div className="help-link-item">
                <span>Terms of Service</span>
                <Link to="/Policies#terms">
                  <i className="bi bi-box-arrow-up-right"></i>
                </Link>
              </div>
              <div className="help-link-item">
                <span>Privacy Framework</span>
                <Link to="/Policies#privacy">
                  <i className="bi bi-box-arrow-up-right"></i>
                </Link>
              </div>
            </div>
          </Col>
        </Row>

        {/* Still need assistance */}
        <Row className="mb-5">
          <Col>
            <div className="help-assistance-card p-5">
              <h3 className="fw-bold mb-2">Still need assistance?</h3>
              <p className="text-muted mb-4">
                Our editorial specialists are available 24/7 to help resolve
                complex project inquiries or platform issues.
              </p>

              <Row>
                <Col md={6} className="mb-3">
                  <div className="help-contact-card p-3 d-flex align-items-center gap-3">
                    <div className="help-contact-icon">
                      <i className="bi bi-chat-square-text-fill"></i>
                    </div>
                    <div>
                      <strong>Contact Number</strong>
                      <p className="mb-0 text-muted">+968 6534231816231</p>
                    </div>
                  </div>
                </Col>
                <Col md={6} className="mb-3">
                  <div className="help-contact-card p-3 d-flex align-items-center gap-3">
                    <div className="help-contact-icon">
                      <i className="bi bi-at"></i>
                    </div>
                    <div>
                      <strong>Email</strong>
                      <p className="mb-0 text-muted">FindIT@gmail.com</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HelpCenter;