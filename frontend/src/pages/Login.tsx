import React, { useState } from "react";
import "../styles/login.css";
import { Container, Col, Form, FormGroup } from "reactstrap";
import coverImage from "../assets/_023d4d8a-cd7e-4c0f-bf4c-2c319ffac4e4.jpg";
import { Link } from "react-router-dom";
const Login: React.FC = () => {
  const [action, setAction] = useState("");
  const registerLink = () => {
    setAction("active");
  };
  const loginLink = () => {
    setAction("");
  };

  return (
    <>
      <section className="login-section">
        <Container className="login-container">
          <Col lg="6">
            <div className="cover-screen">
              <img src={coverImage} alt="" />
            </div>
          </Col>
          <div></div>
          <Col lg="6">
            <div className={`login-screen ${action}`}>
              <h1>Let’s Get Started</h1>
              <div className="login-form">
                <div className="login-form-inside">
                  <h3>Login</h3>
                  <p>Welcome back! Please enter your details</p>
                  <Form>
                    <FormGroup>
                      <input type="email" placeholder="email" required />
                    </FormGroup>
                    <FormGroup>
                      <input type="password" placeholder="password" required />
                    </FormGroup>

                    <button className="shop-btn">Login</button>
                  </Form>
                </div>
              </div>
            </div>
            <div className={`signup-route ${action}`}>
              <p>
                Don't have an account?
                <a href="#" onClick={registerLink}>
                  <Link to="/signup"></Link>
                  Sign up for free
                </a>
              </p>
            </div>
          </Col>
          <div className={`signup-screen ${action}`}>
            <h1>Let’s Get Started</h1>
            <div className="signup-form">
              <div className="login-form-inside">
                <h3>Signup</h3>
                <p>Welcome! Please enter your details</p>
                <Form>
                  <FormGroup>
                    <input type="text" placeholder="name" required />
                  </FormGroup>
                  <FormGroup>
                    <input type="email" placeholder="email" required />
                  </FormGroup>
                  <FormGroup>
                    <input type="password" placeholder="password" required />
                  </FormGroup>

                  <button className="shop-btn">Signup</button>
                </Form>
              </div>
            </div>
          </div>
          <div className={`login-route ${action}`}>
            <p>
              Already have an account?
              <a href="#" onClick={loginLink}>
                Login
              </a>
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Login;
