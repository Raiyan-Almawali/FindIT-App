    import { Container, Row, Col, FormGroup, Label, Button } from "reactstrap";
    import LoginSigninHeader from "./LoginSigninHeader";
    import Footer from "../Footer";
    import { Link } from "react-router-dom";
    import { useForm } from "react-hook-form";
    import { RegCompValidation } from "../../validations/RegCompValidation";
    import { yupResolver } from "@hookform/resolvers/yup";
    import { useState } from "react";
    import {useDispatch} from "react-redux";
    import { addCompany } from "../../Features/CompSlice";
    import { useSelector } from "react-redux";

    // import { useNavigate } from "react-router-dom";
    // import { useEffect } from "react";


  
    const SignUpCompany = ({setActiveTab}) => {

        let [companyname, setCompanyName] = useState("");
        let [compemail, setCompanyEmail] = useState("");
        let [cphone, setContactNumber] = useState("");
        let [complocation, setLocation] = useState("");
        let [cpassword, setPassword] = useState("");

        const message = useSelector((state) => state.company.message);



       const dispatch=useDispatch();
        const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({resolver: yupResolver(RegCompValidation)});


     const onSubmit = (data) => {
        const cdata={compemail,cpassword,companyname,cphone,complocation};
        dispatch(addCompany(cdata));
        console.log("cdata",cdata)
        
      };


 
    return (
      <>
        <Container>
          <Row>
            <Col>
              <LoginSigninHeader />
            </Col>
          </Row>

          <Row className="login-card mx-auto mt-5" style={{ maxWidth: 960 }}>
            <Col lg={6} className="text-card">
              <h1>FindIT</h1>

              <h1>Curating the world's finest editorial talent</h1>
              <p className="m-3">
                Connect with top-tier editors, writers, and creative directors
                in a bespoke environment designed for architectural precision.
              </p>
            </Col>

            <Col lg={6} className="form-design">
              <div className="form-inner">
                <h1 className="mt-5">Create Your Account</h1>
                <p>Enter your details to Sign Up</p>

                <div className="toggle-wrapper">
                  <div className="toggle-container">
                    <button
                      type="button"
                      className="toggle-btn "
                      onClick={() => setActiveTab("individual")}
                    >
                      Individual
                    </button>
                    <button
                      type="button"
                      className="toggle-btn toggle-btn-active"
                      onClick={() => setActiveTab("company")}> 
                      Company
                    </button>
                  </div>
                </div>
              </div>

              <form lg={7} onSubmit={handleSubmit(onSubmit)}>
                <FormGroup className="m-7">
                  <Label>Company Name</Label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your full name"
                    {...register('companyName', { onChange: (e) => setCompanyName(e.target.value) })}
                   
                  />
                  <p style={{ color: 'red' }}>{errors.companyName?.message}</p>
                 
                </FormGroup>
                <FormGroup className="m-7">
                  <Label>Company Email address</Label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="name@company.com"
                     {...register('companyEmail', { onChange: (e) => setCompanyEmail(e.target.value) })}
                  
                  />
                  <p style={{ color: 'red' }}>{errors.companyEmail?.message}</p>
               
                </FormGroup>

                <FormGroup className="m-7">
                  <Label>Company Contact Number</Label>
                  <input
                    type="number"
                    name="number"
                    id="number"
                    placeholder="Enter your phone number"
                    {...register('contactNumber', { onChange: (e) => setContactNumber(e.target.value) })}
                    
                  
                  />
                  <p style={{ color: 'red' }}>{errors.contactNumber?.message}</p>
               
                </FormGroup>

                <FormGroup className="m-7">
                  <Label>Location based</Label>
                  <select
                    
                    name="location"
                    id="location"
                    placeholder="Enter your location"
                    {...register('location', { onChange: (e) => setLocation(e.target.value) })}
                   
                  >
                  <option value="">Select your Location based</option>
                  <option value="Muscat">Muscat</option>
                  <option value="Dhofar">Dhofar</option>
                  <option value="Musandam">Musandam</option>
                  <option value="Al Buraimi">Al Buraimi</option>
                  <option value="Ad Dakhiliyah">Ad Dakhiliyah</option>
                  <option value="North Al Batinah">North Al Batinah</option>
                  <option value="South Al Batinah">South Al Batinah</option>
                  <option value="North Al Sharqiyah">North Al Sharqiyah</option>
                  <option value="South Al Sharqiyah">South Al Sharqiyah</option>
                  <option value="Al Dhahirah">Al Dhahirah</option>
                  <option value="Al Wusta">Al Wusta</option>
                  </select>
                  <p style={{ color: 'red' }}>{errors.location?.message}</p>
                  </FormGroup>

                <Row>
                  <Col>
                    <FormGroup className="m-4">
                      <Label>Password</Label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                      {...register('password', { onChange: (e) => setPassword(e.target.value) })}
                      />
                      <p style={{ color: 'red' }}>{errors.password?.message}</p>
                   
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup className="m-7">
                      <Label>Confirm Password</Label>
                      <input
                        type="password"
                        name="confirm_password"
                        id="confirm_password"
                        placeholder="••••••••"
                        {...register('confirmPassword')}
                      
                      />
                      
                       <p style={{ color: 'red' }}>{errors.confirmPassword?.message}</p>
                    </FormGroup>
                  </Col>
                </Row>

                  <FormGroup>
                    <h3>{message}</h3>
                  </FormGroup>


                <Button color="primary" type="submit">
                  Sign UP
                </Button> 

                <FormGroup>
                  <h8>
                    Already have an account? <Link to="/ToggleLogin">Login</Link>
                  </h8>
                </FormGroup>
              </form>
            </Col>
          </Row>

          <Row>
            <Col>
              <Footer />
            </Col>
          </Row>
        </Container>
      </>
    );
    };

    export default SignUpCompany;
