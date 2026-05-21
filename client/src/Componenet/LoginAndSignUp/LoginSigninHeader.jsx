import { Container, Row, Col, Nav, NavItem, Navbar } from "reactstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Navbar>
            <Nav>

              <NavItem>
              <h3 className="text-primary">FindIT</h3>
              </NavItem>

              <NavItem>
                <Link to="/" className="nav-link ml-10">Home</Link>
              </NavItem>
              
            </Nav>
          </Navbar>
        </Col>

        <Col>
         
        </Col>
      </Row>
    </Container>
  );
};

export default Header;