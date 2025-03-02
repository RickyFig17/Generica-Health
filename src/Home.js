import React from "react";
import "./Home.scss";
import oldlady from "./images/oldlady.png";
import family from "./images/family.png";
import ifp from "./images/ifp.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1 className="home-header">Generica Health</h1>
      <h2>{<MedicareHome />}</h2>
      <h2>{<MedicaidHome />}</h2>
      <h2>{<IfpHome />}</h2>
      <h2>{<OtherInfo />}</h2>
    </>
  );
}

function MedicareHome() {
  const title = "Medicare";
  const message =
    "Quality care, affordable coverage, Medicare has you covered.";
  return (
    <div className="medicare-home-wrapper">
      <div className="title-message-wrapper">
        <Link to="/medicare">
          <h3>{title}</h3>
        </Link>
        <p>{message}</p>
      </div>
      <img src={oldlady} alt="oldlady" className="oldlady"></img>
    </div>
  );
}

function MedicaidHome() {
  const title = "Medicaid";
  const message =
    "Affordable care and stronger communities, Medicaid makes it possible.";
  return (
    <div className="medicaid-home-wrapper">
      <div className="title-message-wrapper">
        <h3>{title}</h3>
        <p>{message}</p>
      </div>
      <img src={family} alt="family" className="family"></img>
    </div>
  );
}

function IfpHome() {
  const title = "Individual and Family Plan";
  const message = "Flexible health coverage, built for you and your family.";
  return (
    <div className="ifp-home-wrapper">
      <div className="title-message-wrapper">
        <h3>{title}</h3>
        <p>{message}</p>
      </div>
      <img src={ifp} alt="ifp" className="ifp"></img>
    </div>
  );
}

function OtherInfo() {
  return (
    <div className="otherinfo-wrapper">
      <h1>Other Services</h1>
      <div className="health-wrapper">
        <div className="behavioral">
          <h3>Behavioral Health</h3>
        </div>
        <div className="dental">
          <h3>Dental Health</h3>
        </div>
        <div className="vision">
          <h3>Vision Health</h3>
        </div>
        <div className="physical">
          <h3>Physical Health</h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
