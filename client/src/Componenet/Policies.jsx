import { Container, Row, Col } from "reactstrap";
import Footer from "./Footer";
import Header from "./Header";

const Policies = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>

        {/* Hero */}
        <Row className="mt-5 mb-4 text-center">
          <Col>
            <h1 className="" style={{ fontWeight: "800", fontSize: "2.2rem" }}>
              Legal &amp; Policies
            </h1>
          </Col>
        </Row>

        {/* Terms of Service */}
        <Row className="mb-4" id="terms">
          <Col>
            <div className="policy-card p-4">
              <h4 className="policy-title">
                <i className="bi bi-stack me-2"></i> Terms of Service
              </h4>
              <p className="text-muted">
                Welcome to The Editorial Marketplace. These Terms of Service
                govern your use of our platform and provide information about
                the service, outlined below. When you create an account or use
                our marketplace, you agree to these terms.
              </p>

              <h6 className="fw-bold mt-3">1. Account Eligibility</h6>
              <p className="text-muted">
                You must be at least 18 years old to use our service. You are
                responsible for maintaining the confidentiality of your account
                credentials and for all activities that occur under your
                account.
              </p>

              <h6 className="fw-bold mt-3">2. Marketplace Transactions</h6>
              <p className="text-muted">
                All editorial services contracted through our platform are
                subject to our payment processing protocols. The Marketplace
                acts as a venue to connect freelancers and clients but does not
                guarantee specific project outcomes.
              </p>

              <h6 className="fw-bold mt-3">3. Intellectual Property</h6>
              <p className="text-muted">
                Unless otherwise agreed in a separate written contract between a
                Freelancer and Client, the rights to completed editorial work
                are transferred to the Client upon final payment confirmation.
              </p>
            </div>
          </Col>
        </Row>

        {/* Privacy Policy */}
        <Row className="mb-4" id="privacy">
          <Col>
            <div className="policy-card p-4">
              <h4 className="policy-title">
                <i className="bi bi-shield-fill me-2"></i> Privacy Policy
              </h4>
              <p className="text-muted">
                Your privacy is important to us. This policy explains how we
                collect, use, and protect your personal data when you interact
                with The Editorial Marketplace.
              </p>

              <h6 className="fw-bold mt-3">Data Collection</h6>
              <p className="text-muted">
                We collect information you provide directly to us, such as your
                name, email address, payment information, and professional
                profile details. We also collect automated data regarding your
                interaction with our site for optimization purposes.
              </p>

              <h6 className="fw-bold mt-3">Information Usage</h6>
              <p className="text-muted">
                We use your information to facilitate marketplace connections,
                process payments, and improve our services. We do not sell your
                personal information to third parties for marketing purposes.
              </p>

              <h6 className="fw-bold mt-3">Security Measures</h6>
              <p className="text-muted">
                We implement robust technical and organizational measures
                designed to secure your personal data against accidental loss
                and unauthorized access or use.
              </p>
            </div>
          </Col>
        </Row>

        {/* Community Guidelines */}
        <Row className="mb-5" id="editorial">
          <Col>
            <div className="policy-card p-4">
              <h4 className="policy-title">
                <i className="bi bi-people-fill me-2"></i> Community Guidelines
              </h4>
              <p className="text-muted">
                Our marketplace thrives on professional integrity and mutual
                respect. These guidelines outline the behavior we expect from
                all participants.
              </p>

              <Row className="mt-3">
                <Col md={6} className="mb-3">
                  <div className="guideline-card p-3">
                    <h6 className="fw-bold">Be Professional</h6>
                    <p className="text-muted mb-0">
                      Maintain high standards of communication and delivery for
                      all editorial projects.
                    </p>
                  </div>
                </Col>
                <Col md={6} className="mb-3">
                  <div className="guideline-card p-3">
                    <h6 className="fw-bold">Honesty</h6>
                    <p className="text-muted mb-0">
                      Do not misrepresent your skills, portfolio, or project
                      requirements.
                    </p>
                  </div>
                </Col>
                <Col md={6} className="mb-3">
                  <div className="guideline-card p-3">
                    <h6 className="fw-bold">Fair Play</h6>
                    <p className="text-muted mb-0">
                      Abide by agreed-upon deadlines and payment terms without
                      exception.
                    </p>
                  </div>
                </Col>
                <Col md={6} className="mb-3">
                  <div className="guideline-card p-3">
                    <h6 className="fw-bold">Zero Tolerance</h6>
                    <p className="text-muted mb-0">
                      Harassment, discrimination, or abusive behavior will
                      result in immediate account suspension.
                    </p>
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

export default Policies;