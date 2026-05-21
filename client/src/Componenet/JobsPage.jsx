// import { Container, Row, Col, Card, CardBody, Button, Input, CardText, CardTitle } from "reactstrap";
// import Header from "./Header";
// import Footer from "./Footer";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { getJobs } from "../Features/JobsSlice";
// import { Link } from "react-router-dom";


// const JobsPage = () => {

//     const dispatch = useDispatch();

//      const jobs = useSelector((state) => state.job.jobs);
    




//       useEffect(() => {
//         dispatch(getJobs());

//     }, []);



//   return (
//     <Container>
//       <Row>
//         <Header />
//       </Row>

//       <Row>
//         <Col>
//           <h1>Find Your dream Job</h1>
//         </Col>
//       </Row>

//       <Row>
//         <Col>
//           <Input type="text" placeholder="Search..." />
         
//         </Col>
//         <Col>
//         <Button>Search</Button>
//         </Col>
//       </Row>

//       <Row>
//         <Col>


//         {
//           jobs.map((job) => (
//             <Card body key={job._id}>
//               <CardTitle tag="h5">{job.jobTitle}</CardTitle>
//               <CardText>
//                 <h6>job discription : {job.jobDescription}</h6>
//                 <h6>budget : {job.budget}</h6>
//                 <h6>location : {job.location}</h6>
//               </CardText>
//               <Link to={`/JobDetailsPage/${job._id}`}><Button>View Details</Button></Link>
//             </Card>
//           ))}

        

          

//         </Col>
//       </Row>

//       <Row>
//         <Footer />
//       </Row>
//     </Container>
//   );
// };

// export default JobsPage;



import { Container, Row, Col, Card, CardBody, Button, Input, CardText, CardTitle } from "reactstrap";
import Header from "./Header";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getJobs, deleteJob } from "../Features/JobsSlice";
import { Link } from "react-router-dom";
import { AiTwotoneDelete } from "react-icons/ai";

