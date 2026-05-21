import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import LoginSigninHeader from "./LoginSigninHeader";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginValidation } from "../../validations/LoginValidation";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginProvider } from "../../Features/CompSlice";





const LoginJobProvider = ({ setLoginActiveTab }) => {

    let [compemail, setCompEmail] = useState("");
    let [cpassword, setCPassword] = useState("");
    
    const message=useSelector((state)=>state.company.message);
    const isSuccess=useSelector((state)=>state.company.isSuccess);



    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit:submitForm,
        formState: { errors },
    } = useForm({ resolver: yupResolver(LoginValidation) });

    const handleSubmit = (data) => {
        const compData = {compemail,cpassword};
        dispatch(loginProvider(compData));
    };

    useEffect(()=>{
        if(message =="success" && isSuccess)
            navigate("/CompDashbord");
    },[message,isSuccess]);


    return (
        <>
        <Container>
            <Row>
                <Col>
                    <LoginSigninHeader/>
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

                <Col lg={6} className="form-card-design">
                    <h1 className="mt-5">Welcome Freelancer</h1>
                    <p>Enter your details to access your dashboard</p>

                    <div className="toggle-wrapper">
                        <div className="toggle-container mb-4">
                            <button
                                type="button"
                                className="toggle-btn"
                                onClick={() => setLoginActiveTab("Freelancer")}>
                                Freelancer
                            </button>
                            <button
                                type="button"
                                className="toggle-btn toggle-btn-active"
                                onClick={() => setLoginActiveTab("JobProvider")}>
                                Job Provider
                            </button>
                        </div>
                    </div>

                    <form lg={7}>
                        
                        <FormGroup className="m-7">
                            <Label>Job Provider Email address</Label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="name@company.com"
                                {...register('email', { onChange: (e) => setCompEmail(e.target.value) })}
                            />
                            <p style={{ color: 'red' }}>{errors.email?.message}</p>
                        </FormGroup>

                        <FormGroup className="m-7">
                            <Label>Password</Label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="••••••••"
                                {...register('password', { onChange: (e) => setCPassword(e.target.value) })}
                            />
                            <p style={{ color: 'red' }}>{errors.password?.message}</p>
                        </FormGroup>

                        <Button color="primary" type="submit" onClick={submitForm(handleSubmit)}>LogIn</Button>

                        <FormGroup className="m-7">
                            <p>Don't have an account? <Link to="/ToggleRegister">Sign Up</Link></p>
                        </FormGroup>
                    </form>
                </Col>
            </Row>

            <Row>
                <Col><Footer/></Col>
            </Row>
        </Container>
        </>
    );
};

export default LoginJobProvider;