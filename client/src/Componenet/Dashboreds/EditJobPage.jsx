import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Input,
  Label,
  Button
} from "reactstrap";

import { useParams, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { useState, useEffect } from "react";

import { updateJob, getCompanyJobs } from "../../Features/JobsSlice";

import Header from "../Header";
import Footer from "../Footer";

const EditJobPage = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const jobs = useSelector(
    (state) => state.job.jobs
  );

  const company = useSelector(
    (state) => state.company.company
  );

  const currentJob = jobs.find(
    (job) => job._id === id
  );

  const [formData, setFormData] = useState({
    jobTitle: "",
    location: "",
    budget: ""
  });

  useEffect(() => {
    if (company?.compemail) {
      dispatch(getCompanyJobs(company.compemail));
    }
  }, [company?.compemail, dispatch]);

  // LOAD CURRENT JOB DATA
  useEffect(() => {

    if (currentJob) {

      setFormData({
        jobTitle: currentJob.jobTitle,
        location: currentJob.location,
        budget: currentJob.budget
      });

    }

  }, [currentJob]);

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  // UPDATE JOB
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {
      await dispatch(
        updateJob({
          id,
          updatedData: {
          ...formData,
          budget: Number(formData.budget)
        }
        })
      ).unwrap();
      navigate("/JobsDashboard");
    } catch {
      alert("Failed to update job. Please try again.");
    }

  };

  return (

    <Container fluid>

      {/* HEADER */}
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>

      {/* FORM */}
      <Row className="justify-content-center mt-5">

        <Col md={6}>

          <Card>

            <CardBody>

              <h3 className="mb-4">
                Edit Job
              </h3>

              <form onSubmit={handleSubmit}>

                {/* JOB TITLE */}
                <div className="mb-3">

                  <Label>
                    Job Title
                  </Label>

                  <Input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                  />

                </div>

                {/* LOCATION */}
                <div className="mb-3">

                  <Label>
                    Location
                  </Label>

                  <Input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                  />

                </div>

                {/* BUDGET */}
                <div className="mb-3">

                  <Label>
                    Budget
                  </Label>

                  <Input
                    type="text"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                  />

                </div>

                {/* BUTTON */}
                <Button
                  color="primary"
                  type="submit"
                >
                  Update Job
                </Button>

              </form>

            </CardBody>

          </Card>

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

export default EditJobPage;