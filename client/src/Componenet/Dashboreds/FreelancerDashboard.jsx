import {
  Container,
  Row,
  Col,
  Button,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardBody,
} from "reactstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FreelancerDashboard = () => {

  const fullname = useSelector((state)=>state.user.user.fullname);
  const email = useSelector((state)=>state.user.user.email);
  const phonenumber = useSelector((state)=>state.user.user.phonenumber);

     const navigate=useNavigate();
    useEffect(()=>{
        if(!email)
            navigate("/");
    },[email])


  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f3f4f6" }}>
     

      <div className="TopNavbar">
        <span style={{ fontWeight: 700, fontSize: "20px", color: "#1e40af" }}>
          FindIT
        </span>

        <Nav className="mx-auto">
          <NavItem>
            <NavLink href="/" style={{ color: "#374151", fontSize: "14px", padding: "8px 12px" }}>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/HelpCenter" style={{ color: "#374151", fontSize: "14px", padding: "8px 12px" }}>
              Help Center
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/Policies" style={{ color: "#374151", fontSize: "14px", padding: "8px 12px" }}>
              Policies
            </NavLink>
          </NavItem>
        </Nav>

      </div>


      <Container fluid style={{ padding: 0 }}>
        <Row style={{ margin: 0 }}>

          <Col className="Sidebar"lg={2} >
            <Nav vertical>
              <NavItem>
                <NavLink className="jobNav"
                  href="/JobsPage">

                  Jobs available
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="profile"
                  href="#">
                  Profile
                </NavLink>
              </NavItem>
            </Nav>
          </Col>






 
          <Col lg={10} style={{ padding: "24px" }}>
        
            <Card className="Crd-H">
         
              <div className="Crd-B">
           
                <span className="Crd-PIC">
                  Freelancer Profile
                </span>
              </div>

              <CardBody className="CRD-BODY">


                <div style={{ flex: 1, paddingTop: "36px" }}>
                  <h4 style={{ fontWeight: 700, fontSize: "26px", margin: 0, color: "#111827" }}>
                    {fullname}
                  </h4>
                 
                </div>

              </CardBody>
            </Card>

    
            <Row>
        
              <Col lg={8}>
                <Card>
                  <CardBody>
                      <h6 style={{ fontWeight: 700, fontSize: "16px", margin: 0, color: "#111827" }}>
                        Freelancer Information
                      </h6>

                      <p>
                        {phonenumber}
                      </p>
                      <p>
                        {email}
                      </p>
                     
                    
                    
                  </CardBody>
                </Card>
              </Col>


            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FreelancerDashboard;
