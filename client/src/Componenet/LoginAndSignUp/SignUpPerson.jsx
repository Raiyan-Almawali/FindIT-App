import {
  Container,
  Row,
  Col,
  FormGroup,
  Label,
  Button,
} from "reactstrap";
import LoginSigninHeader from "./LoginSigninHeader";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { RegPersValidation } from "../../validations/RegPersValidation";
import { useState } from "react";
import {useDispatch} from "react-redux";
import { addPerson } from "../../Features/UserSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const SignUpPerson = ({ setActiveTab }) => {
  let [fullname, setFullName] = useState("");
  let [email, setEmail] = useState("");
  let [phonenumber, setPhone] = useState("");
  let [password, setPassword] = useState("");



  const message = useSelector((state) => state.user.message);
  const isSuccess = useSelector((state) => state.user.isSuccess);
  const navigate = useNavigate();

   const dispatch=useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(RegPersValidation) });

  const onSubmit = (data) => {
    const udata = {email,password,fullname,phonenumber};
    dispatch(addPerson(udata));
  };

    useEffect(()=>{
      if(message=="success" && isSuccess)
          navigate("/PersonLogin");
      },[message,isSuccess]);

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
              Connect with top-tier editors, writers, and creative directors in
              a bespoke environment designed for architectural precision.
            </p>
          </Col>

          <Col lg={6} className="formPostdesign">
            <div className="form-inner">
              <h1 className="mt-5">Create Your Account</h1>
              <p>Enter your details to Sign Up</p>

              <div className="toggle-wrapper">
                <div className="toggle-container mb-4">
                  <button
                    type="button"
                    className="toggle-btn toggle-btn-active"
                    onClick={() => setActiveTab("individual")}
                  >
                    Individual
                  </button>
                  <button
                    type="button"
                    className="toggle-btn"
                    onClick={() => setActiveTab("company")}
                  >
                    Company
                  </button>
                </div>
              </div>
            </div>

            <form lg={7} onSubmit={handleSubmit(onSubmit)}>
              <FormGroup className="m-7">
                <Label>Full Name</Label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your full name"
                  {...register("fullName", {
                    onChange: (e) => setFullName(e.target.value),
                  })}
                />
                <p style={{ color: "red" }}>{errors.fullName?.message}</p>
              </FormGroup>
              <FormGroup className="m-7">
                <Label>Email address</Label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="name@company.com"
                  {...register("email", {
                    onChange: (e) => setEmail(e.target.value),
                  })}
                />
                <p style={{ color: "red" }}>{errors.email?.message}</p>
              </FormGroup>

              <FormGroup className="m-4">
                <Label>Phone Number</Label>
                <input
                  type="number"
                  name="number"
                  id="number"
                  placeholder="Enter your phone number"
                  {...register("phone", {
                    onChange: (e) => setPhone(e.target.value),
                  })}
                />
                <p style={{ color: "red" }}>{errors.phone?.message}</p>
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
                      {...register("password", {
                        onChange: (e) => setPassword(e.target.value),
                      })}
                    />
                    <p style={{ color: "red" }}>{errors.password?.message}</p>
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
                      {...register("confirmPassword")}
                    />
                    <p style={{ color: "red" }}>
                      {errors.confirmPassword?.message}
                    </p>
                  </FormGroup>
                </Col>
              </Row>

              
              <Button color="primary" type="submit">
                Sign UP
              </Button>

              <FormGroup>
                <h3>{message}</h3>
              </FormGroup>

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

export default SignUpPerson;
