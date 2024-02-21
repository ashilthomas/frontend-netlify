import React from "react";
import Navebar from "../headers/Navebar";
import './home.css'
import Services from "../services/Services";
import Ourworks from "../work/Ourworks";
import About from "../about/About";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import { useSelector } from "react-redux";

function Home() {

  return (
    <div>
      <Navebar />
      <div>
        <div className="parallax-container">
          <div className="parallax-text">
            Mechanical Garage
            <p>Lorem ipsum dolor sit</p>
          </div>
        </div>

        <div></div>
      </div>
      <Services/>
      <Ourworks/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default Home;
