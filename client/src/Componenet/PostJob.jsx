import {Container, Row, Col, Form, FormGroup,Label, Input, Button, Nav, NavItem, NavLink} from "reactstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {PostJobValidation} from "../validations/PostValidation";
import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect } from "react";


const PostJob = () => {


    let [jobTitle, setJobTitle] = useState("");
    let [jobDescription, setJobDescription] = useState("");
    let [responsibilities, setResponsibilities] = useState("");
    let [requiredSkills, setRequiredSkills] = useState("");
    let [budget, setBudget] = useState("");
    let [location, setLocation] = useState("");
    let [duration, setDuration] = useState("");
    let [deadline, setDeadline] = useState("");
    let [lat,setLat]=useState();
    let [lng,setLng]=useState();


    const compemail = useSelector((state) => state.company.company.compemail);
  

     const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({ resolver: yupResolver(PostJobValidation) });


    
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition((position) => {
            setLat(position.coords.latitude);
            setLng(position.coords.longitude);
        });
    };
    
      const shareJob=async()=>{
        if (!jobTitle || !jobDescription || !responsibilities || !requiredSkills || !budget || !location || !duration || !deadline)
            alert("Please enter all the details!...")
        else{
            try{
                const pjdata={
                  compemail,
                  jobTitle,
                  jobDescription,
                  responsibilities,
                  requiredSkills,
                  budget,
                  location,
                  duration,
                  deadline,
                  lat,
                  lng
                };

                console.log("Final Data:", pjdata);
    
                const response=await axios.post("http://localhost:3002/postjob",pjdata);
                alert(response.data.message);
            }
            catch(error){
                console.log("Server Error.."+error)
            }
        }
    }

    

  return (
    <Container>

   
      <Row>
        <Col lg={2} className="mt-5 text-start">
          <Nav vertical>
            <NavItem>
              <NavLink href="#">Jobs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/compdashbord">profile</NavLink>
            </NavItem>
          </Nav>
        </Col>

        <Col lg={10}>

         <Row className="login-card  mt-5">
            <Col lg={6} className="text-card " style={{width:"350px"}}>
                
                <h1>Post  a new job</h1>

             
                <p className="m-3">
                  Post a new job and find the best candidates for your company
                </p>
                
            </Col>


            <Col lg={7} className="form-design" >
                <h1>Create New Job </h1>
                <p>Enter your details of the Job</p>
             
                <form lg={7} onSubmit={handleSubmit(shareJob)}>

                   

                    <FormGroup className="m-7" >
                        <Label >Job Title</Label>
                        <input type="text" name="job_title" id="job_title" placeholder="Enter your job title"
                        {...register('jobTitle', { onChange: (e) => setJobTitle(e.target.value) })} />
                        <p style={{ color: 'red' }}>{errors.jobTitle?.message}</p>
                    
                    </FormGroup>
                    <FormGroup className="m-7">
                        <Label >Job Description</Label>
                        <textarea   name="job_description" id="job_description" placeholder="Enter your job description"
                        {...register('jobDescription', { onChange: (e) => setJobDescription(e.target.value) })} />
                        <p style={{ color: 'red' }}>{errors.jobDescription?.message}</p>
                    </FormGroup>

                    <FormGroup className="m-7">
                    <Label >Responsibilities</Label>
                    <textarea  name="job_skills" id="job_skills" placeholder="Enter your job skills" 
                    {...register('responsibilities', { onChange: (e) => setResponsibilities(e.target.value) })}/>
                    <p style={{ color: 'red' }}>{errors.responsibilities?.message}</p>
                    </FormGroup>
                    <Row>
                        <Col>

                        <FormGroup className="m-7">
                                <Label>Requiered Skills</Label>
                                <textarea name="skills" id="skills" placeholder="Enter your required skills"
                                {...register('requiredSkills', { onChange: (e) => setRequiredSkills(e.target.value) })}/>
                                <p style={{ color: 'red' }}>{errors.requiredSkills?.message}</p>
                            </FormGroup>

                    </Col>

                    <Col>
                         <FormGroup className="m-7">
                            <Label >Budget Range </Label>
                            <input type="number" name="budget" id="budget" placeholder="500-1,500 OMR" 
                            {...register('budget', { onChange: (e) => setBudget(e.target.value) })}/>
                            <p style={{ color: 'red' }}>{errors.budget?.message}</p>
                        </FormGroup>
                        
                    </Col>
                    </Row>

                    <Row>
                        <Col>
                            <FormGroup className="m-7">
                                <Label >Location </Label>
                                <input type="text" name="location" id="location" placeholder="Enter your location" 
                                {...register('location', { onChange: (e) => setLocation(e.target.value) })}/>
                                <p style={{ color: 'red' }}>{errors.location?.message}</p>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup className="m-7">
                        <Label >Duration</Label>
                        <input type="text" name="duration" id="duration" placeholder="e.g. 3 Months" 
                        {...register('duration', { onChange: (e) => setDuration(e.target.value) })}/>
                        <p style={{ color: 'red' }}>{errors.duration?.message}</p>
                        </FormGroup> 
                        </Col>
                    </Row>

                    

                 

                    <FormGroup className="m-7">
                        <Label>Submition Date -Deadline- </Label>
                        <input type="date" name="date" id="date" 
                        {...register('deadline', { onChange: (e) => setDeadline(e.target.value) })}/>
                        <p style={{ color: 'red' }}>{errors.deadline?.message}</p>
                    </FormGroup>

                   

                    
                    <Button color="primary" type="submit" >POST</Button>
                   
                </form>
            </Col>
        </Row>
        
        
        </Col>
      </Row>
    </Container>
  );
};

export default PostJob;
