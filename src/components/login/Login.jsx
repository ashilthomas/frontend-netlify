import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import "./login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { authUserSuccess } from "../../Redux/userAuth";
import { useDispatch } from "react-redux";
function Login() {

  const [userEmail, setEmail] = useState("");
  const [userPassword, setPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const dispatch =  useDispatch()
  const navigate = useNavigate();

  const handileEmail = (event) => {
    setEmail(event.target.value);
  };
  const handilePassword = (event) => {
    setPassword(event.target.value);
  };
  const handileSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
  
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      try {
        const res = await axios.post("https://backend-render-9hyj.onrender.com/login", {
          email: userEmail,
          password: userPassword,
        },{
            withCredentials:true
             
          });
  
        if (res.data.success) {
            if (res.data.isAuthenticated) {

                dispatch(
                    authUserSuccess({
                    user: res.data.user,
                    isAuthenticated: res.data.isAuthenticated,
                  })
                );
              }
          toast.success(res.data.message, { autoClose: 2000 });
  
          // Wait for 2 seconds before navigating
          await new Promise((resolve) => setTimeout(resolve, 2000));
  
          navigate("/");
        } else {
            toast.error(res.data.message);
        }
         
      } catch (error) {
        console.error("API Request Error:", error.message);
        // You can display a more meaningful error message to the user if needed
         toast.error("An error occurred while processing your request");
      }
    }
  
    setValidated(true);
  };
  
  return (
    <div>
          <ToastContainer theme="dark" autoClose={1000} />
      <Container fluid className="mainForm">
        <Row className="rowForm">
          <Col className="formPage">
            <h2 className="registerName">Login</h2>
            <Form
              noValidate
              validated={validated}
              className="form"
              onSubmit={handileSubmit}
            >
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="email"
                  onChange={handileEmail}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter email
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="password"
                  onChange={handilePassword}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter password
                </Form.Control.Feedback>
              </Form.Group>
              <button type="submit" className="formButton">
                Register
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
