import React, { useState } from "react";

import {  Col, Container, Form, Row } from "react-bootstrap";
import "./signup.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
import { useNavigate } from "react-router-dom";


function Signup() {
    const [userName, setName]= useState('')
    const [userEmail, setEmail]= useState('')
    const [userPassword, setPassword]= useState('')
    const [validated, setValidated] = useState(false);
 
   const navigate = useNavigate()
   const handilename =(event)=>{
   setName(event.target.value)
   }
  const handileEmail = (event)=>{
  setEmail(event.target.value)
   }
   const handilePassword = (event)=>{
   setPassword(event.target.value)
   }
   const handileSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      try {
       
        let res = await axios.post("https://backend-render-9hyj.onrender.com/user", {
          fullname: userName,
          email: userEmail,
          password: userPassword
        });
  
        if (res.data.success) {
         toast.success(res.data.message);
       
          await new Promise((resolve) => setTimeout(resolve, 2000));
         
         
          navigate("/")
        } else {
            toast.error(res.data.message);
        }
  
      } catch (error) {
        console.log(error.message);
        
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
            <h2 className="registerName">Sign Up</h2>
            <Form
              noValidate
              validated={validated}
              className="form"
              onSubmit={handileSubmit}
            >
              <Form.Group className="mb-3">
                <Form.Control className="mnc"
                  type="text"
                  placeholder="fullname"
                  onChange={handilename}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  please enter your name
                </Form.Control.Feedback>
              </Form.Group>
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

export default Signup;
