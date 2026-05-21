
// import {
//   Container,
//   Row,
//   Col,
//   Card,
//   CardBody,
//   Button,
//   CardTitle,
//   CardText,
//   Input,
//   Label,
//   FormGroup
// } from "reactstrap";
// import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import Header from "./Header";
// import Footer from "./Footer";


// const JobDetailsPage = () => {
//   const { id } = useParams();
//   const jobs = useSelector((state) => state.job.jobs);
//   const theJob = jobs.find((spicjob) => spicjob._id === id);

//   if (!theJob) return <h3>Job not found</h3>;

//   return (
//     <Container>
//       <Row>
//         <Col>
//           <Header />
//         </Col>
//       </Row>

//       <Row className="mt-4">
//         <Col lg={8}>
//           <Row className="text-end">
//             <Col>
//               <h1>{theJob.jobTitle}</h1>
//               <h5 className="text-muted text-center" style={{marginLeft:"400px"}}> Job Provided by: {theJob.company?.[0]?.companyname}</h5>
//               <p>{theJob.jobDescription}</p>
//             </Col>
//           </Row>

//           <Row className="mt-3">
//             <Col lg={3}>
//               <Card>
//                 <CardBody>
//                   <CardTitle>
//                     <h6>Budget</h6>
//                   </CardTitle>
//                   <CardText>{theJob.budget}</CardText>
//                 </CardBody>
//               </Card>
//             </Col>
//             <Col lg={3}>
//               <Card>
//                 <CardBody>
//                   <CardTitle>
//                     <h6>Location</h6>
//                   </CardTitle>
//                   <CardText>{theJob.location}</CardText>
//                 </CardBody>
//               </Card>
//             </Col>
//             <Col lg={3}>
//               <Card>
//                 <CardBody>
//                   <CardTitle>
//                     <h6>Duration</h6>
//                   </CardTitle>
//                   <CardText>{theJob.duration}</CardText>
//                 </CardBody>
//               </Card>
//             </Col>
//             <Col lg={3}>
//               <Card>
//                 <CardBody>
//                   <CardTitle>
//                     <h6>Deadline</h6>
//                   </CardTitle>
//                   <CardText>
//                     {new Date(theJob.deadline).toLocaleDateString("en-GB")}
//                   </CardText>
//                 </CardBody>
//               </Card>
//             </Col>
//           </Row>

//           <Row className="mt-3">
//             <Col>
//               <Card>
//                 <CardBody>
//                   <CardTitle>
//                     <h5>Responsibilities</h5>
//                   </CardTitle>
//                   <CardText>{theJob.responsibilities}</CardText>
//                 </CardBody>
//               </Card>
//             </Col>
//           </Row>

//           <Row className="mt-3">
//             <Col>
//               <Card>
//                 <CardBody>
//                   <CardTitle>
//                     <h5>Required Skills</h5>
//                   </CardTitle>
//                   <CardText>{theJob.requiredSkills}</CardText>
//                 </CardBody>
//               </Card>
//             </Col>
//           </Row>

//           <Row className="mt-3">
//             <Col>
//               <Card>
//                 <CardBody>
//                   <CardTitle>
//                     <h5>Apply for this Position</h5>
//                   </CardTitle>
//                   <Row>
//                     <Col md={6}>
//                       <FormGroup>
//                         <Label>Full Name</Label>
//                         <Input placeholder="John Doe" />
//                       </FormGroup>
//                     </Col>
//                     <Col md={6}>
//                       <FormGroup>
//                         <Label>Email Address</Label>
//                         <Input placeholder="john@example.com" />
//                       </FormGroup>
//                     </Col>
//                     <Col md={6}>
//                       <FormGroup>
//                         <Label>Phone Number</Label>
//                         <Input placeholder="+1 (555) 000-0000" />
//                       </FormGroup>
//                     </Col>
//                     <Col md={6}>
//                       <FormGroup>
//                         <Label>Desired Rate</Label>
//                         <Input placeholder="e.g. $80/hr" />
//                       </FormGroup>
//                     </Col>
//                   </Row>
//                   <Button color="primary">Apply for this Position</Button>
//                 </CardBody>
//               </Card>
//             </Col>
//           </Row>
//         </Col>

//         {/* RIGHT COLUMN — Map */}
//         <Col lg={4} style={{marginTop:"115px"}}>
//           <Card>
//             <CardBody>
//                 <CardTitle>
//                     <h5>Location Based</h5>
//                 </CardTitle>
//                 <CardText>
//                     {theJob.lat & theJob.lng ? (
//                 <iframe
//                   src={`https://maps.google.com/maps?q=${theJob.lat},${theJob.lng}&hl=es;&output=embed`}
//                   width="100%"
//                   height="300"
//                 />
//               ) : null}
//                 </CardText>
             
//             </CardBody>
//           </Card>
//         </Col>
//       </Row>

//       <Row className="mt-4">
//         <Col>
//           <Footer />
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default JobDetailsPage;




import {
  Container, Row, Col, Card, CardBody,
  Button, CardTitle, CardText, Input, Label, FormGroup
} from "reactstrap";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";

