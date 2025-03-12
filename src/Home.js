import React from "react";
import "./Home.scss";
import oldlady from "./images/oldlady.png";
import family from "./images/family.png";
import ifp from "./images/ifp.png";
import { Link } from "react-router-dom";
import TextContent from "./Text.json";

function Home() {
  return (
    <>
      <h1 className="home-header">
        {TextContent.TextContent.Home.genericaHealth}
      </h1>
      <h2>{<MedicareHome />}</h2>
      <h2>{<MedicaidHome />}</h2>
      <h2>{<IfpHome />}</h2>
      <h2>{<OtherInfo />}</h2>
    </>
  );
}

function MedicareHome() {
  return (
    <div className="medicare-home-wrapper">
      <div className="title-message-wrapper">
        <Link to="/medicare" className="no-underline">
          <h3>{TextContent.TextContent.Home.medicare}</h3>
        </Link>
        <p>{TextContent.TextContent.Home.medicareMessage}</p>
      </div>
      <img src={oldlady} alt="oldlady" className="oldlady"></img>
    </div>
  );
}

function MedicaidHome() {
  return (
    <div className="medicaid-home-wrapper">
      <div className="title-message-wrapper">
        <Link to="/medicaid" className="no-underline">
          <h3>{TextContent.TextContent.Home.medicaid}</h3>
        </Link>
        <p>{TextContent.TextContent.Home.medicaidMessage}</p>
      </div>
      <img src={family} alt="family" className="family"></img>
    </div>
  );
}

function IfpHome() {
  return (
    <div className="ifp-home-wrapper">
      <div className="title-message-wrapper">
        <Link to="/ifp" className="no-underline">
          <h3>{TextContent.TextContent.Home.ifp}</h3>
        </Link>
        <p>{TextContent.TextContent.Home.ifpMessage}</p>
      </div>
      <img src={ifp} alt="ifp" className="ifp"></img>
    </div>
  );
}

function OtherInfo() {
  return (
    <div className="otherinfo-wrapper">
      <h1>{TextContent.TextContent.Home.otherServices}</h1>
      <div className="health-wrapper">
        <div className="behavioral">
          <h3>{TextContent.TextContent.Home.behavioralHealth}</h3>
        </div>
        <div className="dental">
          <h3>{TextContent.TextContent.Home.dentalHealth}</h3>
        </div>
        <div className="vision">
          <h3>{TextContent.TextContent.Home.visionHealth}</h3>
        </div>
        <div className="physical">
          <h3>{TextContent.TextContent.Home.physicalHealth}</h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
