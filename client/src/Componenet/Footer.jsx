import { Col, Container, Row } from "reactstrap";
const Footer = () => {
    return (
        <>
       <Container className="footer-row">
        <Col>
          <Row>

                <Col className="text-start">
                <h6 className="footer-header">FindIT</h6>
                <p className="footer-text">@2026 FindIT. All rights reserved.</p>
                </Col>

                <Col className="d-flex flex-row gap-5 mt-4">
                
                <p className="footer-text">Polices</p>
                <p className="footer-text ">About us</p>
                <p className="footer-text">Contact us</p>
            
                
               
                </Col>

          </Row>
        </Col>
       </Container>
        </>
    );
};

export default Footer;