const JobDetailsPage = () => {
  const { id } = useParams();
  const jobs = useSelector((state) => state.job.jobs);
  const theJob = jobs.find((spicjob) => spicjob._id === id);

  if (!theJob) return <h3 style={{ textAlign: "center", marginTop: 80 }}>Job not found</h3>;

  return (
    <div>
      <Container fluid className="px-0">
        <Header />
      </Container>

      <Container style={{ maxWidth: 1100, paddingTop: 40, paddingBottom: 60 }}>

        {/* Job Title & Company */}
        <Row className="mb-4">
          <Col>
            <div style={{
              background: "#fff",
              borderRadius: 16,
              border: "1.5px solid #e8edf5",
              padding: "32px 36px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.05)"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 12 }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 12,
                  background: "#1e293b", display: "flex",
                  alignItems: "center", justifyContent: "center", fontSize: 24
                }}>💼</div>
                <div>
                  <h1 style={{ fontWeight: 800, fontSize: 28, color: "#0f172a", margin: 0 }}>
                    {theJob.jobTitle}
                  </h1>
                  {theJob.company?.[0]?.companyname && (
                    <span style={{ color: "#3b5bdb", fontWeight: 600, fontSize: 14 }}>
                      🏢 {theJob.company[0].companyname}
                    </span>
                  )}
                </div>
              </div>
              <p style={{ color: "#64748b", fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                {theJob.jobDescription}
              </p>
            </div>
          </Col>
        </Row>

        <Row className="g-3 mb-4">
          {[
            { label: "💰 Budget", value: theJob.budget },
            { label: "📍 Location", value: theJob.location },
            { label: "⏱ Duration", value: theJob.duration },
            { label: "📅 Deadline", value: new Date(theJob.deadline).toLocaleDateString("en-GB") },
          ].map((item) => (
            <Col lg={3} md={6} key={item.label}>
              <Card style={{
                border: "1.5px solid #e8edf5", borderRadius: 14,
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)", height: "100%"
              }}>
                <CardBody style={{ padding: "18px 20px" }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "#94a3b8", marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.5 }}>
                    {item.label}
                  </div>
                  <div style={{ fontWeight: 700, fontSize: 15, color: "#0f172a" }}>
                    {item.value || "—"}
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="g-4">
          {/* LEFT — Details + Apply */}
          <Col lg={8}>

            {/* Responsibilities */}
            <Card style={{
              border: "1.5px solid #e8edf5", borderRadius: 14,
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)", marginBottom: 20
            }}>
              <CardBody style={{ padding: "24px" }}>
                <CardTitle tag="h5" style={{ fontWeight: 700, color: "#0f172a", marginBottom: 12 }}>
                  Responsibilities
                </CardTitle>
                <CardText style={{ color: "#475569", fontSize: 14, lineHeight: 1.8 }}>
                  {theJob.responsibilities}
                </CardText>
              </CardBody>
            </Card>

            {/* Required Skills */}
            <Card style={{
              border: "1.5px solid #e8edf5", borderRadius: 14,
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)", marginBottom: 20
            }}>
              <CardBody style={{ padding: "24px" }}>
                <CardTitle tag="h5" style={{ fontWeight: 700, color: "#0f172a", marginBottom: 12 }}>
                  Required Skills
                </CardTitle>
                <CardText style={{ color: "#475569", fontSize: 14, lineHeight: 1.8 }}>
                  {theJob.requiredSkills}
                </CardText>
              </CardBody>
            </Card>

            {/* Apply Form */}
            <Card style={{
              border: "1.5px solid #e8edf5", borderRadius: 14,
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
            }}>
              <CardBody style={{ padding: "24px" }}>
                <CardTitle tag="h5" style={{ fontWeight: 700, color: "#0f172a", marginBottom: 20 }}>
                  Apply for this Position
                </CardTitle>
                <Row className="g-3">
                  {[
                    { label: "Full Name", placeholder: "John Doe" },
                    { label: "Email Address", placeholder: "john@example.com" },
                    { label: "Phone Number", placeholder: "+1 (555) 000-0000" },
                    { label: "Desired Rate", placeholder: "e.g. $80/hr" },
                  ].map((field) => (
                    <Col md={6} key={field.label}>
                      <FormGroup>
                        <Label style={{ fontSize: 13, fontWeight: 600, color: "#374151" }}>
                          {field.label}
                        </Label>
                        <Input
                          placeholder={field.placeholder}
                          style={{
                            borderRadius: 10, border: "1.5px solid #e2e8f0",
                            fontSize: 14, height: 42
                          }}
                        />
                      </FormGroup>
                    </Col>
                  ))}
                </Row>
                <Button style={{
                  background: "#3b5bdb", border: "none", borderRadius: 10,
                  padding: "10px 28px", fontWeight: 600, fontSize: 14, marginTop: 8
                }}>
                  Apply for this Position
                </Button>
              </CardBody>
            </Card>
          </Col>

          {/* RIGHT — Map */}
          <Col lg={4}>
            <Card style={{
              border: "1.5px solid #e8edf5", borderRadius: 14,
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)", position: "sticky", top: 20
            }}>
              <CardBody style={{ padding: "24px" }}>
                <CardTitle tag="h5" style={{ fontWeight: 700, color: "#0f172a", marginBottom: 16 }}>
                  📍 Location
                </CardTitle>
                {theJob.lat && theJob.lng ? (
                  <iframe
                    src={`https://maps.google.com/maps?q=${theJob.lat},${theJob.lng}&hl=es;&output=embed`}
                    width="100%"
                    height="300"
                    style={{ borderRadius: 10, border: "none" }}
                  />
                ) : (
                  <div style={{
                    height: 200, borderRadius: 10, background: "#f1f5f9",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#94a3b8", fontSize: 14
                  }}>
                    No location data available
                  </div>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container fluid className="px-0">
        <Footer />
      </Container>
    </div>
  );
};

export default JobDetailsPage;