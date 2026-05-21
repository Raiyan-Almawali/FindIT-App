import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ChangePasswordValidation } from "../../validations/ChangePasswordValidation";
import {
    Container, Row, Col, Card, CardBody,
    FormGroup, Label, Input, Button
} from "reactstrap";
import { changePassword } from "../../Features/CompSlice";

const ChangePassword = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const company = useSelector((state) => state.company.company);
    

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: yupResolver(ChangePasswordValidation) });

    const onSubmit = async (data) => {
        const result = await dispatch(changePassword({
            _id: company._id,
            oldPassword: data.oldPassword,
            newPassword: data.newPassword
        }));

        if (result.payload?.message === "success") {
            alert("Password changed successfully");
            navigate(-1);
        } else {
            alert(result.payload?.message || "Current password is incorrect");
        }
    };

    return (
        <Container fluid className="py-5 px-4" style={{ background: "var(--bs-gray-100)", minHeight: "100vh" }}>
            <Row className="justify-content-center">
                <Col md={6} lg={5}>
                    <Card className="border-0 shadow-sm">
                        <CardBody className="p-4 d-flex flex-column gap-3">

                            <div>
                                <h4 className="fw-semibold mb-1">Change Password</h4>
                                <p className="text-muted mb-0" style={{ fontSize: 14 }}>
                                    Please enter your current credentials to secure your account updates.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)}>

                                <FormGroup>
                                    <Label style={{ fontSize: 13, fontWeight: 500 }}>Current Password</Label>
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        className="bg-light border-0"
                                        {...register("oldPassword")}
                                    />
                                    <p style={{ color: "red", fontSize: 12 }}>{errors.oldPassword?.message}</p>
                                </FormGroup>

                                <FormGroup>
                                    <Label style={{ fontSize: 13, fontWeight: 500 }}>Confirm Current Password</Label>
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        className="bg-light border-0"
                                        {...register("confirmOldPassword")}
                                    />
                                    <p style={{ color: "red", fontSize: 12 }}>{errors.confirmOldPassword?.message}</p>
                                </FormGroup>

                                <FormGroup>
                                    <Label style={{ fontSize: 13, fontWeight: 500 }}>New Password</Label>
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        className="bg-light border-0"
                                        {...register("newPassword")}
                                    />
                                    <p style={{ color: "red", fontSize: 12 }}>{errors.newPassword?.message}</p>
                                </FormGroup>

                                <FormGroup>
                                    <Label style={{ fontSize: 13, fontWeight: 500 }}>Confirm New Password</Label>
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        className="bg-light border-0"
                                        {...register("confirmNewPassword")}
                                    />
                                    <p style={{ color: "red", fontSize: 12 }}>{errors.confirmNewPassword?.message}</p>
                                </FormGroup>

                                <Button
                                    color="primary"
                                    type="submit"
                                    className="w-100 py-2 rounded-pill fw-semibold mb-2"
                                >
                                    Update Password
                                </Button>

                                <Button
                                    color="light"
                                    type="button"
                                    className="w-100 py-2 rounded-pill border fw-semibold"
                                    onClick={() => navigate(-1)}
                                >
                                    Cancel
                                </Button>

                            </form>

                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ChangePassword;