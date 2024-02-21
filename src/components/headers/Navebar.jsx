import React from "react";
import "./navebar.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function Navebar() {
  const navigate = useNavigate()
  const isAuthenticated = useSelector((state)=>state.auth.isAuthenticated)
const handileLogout =()=>{
navigate('/login')
}


  return (
    <div>
      <Navbar expand="lg" className=" mdg">
        <Container>
          <Navbar.Brand className="brand-name" href="#home">
            Garage
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="and">
              <Nav.Link className="and" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="and" href="#link">
                {" "}
                services
              </Nav.Link>
              <Nav.Link className="and" href="#home">
                {" "}
                Work
              </Nav.Link>
              <Nav.Link className="and" href="#link">
                {" "}
                about
              </Nav.Link>
              <Nav.Link className="and" href="#link">
                {" "}
                Services
              </Nav.Link>
            </Nav>
            <Nav style={{ paddingLeft: "10px", paddingRight: "10px" }}>
              <Link to={"/signup"}>
                <Button variant="outline-light">Sign up</Button>
              </Link>
              {isAuthenticated ?  <Button onClick={handileLogout } style={{ marginLeft: "10px" }} variant="secondary">
                  Logout
                </Button>: 
              <Link to={"/login"}>
                <Button  style={{ marginLeft: "10px" }} variant="secondary">
                  Login
                </Button>
              </Link>
                }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navebar;