const JobsPage = () => {
    const dispatch = useDispatch();
    const jobs = useSelector((state) => state.job.jobs);
    const compemail = useSelector((state)=>state.company.company.compemail);
    const [search, setSearch] = useState("");
    const [location, setLocation] = useState("");

    useEffect(() => {
        dispatch(getJobs());
    }, []);

    const filteredJobs = jobs.filter((job) => {
        const matchesTitle = job.jobTitle?.toLowerCase().includes(search.toLowerCase());
        const matchesLocation = job.location?.toLowerCase().includes(location.toLowerCase());
        return matchesTitle && matchesLocation;
    });

        const handleDelete = (jobid) => {
        if (window.confirm("Are you sure you want to delete this job?!") == true) {
            dispatch(deleteJob(jobid));
            dispatch(getJobs());
        };
    }

    return (
        <div>
            <Container fluid className="px-0">
                <Header />
            </Container>

            <Container style={{ maxWidth: 1100, paddingTop: 48 }}>

                {/* Hero */}
                <Row className="mb-4">
                    <Col>
                        <h1 style={{ fontWeight: 800, fontSize: 38, lineHeight: 1.2, color: "#0f172a" }}>
                            Discover elite <span style={{ color: "#3b5bdb" }}>opportunities</span>.
                        </h1>
                        <p style={{ color: "#64748b", fontSize: 15, marginTop: 8 }}>
                            Connect with top companies and find your next career move.
                        </p>
                    </Col>
                </Row>

                {/* Search bar */}
                <Row className="mb-5 g-2 align-items-center">
                    <Col md={5}>
                        <div style={{ position: "relative" }}>
                            <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "#94a3b8" }}>🔍</span>
                            <Input
                                type="text"
                                placeholder="Search by job title or keyword..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                style={{
                                    paddingLeft: 36,
                                    borderRadius: 10,
                                    border: "1.5px solid #e2e8f0",
                                    height: 44,
                                    fontSize: 14,
                                    background: "#fff",
                                    boxShadow: "none"
                                }}
                            />
                        </div>
                    </Col>
                    <Col md={3}>
                        <Input
                            type="text"
                            placeholder="📍 Location (e.g. Remote, NYC)"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            style={{
                                borderRadius: 10,
                                border: "1.5px solid #e2e8f0",
                                height: 44,
                                fontSize: 14,
                                background: "#fff"
                            }}
                        />
                    </Col>
                    <Col md={2}>
                        <Button
                            onClick={() => { setSearch(""); setLocation(""); }}
                            style={{
                                background: "#3b5bdb",
                                border: "none",
                                borderRadius: 10,
                                height: 44,
                                width: "100%",
                                fontWeight: 600,
                                fontSize: 14,
                                letterSpacing: 0.3
                            }}
                        >
                            Clear
                        </Button>
                    </Col>
                </Row>

                {/* Results count */}
                <Row className="mb-3">
                    <Col>
                        <p style={{ color: "#64748b", fontSize: 14 }}>
                            Showing <strong>{filteredJobs.length}</strong> job{filteredJobs.length !== 1 ? "s" : ""}
                            {search || location ? " for your search" : ""}
                        </p>
                    </Col>
                </Row>

                {/* Job Cards */}
                <Row className="g-4 mb-5">
                    {filteredJobs.length === 0 ? (
                        <Col>
                            <div style={{ textAlign: "center", padding: "60px 0", color: "#94a3b8" }}>
                                <div style={{ fontSize: 40 }}>🔍</div>
                                <p style={{ marginTop: 12, fontSize: 15 }}>No jobs found matching your search.</p>
                            </div>
                        </Col>
                    ) : (
                        filteredJobs.map((job) => (
                            <Col md={4} key={job._id}>
                                <Card
                                    style={{
                                        border: "1.5px solid #e8edf5",
                                        borderRadius: 16,
                                        boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                                        background: "#fff",
                                        transition: "box-shadow 0.2s, transform 0.2s",
                                        height: "100%"
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.boxShadow = "0 8px 28px rgba(59,91,219,0.12)";
                                        e.currentTarget.style.transform = "translateY(-3px)";
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.05)";
                                        e.currentTarget.style.transform = "translateY(0)";
                                    }}
                                >
                                    <CardBody style={{ padding: "24px", display: "flex", flexDirection: "column", gap: 10 }}>

                                        <div style={{
                                            width: 44, height: 44, borderRadius: 10,
                                            background: "#1e293b", display: "flex",
                                            alignItems: "center", justifyContent: "center",
                                            fontSize: 20, marginBottom: 6
                                        }}>
                                            💼
                                        </div>

                                        <CardTitle tag="h5" style={{ fontWeight: 700, fontSize: 17, color: "#0f172a", margin: 0 }}>
                                            {job.jobTitle}
                                        </CardTitle>

                                        <CardText style={{ color: "#64748b", fontSize: 13, lineHeight: 1.6, margin: 0 }}>
                                            {job.jobDescription?.length > 100
                                                ? job.jobDescription.slice(0, 100) + "..."
                                                : job.jobDescription}
                                        </CardText>

                                        <div style={{ display: "flex", flexDirection: "column", gap: 4, marginTop: 4 }}>
                                            <span style={{ color: "#3b5bdb", fontWeight: 600, fontSize: 14 }}>
                                                💰 {job.budget}
                                            </span>
                                            <span style={{ color: "#64748b", fontSize: 13 }}>
                                                📍 {job.location}
                                            </span>
                                            {job.company?.[0]?.companyname && (
                                                <span style={{ color: "#64748b", fontSize: 13 }}>
                                                    🏢 {job.company[0].companyname}
                                                </span>
                                            )}
                                        </div>

                                        <Link to={`/JobDetailsPage/${job._id}`} style={{ marginTop: "auto", textDecoration: "none" }}>
                                            <Button
                                                style={{
                                                    width: "100%",
                                                    background: "#f1f5f9",
                                                    border: "none",
                                                    borderRadius: 10,
                                                    color: "#0f172a",
                                                    fontWeight: 600,
                                                    fontSize: 14,
                                                    marginTop: 12,
                                                    padding: "10px 0"
                                                }}
                                            >
                                                View Details
                                            </Button>
                                            {
                                                compemail == job.compemail ?(
                                                    <>
                                                     <AiTwotoneDelete onClick={() => handleDelete(job._id)} style={{margin:"8px", color:"red", fontSize:"20px"}} />
                                                    </>
                                                    
                                                ) : null
                                            }
                                        </Link>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))
                    )}
                </Row>
            </Container>

            <Container fluid className="px-0">
                <Footer />
            </Container>
        </div>
    );
};

export default JobsPage;
