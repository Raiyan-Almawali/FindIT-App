// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import {
//     Container, Row, Col, Card, CardBody, Button
// } from "reactstrap";

// import { useEffect } from "react";



// const CompanyProfile = () => {
//     const navigate = useNavigate();
    
//     const compname = useSelector((state)=>state.company.company.companyname);
//       const compemail = useSelector((state)=>state.company.company.compemail);
//       const cphone = useSelector((state)=>state.company.company.cphone);
//       const complocation = useSelector((state)=>state.company.company.complocation);
    
    
     
  
    
//     return (
//         <Container fluid className="py-4 px-4" style={{ background: "var(--bs-gray-100)", minHeight: "100vh" }}>

//             <Row className="mb-1">
//                 <Col>
//                     <div className="d-flex align-items-center gap-2 mb-3">
//                         <Button color="primary" size="sm" onClick={() => navigate(-1)}>← Back</Button>
//                         <span className="text-muted" style={{ fontSize: 14 }}>Home</span>
//                     </div>
//                     <h2 className="fw-semibold mb-1">Company Profile</h2>
//                     <p className="text-muted mb-4" style={{ fontSize: 14 }}>
//                         Your company information and account settings.
//                     </p>
//                 </Col>
//             </Row>

//             <Row className="justify-content-center">
//                 <Col md={8} lg={7}>
//                     <Card className="border-0 shadow-sm">
//                         <CardBody className="p-4 d-flex flex-column gap-3">

//                             {/* Company Name */}
//                             <div>
//                                 <div className="text-muted mb-1" style={{ fontSize: 12, fontWeight: 500 }}>COMPANY NAME</div>
//                                 <div className="bg-light rounded px-3 py-2" style={{ fontSize: 15 }}>
//                                     {compname || "—"}
//                                 </div>
//                             </div>

//                             {/* Company Email */}
//                             <div>
//                                 <div className="text-muted mb-1" style={{ fontSize: 12, fontWeight: 500 }}>COMPANY EMAIL</div>
//                                 <div className="bg-light rounded px-3 py-2" style={{ fontSize: 15 }}>
//                                     {compemail || "—"}
//                                 </div>
//                             </div>

//                             {/* Phone & Location */}
//                             <Row className="g-3">
//                                 <Col md={6}>
//                                     <div className="text-muted mb-1" style={{ fontSize: 12, fontWeight: 500 }}>CONTACT NUMBER</div>
//                                     <div className="bg-light rounded px-3 py-2" style={{ fontSize: 15 }}>
//                                         {cphone || "—"}
//                                     </div>
//                                 </Col>
//                                 <Col md={6}>
//                                     <div className="text-muted mb-1" style={{ fontSize: 12, fontWeight: 500 }}>LOCATION</div>
//                                     <div className="bg-light rounded px-3 py-2" style={{ fontSize: 15 }}>
//                                         {complocation || "—"}
//                                     </div>
//                                 </Col>
//                             </Row>

//                             {/* Account Security */}
//                             <div className="bg-light rounded p-3 d-flex align-items-center justify-content-between mt-2">
//                                 <div>
//                                     <div className="fw-semibold" style={{ fontSize: 14 }}>Account Security</div>
//                                     <div className="text-muted" style={{ fontSize: 12 }}>Update your account password</div>
//                                 </div>
//                                 <Button
//                                     color="light"
//                                     className="border"
//                                     size="sm"
//                                     onClick={() => navigate("/ChangePassword")}
//                                 >
//                                     Change Password
//                                 </Button>
//                             </div>

//                         </CardBody>
//                     </Card>
//                 </Col>
//             </Row>

//         </Container>
//     );
// };

// export default CompanyProfile;


import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    Container, Row, Col, Card, CardBody, Button
} from "reactstrap";

const CompanyProfile = () => {
    const navigate = useNavigate();
    const company = useSelector((state) => state.company.company);
    console.log("company:", company);

    return (
        <Container fluid className="py-4 px-4" style={{ background: "var(--bs-gray-100)", minHeight: "100vh" }}>

            <Row className="mb-1">
                <Col>
                    <div className="d-flex align-items-center gap-2 mb-3">
                        <Button color="primary" size="sm" onClick={() => navigate(-1)}>← Back</Button>
                        <span className="text-muted" style={{ fontSize: 14 }}>Home</span>
                    </div>
                    <h2 className="fw-semibold mb-1">Company Profile</h2>
                    <p className="text-muted mb-4" style={{ fontSize: 14 }}>
                        Your company information and account settings.
                    </p>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col md={8} lg={7}>
                    <Card className="border-0 shadow-sm">
                        <CardBody className="p-4 d-flex flex-column gap-3">

                            {/* Company Name */}
                            <div>
                                <div className="text-muted mb-1" style={{ fontSize: 12, fontWeight: 500 }}>COMPANY NAME</div>
                                <div className="bg-light rounded px-3 py-2" style={{ fontSize: 15 }}>
                                    {company?.companyname || "—"}
                                </div>
                            </div>

                            {/* Company Email */}
                            <div>
                                <div className="text-muted mb-1" style={{ fontSize: 12, fontWeight: 500 }}>COMPANY EMAIL</div>
                                <div className="bg-light rounded px-3 py-2" style={{ fontSize: 15 }}>
                                    {company?.compemail || "—"}
                                </div>
                            </div>

                            {/* Phone & Location */}
                            <Row className="g-3">
                                <Col md={6}>
                                    <div className="text-muted mb-1" style={{ fontSize: 12, fontWeight: 500 }}>CONTACT NUMBER</div>
                                    <div className="bg-light rounded px-3 py-2" style={{ fontSize: 15 }}>
                                        {company?.cphone || "—"}
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="text-muted mb-1" style={{ fontSize: 12, fontWeight: 500 }}>LOCATION</div>
                                    <div className="bg-light rounded px-3 py-2" style={{ fontSize: 15 }}>
                                        {company?.complocation || "—"}
                                    </div>
                                </Col>
                            </Row>

                            {/* Account Security */}
                            <div className="bg-light rounded p-3 d-flex align-items-center justify-content-between mt-2">
                                <div>
                                    <div className="fw-semibold" style={{ fontSize: 14 }}>Account Security</div>
                                    <div className="text-muted" style={{ fontSize: 12 }}>Update your account password</div>
                                </div>
                                <Button
                                    color="light"
                                    className="border"
                                    size="sm"
                                    onClick={() => navigate("/ChangePassword")}
                                >
                                    Change Password
                                </Button>
                            </div>

                        </CardBody>
                    </Card>
                </Col>
            </Row>

        </Container>
    );
};

export default CompanyProfile;