import React, { useState, useEffect } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import {
  Card,
  CardTitle,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import "./Login.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "./../../assets/images/logos/logo.png";
import { signin } from "./../../Redux/auth/authAction";
import isAuth from "../../Utils/isAuth.js";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handlePaste = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (isAuth(dispatch)) navigate("/dashboard");
  }, [dispatch, navigate]);

  const signinhandle = async (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="logLogin">
      <Card className="CardStyleLogin">
        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
          <img src={logo} alt="logo"></img>
        </CardTitle>
        <CardBody>
          <Form>
            <FormGroup>
              <div className="inContainerLogin">
                <Label for="exampleEmail" className="lableNameLogin">
                  Email
                </Label>

                <Input
                  className="inLogin"
                  id="exampleEmail"
                  name="email"
                  placeholder="Enter your Email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword" className="lableNameLogin">
                Password
              </Label>
              <div
                className="inContainerLogin"
                style={{ display: "flex", alignItems: "center" }}
              >
                <br></br>
                <Input
                  className="inLogin"
                  id="examplePassword"
                  name="password"
                  placeholder="Enter Your Password"
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                  onPaste={handlePaste}
                />
                <div
                  className="inputGroupAppendLogin"
                  style={{ marginLeft: "5px" }}
                >
                  <span
                    className="inputGroupTextLogin"
                    onClick={togglePasswordVisibility}
                    style={{ cursor: "pointer" }}
                  >
                    {showPassword ? <BsEyeSlash /> : <BsEye />}
                  </span>
                </div>
              </div>
            </FormGroup>

            <Button className="btnLogin" type="submit" onClick={signinhandle}>
              Login
            </Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default Login;
