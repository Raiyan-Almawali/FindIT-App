import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button
} from "reactstrap";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {getCompanyJobs,deleteJob} from "../../Features/JobsSlice";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

const JobsDashboard = () => {
  const dispatch = useDispatch();
  const company = useSelector(
    (state) => state.company.company
  );
  const jobs = useSelector(
    (state) => state.job.jobs
  );
  // DELETE FUNCTION
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this job posting?")) return;
    try {
      await dispatch(deleteJob(id)).unwrap();
    } catch {
      alert("Failed to delete job. Please try again.");
    }
  };
  // GET COMPANY JOBS
  useEffect(() => {
    if (company?.compemail) {
      dispatch(getCompanyJobs(company.compemail));
    }
  }, [company, dispatch]);
  return (
    <Container fluid>

      {/* HEADER */}
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        {/* SIDEBAR */}
        <Col
          md={2}
          className="border-end min-vh-100 pt-4"
        >
          <p className="text-primary fw-bold mb-0"> CLIENT CONSOLE</p>
          <p className="text-muted small">Marketplace Control</p>
          
          <Link to="/JobsDashboard"><p className="fw-bold text-primary">Jobs</p></Link>

          <Link to="/CompDashbord"><p className="text-muted">Profile</p></Link>
          <div className="position-fixed bottom-0 mb-4">
            <Link to="/PostJobPage">
              <Button color="primary"> + Post a Job Now</Button>
            </Link>
          </div>
        </Col>
        {/* MAIN CONTENT */}
        <Col md={10} className="pt-4 ps-4">
          <h3>My Posted Jobs</h3>
          <p className="text-muted">
            Manage your active listings,
            review incoming applications,
            and track progress.
          </p>
          {/* STATS */}
          <Row className="mb-4">
            <Col md={3}>
              <Card>
                <CardBody>
                  <p className="text-muted small mb-1">
                    TOTAL POSTINGS
                  </p>
                  <h3>{jobs.length}</h3>
                </CardBody>
              </Card>
            </Col>
          </Row>
          {/* JOB HEADER */}
          <Row className="mb-2">
            <Col>
              <h5>Job Postings</h5>
            </Col>
            <Col className="text-end">
              <span className="text-muted small">
                Showing {jobs.length} jobs
              </span>
            </Col>
          </Row>
          {/* JOBS LIST */}
          {jobs.map((job) => (

            <Card
              key={job._id}
              className="mb-3"
            >
              <CardBody>
                <Row className="align-items-center">
                  <Col md={8}>
                    <h6 className="mb-1">
                      {job.jobTitle}
                    </h6>
                    <p className="text-muted small mb-1">
                      {job.location}
                    </p>
                    <span className="text-muted small me-3">
                      {job.budget}
                    </span>

                  </Col>

                  {/* ACTION BUTTONS */}
                  <Col md={4} className="text-end">
                    {/* DELETE */}
                    <Button color="danger" outline size="sm" className="me-2" onClick={() =>
                          handleDelete(job._id)
                      }
                    >Delete
                    </Button>
                    {/* EDIT */}
                    <Link
                      to={`/EditJobPage/${job._id}`}
                    >
                      <Button outline size="sm"> Edit</Button>
                    </Link>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          ))}
        </Col>
      </Row>
      {/* FOOTER */}
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
};

export default JobsDashboard;