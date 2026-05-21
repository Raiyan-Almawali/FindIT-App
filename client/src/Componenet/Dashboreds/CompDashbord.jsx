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
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const CompDashbord = () => {

  const compname = useSelector((state)=>state.company.company.companyname);
  const compemail = useSelector((state)=>state.company.company.compemail);
  const cphone = useSelector((state)=>state.company.company.cphone);
  const complocation = useSelector((state)=>state.company.company.complocation);


  const navigate=useNavigate();
  useEffect(()=>{
      if(!compemail)
          navigate("/");
  },[compemail])





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
                  href="/JobsDashboard">

                  Jobs
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="profile"
                  href="#">
                  Profile
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink className="settings"
                  href="/CompanyProfile">
                  Settings
                </NavLink>
              </NavItem>
            </Nav>
          </Col>






 
          <Col lg={10} style={{ padding: "24px" }}>
        
            <Card className="Crd-H">
         
              <div className="Crd-B">
           
                <span className="Crd-PIC">
                  Company Profile
                </span>
              </div>

              <CardBody className="CRD-BODY">


                <div style={{ flex: 1, paddingTop: "36px" }}>
                  <h4 style={{ fontWeight: 700, fontSize: "26px", margin: 0, color: "#111827" }}>
                    {compname}
                  </h4>
                 
                </div>

             
                <div style={{ paddingTop: "36px" }}>
                  <Link to="/PostJob" ><Button className="POST"  style={{backgroundColor: "#1e3a8a"}}>
                    POST JOB
                  </Button></Link>
                </div>
              </CardBody>
            </Card>

    
            <Row>
        
              <Col lg={8}>
                <Card>
                  <CardBody>
                      <h6 style={{ fontWeight: 700, fontSize: "16px", margin: 0, color: "#111827" }}>
                        Company Information
                      </h6>
                      <p>{compname}</p>
                      <p>{compemail}</p>
                      <p>{cphone}</p>
                      <p>{complocation}</p>                    
                    
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

export default CompDashbord;
