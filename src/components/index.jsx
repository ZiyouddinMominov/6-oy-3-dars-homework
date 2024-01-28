import React from "react";
import logo from "../assets/logo.svg";
import kreed from "../assets/kreed.png";
export default function Index() {
  return (
    <>
      <div className="header container">
        <div className="logo-wrapper">
          <a href="#">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="text-wrapper">
          <ul className="list-wrapper">
            <li>Home</li>
            <li>About us</li>
            <li>How it works</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
          <a className="btn-darkblue" href="#">
            Enquiry
          </a>
        </div>
      </div>
      <div className="hero container">
        <div className="text">
          <h1 className="title">
            Design driven development of your web product
          </h1>
          <p className="desc">
            We are a full service digital agency that builds immesive user
            experience.
          </p>
          <a className="btn-blue" href="#">
            Contact Us
          </a>
        </div>
        <img className="kreed-wrapper" src={kreed} width="523" height="529" />
      </div>
    </>
  );
}
