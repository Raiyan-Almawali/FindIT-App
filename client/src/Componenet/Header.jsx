import { Link } from "react-router-dom";
import { Container, Row, Col, Nav, NavItem, NavLink, Button } from "reactstrap";
//import { useNavigate } from "react-router-dom";



const Header = () => {
    //const navigate = useNavigate();

    return (
        <>
        <Container>
            <Row>
               
                <Col>
                    <Nav>
                        <NavItem>
                            <NavLink href="#"  style={{color: "#023e8a"}}><h3 className="text-start ">FindIT</h3></NavLink>
                        </NavItem>
                        <NavItem className="mt-2">
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem className="mt-2">
                            <NavLink href="/JobsPage">Jobs</NavLink>
                        </NavItem>
                        <NavItem className="mt-2">
                            <NavLink href="/HelpCenter">Help Center</NavLink>
                        </NavItem>
                        <NavItem className="mt-2">
                            <NavLink href="/Policies">Policies</NavLink>
                        </NavItem>
                    </Nav>
                </Col>

                <Col className="text-end">
                <Link to="/ToggleLogin"><h7 className="fs-6 mr-4">Login</h7></Link>
               <Link to="/ToggleRegister"><Button color="primary">Sign Up</Button></Link>
                
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default Header;